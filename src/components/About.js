import React from "react"
import AboutCard from "./AboutCard"

export default function About(props) {
  return (
    <section className="mb-3 pb-2 sm:px-0">
      <h2 className="bg-indigo-500 text-white w text-center text-lg sm:text-xl md:text-2xl lg:text-3xl p-3 mb-3">
        About Our Practice
      </h2>
      <div className="container mx-auto px-2 sm:px-0 sm:pb-4 sm:pt-4">
        <div className="grid grid-cols-1 px-2 lg:grid-cols-3 lg:gap-6">
          <AboutCard
            title="A Bit About Therapy"
            image={props.images[2].childImageSharp.gatsbyImageData}
          >
            <p>
              At Rooted Psychotherapy and Counseling, we implement effective
              psychotherapy methods to instill self-understanding among patients
              and encourage them to adopt new attitudes and feelings towards
              life situations. Our services are personalized to suit everyone’s
              needs, and we go the extra mile to provide you with all the tools
              you need to feel better.
            </p>
          </AboutCard>
          <AboutCard
            title="About Us"
            image={props.images[1].childImageSharp.gatsbyImageData}
          >
            <p>
              Since opening the doors of our practice in 2014, we have had the
              privilege of providing people in the tri-state area with a wide
              range of psychological services. Life can be overwhelming and
              sometimes even exhausting and we're here to guide you through
              those obstacles. At Rooted Psychotherapy and Counseling, our goal
              is to help you understand yourself more deeply through the
              psychotherapy experience, and get you back on track.
            </p>
          </AboutCard>
          <AboutCard
            title="About Insurance"
            image={props.images[0].childImageSharp.gatsbyImageData}
          >
            <p>
              We accept insurance plans from most of the major providers, and
              try to be as accommodating as possible when it comes to providing
              services. We will always do our best to accommodate your
              situation. We accept: Aetna, AmeriHealth, Blue Cross Blue Shield,
              Cigna, ComPsych, Horizon, Magellan Behavioral Health, Medicare,
              MHC, Optum, Quest, TRICARE, United Healthcare, Out of Network.
            </p>
          </AboutCard>
        </div>
      </div>
    </section>
  )
}
