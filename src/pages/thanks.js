import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

export default function Thanks() {
  return (
    <Layout>
      <Seo title="Thank You" />
      <h1 className="font-bold text-xl mt-1 sm:mt-2 lg:mt-4 text-center sm:text-2xl md:text-4xl text-indigo-800">
        Thank You!
      </h1>
      <div className="container max-w-2xl mx-auto rounded-md p-2 ">
        <p className="text-xl text-indigo-700 text-center">
          A dedicated member of our staff will get back to you soon.
        </p>
      </div>
    </Layout>
  )
}
