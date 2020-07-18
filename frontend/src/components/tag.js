/** @jsx jsx */
import { jsx, Link } from "theme-ui"

export const Tag = props => (
  <Link
    as="span"
    sx={{
      color: "text-muted",
      cursor: "pointer",
      "&:hover": {
        color: "link",
        transition: "background-color 100ms linear",
      },
    }}
    {...props}
  >
    #{props.title}
  </Link>
)
