import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/Seo"
import Layout from "../components/Layout"
import BlogCard from "../components/BlogCard"

export default function Blog(props) {
  const {
    data: {
      allContentfulBlogPost: { nodes },
    },
  } = props
  return (
    <Layout>
      <Seo title="Blog" />
      <h1 className="text-xl mt-1 sm:mt-2 lg:mt-4 text-center sm:text-2xl md:text-4xl">
        Blog
      </h1>
      <div className="container max-w-3xl mx-auto rounded-md">
        <ul className="">
          {nodes.map(node => {
            return (
              <div key={node.contentful_id}>
                <li className="rounded-md p-2 mt-2 lg:mt-4 bg-indigo-50">
                  <BlogCard data={node} />
                </li>
                <hr className="mt-2 mb-2 lg:mt-4 lg:mb-4" />
              </div>
            )
          })}
        </ul>
      </div>
    </Layout>
  )
}

export const data = graphql`
  {
    allContentfulBlogPost(
      filter: { published: { eq: true } }
      sort: { fields: date, order: DESC }
    ) {
      nodes {
        featuredImage {
          gatsbyImageData
        }
        date
        contentful_id
        slug
        title
        excerpt
        author {
          title
        }
      }
    }
  }
`
