'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section className="bg-gray-100 py-16" id="about">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
        {/* Left Section - Profile Image with 3D Effect */}
        <div className="w-full md:w-1/2 flex justify-center items-center relative">
          <motion.div
            className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl transform transition duration-700 hover:scale-110"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.3 }} // Trigger when 30% of the image is visible
          >
            <Image
              src="/ahmed.jpg"
              alt="Ahmed Memon"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Right Section - About Boxes */}
        <div className="w-full md:w-1/2 space-y-6 md:space-y-8">
          {/* Title */}
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-gray-800"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.3 }} // Trigger on scroll
          >
            About Me
          </motion.h2>

          {/* About Boxes */}
          <div className="space-y-6">
            <motion.div
              className="bg-white shadow-xl p-6 rounded-lg transform transition duration-500 hover:scale-105"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }} // Trigger when 30% of the box is visible
            >
              <h3 className="text-2xl font-semibold text-gray-800">About Me</h3>
              <p className="text-lg text-gray-600">
                I&apos;m a web developer passionate about crafting beautiful and functional digital experiences.
              </p>
            </motion.div>

            <motion.div
              className="bg-white shadow-xl p-6 rounded-lg transform transition duration-500 hover:scale-105"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h3 className="text-2xl font-semibold text-gray-800">My Journey</h3>
              <p className="text-lg text-gray-600">
                With years of experience I&apos;ve honed my skills in web development to create seamless user experiences.
              </p>
            </motion.div>

            <motion.div
              className="bg-white shadow-xl p-6 rounded-lg transform transition duration-500 hover:scale-105"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h3 className="text-2xl font-semibold text-gray-800">My Skills</h3>
              <p className="text-lg text-gray-600">
                Proficient in HTML CSS JavaScript Tailwind Css Next.js and backend technologies like Typescript.
              </p>
            </motion.div>

            <motion.div
              className="bg-white shadow-xl p-6 rounded-lg transform transition duration-500 hover:scale-105"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h3 className="text-2xl font-semibold text-gray-800">Passion for Learning</h3>
              <p className="text-lg text-gray-600">
                I constantly strive to stay updated with the latest trends and technologies in the web development world.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
