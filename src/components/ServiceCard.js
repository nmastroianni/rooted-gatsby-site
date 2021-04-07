import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

export default function ServiceCard(props) {
  const name = props.name.slice(8).replace("-", " ")
  return (
    <div className="rounded-md bg-gradient-to-b from-indigo-100 mt-2 mb-2 shadow">
      <h3 className="text-xl capitalize text-center text-indigo-800 p-3">
        {name}
      </h3>
      <GatsbyImage
        image={props.image.gatsbyImageData}
        className="rounded-b-md opacity-90"
        alt={"depiction of our " + name + " service"}
      />
    </div>
  )
}
