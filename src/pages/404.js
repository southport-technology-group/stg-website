import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section className="container mx-auto text-center mt-40 px-5 md:px-20">
      <h1 className="text-8xl">404: Not Found</h1>
      <p className="text-2xl mb-10">
        Hmm...this page doesn't exist.
      </p>
      <Link className="bg-blue-700 text-white hover:shadow-xl rounded py-3 px-5 font-bold" to="/">Back to our homepage</Link>
    </section>
  </Layout>
)

export default NotFoundPage
