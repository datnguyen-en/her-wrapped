"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import WrappedLayout from "@/components/WrappedLayout";

export default function BirthdayPage() {
  const bubbles = Array.from({ length: 28 }).map((_, i) => ({
    size: 14 + (i % 8) * 4,
    left: (i * 3.4 + 5) % 100,
    delay: i * 0.18,
    duration: 2 + (i % 5) * 0.25,
  }));

  return (
    <WrappedLayout>
      {/* Full-screen floating bubbles */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
        {bubbles.map((bubble, idx) => (
          <Bubble
            key={idx}
            x={bubble.left}
            size={bubble.size}
            delay={bubble.delay}
            duration={bubble.duration}
          />
        ))}
      </div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8 py-8"
        >
        {/* Birthday Photo Bubble (your image goes here) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mb-6"
        >
          <BirthdayPhotoBubble />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-6xl font-bold mb-6"
          style={{ 
            color: '#FF8FA3',
            fontFamily: 'Arial, sans-serif',
            WebkitTextStroke: '3px #FF8FA3',
            textShadow: '2px 2px 0px rgba(255, 143, 163, 0.2)'
          }}
        >
          Happy Birthday
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-2xl md:text-3xl text-gray-700 leading-relaxed max-w-2xl mx-auto px-4"
          style={{ fontFamily: 'Arial, sans-serif' }}
        >
          I hope this year I get to
          <br />
          <span className="font-bold text-3xl md:text-4xl" style={{ color: '#FF8FA3' }}>
            love you even better.
          </span>
        </motion.p>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
          className="flex justify-center gap-6 mt-8 flex-wrap"
        >
          <HeartIcon />
          <StarIcon />
          <HeartIcon />
          <StarIcon />
          <HeartIcon />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="text-xl text-gray-600 mt-12"
          style={{ fontFamily: 'Arial, sans-serif' }}
        >
          💕 🎂 💕
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-8"
        >
          <Link
            href="/wrapped/letter"
            className="inline-block bg-[#FFB6C1] text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform text-lg shadow-lg"
          >
            Continue →
          </Link>
        </motion.div>
        </motion.div>
      </div>
    </WrappedLayout>
  );
}

// Circular bubble frame that shows your image (top large photo).
// Put your top image file at: /public/images/birthday-top.JPG
function BirthdayPhotoBubble() {
  return (
    <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto">
      <div className="w-full h-full rounded-full bg-white shadow-xl border-4 border-[#FFD1DC] overflow-hidden flex items-center justify-center">
        <img
          src="/images/birthday-top.JPG"
          alt="Your favorite picture together"
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback: if top image missing, keep showing the bottom-bubble image
            (e.target as HTMLImageElement).src = "/images/birthday-photo.jpg";
          }}
        />
      </div>
      {/* Small decorative hearts around the bubble */}
      <div className="absolute -top-2 -left-2">
        <HeartIcon />
      </div>
      <div className="absolute -bottom-2 -right-2">
        <HeartIcon />
      </div>
    </div>
  );
}

// (Unused now, but kept in case you want the cake again later)
function BirthdayCakeIcon() {
  return (
    <svg width="150" height="150" viewBox="0 0 150 150">
      {/* Cake base */}
      <rect x="40" y="100" width="70" height="30" rx="5" fill="#FFD1DC" />
      <rect x="45" y="95" width="60" height="35" rx="5" fill="#FFB6C1" />
      
      {/* Cake layers */}
      <rect x="50" y="70" width="50" height="25" rx="3" fill="#FFF9E6" />
      <rect x="55" y="50" width="40" height="20" rx="3" fill="#FFE4E6" />
      
      {/* Candles */}
      <rect x="65" y="30" width="4" height="20" fill="#87CEEB" />
      <rect x="75" y="30" width="4" height="20" fill="#FFD1DC" />
      <rect x="85" y="30" width="4" height="20" fill="#B8E6E6" />
      
      {/* Flames */}
      <ellipse cx="67" cy="28" rx="2" ry="4" fill="#FFA500" />
      <ellipse cx="77" cy="28" rx="2" ry="4" fill="#FF6347" />
      <ellipse cx="87" cy="28" rx="2" ry="4" fill="#FFA500" />
      
      {/* Decorations */}
      <circle cx="60" cy="80" r="3" fill="#FF8FA3" />
      <circle cx="90" cy="80" r="3" fill="#FF8FA3" />
      <circle cx="75" cy="85" r="3" fill="#FF8FA3" />
    </svg>
  );
}

function Bubble({
  x,
  size,
  delay,
  duration,
}: {
  x: number;
  size: number;
  delay: number;
  duration: number;
}) {
  return (
    <motion.div
      className="absolute rounded-full border border-white/70 shadow-lg overflow-hidden"
      style={{
        width: size,
        height: size,
        left: `${x}%`,
        bottom: -size,
        boxShadow: "0 0 12px rgba(255,182,193,0.45)",
        backgroundImage: 'url("/images/birthday-photo.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      initial={{ scale: 0, opacity: 0, y: 0 }}
      animate={{ scale: 1.05, opacity: 0.95, y: -220 }}
      exit={{ scale: 1.5, opacity: 0 }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatDelay: 0.4,
        ease: "easeOut",
      }}
    />
  );
}

function HeartIcon() {
  return (
    <svg width="50" height="50" viewBox="0 0 50 50">
      <path
        d="M 25 12 Q 15 8, 12 18 Q 12 25, 25 38 Q 38 25, 38 18 Q 35 8, 25 12"
        fill="#FFD1DC"
      />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="50" height="50" viewBox="0 0 50 50">
      <path
        d="M 25 2 L 29 15 L 43 15 L 32 23 L 36 38 L 25 30 L 14 38 L 18 23 L 7 15 L 21 15 Z"
        fill="#FFF9E6"
        stroke="#FFA500"
        strokeWidth="1"
      />
    </svg>
  );
}

