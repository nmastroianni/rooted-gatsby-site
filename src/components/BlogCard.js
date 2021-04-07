import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

export default function BlogCard(props) {
  const {
    data: {
      featuredImage: { gatsbyImageData },
      slug,
      title,
      excerpt,
    },
  } = props

  return (
    <Link to={`/blog/${slug}`}>
      <div className="overflow-hidden rounded-tl-md rounded-tr-md">
        <GatsbyImage
          image={gatsbyImageData}
          className="transition duration-500 ease-in-out transform hover:scale-110 origin-center"
          alt="featured image for blog post"
        />
      </div>
      <h2 className="text-2xl lg:text-3xl hover:text-indigo-800">{title}</h2>
      <p>{excerpt}</p>
      <button className="rounded-md mt-2 mb-2 bg-indigo-500 text-gray-200 px-3 py-2 hover:bg-indigo-800 hover:text-white">
        Read More
      </button>
    </Link>
  )
}
