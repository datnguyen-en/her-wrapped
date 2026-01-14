"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import WrappedLayout from "@/components/WrappedLayout";

interface GrowthSectionProps {
  title: string;
  content: string;
  icon: React.ReactNode;
  delay?: number;
}

function GrowthSection({ title, content, icon, delay = 0 }: GrowthSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8 }}
      className="bg-white rounded-2xl p-8 shadow-lg border-2 border-[#FFD1DC] mb-6"
    >
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0">{icon}</div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-4" style={{ color: '#FF8FA3' }}>
            {title}
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">{content}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function GrowthPage() {
  const sections = [
    {
      title: "Things You Overcame",
      content: "In 2025, I think you faced one of the hardest years you've ever had. But in the end, you overcame it perfectly, and you even got a job :>>>. Heheheeh, so proud of my bbi.",
      icon: <MountainIcon />
    },
    {
      title: "Things You Didn't Give Yourself Credit For",
      content: "You became stronger in ways no one saw. The small victories, the quiet moments of courage, the times you chose kindness when it was easier not to. You don't see it, but I do. Every single day.",
      icon: <StarIcon />
    },
    {
      title: "How You Grew This Year",
      content: "Obviously, 2025 may not have been as bright or smooth as your best year in 2023. But I saw how this year helped you grow in a different way. You learned to slow down, to understand the world more deeply, to face challenges, and to figure out how to overcome them. That's what makes 2025 one of the most meaningful years for you because you gained so much from it.",
      icon: <TreeIcon />
    }
  ];

  return (
    <WrappedLayout title="YOUR GROWTH WRAPPED">
      <div className="space-y-4">
        {sections.map((section, index) => (
          <GrowthSection
            key={index}
            title={section.title}
            content={section.content}
            icon={section.icon}
            delay={index * 0.2}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0 }}
        className="text-center mt-8"
      >
        <Link
          href="/wrapped/favorite"
          className="inline-block bg-[#FFB6C1] text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform text-lg shadow-lg"
        >
          Continue →
        </Link>
      </motion.div>
    </WrappedLayout>
  );
}

// Icon Components
function MountainIcon() {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60">
      <path d="M 10 50 L 20 30 L 30 40 L 40 20 L 50 50 Z" fill="#B8E6E6" />
      <path d="M 10 50 L 20 30 L 30 40 L 40 20 L 50 50" stroke="#5F9EA0" strokeWidth="2" fill="none" />
      <circle cx="25" cy="35" r="3" fill="#FFD1DC" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60">
      <circle cx="30" cy="30" r="25" fill="#FFF9E6" />
      <path
        d="M 30 5 L 35 20 L 50 20 L 38 30 L 43 45 L 30 37 L 17 45 L 22 30 L 10 20 L 25 20 Z"
        fill="#FFA500"
      />
      <circle cx="30" cy="30" r="3" fill="#FFFFFF" />
    </svg>
  );
}

function TreeIcon() {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60">
      <rect x="27" y="40" width="6" height="10" fill="#8B4513" />
      <path d="M 30 10 L 15 30 L 30 30 L 10 45 L 30 45 L 20 55 L 40 55 L 30 45 L 50 45 L 30 30 L 45 30 Z" fill="#32CD32" />
      <circle cx="25" cy="35" r="2" fill="#FFD700" />
      <circle cx="35" cy="38" r="2" fill="#FFD700" />
    </svg>
  );
}

