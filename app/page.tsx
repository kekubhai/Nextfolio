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
    >
      <motion.a
        className="block"
        href={socialLinks.twitter}
        target="_blank"
        
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0 transition-all duration-500 shadow-md hover:shadow-lg"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </motion.a>
      <motion.h3 className="font-mono text-5xl p-3 underline"> Know Me</motion.h3>
      <motion.h1
        className="mb-8 text-2xl font-mono m-3"
        variants={itemVariants}
      >
        Hey Man/Woman
      </motion.h1>
      <motion.div
        className="prose prose-neutral dark:prose-invert"
        variants={containerVariants}
      >
        <motion.p variants={itemVariants} className="text-2xl font-mono m-3">
      i build and ship and do it again and again 
        </motion.p>
        <motion.p variants={itemVariants} className="font-mono text-2xl m-3">
        i learn,compete,execute and stay humble 
          <motion.a
            target="_blank"
            href="https://github.com/1msirius/Nextfolio?tab=readme-ov-file#features"
            whileHover={{ color: "#3182CE", scale: 1.03 }}
            transition={{ duration: 0.2 }}
          >
            
          </motion.a>
          
        </motion.p>
        <motion.p variants={itemVariants} className="font-mono m-3 text-2xl">
          i watch cinema{" "}
          <motion.a
            href={socialLinks.instagram}
            target="_blank"
            className="text-green-500 hover:text-primary/80 font-bold bg-black " // Using theme colors
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
