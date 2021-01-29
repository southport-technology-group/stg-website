/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Southport Technology Group`} />
      <div>
        <main>
          {children}
        </main>
        <footer className="container mx-auto mt-40 py-3 px-5 md:px-10 bg-blue-900 text-white">
          © {new Date().getFullYear()} Southport Technology Group
        </footer>
      </div>
    </>
  )
}

export default Layout
