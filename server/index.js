import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import { Resend } from "resend";
import path from "path";

dotenv.config();

const app = express();

/* -------------------- Middleware -------------------- */
app.use(cors());
app.use(express.json());

/* -------------------- Env -------------------- */
const PORT = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = process.env.MONGODB_DB || "portfolio";
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const CONTACT_EMAIL = process.env.CONTACT_EMAIL;

/* -------------------- Env validation -------------------- */
if (!MONGODB_URI) {
  console.error("❌ Missing MONGODB_URI in environment");
  process.exit(1);
}

if (!RESEND_API_KEY) {
  console.error("❌ Missing RESEND_API_KEY in environment");
  process.exit(1);
}

if (!CONTACT_EMAIL) {
  console.error("❌ Missing CONTACT_EMAIL in environment");
  process.exit(1);
}

/* -------------------- Clients -------------------- */
const resend = new Resend(RESEND_API_KEY);
let mongoClient;

/* -------------------- Server bootstrap -------------------- */
async function startServer() {
  mongoClient = new MongoClient(MONGODB_URI);
  await mongoClient.connect();

  const db = mongoClient.db(DB_NAME);
  const contacts = db.collection("contacts");

  console.log(`✅ Connected to MongoDB (${DB_NAME})`);

  /* -------------------- Routes -------------------- */

  // Health check
  app.get("/health", (_, res) => {
    res.json({ ok: true });
  });

  // Contact form
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, message } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({
          error: "name, email and message are required",
        });
      }

      // 1️⃣ Save to MongoDB
      const contactDoc = {
        name,
        email,
        message,
        createdAt: new Date(),
      };

      const { insertedId } = await contacts.insertOne(contactDoc);

      // 2️⃣ Send email notification
      const emailResult = await resend.emails.send({
        from: "Portfolio <onboarding@resend.dev>",
        to: [CONTACT_EMAIL],
        subject: `📩 New contact from ${name}`,
        html: `
          <div style="font-family: sans-serif; line-height: 1.6">
            <h2>New Contact Message</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          </div>
        `,
      });
      console.log("📧 Resend response:", emailResult);

      return res.status(201).json({
        success: true,
        id: insertedId,
      });
    } catch (error) {
      console.error("❌ Contact error:", error);
      return res.status(500).json({ error: "server_error" });
    }
  });

  /* -------------------- Production build -------------------- */
  if (process.env.NODE_ENV === "production") {
    const distPath = path.resolve("dist");
    app.use(express.static(distPath));

    app.get("*", (_, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  /* -------------------- Listen -------------------- */
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
}

/* -------------------- Start -------------------- */
startServer().catch((err) => {
  console.error("❌ Failed to start server:", err);
  process.exit(1);
});

/* -------------------- Graceful shutdown -------------------- */
process.on("SIGINT", async () => {
  try {
    if (mongoClient) await mongoClient.close();
    console.log("🛑 MongoDB connection closed");
    process.exit(0);
  } catch {
    process.exit(1);
  }
});
