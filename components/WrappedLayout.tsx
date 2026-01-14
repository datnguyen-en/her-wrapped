"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface WrappedLayoutProps {
  children: ReactNode;
  title?: string;
  showPaperclip?: boolean;
}

export default function WrappedLayout({ children, title, showPaperclip = true }: WrappedLayoutProps) {
  return (
    <main className="min-h-screen relative overflow-hidden" style={{
      background: '#FFE4E6',
      backgroundImage: `radial-gradient(circle, white 2px, transparent 2px)`,
      backgroundSize: '50px 50px',
    }}>
      <div className="relative min-h-screen flex items-center justify-center p-4 md:p-8">
        {/* Central Paper Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: -2 }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-4xl bg-[#F5F5DC] rounded-lg p-8 md:p-12"
          style={{ 
            transform: 'rotate(-2deg)',
            boxShadow: '0 10px 30px rgba(255, 182, 193, 0.4), 0 0 0 3px rgba(255, 182, 193, 0.2)'
          }}
        >
          {/* Paperclip */}
          {showPaperclip && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
              <PaperclipIcon />
            </div>
          )}

          {/* Doodle Elements on Paper */}
          <div className="absolute top-4 right-8 opacity-60">
            <svg width="60" height="40" viewBox="0 0 60 40">
              <path d="M 10 20 Q 20 10, 30 20 T 50 20" stroke="#FFD1DC" strokeWidth="2" fill="none" strokeDasharray="3,3" />
              <circle cx="15" cy="15" r="3" fill="#B8E6E6" />
              <circle cx="45" cy="25" r="2" fill="#B8E6E6" />
            </svg>
          </div>

          {title && (
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-center" style={{
              fontFamily: 'var(--font-nunito), Arial, sans-serif',
              color: '#FFB6C1',
              WebkitTextStroke: '4px #FF8FA3',
              textShadow: '3px 3px 0px rgba(255, 143, 163, 0.2)',
              letterSpacing: '0.05em',
              lineHeight: '1.1',
              fontWeight: '900'
            }}>
              {title}
            </h1>
          )}

          {children}

          {/* Decorative Animals */}
          <DecorativeAnimals />
        </motion.div>
      </div>
    </main>
  );
}

