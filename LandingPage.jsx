import React, { useState } from "react";

export default function LandingPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-indigo-50 to-blue-100 text-gray-800 font-sans flex flex-col">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-6 shadow-lg bg-gradient-to-r from-[#A13EFF] via-[#5A59FF] to-[#408FFF] text-white z-20">
        <h1 className="text-2xl font-semibold tracking-wide">ATS Tool</h1>

        {/* Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-10 font-medium text-white">
          {["Home", "Features", "Login", "Signup"].map((item) => (
            <li key={item} className="relative group cursor-pointer">
              <span className="group-hover:text-[#C7FBFF] transition">{item}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Nav */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out origin-top overflow-hidden px-6 ${
          isOpen ? "max-h-60 opacity-100 scale-y-100" : "max-h-0 opacity-0 scale-y-0"
        }`}
      >
        {["Home", "Features", "Login", "Signup"].map((item) => (
          <p key={item} className="py-2 text-base font-medium hover:text-[#C7FBFF] transition-colors">
            {item}
          </p>
        ))}
      </div>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-7xl grid md:grid-cols-2 items-center gap-16">
          {/* Left */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-[#A13EFF] via-[#5A59FF] to-[#408FFF] text-transparent bg-clip-text">
                Enhance Your Resume
              </span>
              <br />
              <span className="text-gray-800">To Get Shortlisted</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-md mx-auto md:mx-0">
              Use AI-powered analysis to improve your resume and beat Applicant Tracking Systems.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex gap-6 flex-wrap justify-center md:justify-start">
              <button className="px-8 py-3 rounded-full text-white bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-500 hover:to-blue-600 shadow-md hover:shadow-lg transition transform hover:scale-105">
                Upload Resume
              </button>
              <button className="px-8 py-3 rounded-full text-white bg-gradient-to-r from-indigo-700 to-purple-600 hover:from-indigo-600 hover:to-purple-500 shadow-md hover:shadow-lg transition transform hover:scale-105">
                Build ATS Resume
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="pt-9 flex justify-center">
            <img
              src="/ATS.png"
              alt="Score Card"
              className="max-w-50 max-h-50 object-contain"
            />
              </div>
            </div>
      </main>
    </div>
  );
}
