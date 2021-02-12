import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FooterCTA from "../components/footer-call-to-action"
import TypingAtComputer from "../images/typing-at-computer.jpg"
import PointingAtComputerWide from "../images/pointing-at-computer-wide.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="STG" />
    <section className="bg-blue-200 relative">
      <div className="hidden md:block bg-blue-700 absolute h-full top-0 right-0 bottom-0 l-auto w-0 md:w-4/12" />
      <div className="lg:container mx-auto flex flex-wrap md:flex-nowrap items-center">
        <div className="w-100 md:w-7/12 px-5 py-10 md:px-20 lg:pr-40 lg:py-20 xl:py-32">
          <h1 className="text-4xl lg:text-5xl leading-tight sm:leading-tight md:leading-tight lg:leading-tight">
            Custom Product & Software Development
          </h1>
          <span className="border-b-2 border-blue-400 w-24 my-5 block"></span>
          <p className="text-xl lg:text-2xl mb-10">
            We build products tailored to your needs that will save you time, make you money, and accelerate your growth.
          </p>
          <a href="/contact" className="inline-block text-xl bg-blue-700 text-white hover:shadow-xl py-3 px-5 font-bold">

            Get a Free Consultation
          </a>
        </div>
        <div className="w-100 md:w-5/12 md:pt-10 lg:pt-20 xl:-mb-20 md:pr-20">
          <img className="relative" src={TypingAtComputer} alt="Collaborating on a sketch" />
        </div>
      </div>
    </section>

    <section className="bg-blue-100">
      <div className="lg:container mx-auto py-10 md:py-20 lg:py-28 px-5 md:px-20">
        <h2 className="text-3xl lg:text-5xl">
          Services
        </h2>
        <span className="border-b-2 border-blue-400 w-24 my-5 block"></span>
        <div className="lg:w-8/12 mb-10">
          <p className="text-2xl">
            Our prices and terms are set up-front. No long-term contracts, no billing by the hour. Simple proposals and on-time delivery.
          </p>
        </div>
        <div className="lg:grid lg:grid-cols-3 lg:gap-10">
          <div className="bg-white border border-blue-200 p-10 shadow-xl mb-10">
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
          <div className="bg-white border border-blue-200 p-10 shadow-xl mb-10">
            <div className="flex justify-center mb-10">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="64px" height="64px" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h4 className="text-lg mb-2">Experimentation & Conversion Rate Optimization</h4>
            <p>
              We help you identify meaningful customer problems, experiment with solutions, and drive incremental revenue for your business through iteration and optimization.
            </p>
          </div>
          <div className="bg-white border border-blue-200 p-10 shadow-xl mb-10">
            <div className="flex justify-center mb-10">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="64px" height="64px" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-lg mb-2">Technical & Product Due Diligence</h4>
            <p>
              We work with business buyers to analyze the quality of an acquisition target's product & technology.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="lg:container mx-auto md:my-28 md:px-20">
      <div className="lg:flex lg:items-end relative">
        <img className="w-full lg:w-8/12 xl:w-9/12" src={PointingAtComputerWide} alt="Two people looking at computer together" />
        <div className="bg-blue-700 p-10 xl:p-14 z-10 lg:absolute lg:right-0 lg:bottom-0 lg:w-6/12 xl:w-5/12">
          <h2 className="text-2xl lg:text-4xl text-blue-200">
            How We're Different
          </h2>
          <span className="border-b-2 border-blue-400 w-24 my-5 block"></span>
          <p className="text-blue-100 text-lg">
            We deliver revenue-driving product improvements and simple, low-maintenance software solutions at a fixed price.
            <br/>
            <br/>
            Our iterative bid process ensures you know exactly what you're getting.
          </p>
        </div>
      </div>
    </section>

    <FooterCTA />

  </Layout>
)

export default IndexPage
