"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import WrappedLayout from "@/components/WrappedLayout";

interface SongCardProps {
  rank: number;
  title: string;
  artist: string;
  coverImage?: string;
  delay?: number;
  isTop?: boolean;
}

function SongCard({ rank, title, artist, coverImage, delay = 0, isTop = false }: SongCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      className={`bg-white rounded-2xl p-6 shadow-lg border-2 ${
        isTop ? "border-[#FF8FA3] border-4" : "border-[#FFD1DC]"
      } hover:scale-105 transition-transform`}
    >
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0">
          {coverImage ? (
            <img
              src={coverImage}
              alt={`${title} by ${artist}`}
              className="w-20 h-20 rounded-xl object-cover"
              onError={(e) => {
                // If image fails to load, show placeholder
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = `
                    <div class="w-20 h-20 rounded-xl bg-gradient-to-br from-[#FFD1DC] to-[#FFB6C1] flex items-center justify-center">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <circle cx="20" cy="20" r="18" fill="#FF8FA3" />
                        <path d="M 15 12 L 15 28 M 15 12 L 25 10 L 25 26 M 25 10 L 15 12" stroke="white" stroke-width="2.5" fill="none" stroke-linecap="round" />
                        <circle cx="15" cy="12" r="3" fill="white" />
                        <circle cx="25" cy="10" r="3" fill="white" />
                      </svg>
                    </div>
                  `;
                }
              }}
            />
          ) : (
            <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-[#FFD1DC] to-[#FFB6C1] flex items-center justify-center">
              <MusicIcon />
            </div>
          )}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-2xl font-bold" style={{ color: '#FF8FA3' }}>
              #{rank}
            </span>
            {isTop && <CrownIcon />}
          </div>
          <h3 className="text-xl font-bold mb-1" style={{ color: '#FF8FA3' }}>
            {title}
          </h3>
          <p className="text-gray-600">{artist}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function MusicPage() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Auto-play background music when page loads
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.log("Auto-play prevented by browser. User interaction required.");
      });
    }
  }, []);

  const songs = [
    {
      rank: 1,
      title: "Whiplash",
      artist: "Aespa",
      isTop: true,
      imagePath: "/images/whiplash-aespa.jpg", // Add image to /public/images/whiplash-aespa.jpg
    },
    {
      rank: 2,
      title: "Hero",
      artist: "Starfall",
      isTop: false,
      imagePath: "/images/starfall-hero.jpg",
    },
  ];

  return (
    <WrappedLayout title="YOUR MUSIC WRAPPED">
      {/* Hidden audio element for background music */}
      <audio
        ref={audioRef}
        loop
        onError={() => {
          console.log("Audio file not found. Please add /public/audio/whiplash-aespa.mp3");
        }}
      >
        <source src="/audio/whiplash-aespa.mp3" type="audio/mpeg" />
        <source src="/audio/whiplash-aespa.ogg" type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>

      <div className="space-y-8">
        {/* Top Songs */}
        <div className="space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl font-bold text-center mb-6"
            style={{ color: '#FF8FA3' }}
          >
            Your Top Songs
          </motion.h2>

          {songs.map((song, index) => (
            <SongCard
              key={song.rank}
              rank={song.rank}
              title={song.title}
              artist={song.artist}
              coverImage={song.imagePath}
              delay={0.4 + index * 0.1}
              isTop={song.isTop}
            />
          ))}
        </div>

        {/* Aespa Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-2xl p-6 shadow-lg border-2 border-[#FFD1DC] text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-3xl font-bold text-center mb-6"
            style={{ color: '#FF8FA3' }}
          >
            Our #1 Playlists of the Year
          </motion.h2>
          <div className="relative w-full max-w-md mx-auto">
            <div className="aspect-square rounded-xl bg-gradient-to-br from-[#FFD1DC] via-[#FFB6C1] to-[#FF8FA3] flex items-center justify-center overflow-hidden relative">
              {/* Try to load the actual image first */}
              {!imageError && (
                <img
                  src="/images/emxinh.jpg"
                  alt="Whiplash by Aespa"
                  className="absolute inset-0 w-full h-full object-cover z-20"
                  onLoad={() => setImageLoaded(true)}
                  onError={() => {
                    setImageError(true);
                    setImageLoaded(false);
                  }}
                />
              )}
              {/* Placeholder - shown only if image doesn't exist or fails to load */}
              {imageError && (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 relative z-10 bg-gradient-to-br from-[#FFD1DC] via-[#FFB6C1] to-[#FF8FA3]">
                  <MusicNoteIcon />
                  <p className="text-white font-bold text-2xl mt-4" style={{ fontFamily: 'var(--font-nunito), Arial, sans-serif' }}>
                    Whiplash
                  </p>
                  <p className="text-white/90 text-xl mt-2" style={{ fontFamily: 'var(--font-nunito), Arial, sans-serif' }}>
                    Aespa
                  </p>
                  <p className="text-white/70 text-xs mt-6 px-4 text-center">
                    Add image to: /public/images/emxinh.jpg
                  </p>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-8"
        >
          <Link
            href="/wrapped/moments"
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
function MusicIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="18" fill="#FF8FA3" />
      <path
        d="M 15 12 L 15 28 M 15 12 L 25 10 L 25 26 M 25 10 L 15 12"
        stroke="white"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="15" cy="12" r="3" fill="white" />
      <circle cx="25" cy="10" r="3" fill="white" />
    </svg>
  );
}

function MusicNoteIcon() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
      <path
        d="M 30 20 L 30 50 M 30 20 L 50 15 L 50 45 M 50 15 L 30 20"
        stroke="white"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="30" cy="20" r="6" fill="white" />
      <circle cx="50" cy="15" r="6" fill="white" />
      <circle cx="30" cy="50" r="8" fill="white" opacity="0.8" />
      <circle cx="50" cy="45" r="8" fill="white" opacity="0.8" />
    </svg>
  );
}

function CrownIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#FFA500">
      <path d="M5 16L3 10l5.07 1.34L12 7l3.93 4.34L21 10l-2 6H5zm14.55-4L17 14H7l-2.55-2L7.5 10h9l3.05 2z" />
      <path d="M12 4l-1.5 3L7 4l1.5 3L12 4zm0 0l1.5 3L17 4l-1.5 3L12 4z" />
    </svg>
  );
}

