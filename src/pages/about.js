import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import FooterCTA from "../components/footer-call-to-action"
import TrevorPic from "../images/trevor-profile.png"
import NicholasPic from "../images/nicholas-profile.png"

const About = () => (
  <Layout>
    <SEO title="About" />
    <section className="lg:container mx-auto mt-10 md:px-20 md:my-20">
      <div className="md:flex md:items-center">
        <div className="w-100 md:w-6/12 lg:w-7/12 px-5 md:px-0">
          <p className="md:text-xl uppercase tracking-wide font-bold text-blue-400">
            About Us
          </p>
          <h1 className="text-3xl md:text-5xl leading-tight sm:leading-tight md:leading-tight lg:leading-tight">
            Solutions Tailored To Your Unique Needs
          </h1>{" "}
          <span className="border-b-2 border-blue-400 w-24 my-5 block"></span>{" "}
          <p className="text-xl md:text-2xl">
            {" "}
            We dig in with you to identify revenue-driving products,
            opportunities for automation, and ways to streamline your operations
            with software. Then, we'll help you craft the ideal solution.{" "}
          </p>
          <h2 className="text-2xl md:text-3xl mt-10 md:mt-20 mb-3">
            Our Pricing Commitment
          </h2>
          <p className="text-md md:text-lg mb-10">
            We do not charge by the hour. We won't build what you don't have
            budget for. Our reward is customer alignment and many clients coming
            back for additional projects.
          </p>
          <h2 className="mt-10 md:mt-20">Featured in DesignRush.com's</h2>
          <p className="mb-10">
            <a
              href="https://www.designrush.com/agency/software-development"
              className="underline"
            >
              Top Software Development Companies
            </a>
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

    <section className="bg-blue-100 py-10 md:py-28 md:mt-28">
      <div className="lg:container mx-auto px-5 md:px-20">
        <h2 className="text-3xl lg:text-5xl mb-5 md:mb-10">Team</h2>
        <div>
          <div className="md:grid md:grid-cols-2 md:gap-20">
            <div className="bg-white p-5 md:p-10 shadow-xl mb-20 md:mb-0">
              <img className="mx-auto mb-5" src={TrevorPic} alt="Trevor Ewen" />
              <h4 className="text-xl lg:text-3xl text-center mb-1">
                Trevor Ewen
              </h4>
              <p className="lg:text-xl text-center mb-5">
                Chief Executive Officer
              </p>
              <p>
                Trevor is an experienced software engineer and project manager.
                He's overseen full-stack teams in clean energy, insurance,
                finance, and media. Notable engagements include Morgan Stanley,
                HBO, Bloomberg, Honest Buildings (now Procore), RunEnergy, Black
                Bear Energy, and PRco USA. He has an MBA from London Business
                School and an MBA from Columbia Business School.
              </p>
            </div>
            <div className="bg-white p-5 md:p-10 shadow-xl">
              <img
                className="mx-auto mb-5"
                src={NicholasPic}
                alt="Nicholas Evans"
              />
              <h4 className="text-xl lg:text-3xl text-center mb-1">
                Nicholas Evans
              </h4>
              <p className="lg:text-xl text-center mb-5">
                Chief Product Officer
              </p>
              <p>
                Nicholas is a product manager & UX designer. As the fifth
                employee at Reverb.com, he helped lead the product organization
                and grow Reverb from a few thousand in revenue to tens of
                millions and an eventual sale to Etsy. He has deep experience in
                e-commerce and marketplaces and has run hundreds of product
                experiments. Prior to Reverb, he was a design & innovation
                consultant at Gravitytank and IA Collaborative. Notable
                engagements include GE, Samsung, SC Johnson, OfficeMax, and
                ClubCorp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <FooterCTA />
  </Layout>
)

export default About
