import React from "react"
import Base from "./base"
import PRcoCar from "../../images/prco-car.webp"
import PRcoPDF from "../../../static/PRco Case Study_Southport Technology Group.pdf"

const PRco = () => (
  <Base
    name="PRco"
    description="Transforming an automobile service contract administrator through automation."
    img={PRcoCar}
    alt="Car driving swiftly"
    pdf={PRcoPDF}
  />
)

export default PRco
