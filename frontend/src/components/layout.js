/** @jsx jsx */
import { jsx } from "theme-ui"
import { Fragment } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Global, css } from "@emotion/core"
import Header from "./header"
import { useSelectTexture } from "../utils/hooks/useSelectTexture"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          subTitle
        }
      }
    }
  `)

  const [textureType] = useSelectTexture();

  return (
    <Fragment>
      <Global
        styles={css`
          * {
            overflow-wrap: normal;
            white-space: pre-line;
          }
        `}
      />
      <div sx={{ display: "flex", flexDirection: "column" }}>
        <div sx={{ minHeight: "80vh" }}>
          <Header title={data.site.siteMetadata.title} subTitle={data.site.siteMetadata.subTitle} />
          <main>{children}</main>
        </div>
        <footer sx={{ mt: 5, pb: 4, variant: "container.margin", display: "flex", justifyContent: "center", color: "text-muted" }}>
          <span>© {new Date().getFullYear()}, Gurdjieff Traditional Studies</span>
        </footer>
      </div>
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
