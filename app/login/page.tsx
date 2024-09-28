import React from 'react'

const LoginPage = () => {
  return (
    <div className="flex h-screen">
      {/* Left section - 60% width with gradient background */}
      <div className="w-3/5 bg-gradient-to-br from-blue-100 to-pink-100 dark:from-black dark:to-zinc-900">
        {/* Add content for the left section if needed */}
      </div>

      {/* Right section - 40% width with login form */}
      <div className="w-2/5 flex items-center justify-center bg-gradient-to-br from-blue-100 to-pink-100 dark:from-black dark:to-zinc-900">
        <div className="w-4/5 max-w-md">
          <h2 className="text-2xl font-bold mb-2 text-center dark:text-white">Welcome to App</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 text-center">Continue your learning journey</p>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-sm font-medium dark:text-white">Email</label>
              <input type="email" id="email" className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:text-white" required />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block mb-2 text-sm font-medium dark:text-white">Password</label>
              <input type="password" id="password" className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:text-white" required />
            </div>
            <button type="submit" className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage