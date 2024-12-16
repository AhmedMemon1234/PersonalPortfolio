'use client';
import React from 'react';
import { motion } from 'framer-motion';

const SkillsSection = () => {
  const skills = [
    { name: 'Next.js', level: 90 },
    { name: 'HTML', level: 100 },
    { name: 'CSS', level: 95 },
    { name: 'TailwindCSS', level: 85 },
    { name: 'JavaScript', level: 85 },
    { name: 'TypeScript', level: 90 },
  ];

  return (
    <section className="bg-white py-16" id="skills">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-extrabold text-center text-gray-800 mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          My Skills
        </motion.h2>

        <div className="space-y-8">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="space-y-2"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="flex justify-between items-center text-lg font-semibold text-gray-800">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-2">
                <motion.div
                  className="h-2 rounded-full bg-blue-600"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
