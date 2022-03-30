import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import Menu from './Menu'
import System from './System'

const Header = ({ siteTitle }) => (

  <header>
    <System title={siteTitle} />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
