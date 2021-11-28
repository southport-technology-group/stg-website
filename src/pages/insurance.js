import React from "react"
import FooterCTA from "../components/footer-call-to-action-b";

import SEO from "../components/seo";
import InsuranceImage from "../images/campaigns/insurance.jpg";
import PRco from "../components/case-cells/prco";

const Insurance = () => {
  return (
    <main>
      <SEO title="Insurance" />
      <section
        className="govtech-bg-img bg-cover bg-center"
        style={{ backgroundImage: `url(${InsuranceImage})` }}
      >
        <div className="bg-blue-700 bg-opacity-60 text-center">
          <div className="lg:container mx-auto px-5 md:px-20">
            <div className="w-10/12 mx-auto py-24 md:py-40 lg:py-80 xl:py-96 text-white">
              <h1 className="text-2xl md:text-3xl lg:text-5xl leading-snug sm:leading-snug md:leading-snug lg:leading-snug">
                Experienced Software Development for the Insurance Industry
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
              PRco
            </h1>{" "}
            <span className="border-b-2 border-blue-400 w-24 my-5 block"></span>{" "}
            <p className="text-xl md:text-2xl">
              {" "}
              Since 2014, all new PRco contracts have moved into online rating
              and contract creation. E-Signature adoption is growing every month
              since the 2017 release. Every new dealer on E-Signature eliminates
              the entirety of the legacy printing, mailing, and data entry
              workflow.{" "}
            </p>
          </div>
          <PRco
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

export default Insurance;
