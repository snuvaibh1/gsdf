import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [logoLoaded, setLogoLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const mouseX = useSpring(0, { stiffness: 100, damping: 30 });
  const mouseY = useSpring(0, { stiffness: 100, damping: 30 });
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        mouseX.set(x * 50);
        mouseY.set(y * 50);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [mouseX, mouseY]);

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://i.imgur.com/JNHqgCV.png"
          alt="Cinematic Background"
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
        />
      </div>
      <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none" />

      {/* Logo centerpiece */}
      <div
        className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
        style={{ top: '-10%' }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0, rotateZ: 360 }}
          transition={{ duration: 3.5, delay: 0.5 }}
        >
          <motion.div
            className="relative w-[20rem] h-[20rem] sm:w-[24rem] sm:h-[24rem] lg:w-[28rem] lg:h-[28rem] flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
          >
            <motion.img
              src="https://i.imgur.com/Z9zUrNZ.jpeg"
              alt="Champions Lifestyle Logo"
              className="w-full h-full object-contain"
              onLoad={() => setLogoLoaded(true)}
              loading="eager"
              decoding="async"
              initial={{ opacity: 0, scale: 1.2, filter: 'blur(10px)' }}
              animate={{
                opacity: logoLoaded ? 1 : 0,
                scale: logoLoaded ? 1 : 1.2,
                filter: logoLoaded ? 'blur(0px)' : 'blur(10px)'
              }}
              transition={{ duration: 1.5, delay: 1 }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Main content */}
      <div className="relative z-30 flex items-end justify-center min-h-screen px-4 pb-16">
        <motion.div className="text-center max-w-6xl" style={{ y: textY }}>
          <motion.h1
            className="text-5xl sm:text-7xl lg:text-8xl font-black leading-none"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #D4AF37 50%, #ffffff 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 50px rgba(212, 175, 55, 0.3)',
              backgroundSize: '200% auto'
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0, backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
            transition={{
              opacity: { duration: 1.2, delay: 1 },
              backgroundPosition: { duration: 3, ease: 'easeInOut', repeat: Infinity }
            }}
          >
            {/* Add your headline here */}
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-white/90 mt-6 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            {/* Add your tagline/description here */}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3 }}
          >
            <motion.button
              className="group relative bg-[#C8A766] text-black px-8 py-4 rounded-xl font-bold text-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                boxShadow: '0 0 50px rgba(212, 175, 55, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
              }}
              onClick={() =>
                window.open('https://calendly.com/championlifestyle-yash/30min?month=2025-07', '_blank')
              }
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              />
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <span>Begin Transformation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </span>
            </motion.button>

            <motion.button
              className="group flex items-center space-x-3 text-white/90 hover:text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                window.open('https://youtu.be/zoLP2Q0k6dE?si=ynVrRWElYFoa8aHU', '_blank')
              }
            >
              <div className="relative w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:bg-white/20">
                <Play className="w-6 h-6 ml-1" />
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-yellow-400/50"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </div>
              <span className="font-semibold text-lg">Watch Transformations</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
