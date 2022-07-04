import React from "react"
import Base from "./base"
import RunEnergyWindmills from "../../images/run-energy-windmills.webp"
import RunEnergyPDF from "../../../static/Run Energy Case Study_Southport Technology Group.pdf"

const RunEnergy = props => (
  <Base
    name="Run Energy"
    description="Superior environmental data collection, analysis, and visualization."
    img={RunEnergyWindmills}
    alt="Field of windmills"
    pdf={RunEnergyPDF}
    {...props}
  />
)

export default RunEnergy
