import React from "react"
import FooterCTA from "../components/footer-call-to-action-b"

import SEO from "../components/seo"
import CleanEnergyImage from "../images/campaigns/renewable-energy-d.jpg"
import VerdeEnergyEfficiencyExperts from "../components/case-cells/verde-energy-efficiency-experts"

const CleanEnergy = () => {
  return (
    <main>
      <SEO title="Clean Energy Technology" />
      <section
        className="govtech-bg-img bg-cover bg-center"
        style={{ backgroundImage: `url(${CleanEnergyImage})` }}
      >
        <div className="bg-blue-700 bg-opacity-60 text-center">
          <div className="lg:container mx-auto px-5 md:px-20">
            <div className="w-10/12 mx-auto py-24 md:py-40 lg:py-80 xl:py-96 text-white">
              <h1 className="text-2xl md:text-3xl lg:text-5xl leading-snug sm:leading-snug md:leading-snug lg:leading-snug">
                Experienced Software Development for Clean Energy Companies
              </h1>
              <p className="text-xl md:text-2xl mt-5"></p>
            </div>
          </div>
        </div>
      </section>

      <section className="lg:container mx-auto mt-10 md:px-20 md:my-20">
        <div className="md:flex md:items-center">
          <div className="w-100 md:w-6/12 lg:w-7/12 px-5 md:px-0">
            <p className="md:text-xl uppercase tracking-wide font-bold text-blue-400">
              Featured Case Study
            </p>
            <h1 className="text-2xl md:text-4xl leading-tight sm:leading-tight md:leading-tight lg:leading-tight">
              Verde Energy Efficiency Experts
            </h1>{" "}
            <span className="border-b-2 border-blue-400 w-24 my-5 block"></span>{" "}
            <p className="text-xl md:text-2xl">
              {" "}
              In 2018, Southport Technology Group learned the workflow directly
              from the Verde EEE team members. We were keen to outline possible
              improvements and file delivery alternatives that would decrease
              costs. We developed a low-cost, cloud-based engine to connect
              Quick Base and HubSpot. Infrastructure arrived below the cost of a
              comparable SaaS alternative. Verde expected to recover their lost
              labor expenses within six months.{" "}
            </p>
          </div>
          <VerdeEnergyEfficiencyExperts
            invert={true}
            hideName={true}
            hideDescription={true}
            additionalClassNames="w-100 md:w-6/12 lg:w-5/12 bg-blue-700 md:ml-20"
          />
        </div>
      </section>

      <FooterCTA />
    </main>
  )
}

export default CleanEnergy
