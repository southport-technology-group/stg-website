import React from "react"
import FooterCTA from "../components/footer-call-to-action-b"

import SEO from "../components/seo"
import PrivateEquityImage from "../images/campaigns/private-equity-optimized.jpg"
import HavenEquity from "../components/case-cells/haven-equity"

const PrivateEquity = () => {
  return (
    <main>
      <SEO title="Private Equity" />
      <section
        className="govtech-bg-img bg-cover bg-center"
        style={{ backgroundImage: `url(${PrivateEquityImage})` }}
      >
        <div className="bg-blue-700 bg-opacity-60 text-center">
          <div className="lg:container mx-auto px-5 md:px-20">
            <div className="w-10/12 mx-auto py-24 md:py-40 lg:py-80 xl:py-96 text-white">
              <h1 className="text-2xl md:text-3xl lg:text-5xl leading-snug sm:leading-snug md:leading-snug lg:leading-snug">
                Experienced Software Development for Private Equity
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
              Haven Equity
            </h1>{" "}
            <span className="border-b-2 border-blue-400 w-24 my-5 block"></span>{" "}
            <p className="text-xl md:text-2xl mb-10">
              {" "}
              Southport Technology Group developed a lean platform that managed
              Xero connections to Quickbase organizations. Via a task server,
              account administrators are able to schedule or run payroll
              synchronization jobs. The synchronization pulls in and updates
              employee records, timesheets, timesheet line items, and leave
              requests. Simultaneously, it ensures that Quickbase has all the
              correct data categorization, including reimbursements, deductions,
              and payroll types.{" "}
            </p>
          </div>
          <HavenEquity
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

export default PrivateEquity
