"use client";
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { AiOutlineCode } from 'react-icons/ai';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white text-gray-800 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo with Icon */}
        <div className="flex items-center space-x-2">
          <AiOutlineCode size={32} className="text-blue-500" />
          <span className="text-3xl font-bold tracking-wide">Ahmed Portfolio</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#hero" className="hover:text-blue-500 transition duration-300">Home</a>
          <a href="#about" className="hover:text-blue-500 transition duration-300">About</a>
          <a href="#skills" className="hover:text-blue-500 transition duration-300">Skills</a>
          <a href="#projects" className="hover:text-blue-500 transition duration-300">Projects</a>
          <a href="#contact" className="hover:text-blue-500 transition duration-300">Contact</a>

          {/* New Buttons */}
          <a
            href="https://discord.com/users/braveboy0675_78344"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Hire Me
          </a>
          <a
            href="/Mypdf.pdf" // Link to your CV file
            target="_blank"
            className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition duration-300"
          >
            Download My CV
          </a>
        </nav>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={28} className="text-blue-500" /> : <FaBars size={28} className="text-blue-500" />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-gray-100 shadow-md">
          <ul className="space-y-4 px-6 py-8">
            <li><a href="#hero" className="block text-lg font-medium hover:text-blue-500 transition duration-300">Home</a></li>
            <li><a href="#about" className="block text-lg font-medium hover:text-blue-500 transition duration-300">About</a></li>
            <li><a href="#skills" className="block text-lg font-medium hover:text-blue-500 transition duration-300">Skills</a></li>
            <li><a href="#projects" className="block text-lg font-medium hover:text-blue-500 transition duration-300">Projects</a></li>
            <li><a href="#contact" className="block text-lg font-medium hover:text-blue-500 transition duration-300">Contact</a></li>

            {/* Mobile Buttons Below Menu Items */}
            <li>
              <a
                href="https://discord.com/users/braveboy0675_78344"
                className="block text-lg font-medium bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Hire Me
              </a>
            </li>
            <li>
              <a
                href="/Mypdf.pdf" // Link to your CV file
                target="_blank"
                className="block text-lg font-medium bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition duration-300"
              >
                Download My CV
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
