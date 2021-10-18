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
      <Header
        siteTitle={
          data.site.siteMetadata?.title || `Southport Technology Group`
        }
      />
      <main>{children}</main>
      <footer className="bg-blue-900 text-white">
        <div className="lg:container mx-auto py-3 px-5 md:px-20">
          © {new Date().getFullYear()} Southport Technology Group
        </div>
      </footer>
    </>
  )
}

export default Layout
