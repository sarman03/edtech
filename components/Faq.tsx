'use client'
import Image from "next/image";
import React, { useState } from "react";

const Faq = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setSelectedQuestion(selectedQuestion === index ? null : index);
  };

  const faqs = [
    {
      question: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      answer: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    },
    {
      question: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      answer: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    },
    {
      question: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      answer: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    },
    {
      question: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      answer: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    }
  ];

  return (
    <div id="contact-section" className="h-[60vh] relative w-full overflow-hidden bg-gradient-to-r from-blue-100 to-pink-100 dark:bg-gradient-to-r dark:from-zinc-900 dark:to-black flex flex-col items-center justify-center rounded-lg z-[5]">
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-100 to-pink-100 dark:bg-gradient-to-r dark:from-zinc-900 dark:to-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <div className="relative z-30 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:flex lg:justify-between">
          {/* FAQ Section */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">FAQs</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index}>
                  <button
                    onClick={() => toggleQuestion(index)}
                    className="w-full text-left flex justify-between items-center py-3 border-b border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white"
                  >
                    <span className="text-lg">{faq.question}</span>
                    <svg
                      className={`w-6 h-6 transition-transform transform ${
                        selectedQuestion === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {selectedQuestion === index && (
                    <div className="mt-2 text-gray-600 dark:text-gray-300">{faq.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="w-full lg:w-1/2 mt-16 lg:mt-0">
            <div className="text-center">
              <Image
                src="/images/faq.png" 
                alt="Contact illustration"
                width={200}
                height={80}
                className="mx-auto mb-4"
              />
              <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">Want to learn more?</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">Connect with us now! Our support team will help you within 2 hours.</p>
              <div className="flex justify-center space-x-4">
                <button className="flex items-center bg-white text-black px-4 py-2 rounded-lg border border-gray-300 hover:bg-green-500 hover:text-white transition-colors duration-300 text-sm">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                    />
                  </svg>
                  WhatsApp Us
                </button>
                <button className="flex items-center bg-white text-black px-4 py-2 rounded-lg border border-gray-300 hover:bg-blue-500 hover:text-white transition-colors duration-300 text-sm">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"
                    />
                  </svg>
                  Email Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
