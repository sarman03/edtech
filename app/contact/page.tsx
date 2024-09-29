'use client'

import ContactCard from "@/components/ContactCard"
import React, { useEffect, useState } from "react";

const ContactForm = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden pb-5 bg-gradient-to-r from-blue-100 to-pink-100 dark:from-black dark:to-zinc-900">
      {/*<Image
        src="/images/contact.jpg"
        alt="Contact background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="pr-12 pl-1 w-full h-auto"
        priority
      /> */}

      <div className={`absolute inset-0 bg-opacity-50 transition-transform duration-1000 ease-out ${showContent ? 'translate-x-0' : 'translate-x-full'}`} />
      <div className={`relative pt-24 p-1 flex justify-end items-center h-full transition-transform duration-1000 ease-out ${showContent ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="w-full mt-7 md:w-[40%] ml-auto">
          <div className="p-2 md:p-8  bg-opacity-50 rounded-lg">
            <h2 className="text-3xl font-bold mb-1 text-black dark:text-white">Contact us</h2>
            <p className="text-blackdark:text-white mb-10">We will be in touch soon...</p>

            <ContactCard />

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
