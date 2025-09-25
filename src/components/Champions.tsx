import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const Champions = () => {
  const champions = [
    {
      id: 1,
      type: "image",
      src: "https://i.imgur.com/eSwFfDl.jpeg",
      alt: "Champion transformation 1",
      review: {
        text: "Coach Aditya transformed the way I train for badminton. My agility, stamina, and strength on the court have improved drastically!",
        name: "Trisha Darveshi",
        role: "Athlete",
      },
    },
    {
      id: 2,
      type: "image",
      src: "https://i.imgur.com/CIQsSm8.jpeg",
      alt: "Champion transformation 2",
      review: {
        text: "The guidance and nutrition plan helped me transform not just my body but my lifestyle.",
        name: "Trisha Darveshi",
        role: "Entrepreneur",
      },
    },
    {
      id: 3,
      type: "image",
      src: "https://i.imgur.com/bfyagHf.jpeg",
      alt: "Champion transformation 3",
      review: {
        text: "I never thought I could achieve this physique. The process was tough but so worth it.",
        name: "Trisha Darveshi",
        role: "Fitness Enthusiast",
      },
    },
    {
      id: 4,
      type: "video",
      embedCode:
        '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://www.youtube.com/embed/kRbWKeZf7DU?autoplay=1&loop=1&mute=1&playlist=kRbWKeZf7DU" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Champion transformation video 1"></iframe></div>',
      alt: "Champion transformation video 1",
      review: {
        text: "The video shows only part of the journey. The real win is how confident I feel today.",
        name: "Sneha Kapoor",
        role: "Dancer",
      },
    },
    {
      id: 5,
      type: "video",
      embedCode:
        '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://www.youtube.com/embed/DopOExnr3dU?autoplay=1&loop=1&mute=1&playlist=DopOExnr3dU" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Champion transformation video 2"></iframe></div>',
      alt: "Champion transformation video 2",
      review: {
        text: "Consistency and the right mentorship brought me here. Forever grateful to the team!",
        name: "Karan Singh",
        role: "Student",
      },
    },
    {
      id: 6,
      type: "image",
      src: "https://i.imgur.com/N6N2HUF.jpeg",
      alt: "Mahika Subramanian - Squash Athlete",
      review: {
        text: "I still remember the 1st day Mahika came to train under you for fitness. She and I both were sceptical. She was apprehensive and worried as to what would be expected from her. At the end of the session, she had a big smile on her face. She told me that she enjoyed this session thoroughly and I never had to coax her to go for fitness. She would be eager to join that session and such was the impact you and your techniques had on her.",
        name: "Mahika Subramanian",
        role: "Under-13 Squash Champion",
        achievements: [
          "47th Maharashtra State Open: 9th Position/32 girls in Under-13 category",
          "Matunga Gymkhana Open: 8th Position in Under-13 category", 
          "Dunlop Maharashtra State Closed Open: 3rd position",
          "SFA Games: 3rd overall and reached finals of Matunga Club Open"
        ],
        improvements: [
          "Agility - improved reaction time to respond",
          "Speed - ability to reach the ball faster",
          "Mental Strength - eagerness to match skill to fitness"
        ]
      },
    },
  ];

  return (
    <section
      id="champions"
      className="py-20 px-4 bg-gradient-to-b from-black via-gray-950 to-black"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Our Champions
            </span>
          </h2>
        </motion.div>

        {/* Champions Rows */}
        <div className="space-y-16">
          {champions.map((champion, index) => (
            <motion.div
              key={champion.id}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Media */}
              <div className="flex-1 rounded-3xl overflow-hidden shadow-lg shadow-black/50 border border-yellow-500/30">
                {champion.type === "image" ? (
                  <img
                    src={champion.src}
                    alt={champion.alt}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div
                    className="w-full h-full relative"
                    dangerouslySetInnerHTML={{ __html: champion.embedCode }}
                  />
                )}
              </div>

              {/* Review */}
              <div className="flex-1 text-white">
                <p className="text-lg md:text-xl italic mb-4 text-gray-300">
                  "{champion.review.text}"
                </p>
                
                {/* Special content for Mahika */}
                {champion.review.improvements && (
                  <div className="mb-4">
                    <h4 className="text-yellow-400 font-semibold mb-2">Key Improvements:</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      {champion.review.improvements.map((improvement, idx) => (
                        <li key={idx}>• {improvement}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {champion.review.achievements && (
                  <div className="mb-4">
                    <h4 className="text-yellow-400 font-semibold mb-2">Tournament Achievements (Since July 2024):</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      {champion.review.achievements.map((achievement, idx) => (
                        <li key={idx}>• {achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="font-semibold">{champion.review.name}</span>
                  <span className="text-gray-400 text-sm">
                    • {champion.review.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Champions;
