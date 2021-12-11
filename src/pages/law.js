import React from "react"
import FooterCTA from "../components/footer-call-to-action-b"

import SEO from "../components/seo"
import LawImage from "../images/campaigns/law-resized-optimized.jpg"
import SanfordLawFirm from "../components/case-cells/sanford-law-firm"

const Law = () => {
  return (
    <main>
      <SEO title="Law Firms" />
      <section
        className="govtech-bg-img bg-cover bg-center"
        style={{ backgroundImage: `url(${LawImage})` }}
      >
        <div className="bg-blue-700 bg-opacity-60 text-center">
          <div className="lg:container mx-auto px-5 md:px-20">
            <div className="w-10/12 mx-auto py-24 md:py-40 lg:py-80 xl:py-96 text-white">
              <h1 className="text-2xl md:text-3xl lg:text-5xl leading-snug sm:leading-snug md:leading-snug lg:leading-snug">
                Experienced Software Development for Law Firms
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
              Sanford Law Firm
            </h1>{" "}
            <span className="border-b-2 border-blue-400 w-24 my-5 block"></span>{" "}
            <p className="text-xl md:text-2xl mb-10">
              {" "}
              While both Salesforce and Dropbox have sophisticated APIs,
              government systems tend to be more old fashioned. The trickiest
              part of the process was the PACER document retrieval, which was
              entirely reliant on email. We implemented a universal inbound
              processing function utilizing serverless AWS Lambda functions.
              Emails come directly from PACER or are forwarded from members of
              the firm. The minute an email is intercepted, the relevant case
              data is parsed. The document link is collected, and the document
              itself is immediately downloaded utilizing the “free look” link.{" "}
            </p>
          </div>
          <SanfordLawFirm
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

export default Law
