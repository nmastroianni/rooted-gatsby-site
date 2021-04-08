import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

export default function Footer(props) {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-indigo-900 text-white p-4">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="text-center flex items-center justify-around sm:justify-around sm:border-r border-indigo-700">
          <Link to="/">
            <StaticImage
              src="../images/favicon-32x32.png"
              className="h-5 w-5"
              alt="Logo for Rooted Psychotherapy and Counseling"
              placeholder="blurred"
              layout="fullWidth"
            />
          </Link>
          <a href="https://www.facebook.com/rootedpsychotherapyorg/">
            <img
              src="https://s2.svgbox.net/social.svg?ic=facebook&color=f9f9f9"
              alt="facbook icon"
              className="h-4 w-4 transition duration-500 ease-in-out transform hover:scale-125"
            />
          </a>
          <a href="https://www.instagram.com/rootedpsychotherapy/">
            <img
              src="https://s2.svgbox.net/social.svg?ic=instagram&color=f9f9f9"
              alt="instagram icon"
              className="h-4 w-4 transition duration-500 ease-in-out transform hover:scale-125"
            />
          </a>
          <Link to="/contact/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-5 w-5 transition duration-500 ease-in-out transform hover:scale-125"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </Link>
          <a href="tel:1-856-375-2440">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-5 w-5 transition duration-500 ease-in-out transform hover:scale-125"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </a>
        </div>
        <div className="text-center flex flex-col justify-center">
          <Link to="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
        </div>
        <div className="text-center sm:border-l border-indigo-700">
          <p>&copy; Copyright {year}</p>
          <p>Rooted Psychotherapy &amp; Counseling, LLC</p>
        </div>
      </div>
    </footer>
  )
}
