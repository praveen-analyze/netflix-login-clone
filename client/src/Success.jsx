import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Success = () => {
  const navigate = useNavigate()

  function Navbar() {
    return (
      <div className="flex justify-between items-center px-8 py-4 bg-black text-white sticky top-0 z-50">
        <div className="flex items-center gap-8">
          <h1 className="text-2xl md:text-3xl font-bold text-[#E50914] ">
            NETFLIX
          </h1>

          <div className="flex gap-5 text-sm md:text-base hidden md:flex">
            <p className="cursor-pointer hover:text-gray-300">TV Shows</p>
            <p className="cursor-pointer hover:text-gray-300">Movies</p>
            <p className="cursor-pointer hover:text-gray-300">Recently Added</p>
            <p className="cursor-pointer hover:text-gray-300">My List</p>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <p className="cursor-pointer">🔍︎</p>
          <button className="cursor-pointer bg-[#E50914] px-2 py-1 rounded"
            onClick={() => navigate("/")}>Logout</button>
        </div>
      </div>
    )
  }

  function Banner() {
    return (
      <div className="relative w-full h-[80vh]">
        <img
          src="https://image.tmdb.org/t/p/original/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg"
          alt="Stranger Things"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center">
          <div className="text-white px-10 max-w-xl">
            <h1 className="text-5xl font-bold mb-4">STRANGER THINGS</h1>
            <p className="mb-4">
              When a young boy vanishes, a small town uncovers a mystery
              involving secret experiments, terrifying forces and one strange girl.
            </p>

            <div className="flex gap-4">
              <button className="bg-white text-black px-6 py-2 rounded">
                ▶︎ Play
              </button>
              <button className="bg-gray-600/70 px-6 py-2 rounded">
                + My List
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  function Main() {

    const movies = [
      {
        name: "Stranger Things",
        img: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg"
      },
      {
        name: "Money Heist",
        img: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg"
      },
      {
        name: "Wednesday",
        img: "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg"
      },
      {
        name: "Dark",
        img: "https://image.tmdb.org/t/p/w500/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg"
      },
      {
        name: "Breaking Bad",
        img: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg"
      },
      {
        name: "Squid Game",
        img: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg"
      }
    ]

    return (
      <div className="px-8 mt-6">
        <h2 className="text-white text-2xl font-semibold mb-4">
          Popular on Netflix
        </h2>

        <div className="flex gap-4 overflow-x-scroll pb-4">
          {movies.map((movie, index) => (
            <div key={index} className="min-w-[180px] md:min-w-[220px]">
              <img
                src={movie.img}
                alt={movie.name}
                className="w-[180px] h-[260px] md:w-[220px] md:h-[320px] object-cover rounded-md hover:scale-110 transition duration-300"
              />
              <p className="text-white mt-2 text-sm font-medium">
                {movie.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Banner />
      <Main />
    </div>
  )
}