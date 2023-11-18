import React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

export default function Contact({ location }) {
  return (
    <Layout>
      <Seo title="Contact Us" />
      <h1 className="text-xl mt-1 sm:mt-2 lg:mt-4 text-center sm:text-2xl md:text-4xl">
        Contact Us
      </h1>
      <h2 className="text-center text-lg sm:text-xl lg:text-2xl mt-1 sm:mt-2 lg:mt-3">
        Call Us:{" "}
        <a
          href="tel:1-856-375-2440"
          className="text-indigo-800 hover:underline"
        >
          1-856-375-2440
        </a>
      </h2>
      <div className="container max-w-3xl mx-auto rounded-md p-2 text-center my-6">
        <p className="my-8">Would you like to be our client?</p>
        <a
          href="https://forms.gle/jMC1AnNUqGqxd1ZLA"
          className="bg-indigo-800 text-white px-3 py-2 rounded-md w-1/4 disabled:bg-gray-800"
        >
          Complete an Intake Form
        </a>
      </div>
    </Layout>
  )
}
