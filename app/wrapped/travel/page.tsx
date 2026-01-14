"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import WrappedLayout from "@/components/WrappedLayout";

interface TravelMemory {
  place: string;
  caption: string;
  image?: string; // path in /public, e.g. /images/travel-saigon-2025.jpg
  note?: string;
}

const travelMemories: TravelMemory[] = [
  {
    place: "First Trip of 2025",
    caption: "First trip to Saigon in 2025",
    image: "/images/travel-saigon-2025.JPG",
  },
  {
    place: "Ga Ba Son",
    caption: "First time book a photographer",
    image: "/images/travel-ga-ba-son.JPG",
  },
  {
    place: "600 days together",
    caption: "Nth-time photobooth and chopper!!! (Is dead now :<)",
    image: "/images/travel-quiet-escape.jpg",
  },
  {
    place: "Boston",
    caption: "Pick up Manku, chơi vui quá trời!!! hehehee",
    image: "/images/travel-boston.JPG",
  },
  {
    place: "NYC",
    caption: "Tho this place is dangerous as hell, but we really enjoy it here!!!",
    image: "/images/travel-nyc.jpg",
  },
  {
    place: "UMass Amherst",
    caption: "Luc nay an bun cha nha 52 hehe :D",
    image: "/images/travel-umass-amherst.jpg",
  },
];

export default function TravelPage() {
  return (
    <WrappedLayout title="PLACES WE WENT IN 2025">
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-lg text-gray-700 leading-relaxed">
            A little gallery of the places we shared in 2025. Each spot on this
            page is a reminder that the world always feels softer and more
            beautiful when I&apos;m standing next to you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {travelMemories.map((memory, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-[#FFD1DC]/80"
            >
              {/* Trip photo */}
              {memory.image ? (
                <img
                  src={memory.image}
                  alt={memory.place}
                  className="h-48 w-full object-cover"
                />
              ) : (
                <div
                  className="h-48 w-full bg-gradient-to-br from-[#FFE4E6] via-[#FFD1DC] to-[#B8E6E6] 
                  flex items-center justify-center relative"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(255,255,255,0.6)_0,transparent_40%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.7)_0,transparent_45%)]" />
                  <div className="relative text-center px-4">
                    <p className="text-sm font-semibold tracking-wide text-[#FF8FA3] uppercase">
                      Your Photo Here
                    </p>
                    <p className="text-xs text-gray-600 mt-1">
                      Add an image file for this trip in /public/images and set the path in the code.
                    </p>
                  </div>
                </div>
              )}

              <div className="p-5 space-y-2">
                <h3
                  className="text-xl font-bold"
                  style={{ color: "#FF8FA3" }}
                >
                  {memory.place}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {memory.caption}
                </p>
                {memory.note && (
                  <p className="text-xs text-gray-500 italic">{memory.note}</p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-4"
        >
          <Link
            href="/wrapped/growth"
            className="inline-block bg-[#FFB6C1] text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform text-lg shadow-lg"
          >
            Continue →
          </Link>
        </motion.div>
      </div>
    </WrappedLayout>
  );
}


