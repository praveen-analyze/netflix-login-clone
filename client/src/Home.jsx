import React from 'react'
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  function Navbar() {
    return (
      <div className="flex justify-between items-center px-6 py-4 absolute w-full z-10">
        <h1 className="text-2xl md:text-4xl font-bold text-[#E50914]">
          NETFLIX
        </h1>

        <button className="px-3 py-1 md:px-4 md:py-2 bg-[#E50914] text-white rounded  cursor-pointer "
          onClick={() => navigate("/login")}>
          Sign Up
        </button>
      </div>
    )
  }

  function Main() {
    return (
      <div className="flex flex-col justify-center items-center text-center text-white min-h-screen px-5">

        <h1 className="text-3xl md:text-6xl font-bold max-w-3xl">
          Unlimited movies, TV shows, and more
        </h1>

        <h3 className="mt-4 text-lg md:text-2xl">
          Watch anywhere. Cancel anytime.
        </h3>

        <p className="mt-3 text-sm md:text-lg">
          Ready to watch? Sign in to start.
        </p>

        <button className="bg-[#E50914] py-2 px-3 md:px-6 md:py-3 mt-6 rounded text-lg font-semibold  cursor-pointer" onClick={() => navigate("/login")}>
          Get Started
        </button>

      </div>
    )
  }

  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=2070&auto=format&fit=crop')"
      }}
    >
      <Navbar />
      <Main />
    </div>
  )
}