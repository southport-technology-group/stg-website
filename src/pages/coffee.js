import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FooterCTA from "../components/footer-call-to-action"
import OneHourAssessmentPDF from "../../static/Southport Technology Group - 1-Hour Assessment.pdf"

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
            <a href={OneHourAssessmentPDF} target="_blank">
              Our conversation
            </a>{" "}
            will focus on manual business workflows, data, and system
            integrations that are less than optimized. We’re looking for
            workflows that can be easily automated and save your business
            hundreds of hours per year.
          </p>
          <h4 className="text-2xl md:text-3xl mt-10 md:mt-20 mb-3 md:mb-3">
            <a href="" target="_blank">
              Book Now
            </a>
          </h4>
          <p className="text-xl md:text-2xl">
            As a thanks for your time, we'll send you a{" "}
            <b>$10 Starbucks Gift Card</b> before the meeting. It will be sent
            to the email you use for the Calendar invite.
          </p>
        </div>
        <div className="w-100 md:w-6/12 lg:w-5/12 bg-blue-700 px-5 py-10 md:p-10 lg:p-20 md:ml-20">
          <h2 className="text-6xl md:text-5xl xl:text-8xl text-blue-400">25</h2>
          <p className="text-blue-100 text-xl pt-4">
            combined years of product & software experience
          </p>
          <h2 className="text-6xl md:text-5xl xl:text-8xl text-blue-400 mt-20">
            95%
          </h2>
          <p className="text-blue-100 text-xl pt-4">
            of customers return for additional projects
          </p>
        </div>
      </div>
    </section>

    <FooterCTA />
  </Layout>
)

export default Coffee
