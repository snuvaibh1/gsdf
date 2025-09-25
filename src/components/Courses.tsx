import React from 'react';
import { Check, Target, Trophy, Zap } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      icon: Target,
      name: "Lifestyle Performance Package",
      price: "₹9,999",
      duration: "Per Month",
      description: "For fat loss, muscle gain, and general fitness",
      features: [
        "Personalized 3–5 day training plan",
        "Nutrition guidance (calorie/macro targets + sample meal guides)",
        "Bi-weekly check-ins via messaging/email",
        "Progress tracking (measurements & photos every 4 weeks)",
        "Exercise demo library access",
        "2 monthly video calls"
      ],
      popular: false,
      color: "from-yellow-400 to-yellow-500"
    },
    {
      icon: Trophy,
      name: "Athlete Development Package",
      price: "₹14,999",
      duration: "Per Month",
      description: "For competitive athletes: strength, speed, endurance, and sport-specific training",
      features: [
        "Sport-specific strength & conditioning program (updated every 4 weeks)",
        "Speed, agility & plyometric drills",
        "Conditioning tailored to sport",
        "Recovery & mobility programming",
        "Weekly video performance review & feedback",
        "Performance testing every 12 weeks"
      ],
      popular: true,
      color: "from-yellow-300 to-orange-400"
    },
    {
      icon: Zap,
      name: "Strength & Power Package",
      price: "₹11,999",
      duration: "Per Month",
      description: "For powerlifters & strength/hypertrophy-focused lifters",
      features: [
        "Periodized training program (strength, hypertrophy, peaking phases)",
        "Squat/bench/deadlift technique breakdown (video analysis 2x/month)",
        "Accessory lift programming for weak points",
        "Competition prep strategy (if competing)",
        "Recovery protocols for strength athletes",
        "Optional nutrition coaching",
        "1x weekly coaching call"
      ],
      popular: false,
      color: "from-orange-400 to-red-500"
    }
  ];

  return (
    <section id="courses" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Training Packages
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            <span className="text-gray-100 font-medium">
              Choose from our specialized training packages designed by expert coaches to help you 
              achieve your specific fitness goals with personalized guidance and support.
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`relative bg-white/15 backdrop-blur-md rounded-3xl p-8 border transition-all duration-500 hover:transform hover:scale-105 shadow-lg shadow-black/50 ${
                course.popular 
                  ? 'border-yellow-400 shadow-2xl shadow-yellow-500/30 transform scale-105' 
                  : 'border-yellow-500/30 hover:border-yellow-500/50'
              }`}
            >
              {course.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    MOST POPULAR
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${course.color} mb-4 shadow-lg`}>
                  <course.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{course.name}</h3>
                <p className="text-gray-200 mb-4 font-medium">{course.description}</p>
                <div className="mb-2">
                  <span className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                    {course.price}
                  </span>
                </div>
                <div className="text-gray-200 font-medium">{course.duration}</div>
              </div>

              <ul className="space-y-4 mb-8">
                {course.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-100 font-medium">
                    <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="w-3 h-3 text-black" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 ${
                course.popular
                  ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:shadow-2xl hover:shadow-yellow-500/30'
                  : 'border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black hover:shadow-2xl hover:shadow-yellow-500/20'
              }`}>
                Choose Plan
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-200 mb-4 font-medium">Need a custom plan? We've got you covered.</p>
          <button className="bg-white/20 backdrop-blur-md border border-yellow-500/40 text-yellow-400 px-8 py-3 rounded-full font-medium hover:bg-yellow-500/20 hover:border-yellow-500/60 transition-all duration-300 shadow-lg shadow-black/50">
            Contact for Custom Pricing
          </button>
        </div>
      </div>
    </section>
  );
};

export default Courses;