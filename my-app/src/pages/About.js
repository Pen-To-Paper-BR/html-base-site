import React from 'react';

const About = ({ setCurrentPage }) => (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
        <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">About Us</h2>
        <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
            We are a passionate team dedicated to creating innovative solutions. 
            Our mission is to deliver exceptional digital experiences that inspire 
            and transform businesses.
        </p>
        </div>
    </div>
);

export default About;
