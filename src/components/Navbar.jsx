import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const NavbarLinks = [
    { id: 1, name: "Home", link: '#home' },
    { id: 2, name: "About", link: '#about' },
    { id: 3, name: "Skills", link: '#skills' },
    { id: 4, name: "My Projects", link: '#projects' },
  ];

  return (
    <header className='fixed top-0 left-0 w-full z-20 text-white' data-aos="fade-up" data-aos-delays='300'>
      <div className='container mx-auto flex items-center justify-between p-5'>
        <a href="#home" className='text-4xl font-bold italic text-white hover:text-purple-300 transition-colors duration-300'>
          Portfolio
        </a>

        <button className='md:hidden focus:outline-none' onClick={() => setIsOpen(!isOpen)}>
          <FiMenu className='w-8 h-8 text-white hover:text-purple-400 transition-colors duration-300' />
        </button>

        {/* Desktop Nav */}
        <nav className='hidden md:flex items-center space-x-7'>
          {NavbarLinks.map((link) => (
            <a
              key={link.id}
              href={link.link}
              className='text-lg border-b-2 border-transparent hover:border-purple-500 hover:text-purple-300 transition-all duration-300'
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            className='inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-purple-800 hover:scale-105 transition-all duration-300 rounded-full text-lg'
          >
            Contact
          </a>
        </nav>
      </div>

      {/* Mobile Nav */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:hidden bg-[#801b9c] absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center space-y-8 pt-16 z-30 transition-all duration-300 ease-in-out`}
      >
        <button
          className="absolute top-5 right-5 text-white hover:text-purple-300 transition-colors duration-300"
          onClick={() => setIsOpen(false)}
        >
          <FiX className="w-8 h-8" />
        </button>

        {NavbarLinks.map((link) => (
          <a
            key={link.id}
            href={link.link}
            className="text-lg text-white border-b-2 border-transparent hover:border-purple-300 hover:text-gray-300 transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </a>
        ))}

        <a
          href="#contact"
          className="inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-purple-800 hover:scale-105 transition-all duration-300 rounded-full text-lg"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </a>
      </div>
    </header>
  );
};

export default Navbar;
