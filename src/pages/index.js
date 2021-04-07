import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/Seo"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import About from "../components/About"
import Services from "../components/Services"
import Footer from "../components/Footer"

export default function Home(props) {
  const aboutImages = props.data.flImages.nodes.filter(node =>
    node.name.includes("about")
  )
  const serviceImages = props.data.flImages.nodes.filter(node =>
    node.name.includes("service")
  )
  return (
    <>
      <Seo title="Home" />
      <Hero />
      <Navbar />
      <About images={aboutImages} />
      <Services images={serviceImages} />
      <section className="mb-3">
        <h2 className="bg-indigo-700 text-white text-center text-lg sm:text-xl md:text-2xl lg:text-3xl p-3 mb-3 sm:mt-4 sm:mb-4">
          Office Hours &amp; Address
        </h2>
        <div className="container mx-auto px-2 sm:px-0 sm:pt-4 sm:pb-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="px-1 sm:px-3">
              <h3 className="text-xl text-center text-indigo-800 m-2 sm:m-3">
                Hours
              </h3>
              <p className="text-center mb-2 sm:mb-3">
                We are proud to offer morning, afternoon, evening and weekend
                hours. Each therapist will work with individuals to tailor a
                therapy schedule that is sustainable.
              </p>
            </div>
            <div className="px-1 sm:px-3">
              <h3 className="text-xl text-center text-indigo-800 m-2 sm:m-3">
                Address
              </h3>
              <p className="text-center mb-2 sm:mb-3">
                1878 East Marlton Pike Suite 5 <br />
                Cherry Hill, NJ 08003
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export const data = graphql`
  {
    flImages: allFile {
      nodes {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
          id
        }
        name
      }
    }
  }
`
