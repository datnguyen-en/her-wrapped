"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import WrappedLayout from "@/components/WrappedLayout";

const letterText = `My bbi péo, 

Congrats again on your 20 and happy birthday!!! 

Cả wrap xài tiếng anh rùi nên h anh xài tiếng việt, kekeke. Những tâm tư tình anh đã gửi gắm hết vào bức thư điện tử kia, nên với dòng thư này anh chỉ muốn gửi những lời chúc tốt đẹp nhất đến với Menk. 
Chúc Menk tuổi mới đạt nhiều điều mới, học hỏi và trải nghiệm được nhiều, đặc biệt là những mùa intern quý giá này nhe. Tuổi mới cũng gặt được nhiều lộc lá, may mắn, để có dịp ăn sung mặc sướng, đi chơi với anh nhìu nhìu nhee!!! Hiển nhiên những điều tiêu cực vốn xảy ra, nhưng mà không phải nó luôn là điều tệ, nhưng dù sao anh cũng mong Mank sẽ ít gặp những điều ấy hơn nhe!!! 
Lần cuối, anh muốn dặn dò rằng Mank phải ăn uống thật đầy đủ, kh dc bỏ bữa, biết thể thao thể dục điều độ, chăm sóc sức khỏe bản thân, ngủ thật đủ và đặc biệt là phải luôn cười thật tươi nhé, heheehee!!!

Những điều ấm áp nhất,
Cún
`;

export default function LetterPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <WrappedLayout title="A LETTER FOR YOU">
      <div className="flex flex-col items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl text-gray-700 leading-relaxed px-4"
        >
          <p>
            I wanted to write this down so you know how I truly feel. From the bottom of my heart, I hope you read it with a warm smile on your face.
          </p>
        </motion.div>

        <div className="relative w-full max-w-xl">
          {/* Envelope (tap to open) */}
          <motion.button
            type="button"
            onClick={() => setIsOpen(true)}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.99 }}
            className="relative h-64 w-full focus:outline-none"
          >
            {/* Envelope back and pocket */}
            <div
              className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border-2 border-[#FFD1DC]"
              style={{
                background:
                  "linear-gradient(135deg, #FFE4E6 0%, #FFD1DC 55%, #FDF6F9 100%)",
              }}
            />

            {/* Flap */}
            <motion.div
              animate={{ rotateX: isOpen ? 160 : 0, y: isOpen ? -4 : 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="absolute top-0 left-0 right-0 h-32 origin-top overflow-hidden rounded-t-3xl border-b-2 border-[#FFB6C1]"
              style={{
                background:
                  "linear-gradient(135deg, #FFB6C1 0%, #FF8FA3 50%, #FFD1DC 100%)",
                transformStyle: "preserve-3d",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/25 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <HeartSeal />
              </div>
            </motion.div>

            {/* Little peek of the letter */}
            <div className="absolute left-6 right-6 bottom-6 h-20 rounded-2xl bg-white/95 border-2 border-[#FF8FA3] shadow-lg flex items-center justify-center">
              <p className="text-base md:text-lg font-bold" style={{ color: '#FF8FA3' }}>
                Tap to open the letter
              </p>
            </div>

            {/* Decorative floating hearts when open */}
            <AnimatePresence>
              {isOpen && (
                <>
                  <FloatingHeart delay={0.0} x="-60%" />
                  <FloatingHeart delay={0.2} x="70%" />
                  <FloatingHeart delay={0.4} x="-10%" />
                </>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Letter modal */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
              <motion.div
                initial={{ scale: 0.9, y: 40, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 20, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="relative z-10 w-full max-w-2xl"
              >
                <div className="bg-white rounded-3xl shadow-2xl border-2 border-[#FFD1DC] overflow-hidden">
                  <div className="bg-gradient-to-r from-[#FFB6C1] to-[#FF8FA3] px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3 text-white font-bold">
                      <HeartSeal small />
                      <span>Opened with love</span>
                    </div>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="text-white/90 hover:text-white text-sm font-semibold"
                    >
                      Close
                    </button>
                  </div>
                  <div className="p-8 space-y-4">
                    <p className="text-sm text-gray-500">January 2025</p>
                    <p className="whitespace-pre-line text-gray-800 leading-relaxed text-lg">
                      {letterText}
                    </p>
                    <div className="pt-4">
                      <Link
                        href="/wrapped/thank-you"
                        className="inline-block bg-[#FFB6C1] text-white px-6 py-3 rounded-full font-semibold shadow-md hover:scale-105 transition-transform text-sm"
                      >
                        Continue →
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </WrappedLayout>
  );
}

function FloatingHeart({ delay, x }: { delay: number; x: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 0.8, y: -60 }}
      exit={{ opacity: 0 }}
      transition={{ delay, duration: 1.2, repeat: Infinity, repeatType: "mirror" }}
      className="absolute top-6 left-1/2"
      style={{ transform: `translateX(${x})` }}
    >
      <HeartSeal small />
    </motion.div>
  );
}

function HeartSeal({ small = false }: { small?: boolean }) {
  return (
    <svg
      width={small ? 28 : 44}
      height={small ? 28 : 44}
      viewBox="0 0 50 50"
      fill="none"
    >
      <path
        d="M 25 12 Q 15 8, 12 18 Q 12 25, 25 38 Q 38 25, 38 18 Q 35 8, 25 12"
        fill="#FF8FA3"
        stroke="#FFD1DC"
        strokeWidth={small ? 1.2 : 2}
      />
    </svg>
  );
}


