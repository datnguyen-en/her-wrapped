"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import WrappedLayout from "@/components/WrappedLayout";

export default function FavoritePage() {
  return (
    <WrappedLayout>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-8 py-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mb-6"
        >
          <HeartIcon />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-5xl font-bold mb-6"
          style={{ color: '#FF8FA3' }}
        >
          My Favorite Part
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-2xl md:text-3xl text-gray-700 leading-relaxed max-w-2xl mx-auto px-4"
          style={{ fontFamily: 'Arial, sans-serif' }}
        >
          Out of everything this year gave me,
          <br />
          <span className="font-bold" style={{ color: '#FF8FA3' }}>
            loving you was my favorite.
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center gap-4 mt-8"
        >
          <SmallHeartIcon />
          <SmallHeartIcon />
          <SmallHeartIcon />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="mt-12"
        >
          <Link
            href="/wrapped/birthday"
            className="inline-block bg-[#FFB6C1] text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform text-lg shadow-lg"
          >
            Continue →
          </Link>
        </motion.div>
      </motion.div>
    </WrappedLayout>
  );
}

function HeartIcon() {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120">
      <circle cx="60" cy="60" r="55" fill="#FFE4E6" />
      <path
        d="M 60 30 Q 40 20, 30 35 Q 30 50, 60 80 Q 90 50, 90 35 Q 80 20, 60 30"
        fill="#FF8FA3"
      />
      <path
        d="M 60 40 Q 50 35, 45 42 Q 50 50, 60 65 Q 70 50, 75 42 Q 70 35, 60 40"
        fill="#FFB6C1"
      />
      <circle cx="55" cy="50" r="3" fill="#FFFFFF" opacity="0.8" />
      <circle cx="65" cy="50" r="3" fill="#FFFFFF" opacity="0.8" />
    </svg>
  );
}

function SmallHeartIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40">
      <path
        d="M 20 10 Q 13 7, 10 12 Q 10 17, 20 27 Q 30 17, 30 12 Q 27 7, 20 10"
        fill="#FFD1DC"
      />
    </svg>
  );
}

