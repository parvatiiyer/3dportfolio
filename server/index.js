import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = process.env.MONGODB_DB || "portfolio";

if (!MONGODB_URI) {
  console.error("Missing MONGODB_URI in environment. See server/.env.example");
  process.exit(1);
}

let client;

async function start() {
  client = new MongoClient(MONGODB_URI);
  await client.connect();
  const db = client.db(DB_NAME);
  const contacts = db.collection("contacts");

  console.log("Connected to MongoDB", DB_NAME);

  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, message } = req.body;
      if (!name || !email || !message) {
        return res.status(400).json({ error: "name, email and message are required" });
      }

      const doc = { name, email, message, createdAt: new Date() };
      const result = await contacts.insertOne(doc);
      return res.status(201).json({ success: true, id: result.insertedId });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "server_error" });
    }
  });

  app.get("/health", (req, res) => res.json({ ok: true }));

  // Serve production build if available
  if (process.env.NODE_ENV === "production") {
    const { resolve } = await import("path");
    app.use(express.static(resolve("dist")));
    app.get("*", (req, res) => res.sendFile(resolve("dist", "index.html")));
  }

  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
}

start().catch((err) => {
  console.error("Failed to start server", err);
  process.exit(1);
});

process.on("SIGINT", async () => {
  try {
    if (client) await client.close();
    process.exit(0);
  } catch (err) {
    process.exit(1);
  }
});
