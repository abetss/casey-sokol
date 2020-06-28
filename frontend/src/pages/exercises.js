/** @jsx jsx */
import { jsx, Grid, Container } from "theme-ui"
import { graphql, navigate } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { H1, H2, H3 } from "../components"
import { useSelectTexture } from "../utils/hooks/useSelectTexture"

const ArticlesPage = ({
  data: {
    allStrapiExercise: { nodes: exercise },
  },
}) => {
  const navigateToArticle = slug => {
    navigate(`/exercise/${slug}`)
  }
  const [textureType] = useSelectTexture();
  return (
    <Layout>
      <SEO title="Casey Sokol - Exercises" />
      <Container>
        <H1>Articles</H1>
        <Grid gap={3} columns={1} pt={[3, 4, 4]}>
          {articles.map((article, i) => (
            <Grid
              gap={0}
              onClick={() => navigateToArticle(article.Slug)}
              columns={1}
              key={`article-${article.id}`}
              sx={{
                display: "inline-grid",
                bg: "muted",
                variant: `texture.${textureType}`,
                borderColor: "text",
                px: 3,
                pt: 3,
                pb: 1,
                borderRadius: 2,
                boxShadow: "0 0 2px rgba(0, 0, 0, 0.125)",
                cursor: "pointer",
                "&:hover": {
                  bg: "muted-darker",
                  transition: "background-color 100ms linear",
                },
              }}
            >
              <Grid>
                <H2 sx={{ color: "primary" }}>{article.Title}</H2>
                <H3>by {article.Author}</H3>
              </Grid>
              <div sx={{ mt: -2 }}>
                <MDXProvider>
                  <MDXRenderer>{article.childStrapiArticleSummary.childMdx.body}</MDXRenderer>
                </MDXProvider>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  )
}

export default ArticlesPage

export const query = graphql`
  query ArticlesQuery {
    allStrapiArticle {
      nodes {
        id
        Title
        Author
        childStrapiArticleSummary {
          childMdx {
            body
          }
        }
        Slug
      }
    }
  }
`
