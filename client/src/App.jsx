import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const App = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState("")
  const [pass, setPass] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  function handleUsername(evt) {
    setUser(evt.target.value)
    setError("")
  }

  function handleUserpass(evt) {
    setPass(evt.target.value)
    setError("")
  }

  function validateForm() {
    if (!user.trim()) {
      setError("Username is required")
      return false
    }
    if (!pass.trim()) {
      setError("Password is required")
      return false
    }
    if (pass.length < 3) {
      setError("Password must be at least 3 characters")
      return false
    }
    return true
  }

  function Check() {
    if (!validateForm()) {
      return
    }

    setLoading(true)
    axios
      .get(`http://localhost:3000/login?username=${user}&userpass=${pass}`)
      .then((data) => {
        setLoading(false)
        if (data.data === true) {
          navigate('/success')
        } else {
          setError("Invalid username or password")
          navigate('/fail')
        }
      })
      .catch((error) => {
        setLoading(false)
        setError("Server error. Please try again later.")
        console.error("Login error:", error)
      })
  }
  function Header() {
    return (
      <div>
        <h1 className="text-2xl md:text-4xl font-bold text-[#E50914]">
          NETFLIX
        </h1>
      </div>
    )
  }
  return (
    <div className="bg-black min-h-screen flex flex-col">

      {/* Header */}
      <div className="p-6">
        <h1 className="text-3xl md:text-4xl font-bold text-[#E50914]">
          NETFLIX
        </h1>
      </div>

      {/* Login Card */}
      <div className="flex justify-center items-center flex-1">
        <div className="bg-black/80 p-8 rounded-md w-87.5 text-white shadow-lg">

          <h1 className="text-3xl font-semibold mb-6">Sign In</h1>

          {error && (
            <div className="bg-red-500/20 border border-red-500 text-red-400 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          <input
            type="text"
            placeholder="Username"
            onChange={handleUsername}
            value={user}
            disabled={loading}
            className="w-full p-3 mb-4 bg-gray-700 rounded outline-none disabled:opacity-50"
          />

          <input
            type="password"
            placeholder="Password"
            onChange={handleUserpass}
            value={pass}
            disabled={loading}
            className="w-full p-3 mb-4 bg-gray-700 rounded outline-none disabled:opacity-50"
          />

          <button
            onClick={Check}
            disabled={loading}
            className="w-full bg-[#E50914] p-3 rounded font-semibold hover:bg-red-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Signing In...
              </>
            ) : (
              "Sign In"
            )}
          </button>

          <p className="text-gray-400 text-sm mt-4">
            New to Netflix? <span className="text-white cursor-pointer">Sign up</span>
          </p>

        </div>
      </div>
    </div>
  )
}