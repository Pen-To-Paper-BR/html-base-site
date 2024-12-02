import React from 'react';
import { HomeIcon, UserIcon, LaptopIcon, MailIcon } from './icons';

const MobileMenu = ({ setCurrentPage, setIsMobileMenuOpen }) => (
  <div className="fixed top-16 left-0 w-full bg-white shadow-lg z-40 md:hidden">
    <div className="flex flex-col">
    <button 
        onClick={() => {
        setCurrentPage('home');
        setIsMobileMenuOpen(false);
        }} 
        className="p-4 border-b flex items-center hover:bg-gray-100"
    >
        <HomeIcon className="mr-3" /> Home
    </button>
    <button 
        onClick={() => {
        setCurrentPage('about');
        setIsMobileMenuOpen(false);
        }} 
        className="p-4 border-b flex items-center hover:bg-gray-100"
    >
        <UserIcon className="mr-3" /> About
    </button>
    <button 
        onClick={() => {
        setCurrentPage('services');
        setIsMobileMenuOpen(false);
        }} 
        className="p-4 border-b flex items-center hover:bg-gray-100"
    >
        <LaptopIcon className="mr-3" /> Services
    </button>
    <button 
        onClick={() => {
        setCurrentPage('contact');
        setIsMobileMenuOpen(false);
        }} 
        className="p-4 flex items-center hover:bg-gray-100"
    >
        <MailIcon className="mr-3" /> Contact
    </button>
    </div>
  </div>
);

export default MobileMenu;