'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    name: 'Project 1',
    image: '/project444.png',
    liveLink: 'https://ahmedecomshop.netlify.app/',
    githubLink: 'https://github.com/AhmedMemon1234/EcommerceWeb',
  },
  {
    name: 'Project 2',
    image: '/project111.png',
    liveLink: 'https://final-hackathon-stbq.vercel.app/',
    githubLink: 'https://github.com/AhmedMemon1234/FinalHackathon',
  },
  {
    name: 'Project 3',
    image: '/resume.png',
    liveLink: 'https://milestone5-wheat.vercel.app/',
    githubLink: 'https://github.com/AhmedMemon1234/milestone5',
  },
  {
    name: 'Project 4',
    image: '/project22.png',
    liveLink: 'https://portfolio-ahmed-vskh.vercel.app/',
    githubLink: 'https://github.com/AhmedMemon1234/Portfolio-Ahmed',
  },
];

const ProjectsSection = () => {
  return (
    <section className="bg-gray-100 py-16" id="projects">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-extrabold text-center text-gray-800 mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          My Projects
        </motion.h2>

        {/* Use grid to display 4 projects in one line */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              {/* Project Image */}
              <motion.div
                className="w-full h-80 rounded-lg overflow-hidden shadow-lg transform transition duration-300 group-hover:scale-105 group-hover:rotate-6 relative"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  layout="fill" // Ensures the image fills the container
                  objectFit="cover" // Ensures the image covers the container without distorting
                  className="rounded-lg"
                />
              </motion.div>

              {/* Project Details */}
              <div className="absolute bottom-4 left-4 right-4 bg-gray-900 bg-opacity-60 text-white p-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
                <div className="flex justify-between items-center">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    className="text-blue-500 hover:text-blue-600"
                  >
                    Live
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    className="text-gray-300 hover:text-gray-500"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
