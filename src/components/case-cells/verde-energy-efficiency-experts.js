import React from "react"
import Base from "./base"
import VerdeLighting from "../../images/verde-lighting.webp"
import VerdePDF from "../../../static/Verde Case Study_Southport Technology Group.pdf"

const VerdeEnergyEfficiencyExperts = props => (
  <Base
    name="Verde Energy Efficiency Experts"
    description="Automating the sales process for a LED retrofitting and energy efficiency business."
    img={VerdeLighting}
    alt="Lights in restaurant"
    pdf={VerdePDF}
    {...props}
  />
)

export default VerdeEnergyEfficiencyExperts
