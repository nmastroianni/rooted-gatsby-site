import React from "react"
import ServiceCard from "./ServiceCard"
export default function About({ images }) {
  return (
    <section className="mb-3 pb-2 sm:px-0">
      <h2 className="bg-indigo-600 text-white text-center text-lg sm:text-xl md:text-2xl lg:text-3xl p-3 mb-3">
        Services We Offer
      </h2>
      <div className="container mx-auto px-2 sm:px-0 sm:pb-4 sm:pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-6">
          {images.map(image => {
            return (
              <ServiceCard
                key={image.childImageSharp.id}
                image={image.childImageSharp}
                name={image.name}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