// Paperclip Icon
function PaperclipIcon() {
  return (
    <svg width="24" height="40" viewBox="0 0 24 40" fill="none">
      <path
        d="M 12 2 C 8 2, 4 6, 4 10 L 4 28 C 4 32, 8 36, 12 36 C 16 36, 20 32, 20 28 L 20 10 C 20 8, 18 6, 16 6 C 14 6, 12 8, 12 10 L 12 28 C 12 30, 14 32, 16 32 C 18 32, 20 30, 20 28 L 20 10"
        stroke="#C0C0C0"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Decorative Animals Component
function DecorativeAnimals() {
  return (
    <>
      {/* Small animals around the paper */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="absolute -top-8 -left-8 z-20"
      >
        <SmallCatIcon color="#D4F1F4" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="absolute -bottom-8 -right-8 z-20"
      >
        <SmallBunnyIcon />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="absolute top-1/4 -right-12 z-20"
      >
        <SmallDogIcon />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="absolute bottom-1/4 -left-12 z-20"
      >
        <SmallBearIcon />
      </motion.div>

      {/* Hearts */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="absolute top-8 right-8 z-10"
      >
        <HeartIcon className="w-5 h-5" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute bottom-8 left-8 z-10"
      >
        <HeartIcon className="w-4 h-4" />
      </motion.div>

      {/* Stars */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="absolute top-1/3 -left-6 z-10"
      >
        <StarIcon color="#FFD1DC" />
      </motion.div>

      {/* Additional cute animals */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.0, duration: 0.5 }}
        className="absolute top-1/2 -right-10 z-20"
      >
        <SmallPandaIcon />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        className="absolute bottom-1/3 -left-10 z-20"
      >
        <SmallRabbitIcon />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute top-1/4 -left-8 z-10"
      >
        <SmallDuckIcon />
      </motion.div>
    </>
  );
}

// Small Animal Icons
function SmallCatIcon({ color }: { color: string }) {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60">
      <circle cx="30" cy="25" r="15" fill={color} />
      <path d="M 25 15 L 22 5 L 28 12 Z" fill={color} />
      <path d="M 35 15 L 38 5 L 32 12 Z" fill={color} />
      <circle cx="27" cy="23" r="2" fill="#333" />
      <circle cx="33" cy="23" r="2" fill="#333" />
      <path d="M 30 28 L 28 31 L 32 31 Z" fill="#FFD1DC" />
    </svg>
  );
}

function SmallBunnyIcon() {
  return (
    <svg width="50" height="60" viewBox="0 0 50 60">
      <ellipse cx="25" cy="35" rx="12" ry="15" fill="#FFD1DC" />
      <circle cx="25" cy="25" r="12" fill="#FFD1DC" />
      <ellipse cx="20" cy="15" rx="4" ry="10" fill="#FFD1DC" />
      <ellipse cx="30" cy="15" rx="4" ry="10" fill="#FFD1DC" />
      <circle cx="23" cy="23" r="1.5" fill="#333" />
      <circle cx="27" cy="23" r="1.5" fill="#333" />
      <ellipse cx="25" cy="27" rx="2" ry="1.5" fill="#333" />
    </svg>
  );
}

function SmallDogIcon() {
  return (
    <svg width="50" height="50" viewBox="0 0 50 50">
      <circle cx="25" cy="20" r="12" fill="#D2B48C" />
      <circle cx="22" cy="18" r="2" fill="#333" />
      <circle cx="28" cy="18" r="2" fill="#333" />
      <circle cx="25" cy="22" r="1.5" fill="#333" />
      <circle cx="20" cy="22" r="3" fill="#FFB6C1" opacity="0.6" />
      <circle cx="30" cy="22" r="3" fill="#FFB6C1" opacity="0.6" />
    </svg>
  );
}

function SmallBearIcon() {
  return (
    <svg width="50" height="50" viewBox="0 0 50 50">
      <circle cx="25" cy="25" r="15" fill="#8B4513" />
      <circle cx="18" cy="20" r="5" fill="#8B4513" />
      <circle cx="32" cy="20" r="5" fill="#8B4513" />
      <circle cx="20" cy="23" r="1.5" fill="#333" />
      <circle cx="30" cy="23" r="1.5" fill="#333" />
      <ellipse cx="25" cy="28" rx="2" ry="1.5" fill="#333" />
    </svg>
  );
}

function StarIcon({ color }: { color: string }) {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30">
      <path
        d="M 15 2 L 18 10 L 28 10 L 20 16 L 23 26 L 15 20 L 7 26 L 10 16 L 2 10 L 12 10 Z"
        fill={color}
        opacity="0.8"
      />
    </svg>
  );
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#FFD1DC">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

function SmallPandaIcon() {
  return (
    <svg width="50" height="50" viewBox="0 0 50 50">
      <circle cx="25" cy="25" r="18" fill="#FFFFFF" />
      <circle cx="20" cy="20" r="6" fill="#333" />
      <circle cx="30" cy="20" r="6" fill="#333" />
      <ellipse cx="25" cy="28" rx="4" ry="3" fill="#333" />
      <ellipse cx="18" cy="15" rx="3" ry="4" fill="#333" />
      <ellipse cx="32" cy="15" rx="3" ry="4" fill="#333" />
      <circle cx="22" cy="22" r="1.5" fill="#FFFFFF" />
      <circle cx="28" cy="22" r="1.5" fill="#FFFFFF" />
    </svg>
  );
}

function SmallRabbitIcon() {
  return (
    <svg width="45" height="55" viewBox="0 0 45 55">
      <ellipse cx="22" cy="35" rx="10" ry="12" fill="#FFD1DC" />
      <circle cx="22" cy="25" r="10" fill="#FFD1DC" />
      <ellipse cx="18" cy="15" rx="3" ry="8" fill="#FFD1DC" />
      <ellipse cx="26" cy="15" rx="3" ry="8" fill="#FFD1DC" />
      <circle cx="20" cy="23" r="1.5" fill="#333" />
      <circle cx="24" cy="23" r="1.5" fill="#333" />
      <ellipse cx="22" cy="27" rx="2" ry="1.5" fill="#333" />
      <circle cx="19" cy="25" r="2" fill="#FFB6C1" opacity="0.6" />
      <circle cx="25" cy="25" r="2" fill="#FFB6C1" opacity="0.6" />
    </svg>
  );
}

function SmallDuckIcon() {
  return (
    <svg width="50" height="50" viewBox="0 0 50 50">
      <ellipse cx="25" cy="30" rx="12" ry="10" fill="#FFF9E6" />
      <circle cx="30" cy="25" r="10" fill="#FFF9E6" />
      <ellipse cx="35" cy="22" rx="6" ry="8" fill="#FFA500" />
      <circle cx="33" cy="20" r="2" fill="#333" />
      <ellipse cx="38" cy="22" rx="2" ry="3" fill="#FF6347" />
      <ellipse cx="20" cy="32" rx="3" ry="5" fill="#FFA500" />
      <ellipse cx="30" cy="32" rx="3" ry="5" fill="#FFA500" />
    </svg>
  );
}

