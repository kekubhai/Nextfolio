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
    </motion.section>
  );
}
