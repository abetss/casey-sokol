/** @jsx jsx */
import { jsx, Grid, Divider, Container, Flex, Text, Box } from "theme-ui"
import { graphql, navigate } from "gatsby"
import Img from "gatsby-image"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/page-layout"
import SEO from "../components/seo"
import { H1 } from "../components/typography/h1"
import ReactMarkdown from "react-markdown"



const BioPage = ({data: { strapiBio: { Title, Content}}}) => {
//   const [textureType] = useSelectTexture();
  return (
    <Layout>
    <SEO title="Casey Sokol - Bio" />
    <Container>
      <H1>{Title}</H1>
      <ReactMarkdown source={Content} />
    </Container>
  </Layout>
  )
}

export default BioPage


export const query = graphql`
query StrapiBio {
    strapiBio {
      Title
      Content
    }
  }
`