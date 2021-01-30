import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About" />
    <section className="container mx-auto mt-20 md:mt-40 px-5 md:px-10">
      <div className="md:flex">
        <div>
          <h2 className="text-5xl mb-4 leading-snug">
            We build intuitive software to help you grow your business
          </h2>
          <p className="text-2xl mb-6">
            We're fully full stack. We've done everything from ethnographic research with customers to uncover unmet needs to UI design to building ________________ from scratch.
          </p>
        </div>
        <div className="bg-blue-700 p-20 md:ml-20">
          <h2 className="text-8xl text-blue-400">25</h2>
          <p className="text-blue-100 text-xl pt-4">Combined years of software experience</p>
          <h2 className="text-8xl text-blue-400 mt-20">Number</h2>
          <p className="text-blue-100 text-xl pt-4">Context about number</p>
          <h2 className="text-8xl text-blue-400 mt-20">Number</h2>
          <p className="text-blue-100 text-xl pt-4">Context about number</p>
          <h2 className="text-8xl text-blue-400 mt-20">100M+</h2>
          <p className="text-blue-100 text-xl pt-4">In incremental revenue driven through experimentation</p>
        </div>
      </div>
    </section>

    <section className="container mx-auto py-40 px-20">
      <h2 className="text-5xl mb-10">
        Team
      </h2>
      <div>
        <div className="grid grid-cols-2 gap-20">
          <div className="border-blue-400 bg-white p-10 shadow-xl">
            <h4 className="text-4xl mb-2">Trevor Ewen</h4>
            <p className="text-2xl mb-10">
              Partner
            </p>
            <p>
              bio
            </p>
          </div>
          <div className="border-blue-400 bg-white p-10 shadow-xl">
            <h4 className="text-4xl mb-2">Nicholas Evans</h4>
            <p className="text-2xl mb-10">
              Partner
            </p>
            <p>
              bio
            </p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default About
