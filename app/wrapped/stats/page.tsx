"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import WrappedLayout from "@/components/WrappedLayout";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  delay?: number;
}

function StatCard({ title, value, icon, delay = 0 }: StatCardProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const isNumber = typeof value === "number";

  useEffect(() => {
    if (isNumber) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [value, isNumber]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      className="bg-white rounded-2xl p-6 shadow-lg border-2 border-[#FFD1DC] hover:scale-105 transition-transform"
    >
      <div className="flex flex-col items-center text-center">
        <div className="mb-4">{icon}</div>
        <p className="text-sm uppercase tracking-wide text-gray-600 mb-2 font-medium">
          {title}
        </p>
        <p className="text-4xl font-bold" style={{ color: '#FF8FA3' }}>
          {isNumber ? displayValue.toLocaleString() : value}
        </p>
      </div>
    </motion.div>
  );
}

export default function StatsPage() {
  return (
    <WrappedLayout title="OUR STATS">
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StatCard
            title="Days Together"
            value={758}
            icon={<DaysIcon />}
            delay={0.1}
          />
          <StatCard
            title="Times I Missed You"
            value="∞"
            icon={<InfinityIcon />}
            delay={0.8  }
          />
          <StatCard
            title="Laughs Caused By You"
            value={67676767676767}
            icon={<LaughIcon />}
            delay={0.3}
          />
          <StatCard
            title="Arguments Survived"
            value="75% (nearly cooked)" 
            icon={<HeartShieldIcon />}
            delay={0.8}
          />
          <StatCard
            title="DAYS' LONG DISTANCE RELATIONSHIP"
            value={425}
          icon={<LongDistanceIcon />}
            delay={0.1}
          />
            <StatCard
            title="Success"
            value="Both get a job 😍"
            icon={<SuccessIcon />}
            delay={0.8}
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-8"
        >
          <Link
            href="/wrapped/music"
            className="inline-block bg-[#FFB6C1] text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform text-lg shadow-lg"
          >
            Continue →
          </Link>
        </motion.div>
      </div>
    </WrappedLayout>
  );
}

// Icon Components
function DaysIcon() {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60">
      <circle cx="30" cy="30" r="25" fill="#FFD1DC" />
      <circle cx="30" cy="30" r="20" fill="#FFB6C1" />
      <text x="30" y="38" textAnchor="middle" fontSize="20" fill="white" fontWeight="bold">365</text>
    </svg>
  );
}

function InfinityIcon() {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60">
      <path
        d="M 20 30 Q 15 20, 25 20 Q 30 20, 30 30 Q 30 40, 35 40 Q 40 40, 40 30 Q 40 20, 35 20 Q 30 20, 30 30 Q 30 40, 25 40 Q 15 40, 20 30"
        stroke="#FF8FA3"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LaughIcon() {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60">
      <circle cx="30" cy="30" r="20" fill="#FFF9E6" />
      <circle cx="25" cy="25" r="3" fill="#333" />
      <circle cx="35" cy="25" r="3" fill="#333" />
      <path d="M 25 35 Q 30 40, 35 35" stroke="#333" strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle cx="20" cy="20" r="2" fill="#FFB6C1" />
      <circle cx="40" cy="20" r="2" fill="#FFB6C1" />
    </svg>
  );
}

function HeartShieldIcon() {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60">
      <path
        d="M 30 10 L 20 15 L 20 25 Q 20 35, 30 45 Q 40 35, 40 25 L 40 15 Z"
        fill="#FFD1DC"
        stroke="#FF8FA3"
        strokeWidth="2"
      />
      <path
        d="M 30 25 Q 28 20, 25 22 Q 30 30, 30 30 Q 30 30, 35 22 Q 32 20, 30 25"
        fill="#FF8FA3"
      />
    </svg>
  );
}

