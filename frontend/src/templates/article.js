/** @jsx jsx */
import { jsx, Divider, Container } from "theme-ui"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { H1, H2 } from "../components"

const ArticleTemplate = ({ data: { article } }) => (
  <Layout>
    <SEO title={article.Title} />
    <Container>
      <H1>{article.Title}</H1>
      <H2 sx={{ mt:[3,4,4] }}>
        By {article.Author}
      </H2>
      <Divider sx={{ mb: [3,4,4], mt:[3,4,4], borderStyle: 'solid', borderWidth: 2, color: 'muted-darker', bg: 'muted-darker' }}/>
      <MDXProvider>
        <MDXRenderer>{article.childStrapiArticleContent.childMdx.body}</MDXRenderer>
      </MDXProvider>
      <Divider sx={{ my: 4, color: 'muted'}}/>
      <div sx={{ '& p, & h1, & h2, & h3': { color: 'text-muted' }}}>
        <MDXProvider>
          <MDXRenderer>{article.childStrapiArticleFooter.childMdx.body}</MDXRenderer>
        </MDXProvider>
      </div>
    </Container>
  </Layout>
)

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($id: Int!) {
    article: strapiArticle(strapiId: { eq: $id }) {
      Title
      Author
      childStrapiArticleContent {
        childMdx {
          body
        }
      }
      childStrapiArticleFooter {
        childMdx {
          body
        }
      }
    }
    strapiArticle(strapiId: { eq: $id }) {
      Title
    }
  }
`
