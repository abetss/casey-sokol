/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

export const BetterLink = ({children, href}) =>
    href.startsWith("/")
        ? <a as={Link} to={href}>{children}</a>
        : <a href={href} rel="nofollow noopener noreferrer" target="_blank">{children}</a>
