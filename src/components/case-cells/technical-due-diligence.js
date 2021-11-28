import React from "react"
import Base from "./base"
import IMDAPI from "../../images/imd-api.webp"
import IMDAPIPDF from "../../../static/IMD API Technical Due Diligence_Southport Technology Group.pdf"

const TechnicalDueDiligence = props => (
  <Base
    name="Technical Due Diligence"
    description="Evaluating the Investor Market Data API code base for a potential acquirer."
    img={IMDAPI}
    alt="Car driving swiftly"
    pdf={IMDAPIPDF}
    {...props}
  />
)

export default TechnicalDueDiligence
