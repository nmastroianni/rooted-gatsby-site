import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

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
          className="rounded-md px-3 py-2 border-2 border-white text-center text-white hover:bg-white hover:text-indigo-700"
        >
          Contact Us Today
        </Link>
        <a
          href="https://drive.google.com/drive/folders/1oZePa0S1c_fSWWYiVS8O_cAImMda0-gE"
          className="rounded-md px-3 py-2 border-2 border-white text-center text-white hover:bg-white hover:text-indigo-700"
        >
          Patient Resources
        </a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-8 h-8 animate-bounce absolute bottom-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  )
}
