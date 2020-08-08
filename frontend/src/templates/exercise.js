/** @jsx jsx */
import React from "react"
import { jsx, Divider, Container, Flex, Box } from "theme-ui"
import { graphql } from "gatsby"
import PageLayout from "../components/page-layout"
import SEO from "../components/seo"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { H1, H2, Tag, H3, HighlightContainer, Link } from "../components"
import ReactMarkdown from 'react-markdown'
import { isEmpty } from 'ramda'
import { DynamicZones } from "../components/dynamic-zones"

const CourseMaterial = ({ materials }) => {
  const groups = {}
  materials.forEach(material => {
    if (Array.isArray(groups[material.course_material_group.Group_Title])) {
      groups[material.course_material_group.Group_Title].push(material)
    } else {
      groups[material.course_material_group.Group_Title] = [material]
    }
  })

  // TODO: add icon base on file type

  return Object.entries(groups).map(([groupName, groupMaterials], index) => {
    return (
      <Box key={`material-${groupName}`} mt={index === 0 ? 0 : 4}>
        <H3>{groupName}</H3>
        <Flex sx={{ flexDirection: "column", mt: 2 }}>
          {groupMaterials.map((groupMaterial, index) => (
            <Link to={groupMaterial.File ? groupMaterial.File.publicURL : null} key={`material-${groupName}-${index}`}>
              {groupMaterial.Display_Name}
            </Link>
          ))}
        </Flex>
      </Box>
    )
  })
}

const RelatedExercises = ({ exercises, title }) => {
  return (
    <React.Fragment>
      <H3>{title}</H3>
      <Flex sx={{ flexDirection: "column" }}>
        {exercises.map(exercise => {
          return (
            <Link
              to={`/exercises/${exercise.Slug}`}
              title={exercise.Summary}
              key={`related-exercise-link-${exercise.Slug}`}
            >
              {exercise.Title}
            </Link>
          )
        })}
      </Flex>
    </React.Fragment>
  )
}

const ExerciseTemplate = ({ data: { exercise } }) => {
  return (
    <PageLayout>
      <SEO title={exercise.Title} />
      <Container>
        <H1>{exercise.Title}</H1>
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
        {exercise.related_exercises.length > 0 && exercise.Course_Downloadable_Materials.length > 0 && (
          <Flex mt={3}>
            {exercise.Course_Downloadable_Materials.length > 0 && (
              <HighlightContainer flex={2} mr={3}>
                <CourseMaterial materials={exercise.Course_Downloadable_Materials} />
              </HighlightContainer>
            )}
            {exercise.related_exercises.length > 0 && (
              <HighlightContainer flex={1}>
                <RelatedExercises exercises={exercise.related_exercises} title="Related Exercises" />
              </HighlightContainer>
            )}
          </Flex>
        )}

        <DynamicZones contents={exercise.Contents} />
      </Container>
    </PageLayout>
  )
}

export default ExerciseTemplate

export const query = graphql`
  query StrapiExercise($strapiId: Int!) {
    exercise: strapiExercises(strapiId: { eq: $strapiId }) {
      Title
      tags {
        Tag
      }
      related_exercises {
        Slug
        Title
        Summary
      }
      Contents {
        ComponentType
        Rich_Text
        Title
        Video_ID
        Provider
        Download_Link_Title
        Download_File {
          mime
          ext
          hash
          url
        }
        Notation_Image {
          id
          childImageSharp {
            fluid(maxWidth: 890, quality: 100) {
                  ...GatsbyImageSharpFluid
            }
          }
        }
      }
      Course_Downloadable_Materials {
        Display_Name
        course_material_group {
          Group_Title
        }
        File {
          publicURL
          internal {
            mediaType
            type
            description
          }
          prettySize
        }
      }
    }
  }
`
