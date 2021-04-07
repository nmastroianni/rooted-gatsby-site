import React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import ContactForm from "../components/ContactForm"

export default function Contact({ location }) {
  return (
    <Layout>
      <Seo title="Contact Us" />
      <h1 className="text-xl mt-1 sm:mt-2 lg:mt-4 text-center sm:text-2xl md:text-4xl">
        Contact Us
      </h1>
      <h2 className="text-center text-lg sm:text-xl lg:text-2xl mt-1 sm:mt-2 lg:mt-3">
        Send Us an Email or Call Us: 1-856-375-2440
      </h2>
      <div className="container max-w-3xl mx-auto rounded-md p-2">
        <ContactForm></ContactForm>
      </div>
    </Layout>
  )
}
