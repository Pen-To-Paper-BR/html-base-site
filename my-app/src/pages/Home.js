import React from 'react';

const Home = ({ setCurrentPage }) => (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
        <div className="text-center text-white p-8">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
            Welcome to MyTemplate
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto animate-fade-in-delay">
            A beautiful, modern website template built with React
        </p>
        <div className="space-x-4">
            <button 
            onClick={() => setCurrentPage('about')}
            className="bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-blue-50 transition"
            >
            Learn More
            </button>
            <button 
            onClick={() => setCurrentPage('contact')}
            className="border border-white text-white px-6 py-3 rounded-full hover:bg-white/20 transition"
            >
            Contact Us
            </button>
        </div>
        </div>
    </div>
);

export default Home;