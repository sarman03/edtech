'use client'
import React, { useState } from 'react'
import { testimonials } from './data'
import { shuffle } from 'lodash'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const Testimonial = () => {
  const shuffledTestimonials = shuffle(testimonials)
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 5) % shuffledTestimonials.length)
  }

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 5 + shuffledTestimonials.length) % shuffledTestimonials.length)
  }

  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-8">What Our Students Say</h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex overflow-x-auto" style={{ scrollbarWidth: "none" }}>
          {shuffledTestimonials.slice(currentSlide, currentSlide + 4).map((testimonial, idx) => (
            <div key={idx} className="text-gray-800 dark:text-white p-4 rounded-lg shadow-md flex-shrink-0" style={{ height: '300px', width: 'calc(25% - 20px)' }}>
              <p className="mb-4">{testimonial.quote}</p>
              <div className="flex items-center">
                <img src={testimonial.image} alt={testimonial.name} className="w-10 h-10 rounded-full mr-4" />
                <div>
                  <h3 className="text-lg font-bold">{testimonial.name}</h3>
                  <p className="text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end mt-4">
          <button onClick={handlePrevSlide} className="text-gray-800 dark:text-white"><FaArrowLeft className="text-2xl" /></button>
          <button onClick={handleNextSlide} className="text-gray-800 dark:text-white"><FaArrowRight className="text-2xl" /></button>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
