import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import { GatsbyImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"

export default function Template(props) {
  const {
    data: {
      contentfulBlogPost: {
        author,
        featuredImage: { gatsbyImageData },
        date,
        title,
        content,
      },
    },
  } = props

  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }

  const postDate = new Date(date).toLocaleDateString("en-US", dateOptions)
  const Bold = ({ children }) => (
    <span className="font-bold text-indigo-900">{children}</span>
  )

  const Italic = ({ children }) => <span className="italic">{children}</span>
  const Text = ({ children }) => <p className="">{children}</p>
  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <Bold>{text}</Bold>,
      [MARKS.ITALIC]: text => <Italic>{text}</Italic>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    },
  }

  return (
    <Layout>
      <Seo title={title} />
      <div className="overflow-hidden bg-gradient-to-b from-indigo-500">
        <GatsbyImage
          image={gatsbyImageData}
          className="w-full transition duration-500 ease-in-out transform hover:opacity-30 hover:scale-105 origin-center"
          alt="featured image for blog post"
        />
      </div>

      <article className="container mx-auto max-w-2xl px-3 sm:px-4 md:px-5">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-center m-1 sm:m-2 md:m-3 lg:m-4">
          {title}
        </h1>
        <h2 className="text-center text-gray-600">
          <em>Written by {author[0].title}</em>
        </h2>
        <h3 className="text-gray-600 text-center mb-2 sm:mb-3 md:mb-4 lg:mb-6">
          <em>{postDate}</em>
        </h3>

        <section className="lg:text-xl">
          {renderRichText(content, options)}
        </section>
      </article>
    </Layout>
  )
}

export const data = graphql`
  query getPost($slug: String) {
    contentfulBlogPost(slug: { eq: $slug }) {
      date
      featuredImage {
        gatsbyImageData
      }
      title
      slug
      author {
        title
      }
      content {
        raw
      }
    }
  }
`
