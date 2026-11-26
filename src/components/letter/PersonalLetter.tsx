'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MailOpen, Heart, Sparkles } from 'lucide-react';
import { ANNIVERSARY_CONFIG } from '@/config/anniversaryData';
import WaxSeal from '@/components/ui/WaxSeal';
import OrnamentalDivider from '@/components/ui/OrnamentalDivider';
import KolamMotif from '@/components/ui/KolamMotif';

export default function PersonalLetter() {
  const { letter } = ANNIVERSARY_CONFIG;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-12 bg-[#F5EBDA] paper-texture overflow-hidden">
      {/* Decorative Kolam Motifs */}
      <div className="absolute top-10 left-10 pointer-events-none opacity-20 hidden md:block">
        <KolamMotif size={100} color="#722F37" />
      </div>
      <div className="absolute top-10 right-10 pointer-events-none opacity-20 hidden md:block">
        <KolamMotif size={100} color="#722F37" />
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-burgundy/10 border border-burgundy/20 text-burgundy text-xs font-serif uppercase tracking-widest mb-3">
              <Mail className="w-3.5 h-3.5 text-gold-dark" />
              <span>Chapter IV • From The Heart</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl font-normal text-burgundy tracking-wide mb-2">
              {letter.heading}
            </h2>

            <p className="font-tamil text-gold-dark text-lg mb-2">
              அன்புள்ள அம்மா மற்றும் அப்பாவுக்கு...
            </p>

            <OrnamentalDivider className="my-3" />

            <p className="font-serif italic text-base sm:text-lg text-darkbrown/80">
              Click the sealed envelope below to open your personalized letter.
            </p>
          </motion.div>
        </div>

        {/* Interactive Envelope & Unfolded Letter */}
        <div className="relative flex flex-col items-center">
          {!isOpen ? (
            /* Closed Wax-Sealed Envelope */
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setIsOpen(true)}
              className="relative w-full max-w-[500px] aspect-[1.45/1] bg-[#FCF5E9] rounded-2xl shadow-vintage-card border-2 border-gold/50 cursor-pointer overflow-hidden p-6 sm:p-8 flex flex-col justify-between group"
            >
              {/* Inner Gold Foil Border */}
              <div className="absolute inset-3 border border-gold/30 rounded-xl pointer-events-none" />

              {/* Envelope Flap Fold Triangular Accent */}
              <div
                className="absolute inset-0 pointer-events-none opacity-10"
                style={{
                  background:
                    'linear-gradient(to bottom, #722F37 0%, transparent 55%)',
                }}
              />

              {/* Top Row: Date & Delivery Stamp */}
              <div className="relative z-10 flex items-center justify-between text-xs font-serif text-darkbrown/60 uppercase tracking-widest">
                <span>Personal Letter</span>
                <span>27 November 2026</span>
              </div>

              {/* Top Center Wax Seal attached to the closing flap */}
              <div className="flex justify-center -mt-2 group-hover:scale-105 transition-transform duration-300">
                <WaxSeal size={76} />
              </div>

              {/* Lower Section: Recipient Calligraphy clearly readable */}
              <div className="relative z-10 text-center mt-2 mb-2">
                <p className="font-serif italic text-xs sm:text-sm text-gold-dark tracking-widest uppercase mb-1">
                  For My Loving Parents
                </p>
                <p className="font-serif text-2xl sm:text-3xl font-medium text-darkbrown tracking-wide">
                  M. Prakash &amp; P. Anitha
                </p>
                <p className="font-tamil text-burgundy text-sm mt-1">
                  அன்புடன் சமர்ப்பணம்
                </p>
              </div>

              {/* Bottom Prompt */}
              <div className="relative z-10 flex items-center justify-center gap-2 text-xs font-serif text-burgundy font-medium border-t border-gold/20 pt-2">
                <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse" />
                <span>Click Envelope to Break Seal &amp; Read Letter</span>
              </div>
            </motion.div>
          ) : (
            /* Open Handwritten Parchment Letter */
            <AnimatePresence>
              <motion.div
                key="open-letter"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                className="relative w-full max-w-2xl bg-[#FFFDF9] rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl border-2 border-gold/50 text-darkbrown"
              >
                {/* Traditional Corner Gold Accents */}
                <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-gold pointer-events-none" />
                <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-gold pointer-events-none" />
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-gold pointer-events-none" />
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-gold pointer-events-none" />

                {/* Parchment Ruled Lines Background */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-5 rounded-3xl"
                  style={{
                    backgroundImage: 'linear-gradient(#30221C 1px, transparent 1px)',
                    backgroundSize: '100% 32px',
                    marginTop: '90px',
                  }}
                />

                {/* Letter Header */}
                <div className="flex items-center justify-between border-b border-gold/30 pb-4 mb-8">
                  <div className="flex items-center gap-2 text-burgundy">
                    <MailOpen className="w-5 h-5 text-gold-dark" />
                    <span className="font-serif uppercase tracking-[0.25em] text-xs font-semibold">
                      Letter of Gratitude
                    </span>
                  </div>
                  <span className="font-serif text-xs text-darkbrown/60 tracking-wider">
                    27 November 2026
                  </span>
                </div>

                {/* Salutation */}
                <h3 className="font-handwriting text-3xl sm:text-4xl text-burgundy mb-6">
                  {letter.salutation}
                </h3>

                {/* Letter Body Paragraphs */}
                <div className="space-y-4 font-handwriting text-2xl sm:text-3xl text-darkbrown/90 leading-relaxed">
                  {letter.paragraphs.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                {/* Sign-off & Signature */}
                <div className="mt-10 pt-6 border-t border-gold/30 flex flex-col items-end">
                  <p className="font-handwriting text-2xl text-darkbrown/80">
                    {letter.signoff}
                  </p>
                  <p className="font-handwriting text-3xl sm:text-4xl text-burgundy font-bold mt-1 flex items-center gap-2">
                    <span>{letter.author}</span>
                    <Heart className="w-5 h-5 text-rose-dark fill-rose inline" />
                  </p>
                </div>

                {/* Close / Fold Back Button */}
                <div className="mt-8 text-center">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-xs font-serif text-darkbrown/50 hover:text-burgundy uppercase tracking-widest border-b border-darkbrown/20 pb-0.5 transition-colors cursor-pointer"
                  >
                    Fold Letter Back Into Envelope
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </section>
  );
}
