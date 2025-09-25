import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sanjay Yadav",
      title: "Fitness Enthusiast",
      image: "/images/testimonials/WhatsApp Image 2025-09-01 at 12.52.35_77817297.jpg",
      rating: 5,
      text: "Adi is an exceptional coach who has helped me achieve incredible results. His easy-going style combined with focus on achieving objectives are his exceptional qualities which dramatically help students like me. The results clearly demonstrate how he has increased my bandwidth and mental strength along with physical capabilities."
    },
    {
      name: "Rahul Sharma",
      title: "Weight Loss Success Story",
      image: "/images/testimonials/WhatsApp Image 2025-09-01 at 12.52.35_a5a68129.jpg",
      rating: 5,
      text: "Taking online sessions and learning from Adi for the past 6 months, my weight has come down from 83 Kg to 74 Kg. It feels so nice, energetic and light on feet. Following a workout regime and the nutritional diet prescribed by Adi including intermittent fasting has been the root cause for these positive results."
    },
    {
      name: "Priya Patel",
      title: "Body Transformation Client",
      image: "/images/testimonials/WhatsApp Image 2025-09-01 at 12.52.35_f0ec8d8d.jpg",
      rating: 5,
      text: "While I can mention all the positives that I have gained from Adi, there's also a fun complaint: 'Adi you never told me that I will have to change my wardrobe after 6 months with all my shirts and trousers from 6 months ago having to be donated and refilled with slim fits!'"
    },
    {
      name: "yash maurya",
      title: "Young Athlete",
      image: "/images/testimonials/WhatsApp Image 2025-09-01 at 12.52.36_7d44035d.jpg",
      rating: 5,
      text: "Don't go by his age of 21 years but his inherent quality of teaching and motivating others will put any senior experienced person to shame. Fabulous personality maintaining a perfect V shape physique, muscular structure and excelling in every sport including marathons and weight lifting."
    },
    {
      name: "Vikram Singh",
      title: "Competitive Athlete",
      image: "/images/testimonials/WhatsApp Image 2025-09-01 at 12.52.37_a554e254.jpg",
      rating: 5,
      text: "Coach Adi has transformed my athletic performance completely. His sport-specific training programs and attention to detail have helped me achieve personal bests I never thought possible. The weekly performance reviews keep me motivated and on track."
    },
    {
      name: "Neha Gupta",
      title: "Fitness Transformation",
      image: "/images/testimonials/WhatsApp Image 2025-09-01 at 12.52.35_77817297.jpg",
      rating: 5,
      text: "Working with Adi has been life-changing! His personalized approach and constant motivation helped me build confidence both in and out of the gym. The nutrition guidance was exactly what I needed to fuel my workouts and see real results."
    }
  ];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev

  // Auto toggle every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  // Slide variants
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0
    })
  };

  return (
    <section className="py-20 px-4 bg-transparent">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            <span className="text-gray-100 font-medium">
              Discover how our clients have transformed their lives through our personalized fitness programs. 
              Their incredible journeys inspire us every day.
            </span>
          </p>
        </div>

        {/* Carousel */}
        <div className="relative h-[500px] flex items-center justify-center">
          {/* Left Arrow */}
          <button 
            onClick={handlePrev}
            className="absolute left-0 z-10 p-3 bg-black/40 rounded-full hover:bg-yellow-500/70 transition"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6 }}
              className="w-full max-w-lg group bg-white/15 backdrop-blur-md rounded-3xl p-8 border border-yellow-500/30 hover:border-yellow-500/50 transition-all duration-500 relative overflow-hidden shadow-lg shadow-black/50"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-20">
                <Quote className="w-8 h-8 text-yellow-400" />
              </div>

              {/* Customer photo */}
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-yellow-500/30 shadow-lg shadow-yellow-500/20 mr-4">
                  <img 
                    src={testimonials[index].image} 
                    alt={`${testimonials[index].name} - Customer testimonial`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors">
                    {testimonials[index].name}
                  </h4>
                  <p className="text-sm text-gray-200 font-medium">{testimonials[index].title}</p>
                </div>
              </div>

              {/* Star rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonials[index].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-gray-100 leading-relaxed text-base mb-6 font-medium">
                "{testimonials[index].text}"
              </p>

              {/* Decorative bottom accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-orange-500"></div>
            </motion.div>
          </AnimatePresence>

          {/* Right Arrow */}
          <button 
            onClick={handleNext}
            className="absolute right-0 z-10 p-3 bg-black/40 rounded-full hover:bg-yellow-500/70 transition"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Dots navigation */}
        <div className="flex justify-center mt-6 space-x-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                i === index ? "bg-yellow-400 scale-125" : "bg-gray-500"
              }`}
            />
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-gray-100 mb-6 text-lg font-medium">Ready to start your own transformation story?</p>
          <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/30 hover:scale-105">
            Join Our Success Community
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
