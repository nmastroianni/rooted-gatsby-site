import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

export default function AboutCard(props) {
  return (
    <div className="rounded-md bg-gradient-to-t from-indigo-100 mt-2 mb-2 shadow">
      <GatsbyImage
        image={props.image}
        className="rounded-t-md"
        alt={"decorative element for the " + props.title + " section"}
      />
      <h3 className="text-xl text-indigo-800 text-center">{props.title}</h3>
      <div className="p-3 text-indigo-800">{props.children}</div>
    </div>
  )
}
