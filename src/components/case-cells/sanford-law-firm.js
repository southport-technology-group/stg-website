import React from "react"
import Base from "./base"
import SanfordLawFirmCourthouse from "../../images/sanford-law-firm-courthouse.webp"
import SanfordLawFirmPDF from "../../../static/Sanford Law Firm Case Study_Southport Technology Group.pdf"

const SanfordLawFirm = () => (
  <Base
    name="Sanford Law Firm"
    description="From the federal courts to internal operations. Backgrounding document retrieval & management."
    img={SanfordLawFirmCourthouse}
    alt="Courthouse"
    pdf={SanfordLawFirmPDF}
  />
)

export default SanfordLawFirm
