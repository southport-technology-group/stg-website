import React from "react"

const Base = ({
  name,
  description,
  img,
  alt,
  pdf,
  hideName = false,
  hideDescription = false,
  invert = false,
  additionalClassNames = "",
}) => {
  const className = invert
    ? "bg-blue-700"
    : "bg-white border border-blue-200 shadow-xl mb-10"
  const textClassName = invert ? "text-blue-100" : ""
  return (
    <div className={[className].concat(additionalClassNames).join(" ")}>
      <img className="w-100" src={img} alt={alt} />
      <div className="p-5 md:p-10">
        {!hideName && <h4 className="text-xl mb-2">{name}</h4>}
        {!hideDescription && <p className="lg:text-2xl mb-10">{description}</p>}
        <a
          href={pdf}
          target="_blank"
          rel="noreferrer noopener"
          className={`inline-flex items-center border-b border-blue-700 border-opacity-0 lg:hover:border-opacity-100 transition-all ${textClassName}`}
        >
          View PDF of case study
          <svg
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  )
}

export default Base
