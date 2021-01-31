import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const CaseStudies = () => (
  <Layout>
    <SEO title="Case Studies" />
    <section className="lg:container mx-auto mt-10 md:mt-20 px-5">
      <h1 className="text-3xl lg:text-5xl mb-10 leading-snug">
        Case Studies
      </h1>
      <div className="md:grid md:grid-cols-2 md:gap-20">
        <div className="border-blue-400 bg-white shadow-xl mb-10">
          <div class="bg-blue-700 p-20 text-center text-white">[image]</div>
          <div className="p-10">
            <h4 className="text-lg mb-2">PRco</h4>
            <p className="lg:text-2xl mb-10">
            Automobile service contract administrator, transformed through automation.
            </p>
            <a href="/" className="inline-flex items-center">
              Download PDF of case study
              <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
            </a>
          </div>
        </div>
        <div className="border-blue-400 bg-white shadow-xl mb-10">
          <div class="bg-blue-700 p-20 text-center text-white">[image]</div>
          <div className="p-10">
            <h4 className="text-lg mb-2">Verde Energy Efficiency Experts</h4>
            <p className="lg:text-2xl mb-10">
              LED retrofitting and energy efficiency solutions. Business automation for sales process.
            </p>
            <a href="/" className="inline-flex items-center">
              Download PDF of case study
              <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
            </a>
          </div>
        </div>
        <div className="border-blue-400 bg-white shadow-xl mb-10">
          <div class="bg-blue-700 p-20 text-center text-white">[image]</div>
          <div className="p-10">
            <h4 className="text-lg mb-2">Ads for Private Investment</h4>
            <p className="lg:text-2xl mb-10">
            Google Ads strategy for private investments, targeting accredited investors.
            </p>
            <a href="/" className="inline-flex items-center">
              Download PDF of case study
              <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default CaseStudies
