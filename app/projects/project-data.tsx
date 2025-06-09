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
  }
]