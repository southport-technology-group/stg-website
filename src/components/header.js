import { Link } from "gatsby"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="bg-blue-100 border-b border-blue-200">
    <nav className="lg:container mx-auto flex flex-wrap justify-between items-center p-5 md:px-20 lg:py-8">
      <h1 className="text-xl lg:text-2xl mb-1 sm:mb-0">
        <Link to="/" >
          {siteTitle}
        </Link>
      </h1>
      <div>
        <ul className="flex lg:text-xl">
          <li className="lg:mr-5">
            <Link to="/about" className="inline-block py-1 pr-2 lg:p-0 border-b-2 border-blue-700 border-opacity-0 lg:hover:border-opacity-100 transition-all">About</Link>
          </li>
          <li className="lg:mr-5">
            <Link to="/case-studies" className="inline-block py-1 px-2 lg:p-0 border-b-2 border-blue-700 border-opacity-0 lg:hover:border-opacity-100 transition-all">Case Studies</Link>
          </li>
          <li>
            <Link to="/contact" className="inline-block py-1 px-2 lg:p-0 border-b-2 border-blue-700 border-opacity-0 lg:hover:border-opacity-100 transition-all">Contact</Link>
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
