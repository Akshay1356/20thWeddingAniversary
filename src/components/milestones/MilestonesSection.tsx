'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ANNIVERSARY_CONFIG } from '@/config/anniversaryData';
import OrnamentalDivider from '@/components/ui/OrnamentalDivider';
import KolamMotif from '@/components/ui/KolamMotif';

function CounterNumber({
  target,
  suffix = '',
  duration = 2000,
  isText = false,
  textValue = '',
}: {
  target: number;
  suffix?: string;
  duration?: number;
  isText?: boolean;
  textValue?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView || isText) return;

    let start = 0;
    const stepTime = 16;
    const totalSteps = duration / stepTime;
    const increment = target / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, target, duration, isText]);

  if (isText) {
    return (
      <span ref={ref} className="font-serif font-light text-burgundy tracking-tight">
        {textValue}
      </span>
    );
  }

  return (
    <span ref={ref} className="font-serif font-light text-burgundy tracking-tight">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function MilestonesSection() {
  const { milestones } = ANNIVERSARY_CONFIG;

  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-12 bg-ivory paper-texture overflow-hidden border-y border-gold/30">
      {/* Decorative Kolam Background Accents */}
      <div className="absolute top-1/2 -left-20 -translate-y-1/2 pointer-events-none opacity-15 hidden xl:block">
        <KolamMotif size={240} color="#C9A45C" />
      </div>
      <div className="absolute top-1/2 -right-20 -translate-y-1/2 pointer-events-none opacity-15 hidden xl:block">
        <KolamMotif size={240} color="#C9A45C" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs uppercase tracking-[0.3em] font-serif text-gold-dark font-semibold">
              Two Decades in Numbers
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-normal text-burgundy tracking-wide mt-2 mb-2">
              Twenty Years of Togetherness
            </h2>
            <p className="font-tamil text-darkbrown/70 text-lg">
              இருபது ஆண்டுகள் • அளவிட முடியாத அன்பு
            </p>
            <OrnamentalDivider className="my-4" />
          </motion.div>
        </div>

        {/* Editorial Typography Milestones Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 items-start">
          {milestones.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="text-center flex flex-col items-center group"
            >
              {/* Oversized Editorial Number */}
              <div className="text-6xl sm:text-7xl lg:text-7xl xl:text-8xl leading-none mb-3 text-gold-gradient drop-shadow-sm font-serif">
                {idx === 3 ? (
                  <span className="text-5xl sm:text-6xl lg:text-5xl xl:text-6xl font-serif text-burgundy">
                    &infin;
                  </span>
                ) : (
                  <CounterNumber
                    target={item.value}
                    suffix={item.suffix}
                    duration={1800 + idx * 300}
                  />
                )}
              </div>

              {/* Title & Tamil Subtitle */}
              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-darkbrown tracking-wide mb-1">
                {item.label}
              </h3>
              <p className="font-tamil text-gold-dark text-sm mb-3">
                {item.tamilLabel}
              </p>

              {/* Thin Decorative Rule */}
              <div className="w-12 h-[1px] bg-gold/50 my-2 transition-all duration-300 group-hover:w-20 group-hover:bg-burgundy" />

              {/* Description */}
              <p className="text-sm font-serif text-darkbrown/75 leading-relaxed max-w-[220px]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner Accent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-gold/30 text-center"
        >
          <p className="font-serif italic text-lg sm:text-xl text-burgundy">
            &ldquo;Every sunrise since 27 November 2006 has been blessed by your companionship.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
