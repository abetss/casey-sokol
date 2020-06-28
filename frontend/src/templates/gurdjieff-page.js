/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { H1 } from "../components"

const ArticleTemplate = ({ data: { page } }) => (
  <Layout>
    <SEO title={page.Title} />
    <Container>
      <H1>{page.Title}</H1>
      <MDXProvider>
        <MDXRenderer>{page.childStrapiAboutGurdjieffContent.childMdx.body}</MDXRenderer>
      </MDXProvider>
    </Container>
  </Layout>
)

export default ArticleTemplate

export const query = graphql`
  query GurdjieffPageTemplate($id: Int!) {
    page: strapiAboutGurdjieff(strapiId: { eq: $id }) {
      Title
      strapiId
      childStrapiAboutGurdjieffContent {
        childMdx {
          body
        }
      }
    }
  }
`
