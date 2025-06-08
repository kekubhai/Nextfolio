'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { projects } from "./project-data";
import { Project } from "./project-data";
type CategoryFilter = "all" | "blockchain" | "ai" | "web" | "mobile" | "other";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("all");


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

  // Filter projects based on active category
  const filteredProjects = projects.filter(project => {
    if (activeFilter === "all") return true;
    return project.category === activeFilter;
  });

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="py-8"
    >
      <motion.h1
        className="text-4xl font-mono mb-8 underline"
        variants={itemVariants}
      >
        Projects
      </motion.h1>
      
      <motion.p 
        className="mb-8 text-muted-foreground"
        variants={itemVariants}
      >
        A collection of projects I've worked on, ranging from web applications to mobile apps and blockchain solutions.
      </motion.p>

      {/* Category filters */}
      <div className="flex flex-wrap gap-3 mb-10">
        <CategoryButton 
          label="All" 
          isActive={activeFilter === "all"} 
          onClick={() => setActiveFilter("all")} 
        />
        <CategoryButton 
          label="Blockchain" 
          isActive={activeFilter === "blockchain"} 
          onClick={() => setActiveFilter("blockchain")} 
        />
        <CategoryButton 
          label="AI" 
          isActive={activeFilter === "ai"} 
          onClick={() => setActiveFilter("ai")} 
        />
        <CategoryButton 
          label="Web" 
          isActive={activeFilter === "web"} 
          onClick={() => setActiveFilter("web")} 
        />
        <CategoryButton 
          label="Mobile" 
          isActive={activeFilter === "mobile"} 
          onClick={() => setActiveFilter("mobile")} 
        />
        <CategoryButton 
          label="Other" 
          isActive={activeFilter === "other"} 
          onClick={() => setActiveFilter("other")} 
        />
      </div>

      {/* Projects grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        key={activeFilter}
        variants={containerVariants}
      >
        {filteredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </motion.div>

      {/* Empty state */}
      {filteredProjects.length === 0 && (
        <motion.div 
          className="text-center py-12 text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          No projects found in this category.
        </motion.div>
      )}
    </motion.section>
  );
}


const CategoryButton = ({ 
  label, 
  isActive, 
  onClick 
}: { 
  label: string; 
  isActive: boolean; 
  onClick: () => void 
}) => (
  <motion.button
    className={`px-3 py-1.5 rounded-full transition-colors duration-300 font-medium ${
      isActive 
        ? "bg-primary/10 text-primary" 
        : "hover:bg-primary/10 text-foreground/70"
    }`}
    onClick={onClick}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {label}
  </motion.button>
);

// Project card component
const ProjectCard = ({ project }: { project: Project }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  
  return (
  <motion.div
    className="base-card rounded-lg overflow-hidden"
    variants={itemVariants}
    whileHover={{ 
      scale: 1.02,
      boxShadow: "0 10px 25px -5px rgba(209,162,9,0.4)"
    }}
  >
    {/* Project image */}
    <div className="relative h-48 w-full group overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-400/30 to-amber-700/30 group-hover:opacity-50 transition-opacity z-10" />
      <Image 
        src={project.image || '/placeholder-image.jpg'} 
        alt={project.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute top-3 right-3 z-20 bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
        {project.year}
      </div>
    </div>
    
    {/* Project details */}
    <div className="p-6">
      <h2 className="text-xl font-bold mb-2 font-mono">{project.title}</h2>
      <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
      
      {/* Tech stack tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack.map((tech) => (
          <span 
            key={tech} 
            className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      
      {/* Link to project */}
      <motion.a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center font-medium text-primary"
        whileHover={{ x: 3 }}
        whileTap={{ scale: 0.97 }}
      >
        View Project <span className="ml-1">→</span>
      </motion.a>
    </div>
  </motion.div>
  )}