function StarRatingIcon() {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60">
      <circle cx="30" cy="30" r="20" fill="#FFF9E6" />
      <g>
        {[1, 2, 3, 4, 5].map((i) => (
          <path
            key={i}
            d="M 12 25 L 14 30 L 19 30 L 15 33 L 17 38 L 12 35 L 7 38 L 9 33 L 5 30 L 10 30 Z"
            fill="#FFA500"
            transform={`translate(${(i - 1) * 9}, 0)`}
          />
        ))}
      </g>
    </svg>
  );
}

// Long Distance Icon
function LongDistanceIcon() {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60">
      {/* Background circle */}
      <circle cx="30" cy="30" r="25" fill="#FFE4E6" />
      <circle cx="30" cy="30" r="20" fill="#FFD1DC" />

      {/* Two cute heads on left and right */}
      <circle cx="18" cy="30" r="7" fill="#FFF9E6" />
      <circle cx="42" cy="30" r="7" fill="#FFF9E6" />

      {/* Eyes */}
      <circle cx="16" cy="29" r="1.2" fill="#333" />
      <circle cx="20" cy="29" r="1.2" fill="#333" />
      <circle cx="40" cy="29" r="1.2" fill="#333" />
      <circle cx="44" cy="29" r="1.2" fill="#333" />

      {/* Tiny smiles */}
      <path d="M 16 31 Q 18 33, 20 31" stroke="#333" strokeWidth="0.8" fill="none" strokeLinecap="round" />
      <path d="M 40 31 Q 42 33, 44 31" stroke="#333" strokeWidth="0.8" fill="none" strokeLinecap="round" />

      {/* Connection line with heart in the middle */}
      <path
        d="M 18 22 Q 30 15, 42 22"
        stroke="#FF8FA3"
        strokeWidth="2"
        fill="none"
        strokeDasharray="3,3"
        strokeLinecap="round"
      />
      <path
        d="M 30 20 Q 27 17, 24 20 Q 24 23, 30 27 Q 36 23, 36 20 Q 33 17, 30 20"
        fill="#FF8FA3"
      />

      {/* Tiny location pins under each head */}
      <path d="M 18 38 Q 15 40, 18 44 Q 21 40, 18 38" fill="#FFB6C1" />
      <circle cx="18" cy="40" r="1.2" fill="#FFFFFF" />
      <path d="M 42 38 Q 39 40, 42 44 Q 45 40, 42 38" fill="#FFB6C1" />
      <circle cx="42" cy="40" r="1.2" fill="#FFFFFF" />
    </svg>
  );
}

// Success Icon
function SuccessIcon() {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60">
      {/* Outer circle with gradient effect */}
      <circle cx="30" cy="30" r="25" fill="#FFD1DC" />
      <circle cx="30" cy="30" r="20" fill="#FFB6C1" />
      
      {/* Checkmark */}
      <path
        d="M 18 30 L 26 38 L 42 22"
        stroke="#FFFFFF"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Sparkle stars around */}
      <path
        d="M 10 15 L 11 18 L 14 18 L 11.5 20 L 12.5 23 L 10 21.5 L 7.5 23 L 8.5 20 L 6 18 L 9 18 Z"
        fill="#FFF9E6"
        opacity="0.9"
      />
      <path
        d="M 50 12 L 51 15 L 54 15 L 51.5 17 L 52.5 20 L 50 18.5 L 47.5 20 L 48.5 17 L 46 15 L 49 15 Z"
        fill="#FFF9E6"
        opacity="0.9"
      />
      <path
        d="M 48 40 L 49 43 L 52 43 L 49.5 45 L 50.5 48 L 48 46.5 L 45.5 48 L 46.5 45 L 44 43 L 47 43 Z"
        fill="#FFF9E6"
        opacity="0.9"
      />
      <path
        d="M 12 45 L 13 48 L 16 48 L 13.5 50 L 14.5 53 L 12 51.5 L 9.5 53 L 10.5 50 L 8 48 L 11 48 Z"
        fill="#FFF9E6"
        opacity="0.9"
      />
    </svg>
  );
}