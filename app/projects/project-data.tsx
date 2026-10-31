export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
  image?: string;
  techStack: string[];
  category: ("blockchain" | "ai" | "web" | "mobile" | "other")[];
}

export const projects: Project[] = [
  {
    title: "Zynvo.social",
    year: 2025,
    description: "College community platform for students with branch/semester-based feeds, study material uploads, upvoting, events management, and AI chat via Gemini. Built mobile-first for iOS and Android alongside the web experience. Integrated face-api.js for attendance and Clerk for authentication.",
    url: "https://zynvo.social",
    image: "https://ik.imagekit.io/4q9e0khee/zynvo-social.png?updatedAt=1745734348514",
    techStack: ["Next.js", "MongoDB", "Gemini API", "Clerk", "face-api.js", "Tailwind CSS"],
    category: ["web", "ai", "mobile"]
  },
  {
    title: "LOADLINE",
    year: 2026,
    description: "Open-source system design simulator: build an architecture from real cloud services (Cloudflare, AWS, GCP), define a workload in user-level terms, and run a deterministic discrete-event simulation under load and failure to see latency, cost, and the actual bottleneck before shipping.",
    url: "https://github.com/kekubhai/Loadline",
    image: "/covers/loadline.png",
    techStack: ["Go", "Next.js", "TypeScript", "Discrete-Event Simulation"],
    category: ["web", "other"]
  },
  {
    title: "Jobber Hopper",
    year: 2026,
    description: "AI job-application assistant: a Chrome extension that autofills Greenhouse and Workday applications from one master profile, paired with a Next.js web app for managing that profile and matching it against job posts.",
    url: "https://github.com/kekubhai/jobber-hopper",
    image: "/covers/jobber-hopper.png",
    techStack: ["Next.js", "Chrome Extension", "TypeScript", "Supabase", "OpenRouter API"],
    category: ["ai", "web", "other"]
  },
  {
    title: "ReelEdits",
    year: 2026,
    description: "Agent-driven video production studio — drop in raw footage, describe the video you want, and a coding agent inspects, plans, edits, renders and validates it using FFmpeg and Remotion underneath.",
    url: "https://github.com/kekubhai/reeledits",
    image: "/covers/reeledits.png",
    techStack: ["FFmpeg", "Remotion", "Node.js", "TypeScript", "Whisper"],
    category: ["ai", "other"]
  },
  {
    title: "A2A Protocol — Agent-to-Agent Marketplace",
    year: 2026,
    description: "Verification-backed marketplace for AI agents with on-chain reputation, staking, and cross-chain compatibility across EVM chains and Solana, so agents can bid on work and get paid only once it's independently verified.",
    url: "https://github.com/kekubhai/a2a",
    image: "/covers/a2a-protocol.png",
    techStack: ["Solidity", "Rust", "TypeScript", "Solana", "Wormhole"],
    category: ["blockchain", "ai"]
  },
  {
    title: "Genvora",
    year: 2026,
    description: "AI-powered multi-tenant SaaS platform that audits websites for AI/LLM readiness — crawling and scoring structure, accessibility and structured data, then generating actionable recommendations through Temporal-powered workflows.",
    url: "https://github.com/kekubhai/genvora",
    image: "/covers/genvora.png",
    techStack: ["Next.js", "NestJS", "Cloudflare Workers", "Temporal", "PostHog"],
    category: ["ai", "web"]
  },
  {
    title: "CogniGraph",
    year: 2026,
    description: "Autonomous multi-agent RAG system for querying a private document collection entirely offline — a planner, retriever and summarizer agent pipeline built with LangGraph over a local LLM, no cloud calls involved.",
    url: "https://github.com/kekubhai/cognigraph",
    image: "/covers/cognigraph.png",
    techStack: ["Python", "LangGraph", "LangChain", "ChromaDB"],
    category: ["ai"]
  },
  {
    title: "Flowdren",
    year: 2026,
    description: "Solana program for a multi-approver USDC vault — deposits, configurable approval thresholds, and payout execution all enforced on-chain with Anchor, built for teams that need shared control over treasury disbursements.",
    url: "https://github.com/kekubhai/flowdren",
    image: "/covers/flowdren.png",
    techStack: ["Rust", "Anchor", "Solana", "SPL Token"],
    category: ["blockchain"]
  },
  {
    title: "Mimic — Personalized AI Avatar",
    year: 2025,
    description: "Privacy-first digital identity platform where users train a one-to-one AI avatar through memory-based learning. Avatar continuously evolves through structured memory of opinions, preferences, and behavioral patterns without model retraining.",
    url: "https://github.com/kekubhai/mimic-ai-avatar",
    image: "https://ik.imagekit.io/4q9e0khee/mimic-ai-avatar.png?updatedAt=1745734348514",
    techStack: ["Next.js", "LangChain", "OpenAI", "Supabase", "TypeScript"],
    category: ["ai"]
  },
  {
    title: "Claimr — Decentralized Bounty Platform",
    year: 2025,
    description: "Crypto bounty platform where companies lock rewards in smart contracts, students submit solutions, and an AI agent auto-evaluates and scores submissions for trustless payouts on Ethereum Sepolia.",
    url: "https://github.com/kekubhai/claimr",
    image: "https://ik.imagekit.io/4q9e0khee/claimr-bounty.png?updatedAt=1745734348514",
    techStack: ["Solidity", "Ethereum Sepolia", "Next.js", "FastAPI", "ethers.js"],
    category: ["blockchain", "ai"]
  },
  {
    title:'medic-Track',
    year: 2025,
    description: "A mobile platform for secure and efficient medical record management.",
    url: "https://medic-track.vercel.app/",
    image:'/medictrack.png',
    techStack: ["React", "Next.js", "Blockchain", "TypeScript", "Tailwind CSS"],
    category: ["mobile"]
  },
  {
    title: "Orbit-X",
    year: 2025,
    description: "Web-based wallet to simplify managing digital assets securely and efficiently. Designed to make transactions smooth, reliable, and user-friendly.",
    url: "https://orbitx-ecru.vercel.app/",
    image:'/orbitx.png',
    techStack: ["React", "Next.js", "Blockchain", "TypeScript", "Tailwind CSS"],
    category: ["blockchain"]
  },
  {
    title: "Calibrate-01",
    year: 2024,
    description: "Mobile based platform which optimized web socket implementation for real time stock data and trading.",
    url: "https://github.com/kekubhai/calibrate-o1",
    image: "https://ik.imagekit.io/4q9e0khee/ChatGPT%20Image%20Apr%2027,%202025,%2011_39_57%20AM.png?updatedAt=1745734348514",
    techStack: ["React Native", "Golang", "WebSocket", "Expo", "Trading API"],
    category: ["mobile"]
  },
  {
    title: "Agent-01",
    year: 2024,
    description: "Web-based platform that allows users to create and manage their own agents. Provides a user-friendly interface for creating agents, setting parameters, and monitoring performance.",
    url: "https://github.com/kekubhai/agents1",
    image: "https://ik.imagekit.io/4q9e0khee/ChatGPT%20Image%20Apr%2027,%202025,%2012_13_10%20PM.png?updatedAt=1745736226745",
    techStack: ["React", "Next.js", "Puppeteer", "Web Scraping", "Node.js"],
    category: ["ai", "other"]
  },
  {
    title: "LinkRoom",
    year: 2024,
    description: "Platform to make sharing and discovering valuable resources within communities simple and efficient. Designed to foster collaboration and connect users with information they need.",
    url: "https://linkroom-livid.vercel.app/",
    image: "/linkroom.png",
    techStack: ["Next.js", "React", "Solana", "Blockchain", "Tailwind CSS"],
    category: ["blockchain"]
  },
  {
    title: "Kakshya-Kul",
    year: 2023,
    description: "Platform to make efficient decisions for selection of colleges. Helps users make choices based on different parameters, financial-aid, scores and more.",
    url: "https://kakshya-kul.vercel.app/",
    image: "/kakshyakul.png",
    techStack: ["React", "Next.js", "AI", "Educational API", "Tailwind CSS"],
    category: ["ai"]
  },
  {
    title: "Her-Birthday25",
    year: 2023,
    description: "A basic frontend website gift for my girlfriend on her birthday. Created to brush up my skills and make her feel special with anime themes and shared memories.",
    url: "https://her-birthday25.vercel.app/",
    image: "/herbirthday.png",
    techStack: ["React", "Next.js", "Animation", "CSS", "Love"],
    category: ["web"]
  },
  {
    title: "Green-Lens AI",
    year: 2023,
    description: "AI-driven image recognition to monitor plant health. Detects diseases, pests, and nutrient deficiencies in real-time, providing actionable insights to maintain healthy plants.",
    url: "https://github.com/kekubhai/greenlens-ai",
    image: "/greenlensai.png",
    techStack: ["React", "Next.js", "Computer Vision", "TensorFlow", "Plant Database"],
    category: ["ai"]
  },
  {
    title: "DuoShop",
    year: 2023,
    description: "Expense Tracker and Budgeting App designed to help users manage their finances effectively. Provides features for tracking expenses, setting budgets, and generating financial reports.",
    url: "https://github.com/kekubhai/duoshop",
    image:'/duoshop.jpg',
    techStack: ["Expo", "React-Native", "NativeWind", "TypeScript", "Neondb", "Nodejs", "Express"],
    category: ["mobile"]
  },
  {
    title: "AutoNode",
    year: 2025,
    description: "No-code automation platform to automate tasks and media activities on Drive, Discord, Slack and Notion.",
    url: "https://github.com/kekubhai/autonode",
    image: "/autonode.png",
    techStack: ["TypeScript", "Automation", "Ngrok", "Twilio", "Bun", "Prisma"],
    category: ["other", "web"]
  },
  {
    title: "Lessgo",
    year: 2025,
    description: "Tool to receive hiring notifications from Telegram, LinkedIn and X (developer-based) onto your WhatsApp number.",
    url: "https://github.com/kekubhai/lessgo",
    image: "/lessgo.png",
    techStack: ["Python", "Selenium", "Pandas", "AsyncIO", "PyWhatKit"],
    category: ["other"]
  },
  {
    title: "Data-Forage",
    year: 2025,
    description: "Data analysis and extraction tool for processing and organizing large datasets.",
    url: "https://github.com/kekubhai/Data-Forage",
    image: "/dataforage.png",
    techStack: ["Python", "Data Analysis", "Pandas", "Visualization"],
    category: ["other", "ai"]
  },
  {
    title: "Go-Server",
    year: 2025,
    description: "Lightweight and efficient backend server implementation using Go with API endpoints.",
    url: "https://github.com/kekubhai/go-server",
    image: "/calibrate.png",
    techStack: ["Go", "API", "Backend", "Server"],
    category: ["other"]
  },
  {
    title: "YNOTNOW",
    year: 2025,
    description: "YNOTNOW is an idea validation platform with community support, featuring likes and comments to help users validate and discuss their startup or project ideas.",
    url: "https://ynotnow.pro/",
    image: "/covers/ynotnow.png",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Community"],
    category: ["web"]
  },
  {
    title: "Zentry",
    year: 2025,
    description: "AI-based expense tracker and budget builder mobile app. Built with React Native, it leverages PyTorch for AI, Express/Node.js for backend, MongoDB and Prisma for data, and Clerk for authentication.",
    url: "https://github.com/debonir-projects/Zentry",
    image: "/covers/zentry.png",
    techStack: [
      "React Native",
      "PyTorch",
      "Express",
      "Node.js",
      "MongoDB",
      "Prisma",
      "Clerk"
    ],
    category: ["mobile", "ai"]
  },
  {
    title: "AceprepAI",
    year: 2025,
    description: "AceprepAI is an AI-powered web platform designed to help students prepare for competitive exams with personalized quizzes, instant feedback, and community-driven resources.",
    url: "https://github.com/kekubhai/AceprepAI",
    image: "/aceprepai.png", // Add an image named aceprepai.png to your public folder for best results
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB", "OpenAI API", "AI"],
    category: ["ai", "web"]
  },
  {
    title: "Faultiz",
    year: 2025,
    description: "Faultiz is a machine learning platform for fault detection and predictive maintenance, leveraging advanced ML models to identify anomalies and prevent failures in industrial systems.",
    url: "https://github.com/kekubhai/Faultiz",
    image: "/Faultiz.png", // Add an image named Faultiz.png to your public folder for best results
    techStack: ["Python", "Machine Learning", "Scikit-learn", "Pandas", "NumPy", "Flask", "AI"],
    category: ["ai"]
  },
  {
    title: "IMDA",
    year: 2025,
    description: "IMDA (Intelligent Medical Data Analysis) is a machine learning platform for analyzing and predicting medical data trends, enabling smarter healthcare decisions with advanced ML models and data visualization.",
    url: "https://github.com/kekubhai/IMDA",
    image: "/imda.png", // Add an image named imda.png to your public folder for best results
    techStack: ["Python", "Machine Learning", "Pandas", "NumPy", "Matplotlib", "Scikit-learn", "AI", "Healthcare"],
    category: ["ai"]
  },
]