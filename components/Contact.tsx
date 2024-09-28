import React from 'react';
import { FaEnvelope } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <div className="shadow-md rounded-lg w-1/2 mx-auto">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-center mb-4">For More Updates, Subscribe to Our Newsletter</h2>
        <form className="space-y-4">
          <div className="flex items-center rounded-md overflow-hidden border border-gray-300">
            <div className="p-3">
              <FaEnvelope className="text-gray-500" />
            </div>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow p-3 outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;