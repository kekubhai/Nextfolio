'use client'
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// Define the blog post data structure
type BlogPost = {
  title: string;
  description: string;
  date: string;
  url: string;
  source: "Medium" | "Notion";
  image?: string;
};

// Combined data from Medium and Notion
const blogPosts: BlogPost[] = [
  // Medium posts
  {
    title: "Websockets in Golang (explained to you like a 10 year old)",
    description: "Well if you are a dev and upskilled from your HTML, CSS, JS stage, you must have heard about this thing called websockets...",
    date: "Apr 30, 2023",
    url: "https://medium.com/@anirbanghosh060/websockets-in-golang-explained-to-you-like-a-10-year-old-b5dee1623b5e",
    source: "Medium",
    image: "/images/websockets.png"
  },
  {
    title: "Why should you use TRPC in your typescript Project?",
    description: "To start with lets get to know what is TRPC? The full form is Typescript Remote Procedure Call. It is mainly used to provide type safety...",
    date: "Jan 23, 2023",
    url: "https://medium.com/@anirbanghosh060/why-should-you-use-trpc-in-your-typescript-project-3f3f15e13657",
    source: "Medium",
    image: "/images/trpc.png"
  },
  
  // Notion articles
  {
    title: "Solana CLI Guide",
    description: "A comprehensive guide to using the Solana Command Line Interface. Learn about wallet management, account operations, staking, and more in this detailed walkthrough.",
    date: "2023",
    url: "https://spiritual-motorcycle-e35.notion.site/Solana-Cli-1392088ba6ae8019b7ead0854e0f0e80",
    source: "Notion",
    image: "/images/solana.png"
  },
  {
    title: "DSA Article",
    description: "Deep dive into Data Structures and Algorithms with practical examples and implementation strategies. Perfect for interview preparation and coding challenges.",
    date: "2023",
    url: "https://spiritual-motorcycle-e35.notion.site/DSA-Article-15e2088ba6ae80708aa3e2b3b704372b",
    source: "Notion",
    image: "/images/dsa.png"
  },
  {
    title: "AWS Starter Kit",
    description: "Everything you need to know to get started with AWS. From setting up your first instance to understanding cloud architecture patterns and best practices.",
    date: "2023",
    url: "https://spiritual-motorcycle-e35.notion.site/AWS-starter-Kit-15c2088ba6ae80ee850fe24e1403850c",
    source: "Notion",
    image: "/images/aws.png"
  }
];

const MediumBlogCards = () => {
  // Animation variants
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
    <section className="my-8">
      <motion.h2 
        className="text-3xl font-mono mb-6 underline"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Articles & Guides
      </motion.h2>

      {/* Filter buttons */}
      <div className="flex space-x-4 mb-6">
        <button className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">All</button>
        <button className="px-3 py-1 rounded-full hover:bg-primary/10 text-foreground/70 font-medium">Medium</button>
        <button className="px-3 py-1 rounded-full hover:bg-primary/10 text-foreground/70 font-medium">Notion</button>
      </div>
      
      <motion.div 
        className="grid grid-cols-1 gap-6 md:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {blogPosts.map((post, index) => (
          <motion.a
            key={index}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="base-card rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.03,
              boxShadow: "0 10px 25px -5px rgba(209,162,9,0.4)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="p-6">
              <div className="mb-4 overflow-hidden rounded-md">
                <div className="relative h-48 w-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-amber-700/20" />
                  <div className="flex items-center justify-center h-full text-4xl font-bold text-amber-700/50">
                    {post.title.charAt(0)}
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-2 font-mono">{post.title}</h3>
              <p className="text-muted-foreground mb-4 line-clamp-3">{post.description}</p>
              
              <div className="flex justify-between items-center mt-auto">
                <span className="text-sm text-muted-foreground">{post.date}</span>
                <span className="text-primary font-medium">
                  Read on {post.source} →
                </span>
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

export default MediumBlogCards;