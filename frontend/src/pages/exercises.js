/** @jsx jsx */
import { jsx, Grid, Container } from "theme-ui"
import { graphql, navigate } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { H1, H2 } from "../components"
import { useSelectTexture } from "../utils/hooks/useSelectTexture"

const ExercisesPage = ({
  data: {
    allStrapiExercises: { nodes: exercises },
  },
}) => {
  const navigateTo = slug => {
    navigate(`/exercises/${slug}`)
  }
  const [textureType] = useSelectTexture()
  return (
    <Layout>
      <SEO title="Casey Sokol - Exercises" />
      <Container>
        <H1>Exercises</H1>
        <Grid gap={3} columns={1} pt={[3, 4, 4]}>
          {exercises.map((exercise, i) => (
            <Grid
              gap={0}
              onClick={() => navigateTo(exercise.Slug)}
              columns={1}
              key={`exercise-${exercise.id}`}
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
                <H2 sx={{ color: "primary" }}>{exercise.Title}</H2>
              </Grid>
              <div sx={{ mt: -2 }}>
                <p>{exercise.Summary}</p>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  )
}

export default ExercisesPage

export const query = graphql`
  query ExercisesQuery {
    allStrapiExercises(sort: { fields: id, order: DESC }) {
      nodes {
        id
        Title
        Summary
        Slug
        Course_Downloadable_Materials {
          Display_Name
        }
      }
    }
  }
`
