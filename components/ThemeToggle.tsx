"use client";

import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 mr-6 rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      <div className={`w-6 h-6 ${theme === 'dark' ? 'bg-yellow-400' : 'bg-gray-700'} rounded-full`}>
        <div className={`w-3 h-3 bg-white rounded-full transform transition-transform duration-200 ${theme === 'dark' ? 'translate-x-3 translate-y-0' : 'translate-x-0 translate-y-3'}`}></div>
      </div>
    </button>
  );
};

export default ThemeToggle;
