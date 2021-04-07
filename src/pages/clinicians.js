import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import ClinicianCard from "../components/ClinicianCard"

export default function Clinicians(props) {
  const {
    data: {
      allContentfulClinicians: { nodes },
    },
  } = props
  return (
    <Layout>
      <Seo title="Clinicians" />
      <div className="container mx-auto max-w-2xl px-3 sm:px-4 md:px-5">
        <h1 className="text-xl mt-1 mb-1 sm:mt-2 lg:mt-4 text-center sm:text-2xl md:text-4xl">
          Meet Our Team
        </h1>
        <section className="flex flex-col">
          {nodes.map(node => {
            return <ClinicianCard key={node.id} data={node} />
          })}
        </section>
      </div>
    </Layout>
  )
}

export const data = graphql`
  {
    allContentfulClinicians(sort: { order: ASC, fields: title }) {
      nodes {
        id
        excerpt
        photo {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        }
        title
        psychologyTodayProfile
      }
    }
  }
`
