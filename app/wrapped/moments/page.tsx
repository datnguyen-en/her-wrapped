"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import WrappedLayout from "@/components/WrappedLayout";

interface MomentCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

function MomentCard({ title, description, icon, delay = 0 }: MomentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.6 }}
      className="bg-white rounded-2xl p-6 shadow-lg border-2 border-[#FFD1DC] mb-4 hover:scale-105 transition-transform"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">{icon}</div>
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2" style={{ color: '#FF8FA3' }}>
            {title}
          </h3>
          <p className="text-gray-700 leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function MomentsPage() {
  const moments = [
    {
      title: "First Trip Abroad Together",
      description: "This is kinda special for me, at first I didn't expect we have a chance to go abroad together. But we did it, and it makes our LDR become much more easier than last year :D.",
      icon: <TripIcon />
    },
    {
      title: "Cooking Together",
      description: "One of my FAV activities with you. Menk's cooking is the best :>, and I'm kinda suck hehehehhe.",
      icon: <CookingIcon />
    },
    {
      title: "The Best Moments",
      description: "Probably the time when we first re-met after a year of studying abroad, doing long distance. It's feel so great and lovely to actually see you again. Makes me cry a lot tho. Perhaps you too. But that was the most enjoyable the time of LDR, it makes me value you and LDR more than ever.",
      icon: <HeartIcon />
    },
    {
      title: "When You Made Me Feel Safe",
      description: "In your arms, I can act like a child. I was silly really silly and skibidi when I was with you :>. Sometimes, it makes you feel annoyed, but I'm glad you still love me :D.",
      icon: <HugIcon />
    },
    {
      title: "Arguments",
      description: "I know that in 2025, I caused many arguments that made Menk feel really sad and disappointed in me. In 2026, I truly want to try my best to control my temper and understand Menk more, so that we can have fewer arguments and more moments of love and happiness together :>. ",
      icon: <RainbowIcon />
    }
  ];

  return (
    <WrappedLayout title="TOP MOMENTS 2025">
      <div className="space-y-6 max-h-[500px] overflow-y-auto px-2">
        {moments.map((moment, index) => (
          <MomentCard
            key={index}
            title={moment.title}
            description={moment.description}
            icon={moment.icon}
            delay={index * 0.1}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-center mt-8"
      >
        <Link
          href="/wrapped/travel"
          className="inline-block bg-[#FFB6C1] text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform text-lg shadow-lg"
        >
          Continue →
        </Link>
      </motion.div>
    </WrappedLayout>
  );
}

// Icon Components
function TripIcon() {
  return (
    <svg width="50" height="50" viewBox="0 0 50 50">
      <circle cx="25" cy="25" r="20" fill="#B8E6E6" />
      <path d="M 15 30 L 25 20 L 35 30" stroke="#5F9EA0" strokeWidth="3" fill="none" strokeLinecap="round" />
      <circle cx="20" cy="28" r="2" fill="#5F9EA0" />
      <circle cx="30" cy="28" r="2" fill="#5F9EA0" />
    </svg>
  );
}

function CookingIcon() {
  return (
    <svg width="50" height="50" viewBox="0 0 50 50">
      <circle cx="25" cy="25" r="20" fill="#FFD1DC" />
      {/* Pot/Pan */}
      <ellipse cx="25" cy="28" rx="12" ry="6" fill="#FF8FA3" />
      <path d="M 13 28 L 13 32 L 37 32 L 37 28" stroke="#FF8FA3" strokeWidth="2" fill="none" />
      {/* Handle */}
      <path d="M 35 28 Q 40 28, 40 25 Q 40 22, 38 22" stroke="#FF8FA3" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Steam lines */}
      <path d="M 18 22 L 18 18" stroke="#B8E6E6" strokeWidth="2" strokeLinecap="round" />
      <path d="M 25 20 L 25 15" stroke="#B8E6E6" strokeWidth="2" strokeLinecap="round" />
      <path d="M 32 22 L 32 18" stroke="#B8E6E6" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="50" height="50" viewBox="0 0 50 50">
      <circle cx="25" cy="25" r="20" fill="#FFE4E6" />
      <path
        d="M 25 18 Q 20 13, 15 18 Q 15 23, 25 30 Q 35 23, 35 18 Q 30 13, 25 18"
        fill="#FF8FA3"
      />
    </svg>
  );
}

function HugIcon() {
  return (
    <svg width="50" height="50" viewBox="0 0 50 50">
      <circle cx="20" cy="25" r="12" fill="#D4F1F4" />
      <circle cx="30" cy="25" r="12" fill="#FFD1DC" />
      <circle cx="18" cy="23" r="2" fill="#333" />
      <circle cx="22" cy="23" r="2" fill="#333" />
      <circle cx="28" cy="23" r="2" fill="#333" />
      <circle cx="32" cy="23" r="2" fill="#333" />
      <path d="M 20 28 Q 25 30, 30 28" stroke="#333" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

function RainbowIcon() {
  return (
    <svg width="50" height="50" viewBox="0 0 50 50">
      <path d="M 10 30 Q 25 20, 40 30" stroke="#FF6B6B" strokeWidth="3" fill="none" />
      <path d="M 12 32 Q 25 23, 38 32" stroke="#FFA500" strokeWidth="3" fill="none" />
      <path d="M 14 34 Q 25 26, 36 34" stroke="#FFD700" strokeWidth="3" fill="none" />
      <path d="M 16 36 Q 25 29, 34 36" stroke="#32CD32" strokeWidth="3" fill="none" />
      <path d="M 18 38 Q 25 32, 32 38" stroke="#87CEEB" strokeWidth="3" fill="none" />
    </svg>
  );
}

