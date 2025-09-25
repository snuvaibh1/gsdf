import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Target, Zap, Heart, Trophy } from "lucide-react";

const Programs = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Smooth parallax scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 30 });

  const bgY = useTransform(smooth, [0, 1], ["0%", "100%"]);
  const midY = useTransform(smooth, [0, 1], ["0%", "50%"]);
  const fgY = useTransform(smooth, [0, 1], ["0%", "25%"]);
  const rotate = useTransform(smooth, [0, 1], [0, 360]);
  const scale = useTransform(smooth, [0, 1], [0.9, 1.1]);

  const programs = [
    {
      icon: Target,
      title: "Weight Loss Program",
      features: [
        "Custom meal plans",
        "Cardio workouts",
        "Progress tracking",
        "24/7 support",
      ],
      color: "from-yellow-400/20 via-yellow-500/10 to-amber-500/10",
    },
    {
      icon: Zap,
      title: "Strength Training",
      features: [
        "Progressive overload",
        "Form correction",
        "Muscle building",
        "Recovery plans",
      ],
      color: "from-orange-400/20 via-orange-500/10 to-red-500/10",
    },
    {
      icon: Heart,
      title: "Wellness & Nutrition",
      features: [
        "Lifestyle coaching",
        "Stress management",
        "Habit formation",
        "Mindful eating",
      ],
      color: "from-yellow-300/20 via-yellow-400/10 to-yellow-500/10",
    },
    {
      icon: Trophy,
      title: "Competition Prep",
      features: [
        "Contest prep",
        "Peak week planning",
        "Posing practice",
        "Stage ready",
      ],
      color: "from-yellow-500/20 via-amber-500/10 to-orange-400/10",
    },
  ];

  return (
    <section
      ref={containerRef}
      id="programs"
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-950 via-black to-gray-950"
    >
      {/* Background parallax */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,215,0,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,165,0,0.06),transparent_60%)]" />
      </motion.div>

      {/* Floating geometric midground */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: midY }}>
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 md:w-56 md:h-56"
          style={{ rotate, scale }}
        >
          <div className="w-full h-full rounded-3xl bg-gradient-to-br from-yellow-400/10 to-orange-500/5 border border-yellow-400/10 shadow-2xl" />
        </motion.div>
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-24 h-24 md:w-48 md:h-48"
          style={{ rotate, scale }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-tr from-orange-500/10 to-red-500/5 border border-orange-400/10 shadow-2xl" />
        </motion.div>
      </motion.div>

      {/* Foreground content */}
      <motion.div
        className="relative z-10 flex items-center justify-center min-h-screen px-4 md:px-6"
        style={{ y: fgY }}
      >
        <div className="max-w-7xl mx-auto w-full">
          {/* Heading */}
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: "spring" }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Our Programs
              </span>
            </h2>
            <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
              Choose from expertly crafted programs designed to help you achieve
              your goals with precision, accountability, and world-class support.
            </p>
          </motion.div>

          {/* Program cards with cinematic effects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, i) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 100, rotateX: -30 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2, type: "spring" }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotateY: 8 }}
                className="relative overflow-hidden rounded-3xl p-6 bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl hover:border-yellow-400/40 transition-all duration-500"
              >
                {/* glowing accents */}
                <div
                  className={`absolute -right-16 -top-16 h-40 w-40 rounded-full blur-3xl bg-gradient-to-br ${program.color}`}
                />
                <div
                  className={`absolute -left-20 -bottom-20 h-44 w-44 rounded-full blur-3xl bg-gradient-to-tr ${program.color}`}
                />

                {/* icon */}
                <div className="relative inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-yellow-500/10 ring-1 ring-yellow-400/30 mb-4">
                  <program.icon className="h-6 w-6 text-yellow-400" />
                </div>

                {/* title */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  {program.title}
                </h3>

                {/* features */}
                <ul className="list-none space-y-1.5 text-sm md:text-base text-gray-300 leading-relaxed">
                  {program.features.map((f, idx) => (
                    <li key={idx}>{f}</li>
                  ))}
                </ul>

                {/* bottom accent */}
                <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* floating sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 md:w-2 md:h-2 bg-yellow-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ y: [0, -200, 0], opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
            transition={{
              duration: 4 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Programs;