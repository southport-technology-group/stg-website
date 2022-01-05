import React from "react"
import data from "./data.json"

const CraigFramesPrivacyPolicy = () => (
  <div
    style={{ padding: "20px 30px" }}
    dangerouslySetInnerHTML={{ __html: data.privacyPolicy }}
  />
)

export default CraigFramesPrivacyPolicy
