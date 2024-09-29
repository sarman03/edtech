import React from 'react'

const ServicesPage = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom web solutions tailored to your business needs.",
    },
    {
      title: "Mobile App Development",
      description: "Innovative mobile applications for iOS and Android platforms.",
    },
    {
      title: "Cloud Services",
      description: "Scalable and secure cloud infrastructure and management.",
    },
  ]

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-r from-blue-100 to-pink-100 dark:from-black dark:to-zinc-900 dark:text-slate-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16 pt-20 mt-20">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Empowering your digital journey with cutting-edge solutions and expert support.
          </p>
        </div>

        <div id='services' className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
              <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServicesPage
