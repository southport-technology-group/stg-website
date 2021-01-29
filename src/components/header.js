import { Link } from "gatsby"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="bg-blue-100 border-b border-blue-200">
    <nav className="container mx-auto flex flex-wrap justify-between items-center py-8 px-5 md:px-10">
      <h1 className="text-3xl">
        <Link to="/" >
          {siteTitle}
        </Link>
      </h1>
      <div>
        <ul className="flex uppercase mt-5 md:mt-0">
          <li>
            <Link to="/services" className="ptb-2 mr-6 text-lg" >Services</Link>
          </li>
          <li>
            <Link to="/case-studies" className="ptb-2 mr-6 text-lg" >Case Studies</Link>
          </li>
          <li>
            <Link to="/about" className="ptb-2 mr-6 text-lg" >About</Link>
          </li>
          <li>
            <Link to="/contact" className="ptb-2 text-lg" >Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
)

Header.defaultProps = {
  siteTitle: `Southport Technology Group`,
}

export default Header
