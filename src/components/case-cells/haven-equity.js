import React from "react"
import Base from "./base"
import HavenEquityTable from "../../images/haven-equity-table.webp"
import HavenEquityPDF from "../../../static/Haven Equity Case Study_Southport Technology Group.pdf"

const HavenEquity = props => (
  <Base
    name="Haven Equity"
    description="Streamlining time entry and accounting practices for an Australian holding company."
    img={HavenEquityTable}
    alt="Car driving swiftly"
    pdf={HavenEquityPDF}
    {...props}
  />
)

export default HavenEquity
