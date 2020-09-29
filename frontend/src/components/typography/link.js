/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link as GatsbyLink } from "gatsby"

export const Link = ({ to, children, title, download }) =>
  download ? (
    <a
      target="_blank"
      rel="noopener noreferrer"
      alt={title}
      sx={{ color: "link", textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
      href={to}
    >
      {children}
    </a>
  ) : (
    <GatsbyLink
      title={title}
      sx={{ color: "link", textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
      to={to}
    >
      {children}
    </GatsbyLink>
  )
