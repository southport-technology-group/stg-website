import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FooterCTA from "../components/footer-call-to-action"

import PRco from "../components/case-cells/prco"
import SanfordLawFirm from "../components/case-cells/sanford-law-firm"
import VerdeEnergyEfficiencyExperts from "../components/case-cells/verde-energy-efficiency-experts"
import HavenEquity from "../components/case-cells/haven-equity"
import TechnicalDueDiligence from "../components/case-cells/technical-due-diligence"

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
        <PRco />
        <SanfordLawFirm />
        <HavenEquity />
        <VerdeEnergyEfficiencyExperts />
        <TechnicalDueDiligence />
      </div>
    </section>

    <FooterCTA />
  </Layout>
)

export default CaseStudies
