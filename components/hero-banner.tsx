'use client'

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";




export function HeroBanner() {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.1 }); // 10% visible triggers
      useEffect(() => {
      controls.start(inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 });
    }, [inView, controls]);

  return (
    <motion.div className="relative bg-linear-to-br from-[#0f2b2a] to-[#0f2b2a] overflow-hidden"
      ref={ref}
      animate={controls}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-1 rounded-full bg-primary/20 border border-primary/30">
              <span className="text-sm font-medium text-primary">#Sacred Crystal Sale</span>
            </div>

            <div className="space-y-4">
              <h2 className="text-5xl lg:text-6xl font-serif font-bold text-background leading-tight">
                Limited Time Offer!
                <br />
                Up to <span className="text-primary italic">50% OFF!</span>
              </h2>
              <p className="text-lg text-muted leading-relaxed">
                Elevate Your Spiritual Journey with Authentic Crystals
              </p>
            </div>

            <div className="flex gap-3">
              <div className="h-2 w-2 rounded-full bg-primary"></div>
              <div className="h-2 w-2 rounded-full bg-primary/50"></div>
              <div className="h-2 w-2 rounded-full bg-primary/30"></div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-3 gap-4">
              <motion.div className="space-y-4"
                initial={{opacity:0, y: 50}}
                whileInView={{opacity: 1, y:0}}
                viewport={{once: false, amount: 0.5}}
                transition={{duration: 0.5}}
              >
                <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                  <img src="/amethyst-crystal.png" alt="Amethyst Crystal" className="w-full h-full object-cover" />
                </div>
              </motion.div>
              <motion.div className="space-y-4 pt-8"
                initial={{opacity:0, y: 50}}
                whileInView={{opacity: 1, y:0}}
                viewport={{once: false, amount: 0.5}}
                transition={{duration: 0.5}}
              >
                <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                  <img
                    src="/rose-quartz-crystal.png"
                    alt="Rose Quartz Crystal"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
              <motion.div className="space-y-4"
              >
                <motion.div className="aspect-square bg-muted rounded-lg overflow-hidden"
                initial={{opacity:0, y: 50}}
                whileInView={{opacity: 1, y:0}}
                viewport={{once: false, amount: 1}}
                transition={{duration: 0.8}}
                >
                  <img
                    src="/clear-quartz-crystal.png"
                    alt="Clear Quartz Crystal"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div className="aspect-square bg-muted rounded-lg overflow-hidden"
                initial={{opacity:0, y: 50}}
                whileInView={{opacity: 1, y:0}}
                viewport={{once: false, amount: 0.5}}
                transition={{duration: 0.8}}>
                  <img src="/healing-crystals.png" alt="Healing Crystals" className="w-full h-full object-cover" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative leaf pattern overlay */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-10 pointer-events-none">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 100 Q75 50, 100 100 T 150 100" stroke="currentColor" strokeWidth="1" className="text-primary" />
          <path d="M60 120 Q85 70, 110 120 T 160 120" stroke="currentColor" strokeWidth="1" className="text-primary" />
        </svg>
      </div>
    </motion.div>
  )
}
