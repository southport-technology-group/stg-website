import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FooterCTA from "../components/footer-call-to-action"

import PRco from "../images/prco-car.webp"
import SanfordLawFirmCourthouse from "../images/sanford-law-firm-courthouse.webp"
import HavenEquityTable from "../images/haven-equity-table.webp"
import VerdeLighting from "../images/verde-lighting.webp"
import IMDApi from "../images/imd-api.webp"
import PRcoPDF from "../../static/PRco Case Study_Southport Technology Group.pdf"
import SanfordLawFirmPDF from "../../static/Sanford Law Firm Case Study_Southport Technology Group.pdf"
import HavenEquityPDF from "../../static/Haven Equity Case Study_Southport Technology Group.pdf"
import VerdePDF from "../../static/Verde Case Study_Southport Technology Group.pdf"
import IMDAPIPDF from "../../static/IMD API Technical Due Diligence_Southport Technology Group.pdf"

const CaseStudies = () => (
  <Layout>
    <SEO title="Case Studies" />
    <section className="lg:container mx-auto mt-10 md:mt-20 px-5 md:px-20 mb-20 lg:mb-28">
      <p className="md:text-xl uppercase tracking-wide font-bold text-blue-400">
        Case Studies
      </p>
      <h1 className="text-3xl md:text-5xl mb-10 leading-tight sm:leading-tight md:leading-tight lg:leading-tight">
        Transforming Businesses
      </h1>
      <div className="md:grid md:grid-cols-2 md:gap-20">
        <div className="bg-white border border-blue-200 shadow-xl mb-10">
          <img className="w-100" src={PRco} alt="Car driving swiftly" />
          <div className="p-5 md:p-10">
            <h4 className="text-xl mb-2">PRco</h4>
            <p className="lg:text-2xl mb-10">
              Transforming an automobile service contract administrator through
              automation.
            </p>
            <a
              href={PRcoPDF}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center border-b border-blue-700 border-opacity-0 lg:hover:border-opacity-100 transition-all"
            >
              View PDF of case study
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="bg-white border border-blue-200 shadow-xl mb-10">
          <img
            className="w-100"
            src={SanfordLawFirmCourthouse}
            alt="Courthouse"
          />
          <div className="p-5 md:p-10">
            <h4 className="text-xl mb-2">Sanford Law Firm</h4>
            <p className="lg:text-2xl mb-10">
              From the federal courts to internal operations. Backgrounding
              document retrieval & management.
            </p>
            <a
              href={SanfordLawFirmPDF}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center border-b border-blue-700 border-opacity-0 lg:hover:border-opacity-100 transition-all"
            >
              View PDF of case study
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="bg-white border border-blue-200 shadow-xl mb-10">
          <img className="w-100" src={HavenEquityTable} alt="Courthouse" />
          <div className="p-5 md:p-10">
            <h4 className="text-xl mb-2">Haven Equity</h4>
            <p className="lg:text-2xl mb-10">
              Streamlining time entry and accounting practices for an Australian
              holding company.
            </p>
            <a
              href={HavenEquityPDF}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center border-b border-blue-700 border-opacity-0 lg:hover:border-opacity-100 transition-all"
            >
              View PDF of case study
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="bg-white border border-blue-200 shadow-xl mb-10">
          <img
            className="w-100"
            src={VerdeLighting}
            alt="Lights in restaurant"
          />
          <div className="p-5 md:p-10">
            <h4 className="text-xl mb-2">Verde Energy Efficiency Experts</h4>
            <p className="lg:text-2xl mb-10">
              Automating the sales process for a LED retrofitting and energy
              efficiency business.
            </p>
            <a
              href={VerdePDF}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center border-b border-blue-700 border-opacity-0 lg:hover:border-opacity-100 transition-all"
            >
              View PDF of case study
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="bg-white border border-blue-200 shadow-xl mb-10">
          <img
            className="w-100"
            src={IMDApi}
            alt="Commercial office building"
          />
          <div className="p-5 md:p-10">
            <h4 className="text-xl mb-2">Technical Due Diligence</h4>
            <p className="lg:text-2xl mb-10">
              Evaluating the Investor Market Data API code base for a potential
              acquirer.
            </p>
            <a
              href={IMDAPIPDF}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center border-b border-blue-700 border-opacity-0 lg:hover:border-opacity-100 transition-all"
            >
              View PDF of case study
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <FooterCTA />
  </Layout>
)

export default CaseStudies
