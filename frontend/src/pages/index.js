/** @jsx jsx */
import { jsx, Grid, Divider, Container, Flex, Text } from "theme-ui"
import { graphql, navigate } from "gatsby"
import Img from "gatsby-image"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { H1 } from "../components/typography/h1"
import { useSelectTexture } from "../utils/hooks/useSelectTexture"



const IndexPage = () => {
  const [textureType] = useSelectTexture();

  return (
    <Layout>
      <SEO title="Casey Sokol" />
      <div sx={{ width: "100%", bg: "muted", color: "primary", variant: `texture.${textureType}` }}>
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: ["start", "center", "center"],
            py: [4, 4, 5],
          }}
        >
          <H1>Casey Sokol</H1>
        </Container>
      </div>
    </Layout>
  )
}

export default IndexPage

