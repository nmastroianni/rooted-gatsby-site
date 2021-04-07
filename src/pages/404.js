import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import { Link } from "gatsby"
export default function NotFound() {
  return (
    <Layout>
      <Seo title="Oops! Sorry." />
      <h1 className="font-bold text-xl mt-1 sm:mt-2 lg:mt-4 text-center sm:text-2xl md:text-4xl text-indigo-800">
        Oops!
      </h1>
      <div className="container max-w-2xl mx-auto rounded-md p-2 ">
        <p className="text-xl text-indigo-700 text-center">
          We are very sorry. We seem to be unable to locate the page you
          requested.
        </p>
        <p className="text-xl text-indigo-700 text-center">
          Would you like to head home?
        </p>
        <div className="text-center py-3">
          <Link
            to="/"
            className="px-3 py-2 rounded-md bg-indigo-700 text-gray-200 hover:text-white hover:bg-indigo-900"
          >
            Go Home
          </Link>
        </div>
      </div>
    </Layout>
  )
}
