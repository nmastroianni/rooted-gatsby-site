import React from "react"
import { useState } from "react"
import { Link } from "gatsby"
import { MdOutlineFiberNew } from "react-icons/md"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <nav id="main-nav" className="bg-indigo-500">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
            {/* Mobile menu button */}
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={(menuOpen ? "hidden " : "block ") + " h-6 w-6"}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
                aria-hidden="true"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={(!menuOpen ? "hidden " : "block ") + " h-6 w-6"}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
                aria-hidden="true"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <Link
            to="/"
            className="flex justify-center items-center w-full lg:w-auto"
          >
            <h2 className="text-white font-medium w-full text-center lg:hidden">
              Rooted Psychotherapy <br /> &amp; Counseling
            </h2>
          </Link>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center space-x-4">
              <Link to="/">
                <h2 className="text-xl text-white font-medium hidden lg:block">
                  Rooted Psychotherapy &amp; Counseling
                </h2>
              </Link>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-auto sm:pr-0">
            <div className="hidden lg:block sm:ml-6">
              <div className="flex space-x-4">
                <Link
                  to="/contact/"
                  className="border border-white text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-white hover:text-indigo-700"
                >
                  Contact Us
                </Link>
                <a
                  href="https://www.therapyportal.com/p/rootedpsychotherapy08003/"
                  className="text-gray-100 hover:bg-indigo-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium relative"
                >
                  Client Portal
                  <MdOutlineFiberNew className="absolute right-0 -top-1 w-6 h-6 text-yellow-400" />
                </a>
                <Link
                  to="/"
                  activeClassName="active"
                  className="text-gray-100 hover:bg-indigo-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/clinicians/"
                  activeClassName="active"
                  className="text-gray-100 hover:bg-indigo-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Our Team
                </Link>
                <Link
                  to="/locations/"
                  activeClassName="active"
                  className="text-gray-100 hover:bg-indigo-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Our Office
                </Link>
                <Link
                  to="/blog/"
                  activeClassName="active"
                  partiallyActive={true}
                  className="text-gray-100 hover:bg-indigo-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={(menuOpen ? "block " : "hidden ") + "lg:hidden"}>
        <div className="px-2 pt-2 pb-3 space-y-1 lg:hidden flex flex-col">
          <a
            href="https://www.therapyportal.com/p/rootedpsychotherapy08003/"
            className="rounded-md px-3 py-2 border-2 border-white text-center text-indigo-700 bg-white relative"
          >
            Client Portal
            <MdOutlineFiberNew className="absolute right-1/2 translate-x-1/2 -top-1 w-6 h-6 text-yellow-400" />
          </a>
          <Link
            to="/contact/"
            className="text-gray-300 hover:bg-indigo-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact Us
          </Link>
          <Link
            to="/"
            activeClassName="active"
            className="text-gray-200 hover:bg-indigo-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Home
          </Link>
          <Link
            to="/clinicians/"
            activeClassName="active"
            className="text-gray-200 hover:bg-indigo-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Our Team
          </Link>
          <Link
            to="/locations/"
            activeClassName="active"
            className="text-gray-200 hover:bg-indigo-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Our Office
          </Link>
          <Link
            to="/blog/"
            activeClassName="active"
            partiallyActive={true}
            className="text-gray-200 hover:bg-indigo-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Blog
          </Link>
        </div>
      </div>
    </nav>
  )
}
