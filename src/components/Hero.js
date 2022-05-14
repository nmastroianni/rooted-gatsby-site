import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { MdOutlineFiberNew } from "react-icons/md"

export default function Hero() {
  return (
    <section className="relative">
      <StaticImage
        src="../images/rootedbg.jpg"
        layout="fullWidth"
        placeholder="blurred"
        className="inset-0 h-screen z-0"
        alt="Roots of pine tree visible in soil"
      />
      <div className="absolute inset-0 h-screen bg-gray-800 bg-opacity-70"></div>
      <div className="absolute inset-0 h-screen flex flex-col items-center justify-center bg-gradient-to-t from-indigo-500 text-white text-center space-y-4">
        <h1 className="text-xl md:text-4xl lg:text-5xl font-bold">
          Rooted Psychotherapy &amp; Counseling
        </h1>
        <h2 className="text-lg md:text 2xl lg:text-3xl">
          Quality Care You Can Count On
        </h2>
        <Link
          to="/contact/"
          className="rounded-md px-3 py-2 border-2 border-white text-center text-white bg-indigo-800 bg-opacity-60 hover:bg-white hover:text-indigo-700"
        >
          Contact Us Today
        </Link>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 sm:gap-x-4">
          <a
            href="https://drive.google.com/drive/folders/1oZePa0S1c_fSWWYiVS8O_cAImMda0-gE"
            className="rounded-md px-3 py-2 border-2 border-white text-center text-white bg-indigo-800 bg-opacity-60 hover:bg-white hover:text-indigo-700"
          >
            Patient Resources
          </a>
          <a
            href="https://www.therapyportal.com/p/rootedpsychotherapy08003/"
            className="rounded-md px-3 py-2 border-2 border-white text-center text-indigo-700 bg-gray-100 hover:bg-white hover:text-indigo-700 relative"
          >
            Client Portal
            <MdOutlineFiberNew className="absolute -right-7 -top-7 w-10 h-10 text-yellow-400" />
          </a>
        </div>
        <Link to="#main-nav" className="w-8 h-8  absolute bottom-16">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="animate-bounce"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
            />
          </svg>
        </Link>
      </div>
    </section>
  )
}
