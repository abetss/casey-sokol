/** @jsx jsx */
import { jsx, Grid, Container, Flex, Text, Link } from "theme-ui"
import { graphql, navigate } from "gatsby"
import PageLayout from "../components/page-layout"
import SEO from "../components/seo"
import { H1, H2, Tag } from "../components"
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
    <PageLayout>
      <SEO title="Casey Sokol - Exercises" />
      <Container>
        <H1>Exercises</H1>
        <Grid gap={3} columns={1} pt={[3, 4, 4]}>
          {exercises.map((exercise, i) => (
            <Grid
              gap={0}
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
              }}
            >
              <Flex sx={{ flexDirection: "column" }}>
                <H2
                  onClick={() => navigateTo(exercise.Slug)}
                  sx={{ color: "link", cursor: "pointer", display: "inline", width: "fit-content" }}
                >
                  {exercise.Title}
                </H2>
                {exercise.tags.length > 0 && (
                  <Flex mt={1}>
                    {exercise.tags.map(tag => (
                      <Tag
                        sx={{
                          mr: [2, 3],
                        }}
                        key={`exercise-tag-${tag.Tag}`}
                        title={tag.Tag}
                      />
                    ))}
                  </Flex>
                )}
              </Flex>
              <div sx={{ mt: -2 }}>
                <p>{exercise.Summary}</p>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </PageLayout>
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
        tags {
          Tag
        }
        Course_Downloadable_Materials {
          Display_Name
        }
      }
    }
  }
`
