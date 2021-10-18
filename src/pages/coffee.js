import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import OneHourAssessmentPDF from "../../static/Southport Technology Group - 1-Hour Assessment.pdf"
import PouringCoffee from "../images/coffee-cup.webp"

const Coffee = () => (
  <Layout>
    <SEO title="Coffee" />
    <section className="lg:container mx-auto mt-10 md:px-20 md:my-20">
      <div className="md:flex md:items-center">
        <div className="w-100 md:w-6/12 lg:w-7/12 px-5 md:px-0">
          <p className="md:text-xl uppercase tracking-wide font-bold text-blue-400">
            Join Us
          </p>
          <h1 className="text-3xl md:text-5xl leading-tight sm:leading-tight md:leading-tight lg:leading-tight">
            Half-hour, remote coffee sessions
          </h1>{" "}
          <span className="border-b-2 border-blue-400 w-24 my-5 block"></span>{" "}
          <p className="text-xl md:text-2xl">
            A complimentary operations meeting followed by an hour of research
            from our team. You will receive a 1-2 page breakdown of the
            conversation with specific technology recommendations for each
            operational challenge identified.
          </p>
          <br />
          <p className="text-xl md:text-2xl">
            <a
              href={OneHourAssessmentPDF}
              target="_blank"
              rel="noreferrer noopener"
              className="underline lg:hover:text-blue-400"
            >
              Our conversation
            </a>{" "}
            will focus on manual business workflows, data, and system
            integrations that are less than optimized. We’re looking for
            workflows that can be easily automated and save your business
            hundreds of hours per year.
          </p>
          <div className="mt-10 mb-10">
            <a
              href="https://calendly.com/trevorewen/coffee"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-block text-xl font-bold bg-blue-700 text-white hover:shadow-xl py-3 px-5"
            >
              Book Now
            </a>
          </div>
          <p className="text-xl md:text-2xl">
            As a thanks for your time, we'll send you a{" "}
            <b>$10 Starbucks Gift Card</b> before the meeting. It will be sent
            to the email you use for the calendar invite.
          </p>
        </div>
        <div className="w-100 md:w-6/12 lg:w-5/12 mt-10 md:mt-0 md:ml-20">
          <img
            className="relative w-full"
            src={PouringCoffee}
            alt="Free cup of coffee"
          />
        </div>
      </div>
    </section>
  </Layout>
)

export default Coffee
