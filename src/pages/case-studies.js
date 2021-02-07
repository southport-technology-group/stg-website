import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PRco from "../images/prco-car.jpg"
import VerdeLighting from "../images/verde-lighting.jpg"

const CaseStudies = () => (
  <Layout>
    <SEO title="Case Studies" />
    <section className="lg:container mx-auto mt-10 md:mt-20 px-5 md:px-20">
      <p className="md:text-xl uppercase tracking-wide font-bold text-blue-400">Case Studies</p>
      <h1 className="text-3xl md:text-5xl mb-10 leading-tight sm:leading-tight md:leading-tight lg:leading-tight">
        Check Out Our Work
      </h1>
      <div className="md:grid md:grid-cols-2 md:gap-20">
        <div className="bg-white shadow-xl mb-10">
          <img className="w-100" src={PRco} alt="Car driving swiftly" />
          <div className="p-10">
            <h4 className="text-xl mb-2">PRco</h4>
            <p className="lg:text-2xl mb-10">
            Transforming an automobile service contract administrator through automation.
            </p>
            <a href="/" className="inline-flex items-center">
              Download PDF of case study
              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
            </a>
          </div>
        </div>
        <div className="bg-white shadow-xl mb-10">
          <img className="w-100" src={VerdeLighting} alt="Lights in restaurant" />
          <div className="p-10">
            <h4 className="text-xl mb-2">Verde Energy Efficiency Experts</h4>
            <p className="lg:text-2xl mb-10">
            Streamlining and automating the sales process for a LED retrofitting and energy efficiency business.
            </p>
            <a href="/" className="inline-flex items-center">
              Download PDF of case study
              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
            </a>
          </div>
        </div>
        {/* <div className="border-blue-400 bg-white shadow-xl mb-10">
          <div class="bg-blue-700 p-20 text-center text-white">[image]</div>
          <div className="p-10">
            <h4 className="text-lg mb-2">Technical Due Diligence</h4>
            <p className="lg:text-xl mb-10">
              Evaluating a code base for an investor considering an acquisition.
            </p>
            <a href="/" className="inline-flex items-center">
              Download PDF of case study
              <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
            </a>
          </div>
        </div> */}
      </div>
    </section>

    <section className="bg-blue-200 py-40 mt-40">
      <div className="lg:container mx-auto px-5 md:px-20">
        <div className="text-center">
          <h2 className="text-2xl lg:text-4xl leading-tight sm:leading-tight md:leading-tight lg:leading-tight">
            Need custom product or software?
          </h2>
          <span className="border-b-2 border-blue-700 w-24 my-5 block mx-auto"></span>
          <p className="text-xl lg:text-2xl mb-10">
            Get in touch for a free consultation
          </p>
          <a href="/contact" className="inline-block text-xl font-bold bg-blue-700 text-white hover:shadow-xl py-3 px-5">
            Let's Collaborate
          </a>
        </div>
      </div>
    </section>
  </Layout>
)

export default CaseStudies
