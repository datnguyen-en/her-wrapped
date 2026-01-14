"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Toggle music play/pause
  const toggleMusic = async () => {
    if (audioRef.current) {
      try {
        if (isPlaying) {
          audioRef.current.pause();
          setIsPlaying(false);
        } else {
          audioRef.current.volume = 0.7;
          await audioRef.current.play();
          setIsPlaying(true);
          // Store in sessionStorage that user has interacted, so subsequent pages can autoplay
          if (typeof window !== 'undefined') {
            sessionStorage.setItem('audioEnabled', 'true');
          }
        }
      } catch (error) {
        console.log("Audio toggle failed:", error);
      }
    }
  };

  // Try to start audio when user interacts with the page (for compatibility)
  const startAudio = async () => {
    if (audioRef.current && !isPlaying) {
      await toggleMusic();
    }
  };

  // Try auto-play on mount (may be blocked by browser)
  useEffect(() => {
    // Check if user has already interacted (from previous page)
    const audioEnabled = typeof window !== 'undefined' && sessionStorage.getItem('audioEnabled') === 'true';
    
    if (audioRef.current) {
      audioRef.current.volume = 0.7; // Set volume to 70%
      
      if (audioEnabled) {
        // If user has interacted before, try autoplay
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
            console.log("Background music auto-started (user previously interacted)");
          })
          .catch((error) => {
            console.log("Auto-play prevented. Audio will start on button click.");
          });
      } else {
        console.log("Waiting for user interaction to start audio...");
      }

      // Update playing state when audio plays/pauses
      audioRef.current.addEventListener('play', () => setIsPlaying(true));
      audioRef.current.addEventListener('pause', () => setIsPlaying(false));
    }
  }, []);

  return (
    <main 
      className="min-h-screen relative overflow-hidden" 
      onClick={startAudio}
      style={{
        background: '#FFE4E6',
        backgroundImage: `radial-gradient(circle, white 2px, transparent 2px)`,
        backgroundSize: '50px 50px',
      }}
    >
      {/* Hidden audio element for background music */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        onError={(e) => {
          console.error("Audio file not found. Please add /public/audio/main-background.mp3");
          console.error("Audio error:", e);
        }}
        onLoadedData={() => {
          console.log("Audio file loaded successfully");
          if (audioRef.current) {
            audioRef.current.volume = 0.7; // Set volume when loaded
          }
        }}
      >
        <source src="/audio/main-background.mp3" type="audio/mpeg" />
        <source src="/audio/main-background.ogg" type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>

      {/* Music Toggle Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        onClick={toggleMusic}
        className="fixed top-6 right-6 z-50 w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm shadow-lg border-2 border-[#FFD1DC] flex items-center justify-center hover:scale-110 transition-transform hover:shadow-xl"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? <PauseMusicIcon /> : <PlayMusicIcon />}
      </motion.button>

      <div className="relative min-h-screen flex items-center justify-center p-8">
        {/* Central Paper Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: -2 }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-2xl bg-[#F5F5DC] rounded-lg p-12"
          style={{ 
            transform: 'rotate(-2deg)',
            boxShadow: '0 10px 30px rgba(44, 12, 16, 0.4), 0 0 0 3px rgba(255, 182, 193, 0.2)'
          }}
        >
          {/* Paperclip */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
            <PaperclipIcon />
          </div>

          {/* Doodle Elements on Paper */}
          <div className="absolute top-4 right-8">
            <svg width="60" height="40" viewBox="0 0 60 40">
              <path d="M 10 20 Q 20 10, 30 20 T 50 20" stroke="#FFD1DC" strokeWidth="2" fill="none" strokeDasharray="3,3" />
              <circle cx="15" cy="15" r="3" fill="#B8E6E6" />
              <circle cx="45" cy="25" r="2" fill="#B8E6E6" />
            </svg>
          </div>

          <div className="absolute top-2 right-4">
            <svg width="40" height="30" viewBox="0 0 40 30">
              <path d="M 5 15 Q 15 5, 25 15 T 35 15" stroke="#B8E6E6" strokeWidth="2" fill="none" />
            </svg>
          </div>

          {/* Main Content */}
          <div className="relative z-10 text-center mt-8">
            <h1 className="text-7xl font-bold mb-6" style={{
              fontFamily: 'var(--font-nunito), Arial, sans-serif',
              color: '#FFB6C1',
              WebkitTextStroke: '4px #FF8FA3',
              textShadow: '3px 3px 0px rgba(255, 143, 163, 0.2)',
              letterSpacing: '0.05em',
              lineHeight: '1.1',
              fontWeight: '900'
            }}>
              MANK'S WRAPPED
            </h1>
            
            <div className="mt-8 space-y-3">
              <p className="text-xl md:text-2xl uppercase tracking-widest font-black" style={{
                fontFamily: 'var(--font-nunito), Arial, sans-serif',
                color: '#87CEEB',
                WebkitTextStroke: '2px #5F9EA0',
                textShadow: '2px 2px 4px rgba(95, 158, 160, 0.3)',
                letterSpacing: '0.1em'
              }}>
                2025
              </p>
              <p className="text-3xl md:text-4xl uppercase tracking-wider font-black" style={{
                fontFamily: 'var(--font-nunito), Arial, sans-serif',
                color: '#87CEEB',
                WebkitTextStroke: '3px #5F9EA0',
                textShadow: '3px 3px 6px rgba(95, 158, 160, 0.4)',
                letterSpacing: '0.08em'
              }}>
                LET's START
              </p>
            </div>

            {/* Start Button */}
            <div className="mt-12">
              <Link
                href="/wrapped"
                onClick={startAudio}
                className="inline-block bg-[#FFB6C1] text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform text-lg shadow-lg"
              >
                Start Your Wrapped
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Decorative Elements Around Paper */}
        
        {/* Dog on Left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="absolute left-8 bottom-1/4 z-20"
        >
          <DogIcon />
        </motion.div>

        {/* Bear on Bottom Right */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="absolute right-12 bottom-1/4 z-20"
        >
          <BearIcon />
        </motion.div>

        {/* Ice Cream Cone with Bunny on Right */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="absolute right-8 top-1/3 z-20"
        >
          <IceCreamIcon />
        </motion.div>

        {/* Bowling Pin on Bottom Left */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="absolute left-12 bottom-1/3 z-20"
        >
          <BowlingPinIcon />
        </motion.div>

        {/* Stars */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="absolute top-20 right-20 z-10"
        >
          <StarIcon color="#FFA500" outlineColor="#32CD32" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="absolute bottom-32 left-24 z-10"
        >
          <StarIcon color="#B8E6E6" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="absolute top-1/4 left-16 z-10"
        >
          <StarIcon color="#FFD1DC" />
        </motion.div>

        {/* Hearts */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.0, duration: 0.5 }}
          className="absolute top-16 right-32 z-10"
        >
          <HeartIcon className="w-6 h-6" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="absolute bottom-24 right-24 z-10"
        >
          <HeartIcon className="w-5 h-5" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute top-1/3 left-24 z-10"
        >
          <HeartIcon className="w-4 h-4" />
        </motion.div>

        {/* Cloud with Dog on Top Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="absolute top-12 right-16 z-10"
        >
          <CloudWithDogIcon />
        </motion.div>

        {/* Squiggly Line Top Right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="absolute top-20 right-12 z-10"
        >
          <svg width="50" height="30" viewBox="0 0 50 30">
            <path d="M 5 15 Q 15 5, 25 15 T 45 15" stroke="#FFD1DC" strokeWidth="2.5" fill="none" />
          </svg>
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

// Dog Icon (Fluffy, peeking from left)
function DogIcon() {
  return (
    <div className="relative">
      <svg width="120" height="120" viewBox="0 0 120 120">
        {/* Body (partially hidden) */}
        <ellipse cx="80" cy="80" rx="35" ry="30" fill="#D2B48C" />
        {/* Head */}
        <circle cx="70" cy="50" r="30" fill="#D2B48C" />
        {/* Fluffy fur texture */}
        <circle cx="60" cy="45" r="8" fill="#E6D5B8" opacity="0.6" />
        <circle cx="80" cy="45" r="8" fill="#E6D5B8" opacity="0.6" />
        <circle cx="70" cy="55" r="8" fill="#E6D5B8" opacity="0.6" />
        {/* Eyes */}
        <circle cx="65" cy="48" r="4" fill="#333" />
        <circle cx="75" cy="48" r="4" fill="#333" />
        {/* Nose */}
        <circle cx="70" cy="55" r="3" fill="#333" />
        {/* Cheeks */}
        <circle cx="55" cy="58" r="6" fill="#FFB6C1" opacity="0.8" />
        <circle cx="85" cy="58" r="6" fill="#FFB6C1" opacity="0.8" />
        {/* Paws */}
        <ellipse cx="50" cy="85" rx="8" ry="12" fill="#D2B48C" />
        <ellipse cx="65" cy="90" rx="8" ry="12" fill="#D2B48C" />
      </svg>
    </div>
  );
}

// Bear Icon (peeking from bottom right)
function BearIcon() {
  return (
    <div className="relative">
      <svg width="80" height="80" viewBox="0 0 80 80">
        {/* Head */}
        <circle cx="40" cy="40" r="25" fill="#8B4513" />
        {/* Ears */}
        <circle cx="25" cy="25" r="10" fill="#8B4513" />
        <circle cx="55" cy="25" r="10" fill="#8B4513" />
        <circle cx="25" cy="25" r="6" fill="#A0522D" />
        <circle cx="55" cy="25" r="6" fill="#A0522D" />
        {/* Eyes */}
        <circle cx="35" cy="38" r="3" fill="#333" />
        <circle cx="45" cy="38" r="3" fill="#333" />
        {/* Nose */}
        <ellipse cx="40" cy="45" rx="4" ry="3" fill="#333" />
        {/* Mouth */}
        <path d="M 40 48 Q 36 52, 35 50" stroke="#333" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M 40 48 Q 44 52, 45 50" stroke="#333" strokeWidth="2" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  );
}

// Ice Cream Cone with Bunny
function IceCreamIcon() {
  return (
    <div className="relative">
      <svg width="100" height="140" viewBox="0 0 100 140">
        {/* Cone */}
        <path d="M 50 140 L 20 80 L 80 80 Z" fill="#87CEEB" />
        <path d="M 50 140 L 30 85 L 70 85 Z" fill="#B0E0E6" />
        {/* Waffle pattern */}
        <line x1="35" y1="95" x2="65" y2="95" stroke="#5F9EA0" strokeWidth="1" />
        <line x1="40" y1="100" x2="60" y2="100" stroke="#5F9EA0" strokeWidth="1" />
        <line x1="35" y1="105" x2="65" y2="105" stroke="#5F9EA0" strokeWidth="1" />
        {/* Ice cream scoop */}
        <circle cx="50" cy="70" r="25" fill="#FFFFFF" />
        {/* Bunny peeking */}
        <circle cx="50" cy="65" r="12" fill="#FFD1DC" />
        <ellipse cx="45" cy="60" rx="4" ry="8" fill="#FFD1DC" />
        <ellipse cx="55" cy="60" rx="4" ry="8" fill="#FFD1DC" />
        <circle cx="48" cy="65" r="2" fill="#333" />
        <circle cx="52" cy="65" r="2" fill="#333" />
        <ellipse cx="50" cy="68" rx="3" ry="2" fill="#333" />
        {/* Cherry */}
        <circle cx="50" cy="45" r="8" fill="#DC143C" />
        <path d="M 50 37 L 48 30 L 52 30 Z" fill="#228B22" />
      </svg>
    </div>
  );
}

// Bowling Pin Icon
function BowlingPinIcon() {
  return (
    <div className="relative">
      <svg width="60" height="100" viewBox="0 0 60 100">
        {/* Pin body */}
        <ellipse cx="30" cy="75" rx="20" ry="20" fill="#FFFFFF" />
        <ellipse cx="30" cy="50" rx="18" ry="25" fill="#FFFFFF" />
        <ellipse cx="30" cy="25" rx="12" ry="20" fill="#FFFFFF" />
        {/* Red stripe */}
        <ellipse cx="30" cy="50" rx="15" ry="8" fill="#DC143C" />
        {/* Face */}
        <circle cx="25" cy="20" r="2" fill="#333" />
        <circle cx="35" cy="20" r="2" fill="#333" />
        <path d="M 30 25 Q 28 28, 26 27" stroke="#333" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  );
}

// Star Icon
function StarIcon({ color, outlineColor }: { color: string; outlineColor?: string }) {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40">
      <path
        d="M 20 2 L 24 14 L 38 14 L 27 22 L 31 34 L 20 26 L 9 34 L 13 22 L 2 14 L 16 14 Z"
        fill={color}
        stroke={outlineColor || color}
        strokeWidth="1.5"
        opacity="0.8"
      />
      {/* Sparkle effect */}
      <circle cx="20" cy="20" r="2" fill="#FFFFFF" opacity="0.9" />
    </svg>
  );
}

// Heart Icon
function HeartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#FFD1DC">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

// Play Music Icon
function PlayMusicIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#FFB6C1" />
      <path
        d="M9 8 L9 16 L17 12 Z"
        fill="white"
      />
      <circle cx="9" cy="8" r="2" fill="white" />
      <circle cx="9" cy="16" r="2" fill="white" />
    </svg>
  );
}

// Pause Music Icon
function PauseMusicIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#FF8FA3" />
      <rect x="8" y="7" width="3" height="10" rx="1" fill="white" />
      <rect x="13" y="7" width="3" height="10" rx="1" fill="white" />
      <circle cx="9" cy="7" r="2" fill="white" />
      <circle cx="15" cy="7" r="2" fill="white" />
      <circle cx="9" cy="17" r="2" fill="white" />
      <circle cx="15" cy="17" r="2" fill="white" />
    </svg>
  );
}

// Cloud with Dog Icon
function CloudWithDogIcon() {
  return (
    <div className="relative">
      <svg width="100" height="80" viewBox="0 0 100 80">
        {/* Cloud */}
        <ellipse cx="50" cy="50" rx="35" ry="20" fill="#B8E6E6" />
        <ellipse cx="35" cy="45" rx="15" ry="15" fill="#B8E6E6" />
        <ellipse cx="65" cy="45" rx="15" ry="15" fill="#B8E6E6" />
        <ellipse cx="50" cy="40" rx="20" ry="15" fill="#B8E6E6" />
        {/* Dog head in cloud */}
        <circle cx="50" cy="45" r="12" fill="#D2B48C" />
        <circle cx="47" cy="43" r="2" fill="#333" />
        <circle cx="53" cy="43" r="2" fill="#333" />
        <ellipse cx="50" cy="47" rx="2" ry="1.5" fill="#333" />
        {/* Bow */}
        <path d="M 50 38 L 48 35 L 50 36 L 52 35 Z" fill="#FFD1DC" />
        <circle cx="50" cy="36" r="2" fill="#FFD1DC" />
      </svg>
    </div>
  );
}
