import Image from "next/image";
import React from "react";

const courses = [
  {
    title: "System Design",
    description: ["title1", "title 1"],
    buttonLabel: "Buy Now",
    image: "",
    alt: "Course 1" // Replace with actual image path
  },
  {
    title: "RDBMS",
    description: ["title1", "title 1", "title1"],
    buttonLabel: "Buy Now",
    image: "",
    alt: "Course 2" // Replace with actual image path
  },
  {
    title: "Live Consultancy",
    description: ["title1", "title1"],
    buttonLabel: "Buy Now",
    image: "",
    alt: "Course 3" // Replace with actual image path
  }
];

const CohortCard: React.FC<{ course: any }> = ({ course }) => (
  <div className="text-gray-800 dark:text-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform">
    <Image
    src={course.image}
    alt={course.title}
    width={500}
    height={300}
    className="w-full h-48 object-cover"
  />
    <div className="p-4">
      <h3 className="text-lg font-bold mb-2">{course.title}</h3>
      <ul className="mb-4 space-y-1">
        {course.description.map((desc: string, idx: number) => (
          <li key={idx} className="flex items-center">
            <svg
              className="w-4 h-4 mr-2 text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            {desc}
          </li>
        ))}
      </ul>
      <button className="bg-purple-600 text-white px-4 py-2 rounded-lg w-full text-center hover:bg-purple-700">
        {course.buttonLabel}
      </button>
    </div>
  </div>
);

const CoursesSection = () => {
  return (
    <div id="courses-section" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-8">What You&apos;ll Learn with us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, idx) => (
            <CohortCard key={idx} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesSection;
