import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CollaborationImg from "../images/collaboration.jpg"
import PointingAtComputer from "../images/pointing-at-computer.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="STG" />
    {/* <Link to="/page-2/">Go to page 2</Link> <br /> */}
    <section className="bg-blue-200 relative">
      <div className="bg-blue-700 absolute h-full top-0 right-0 bottom-0 l-auto w-4/12"></div>
      <div className="container flex mx-auto px-5 md:px-10">
        <div className="w-5/12 py-40">
          <h1 className="text-5xl mb-4">
            Product Partners
          </h1>
          <p className="text-2xl mb-6">
            Pragmatic product experts and software engineers committed to helping your business thrive
            {/* We build products that grow your business */}
          </p>
          <button className="bg-blue-700 text-white hover:shadow-xl rounded py-3 px-5 font-bold">
            Start a Conversation
          </button>
        </div>
        <div className="w-7/12 pt-20 ml-20 -mb-20">
          <img className="relative" src={CollaborationImg} alt="Collaborating on a sketch" />
        </div>
      </div>
    </section>

    <section className="container mx-auto mt-40 px-5 md:px-10">
      <h2 className="text-5xl mb-4">
        Services
      </h2>
      <div className="w-8/12">
        <p className="text-2xl mb-6">
          We deliver revenue-driving product improvements & simple, consistent, low-maintenance software solutions at fixed price.
          Our prices and terms are set up-front. No long-term contracts, no billing by the hour. Simple proposals and on-time delivery.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-10">
        <div className="border-blue-400 bg-white p-10 shadow-xl">
          <div className="flex justify-center mb-10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="64px" height="64px" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <h4 className="text-lg mb-2">Custom Software</h4>
          <p>
            We write the code. We provision the infrastructure. We buy your managed services. We won't invent something you can get off the shelf.
          </p>
        </div>
        <div className="border-blue-400 bg-white p-10 shadow-xl">
          <div className="flex justify-center mb-10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="64px" height="64px" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
          <h4 className="text-lg mb-2">Experimentation & Conversion Rate Optimization</h4>
          <p>
            We help you identify meaningful customer problems, solve those problems, and drive incremental revenue for your business through experimentation and optimization.
          </p>
        </div>
        <div className="border-blue-400 bg-white p-10 shadow-xl">
          {/* <img className="icon" src="images/manifying-glass.svg" alt="magnifying glass"> */}
          <div className="flex justify-center mb-10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="64px" height="64px" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h4 className="text-lg mb-2">Technical & Product Due Diligence</h4>
          <p>
            We work with business buyers to analyze the quality of an acquisition target's product & technology. We put together a standard, detailed report (example here).
          </p>
        </div>
      </div>
      <img className="mt-40" src={PointingAtComputer} alt="Two people looking at computer together" />
    </section>

    <section className="container mx-auto mt-40 px-5 md:px-10">
      <h2 className="text-5xl mb-4">
        What Makes Us Different
      </h2>
      <p className="text-2xl mb-6">
        We'll dig in with you to identify revenue-driving products, process efficiencies, and the ideal software solutions.
      </p>
    </section>


    <section className="container mx-auto mt-40 px-5 md:px-10">
      <h2 className="text-5xl mb-4">
        Get In Touch
      </h2>
      <p className="text-2xl mb-6">
          <a href="mailto:contact@southportventures.com">contact@stg.software</a>
      </p>
    </section>
  </Layout>
)

export default IndexPage
