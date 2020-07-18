/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link as GatsbyLink } from "gatsby"

export const Link = ({ to, children, title}) => (
  <GatsbyLink title={title} sx={{ color: "link", textDecoration: "none", "&:hover": { textDecoration: "underline" } }} to={to}>
    {children}
  </GatsbyLink>
)
