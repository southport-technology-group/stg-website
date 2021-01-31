import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <section className="lg:container mx-auto mt-10 md:mt-20 px-5">
      <h1 className="text-5xl mb-10 leading-snug">
        Contact Us
      </h1>
      <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
        <div className="border-blue-400 bg-white p-10 shadow-xl mb-10 md:w-8/12 lg:w-6/12">
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <label className="block mb-5">
            Name
            <input type="text" name="name" id="name" className="w-full bg-white border border-blue-400 focus:border-blue-700 focus:ring-2 focus:ring-blue-200 text-base outline-none text-blue-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </label>
          <label className="block mb-5">
            Email
            <input type="email" name="email" id="email" className="w-full bg-white border border-blue-400 focus:border-blue-700 focus:ring-2 focus:ring-blue-200 text-base outline-none text-blue-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </label>
          <label className="block mb-5">
            Subject
            <input type="text" name="subject" id="subject" className="w-full bg-white border border-blue-400 focus:border-blue-700 focus:ring-2 focus:ring-blue-200 text-base outline-none text-blue-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </label>
          <label className="block mb-5">
            Message
            <textarea name="message" id="message" rows="5" className="w-full bg-white border border-blue-400 focus:border-blue-700 focus:ring-2 focus:ring-blue-200 text-base outline-none text-blue-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </label>
          <div className="flex justify-between items-center">
            <button type="submit" className="bg-blue-700 text-white hover:shadow-xl rounded py-2 px-4 font-bold">Send</button>
            <input type="reset" value="Clear" className="bg-transparent" />
          </div>
        </div>
      </form>
    </section>
  </Layout>
)

export default Contact
