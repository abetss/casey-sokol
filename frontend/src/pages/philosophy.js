/** @jsx jsx */
import { jsx, Grid, Divider, Container, Flex, Text, Box } from "theme-ui"
import { graphql } from "gatsby"

import Layout from "../components/page-layout"
import SEO from "../components/seo"
import { H1 } from "../components/typography/h1"
import ReactMarkdown from "react-markdown"

const AboutPage = ({
  data: {
    strapiPhilosophy: { Title, Content },
  },
}) => {
  return (
    <Layout>
      <SEO title="Casey Sokol - About" />
      <Container>
        <H1>{Title}</H1>
        <ReactMarkdown source={Content} />
      </Container>
    </Layout>
  )
}

export default AboutPage

export const query = graphql`
  query StrapiPhilosophy {
    strapiPhilosophy {
      Content
      Title
    }
  }
`
