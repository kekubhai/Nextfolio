'use client'
import Image from "next/image";
import { socialLinks } from "app/config";
import { motion } from "framer-motion";
import MediumBlogCards from "app/components/MediumBlogCards";

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
     
      
      {/* Add the Medium Blog Cards component */}
      <MediumBlogCards />
    </motion.section>
  );
}