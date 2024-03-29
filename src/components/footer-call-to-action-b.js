import React from "react"

const FooterCTA = () => (
  <section className="bg-blue-200 py-20 lg:py-28">
    <div className="lg:container mx-auto px-5 md:px-20">
      <div className="text-center">
        <h2 className="text-2xl lg:text-4xl leading-tight sm:leading-tight md:leading-tight lg:leading-tight">
          Let's do (virtual) coffee
        </h2>
        <span className="border-b-2 border-blue-400 w-24 my-5 block mx-auto"></span>
        <p className="text-xl lg:text-2xl mb-10">
          Talk to a pro about saving time and growing your business.
        </p>
        <a
          href="https://calendly.com/trevorewen/coffee"
          target="_blank"
          rel="noreferrer noopener"
          className="inline-block text-xl font-bold bg-blue-700 text-white hover:shadow-xl py-3 px-5"
        >
          Book Now
        </a>
      </div>
    </div>
  </section>
)

export default FooterCTA
