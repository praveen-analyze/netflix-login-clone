import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Fail = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-4">
      <div className="bg-black/80 p-8 rounded-lg w-full max-w-md text-center shadow-2xl border border-red-500/20">
        {/* Error Icon */}
        <div className="mb-6 flex justify-center">
          <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center">
            <svg
              className="w-10 h-10 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>

       
        <h1 className="text-4xl font-bold text-white mb-2">Oops!</h1>
        <p className="text-xl text-red-400 mb-4 font-semibold">Login Failed</p>
        <p className="text-gray-400 mb-8">
          Sorry, something went wrong with your login. Please check your credentials and try again.
        </p>
        <button
          onClick={() => navigate('/')}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
        >
          Try Again
        </button>

        {/* Additional Info */}
        <p className="text-gray-500 text-sm mt-6">
          If the problem persists, please contact support
        </p>
      </div>
    </div>
  )
}
