import React from 'react';

const ContactCard: React.FC = () => {
  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // const formData = new FormData(event.currentTarget);
    const response = await fetch('/__forms.html', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      // body: new URLSearchParams(formData as FormData).toString(), // Changed 'any' to 'FormData'
    });

    if (response.ok) {
      // Reload the page after successful submission
      window.location.reload();
    } else {
      console.error('There was an error submitting the form.');
    }
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-center">
        <div className="bg-gradient-to-r from-blue-100 to-pink-100 dark:from-black dark:to-zinc-900 rounded-lg shadow-lg p-6 max-w-2xl w-full">
          <form name="contact" onSubmit={handleFormSubmit} className="text-sm">
            {/* Removed netlify-honeypot and data-netlify attributes */}
            {/* Removed hidden input fields for Netlify */}
            <div className="grid grid-cols-2 gap-4 mb-3">
              <div>
                <label htmlFor="firstName" className="block text-gray-800 dark:text-white mb-1">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="bg-transparent border-b border-gray-800 dark:border-white p-2 w-full text-gray-800 dark:text-white placeholder-gray-600 dark:placeholder-gray-400 focus:outline-none text-sm"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-gray-800 dark:text-white mb-1">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="bg-transparent border-b border-gray-800 dark:border-white p-2 w-full text-gray-800 dark:text-white placeholder-gray-600 dark:placeholder-gray-400 focus:outline-none text-sm"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-3">
              <div>
                <label htmlFor="email" className="block text-gray-800 dark:text-white mb-1">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="bg-transparent border-b border-gray-800 dark:border-white p-2 w-full text-gray-800 dark:text-white placeholder-gray-600 dark:placeholder-gray-400 focus:outline-none text-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="jobTitle" className="block text-gray-800 dark:text-white mb-1">Job Title</label>
                <input
                  type="text"
                  id="jobTitle"
                  name="jobTitle"
                  className="bg-transparent border-b border-gray-800 dark:border-white p-2 w-full text-gray-800 dark:text-white placeholder-gray-600 dark:placeholder-gray-400 focus:outline-none text-sm"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-3">
              <div>
                <label htmlFor="phone" className="block text-gray-800 dark:text-white mb-1">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="bg-transparent border-b border-gray-800 dark:border-white p-2 w-full text-gray-800 dark:text-white placeholder-gray-600 dark:placeholder-gray-400 focus:outline-none text-sm"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-800 dark:text-white mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="bg-transparent border-b border-gray-800 dark:border-white p-2 w-full text-gray-800 dark:text-white placeholder-gray-600 dark:placeholder-gray-400 focus:outline-none text-sm"
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="block text-gray-800 dark:text-white mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                rows={3}
                className="bg-transparent border-b border-gray-800 dark:border-white p-2 w-full text-gray-800 dark:text-white placeholder-gray-600 dark:placeholder-gray-400 focus:outline-none text-sm"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-black py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 text-sm"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
