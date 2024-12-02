import React from 'react';
import { HomeIcon, UserIcon, LaptopIcon, MailIcon, MenuIcon } from './icons';

const Navigation = ({ setCurrentPage, isMobileMenuOpen, setIsMobileMenuOpen }) => (
  <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
    <div className="container mx-auto flex justify-between items-center p-4">
    <button 
        onClick={() => setCurrentPage('home')} 
        className="text-2xl font-bold text-blue-600"
    >
        MyTemplate
    </button>
    
    {/* Desktop Menu */}
    <div className="hidden md:flex space-x-6 items-center">
        <button 
        onClick={() => setCurrentPage('home')} 
        className="flex items-center hover:text-blue-600 transition"
        >
        <HomeIcon className="mr-2" /> Home
        </button>
        <button 
        onClick={() => setCurrentPage('about')} 
        className="flex items-center hover:text-blue-600 transition"
        >
        <UserIcon className="mr-2" /> About
        </button>
        <button 
        onClick={() => setCurrentPage('services')} 
        className="flex items-center hover:text-blue-600 transition"
        >
        <LaptopIcon className="mr-2" /> Services
        </button>
        <button 
        onClick={() => setCurrentPage('contact')} 
        className="flex items-center hover:text-blue-600 transition"
        >
        <MailIcon className="mr-2" /> Contact
        </button>
    </div>
    
    {/* Mobile Menu Toggle */}
    <button 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
        className="md:hidden text-gray-800 focus:outline-none"
    >
        <MenuIcon />
    </button>
    </div>
  </nav>
);

export default Navigation;