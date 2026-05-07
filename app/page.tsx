'use client'
import Image from "next/image";
import { socialLinks } from "./config";
import { motion } from "framer-motion";

export default function Page() {
  // Variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Experience data
  const experiences = [
    {
      role: "SDE Intern",
      company: "TechKareer",
      duration: "Jul 2025 - Present · 1 mo",
      location: "Remote",
      logo: "/tk_logo.png",
      description: "Engineered internal hiring tools with FastAPI to automate workflows, reducing manual intervention and accelerating candidate-company matching. Integrated LLM-powered modules to analyze candidate profiles, summarize skills, and generate technical insights for hiring pipelines.",
    },
    {
      role: "Research Intern",
      company: "HappyMapCa",
      duration: "Dec 2025 - Mar 2026 · 4 mos",
      location: "Remote",
      logo: "/happymap_logo.png",
      description: "Leveraged AI-driven geospatial analysis to identify and evaluate emerging restaurants and dining establishments across target regions. Applied NLP and data mining on user reviews, location metadata, and behavioral signals to surface high-potential dining venues.",
    },
    {
      role: "Full Stack Developer",
      company: "Ayuruj India",
      duration: "Feb 2025 - Jun 2025 · 5 mos",
      location: "Kolkata · Part-time",
      logo: "/ayuruj_logo.png",
      description: "Developed scalable web and mobile apps with Next.js, React Native, and Node.js, improving user engagement by 35%. Designed RESTful APIs reducing latency by 40% and optimized database queries and caching strategies, boosting performance by 25%.",
    },
  ];

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-full"
    >
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
        <motion.a
          className="block shrink-0"
          href={socialLinks.twitter}
          target="_blank"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 overflow-hidden rounded-full ring-2 ring-primary/40">
            <Image
              src="/newpfp1.png"
              alt="Profile photo"
              className="grayscale hover:grayscale-0 transition-all duration-500 object-cover"
              fill
              sizes="(max-width: 768px) 128px, (max-width: 1024px) 160px, 192px"
              priority
            />
          </div>
        </motion.a>
        
        <div className="text-center md:text-left">
          <motion.h3 className="font-mono text-3xl md:text-4xl lg:text-5xl mb-2 underline">
            Know Me
          </motion.h3>
          <motion.h1
            className="text-xl md:text-2xl font-mono mb-2"
            variants={itemVariants}
          >
            Hey there! I'm Anirban
          </motion.h1>
          <motion.div 
            className="flex items-center gap-2 mb-4 justify-center md:justify-start"
            variants={itemVariants}
          >
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
              CEO & Founder
            </span>
            <a 
              href="https://zynvo.social" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lg font-bold hover:text-primary transition-colors"
            >
              zynvo.social
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="prose prose-neutral dark:prose-invert max-w-full"
        variants={containerVariants}
      >
        <motion.p variants={itemVariants} className="text-lg md:text-xl lg:text-2xl font-mono mb-4">
          I build and ship and do it again and again 
        </motion.p>
        
        <motion.p variants={itemVariants} className="text-lg md:text-xl lg:text-2xl font-mono mb-4">
          I learn, compete, execute and stay humble 
          <motion.a
            target="_blank"
            href="https://github.com/kekubhai"
            whileHover={{ color: "#3182CE", scale: 1.03 }}
            transition={{ duration: 0.2 }}
          >
          </motion.a>
        </motion.p>
        
        <motion.p variants={itemVariants} className="text-lg md:text-xl lg:text-2xl font-mono mb-4">
          I watch cinema{" "}
          <motion.a
            href={socialLinks.instagram}
            target="_blank"
            className="px-2 py-1 text-green-500 hover:text-primary/80 font-bold bg-black rounded" 
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
          >
            make content
          </motion.a>{" "}
          and play football
        </motion.p>
      </motion.div>

      {/* Experience Section */}
      <section className="my-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 font-mono underline">Experience</h2>
        <div className="flex flex-col gap-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="flex flex-col md:flex-row items-start gap-4 bg-white/10 dark:bg-black/20 rounded-2xl p-8 shadow-md">
              <div className="w-full">
                <div className="font-extrabold text-xl md:text-2xl mb-1">{exp.role}</div>
                <div className="font-bold text-lg md:text-xl text-primary font-mono mb-1">{exp.company}</div>
                <div className="font-semibold text-base text-muted-foreground mb-1">{exp.duration}</div>
                <div className="font-semibold text-base text-muted-foreground mb-3">{exp.location}</div>
                {exp.description && (
                  <div className="text-sm md:text-base text-gray-300 leading-relaxed">
                    {exp.description}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="my-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 font-mono underline">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div variants={itemVariants} className="bg-white/10 dark:bg-black/20 rounded-2xl p-6">
            <h3 className="font-bold text-lg mb-3 text-primary">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {["JavaScript", "Python", "C/C++", "SQL", "Go", "Solidity", "TypeScript"].map((lang) => (
                <span key={lang} className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold">
                  {lang}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white/10 dark:bg-black/20 rounded-2xl p-6">
            <h3 className="font-bold text-lg mb-3 text-primary">Frameworks & Libraries</h3>
            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "Streamlit", "Fiber", "FastAPI", "Pandas", "NumPy", "PyTorch"].map((fw) => (
                <span key={fw} className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold">
                  {fw}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white/10 dark:bg-black/20 rounded-2xl p-6">
            <h3 className="font-bold text-lg mb-3 text-primary">AI/LLM Tools</h3>
            <div className="flex flex-wrap gap-2">
              {["Hugging Face", "LangChain", "LangGraph", "CrewAI", "AutoGen", "OpenAI", "Gemini", "Gradio"].map((tool) => (
                <span key={tool} className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold">
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white/10 dark:bg-black/20 rounded-2xl p-6">
            <h3 className="font-bold text-lg mb-3 text-primary">Databases & Tools</h3>
            <div className="flex flex-wrap gap-2">
              {["MongoDB", "Supabase", "SQLite3", "NeonDB", "Upstash", "ChromaDB", "Docker", "AWS", "Git"].map((db) => (
                <span key={db} className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold">
                  {db}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </motion.section>
  );
}
