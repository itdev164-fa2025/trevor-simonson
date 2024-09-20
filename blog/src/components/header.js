import * as React from "react"
import { Link } from "gatsby"
import PropTypes from 'prop-types'
import styled from "styled-components"

const StyledHeader = styled.header`
  margin: 0 auto;
  padding: var(--space-4) var(--size-gutter);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
`

const StyledLink = styled(Link)`
  font-size: var(--font-sm);
  text-decoration: none;
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <StyledLink to="/">
      {siteTitle}
    </StyledLink>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProp = {
  siteTitle: ""
}

export default Header
