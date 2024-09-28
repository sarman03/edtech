import { Boxes } from '@/components/ui/background-boxes'
import React from 'react'

const page = () => {
  return (
    <div className="h-[90vh] relative overflow-hidden bg-gradient-to-r from-blue-100 to-pink-100 dark:from-black dark:to-zinc-900 dark:text-slate-100">
      <div className="absolute inset-0 h-full">
        <Boxes />
      </div>
      
    <div className="flex items-center justify-center h-full">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Lorem epsum</h1>
        <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </div>
      <div className="mt-6">
      </div>
    </div>

    <div>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
    </div>
    <div>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
    </div>
    <div>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
    </div>

    </div>
  )
}

export default page
