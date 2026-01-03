export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,

    deskPosition: isSmall
      ? [0.4, -4.2, 0]
      : isMobile
      ? [0.4, -4.6, 0]
      : isTablet
      ? [0.3, -4.9, 0]
      : [0.25, -5.0, 0],

    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],

    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],

    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],

    targetPosition: isSmall
      ? [-3, -4, -1]
      : isMobile
      ? [-5, -4, -1]
      : isTablet
      ? [-7, -4, -1]
      : [-9, -4, -1],
  }
}

export const myProjects = [
  {
    title: 'AI Resume Analyser',
    desc: 'A responsive and modern car dealership website where users can explore a curated list of cars with clean UI sections and smooth navigation.',
    subdesc:
      'Built using React.js and TailwindCSS, the platform focuses on presenting information clearly, with a structured layout and mobile-first experience.',
    href: 'https://resume-analyser-lyart.vercel.app/auth?next=/',
    texture: '/videos/resume-demo.mp4',   // kept EXACTLY the same
    logo: '/assets/cv.png',           // unchanged
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',        // unchanged
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'TailwindCSS', path: 'assets/tailwindcss.png' },
      { id: 3, name: 'JavaScript', path: '/assets/typescript.png' }, // you can change if needed
      //{ id: 4, name: 'Framer Motion', path: '/assets/framer.png' },
    ],
  },

  {
    title: 'Converso – AI Learning Companion',
    desc: 'Designed SaaS system architecture supporting 10+ custom AI learning companions per user, applying separation-of-concerns and modular data modeling.',
    subdesc:
      'Built using Next.js, TypeScript, Supabase, Clerk, Vapi.ai, Sentry.',
    href: 'https://saas-app-alpha-sand.vercel.app/',
    texture: '/videos/converso.mp4',   // kept EXACTLY the same
    logo: '/assets/logo.svg',           // unchanged
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',        // unchanged
    tags: [
      { id: 1, name: 'Next.js', path: '/assets/next.jpeg' },
      { id: 2, name: 'TailwindCSS', path: 'assets/tailwindcss.png' },
      { id: 3, name: 'JavaScript', path: '/assets/typescript.png' }, // you can change if needed
      { id: 4, name: 'Supabase', path: '/assets/supabase.jpeg' },
    ],
  },

  {
    title: 'DealDrop – Price Tracker Web App',
    desc: 'Developed a price-monitoring platform that automatically tracks 30+ product URLs and triggers price-drop notifications, sending 100+ test alerts using Resend — helping users make informed purchase decisions.',
    subdesc:
      'Built using Next.js, Supabase, Cron Jobs, Resend, TailwindCSS',
    href: 'https://dealdropp.vercel.app/',
    texture: '/videos/dealdrop.mp4',   // kept EXACTLY the same
    logo: '/assets/deal-drop-logo.png',           // unchanged
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',        // unchanged
    tags: [
      { id: 1, name: 'Next.js', path: '/assets/next.jpeg' },
      { id: 2, name: 'TailwindCSS', path: 'assets/tailwindcss.png' },
      { id: 3, name: 'JavaScript', path: '/assets/typescript.png' }, // you can change if needed
      { id: 4, name: 'Supabase', path: '/assets/supabase.jpeg' },
    ],
  },
];