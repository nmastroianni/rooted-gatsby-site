import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

export default function ClinicianCard(props) {
  return (
    <div className="w-full bg-gray-100 shadow rounded-md flex mt-3 mb-4">
      <GatsbyImage
        image={props.data.photo.gatsbyImageData}
        className=" w-2/5 sm:w-1/4 rounded-l-md filter-grayscale hover:filter-none"
      />
      <div className="w-3/5 sm:w-3/4 p-2 flex flex-col justify-between">
        <h2 className="text-xl lg:text-2xl text-indigo-800">
          {props.data.title}
        </h2>
        {props.data.excerpt != null ? (
          <p className="mb-2">{props.data.excerpt}</p>
        ) : (
          <div className="h-16"></div>
        )}

        {props.data.psychologyTodayProfile != null ? (
          <a
            href={props.data.psychologyTodayProfile}
            className="bg-indigo-900 rounded-md px-3 py-2 self-end text-white hover:bg-gray-100 hover:text-gray-900 border hover:border-black "
          >
            View Profile
          </a>
        ) : (
          <div className="h-12"></div>
        )}
      </div>
    </div>
  )
}
