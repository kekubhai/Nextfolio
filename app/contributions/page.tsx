"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { contributions, repoMeta, Contribution } from "./contribution-data";

type RepoFilter = "all" | keyof typeof repoMeta;

export default function ContributionsPage() {
  const [activeFilter, setActiveFilter] = useState<RepoFilter>("all");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const repos = Object.keys(repoMeta) as (keyof typeof repoMeta)[];

  const filtered = contributions.filter((c) =>
    activeFilter === "all" ? true : c.repo === activeFilter
  );

  const mergedCount = contributions.filter((c) => c.status === "merged").length;
  const openCount = contributions.filter((c) => c.status === "open").length;

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="py-8"
    >
      <motion.h1 className="text-4xl font-mono mb-8 underline" variants={itemVariants}>
        Open Source Contributions
      </motion.h1>

      <motion.p className="mb-4 text-muted-foreground" variants={itemVariants}>
        Pull requests I've sent to projects I don't maintain — {contributions.length} so far
        across {repos.length} repositories ({mergedCount} merged, {openCount} open).
      </motion.p>

      {/* Repo summary cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10"
        variants={itemVariants}
      >
        {repos.map((repoKey) => {
          const meta = repoMeta[repoKey];
          const count = contributions.filter((c) => c.repo === repoKey).length;
          return (
            <a
              key={repoKey}
              href={meta.url}
              target="_blank"
              rel="noopener noreferrer"
              className="base-card rounded-lg p-4 block transition-transform hover:scale-[1.02]"
            >
              <div className="flex items-center justify-between mb-1">
                <h2 className="font-mono font-bold">{meta.label}</h2>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                  {count} PR{count === 1 ? "" : "s"}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{meta.blurb}</p>
            </a>
          );
        })}
      </motion.div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-10">
        <FilterButton
          label="All"
          isActive={activeFilter === "all"}
          onClick={() => setActiveFilter("all")}
        />
        {repos.map((repoKey) => (
          <FilterButton
            key={repoKey}
            label={repoMeta[repoKey].label}
            isActive={activeFilter === repoKey}
            onClick={() => setActiveFilter(repoKey)}
          />
        ))}
      </div>

      {/* PR list */}
      <motion.div
        className="flex flex-col gap-5"
        key={activeFilter}
        variants={containerVariants}
      >
        {filtered.map((c) => (
          <ContributionCard key={c.prUrl} contribution={c} />
        ))}
      </motion.div>

      {filtered.length === 0 && (
        <motion.div
          className="text-center py-12 text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          No contributions found here.
        </motion.div>
      )}
    </motion.section>
  );
}

const FilterButton = ({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) => (
  <motion.button
    className={`px-3 py-1.5 rounded-full transition-colors duration-300 font-medium text-sm ${
      isActive ? "bg-primary/10 text-primary" : "hover:bg-primary/10 text-foreground/70"
    }`}
    onClick={onClick}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {label}
  </motion.button>
);

const statusStyles: Record<Contribution["status"], string> = {
  merged: "bg-emerald-500/10 text-emerald-500",
  open: "bg-amber-500/10 text-amber-500",
  closed: "bg-neutral-500/10 text-neutral-500",
};

const ContributionCard = ({ contribution }: { contribution: Contribution }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="base-card rounded-lg p-6"
      variants={itemVariants}
      whileHover={{
        scale: 1.01,
        boxShadow: "0 10px 25px -5px rgba(209,162,9,0.25)",
      }}
    >
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="text-lg font-bold font-mono leading-snug">
          {contribution.title}
        </h3>
        <span
          className={`shrink-0 text-xs px-2 py-1 rounded-full capitalize ${statusStyles[contribution.status]}`}
        >
          {contribution.status}
        </span>
      </div>

      <div className="text-sm text-muted-foreground mb-3">
        <a
          href={contribution.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors"
        >
          {contribution.repo}
        </a>
        {" · "}
        <span>PR #{contribution.prNumber}</span>
      </div>

      <p className="mb-3 text-foreground/90">{contribution.summary}</p>
      <p className="mb-4 text-sm text-muted-foreground">{contribution.details}</p>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {contribution.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <motion.a
          href={contribution.prUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center font-medium text-primary text-sm shrink-0"
          whileHover={{ x: 3 }}
          whileTap={{ scale: 0.97 }}
        >
          View PR <span className="ml-1">→</span>
        </motion.a>
      </div>
    </motion.div>
  );
};
