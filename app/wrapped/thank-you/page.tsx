"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import WrappedLayout from "@/components/WrappedLayout";

export default function ThankYouPage() {
  return (
    <WrappedLayout title="THANK YOU">
      <div className="flex flex-col items-center gap-10">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl text-gray-700 leading-relaxed px-4 text-lg"
        >
          For every call, every message, every silly moment and serious one,
          thank you for letting me love you this year. This little wrapped is
          just a tiny part of how big my heart feels for you.
        </motion.p>

        {/* Photo area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: -2 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative w-full max-w-xl"
        >
          <div className="absolute -top-4 left-10 w-12 h-12 rounded-full bg-[#FFD1DC] opacity-70 blur-sm" />
          <div className="absolute -bottom-6 right-6 w-16 h-16 rounded-full bg-[#B8E6E6] opacity-60 blur-sm" />

          <div className="relative bg-white rounded-3xl shadow-2xl border-2 border-dashed border-[#FFD1DC] px-6 py-6 flex flex-col items-center gap-4">
          <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden relative">
              <Image
                src="/images/thankyou.jpg"
                alt="Our favorite photo together"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center space-y-4"
        >
          <p className="text-gray-700 text-base px-4">
            No matter how many times you restart this wrapped, my answer
            stays the same: it&apos;s always you.
          </p>
           <Link
             href="/"
             className="inline-block bg-[#FFB6C1] text-white px-10 py-4 rounded-full font-semibold hover:scale-105 transition-transform text-lg shadow-lg"
           >
             Restart the wrapped →
           </Link>
        </motion.div>
      </div>
    </WrappedLayout>
  );
}


