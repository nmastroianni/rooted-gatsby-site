import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

export default function Locations(props) {
  return (
    <Layout>
      <Seo title="Locations" />
      <div className="container mx-auto max-w-2xl px-3 sm:px-4 md:px-5 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-center m-1 sm:m-2 md:m-3 lg:m-4">
          Where We Are Located
        </h1>
        <h2 className="text-xl lg:text-2xl text-indigo-800 text-center m-2 sm:m-3">
          1878 East Marlton Pike Suite 2
        </h2>
        <h3 className="w-3/4 mx-auto mb-2 sm:mb-4 text-lg bg-indigo-500 rounded-md px-3 py-2 self-end text-white hover:bg-gray-300 hover:text-gray-900 border hover:border-black">
          <a href="tel:1-856-375-2440">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-4 w-4 inline"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span className="px-2">Call Now</span>
          </a>
        </h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.6437086870374!2d-74.97167078461959!3d39.90460867942799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6cb4d6c0be2f9%3A0x4f7daa569ea95c71!2s1878%20NJ-70%20%232%2C%20Cherry%20Hill%2C%20NJ%2008003!5e0!3m2!1sen!2sus!4v1587925649987!5m2!1sen!2sus"
          width="600"
          height="450"
          frameborder="0"
          className="border-none w-full shadow rounded-md"
          allowfullscreen=""
          aria-hidden="false"
          title="Google Maps for Rooted Psychotherpay and Counseling"
        ></iframe>
      </div>
    </Layout>
  )
}
