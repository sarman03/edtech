
import React from 'react'
import Faq from './Faq'
import { Spotlight } from './ui/Spotlight'
import Courses from './Courses'
import Contact from './Contact'

const HeroSection = () => {
  return (
    <div className='relative pt-20 mt-20 pb-20'>
      <Spotlight
        className="-top-30 left-0 pl-4 md:left-60 md:-top-20"
        fill="blue"
      />

      <div className='relative z-5 pt-14 w-full h-full flex flex-col items-center justify-center'>
        <h1 className='text-4xl md:text-6xl font-bold text-center text-gray-800 dark:text-white mb-4'>
          Revolutionize Your
          <br />
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-950 to-blue-600'> Learning Journey </span>
        </h1>
        <p className='text-xl md:text-2xl text-center text-gray-600 dark:text-gray-300 mb-8 max-w-2xl'>
          Unlock your potential with our cutting-edge edutech platform. Learn, grow, and succeed.
        </p>
        <div className='flex flex-col sm:flex-row gap-4'>
          <button className='px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300'>
            Get Started
          </button>
          <button className='px-8 py-3 bg-transparent border-2 border-blue-600 text-blue-600 dark:text-white rounded-full hover:bg-blue-600 hover:text-white transition duration-300'>
            Learn More
          </button>
        </div>
      </div>


      {/*courses*/}
      <div className='mt-20'>
        <Courses />
      </div>



      
      {/*faqs */}
      <div className='pt-4 mb-20 mt-24'>
        <Faq />
      </div>


      {/*contact*/}
      <div className='pt-4'>
        <Contact />
      </div>
    </div>
  )
}

export default HeroSection
