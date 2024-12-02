import React from 'react';

const Contact = ({ setCurrentPage }) => (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">Contact Us</h2>
        <form className="space-y-4">
            <div>
            <label className="block mb-2 text-gray-700">Name</label>
            <input 
                type="text" 
                required 
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            </div>
            <div>
            <label className="block mb-2 text-gray-700">Email</label>
            <input 
                type="email" 
                required 
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            </div>
            <div>
            <label className="block mb-2 text-gray-700">Message</label>
            <textarea 
                required 
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
            />
            </div>
            <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
            Send Message
            </button>
        </form>
        </div>
    </div>
);

export default Contact;
