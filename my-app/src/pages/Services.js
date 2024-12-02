import React from 'react';

const Services = ({ setCurrentPage }) => (
    <div className="min-h-screen bg-gradient-to-tr from-green-200 to-blue-300 py-16">
        <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
            {[
            { 
                title: "Web Development", 
                description: "Creating responsive and modern web applications." 
            },
            { 
                title: "Digital Marketing", 
                description: "Innovative marketing strategies for your business." 
            },
            { 
                title: "Consulting", 
                description: "Expert advice to drive your digital transformation." 
            }
            ].map((service, index) => (
            <div 
                key={index} 
                className="bg-white rounded-lg shadow-lg p-6 text-center hover:scale-105 transition-transform"
            >
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
            </div>
            ))}
        </div>
        </div>
    </div>
);

export default Services;
