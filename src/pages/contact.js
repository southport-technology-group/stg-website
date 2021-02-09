import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <section className="lg:container mx-auto mt-10 md:px-20 md:my-20">
      <div className="px-5 md:px-0">
        <p className="md:text-xl uppercase tracking-wide font-bold text-blue-400">Contact Us</p>
        <h1 className="text-3xl md:text-5xl mb-10 leading-tight sm:leading-tight md:leading-tight lg:leading-tight">
          Let's Chat
        </h1>
      </div>
      <form className="mt-10" method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
        <div className="bg-white border border-blue-100 p-5 md:p-10 md:shadow-xl mb-10 md:w-8/12 lg:w-6/12">
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <label className="block mb-5">
            Name
            <input type="text" name="name" id="name" className="w-full bg-white border border-blue-400 mt-1 focus:border-blue-700 focus:ring-2 focus:ring-blue-200 text-base outline-none text-blue-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </label>
          <label className="block mb-5">
            Email
            <input type="email" name="email" id="email" className="w-full bg-white border border-blue-400 mt-1 focus:border-blue-700 focus:ring-2 focus:ring-blue-200 text-base outline-none text-blue-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </label>
          <label className="block mb-5">
            Subject
            <input type="text" name="subject" id="subject" className="w-full bg-white border border-blue-400 mt-1 focus:border-blue-700 focus:ring-2 focus:ring-blue-200 text-base outline-none text-blue-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </label>
          <label className="block mb-5">
            Message
            <textarea name="message" id="message" rows="5" className="w-full bg-white border border-blue-400 mt-1 focus:border-blue-700 focus:ring-2 focus:ring-blue-200 text-base outline-none text-blue-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </label>
          <div className="flex justify-between items-center">
            <button type="submit" className="bg-blue-700 text-white hover:shadow-xl rounded py-2 px-4 font-bold">Send</button>
          </div>
        </div>
      </form>
    </section>
  </Layout>
)

export default Contact
