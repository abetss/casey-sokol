/** @jsx jsx */
import React from "react"
import { jsx, Divider, Container, Flex, Box } from "theme-ui"
import { graphql } from "gatsby"
import PageLayout from "../components/page-layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { H1, H2, Tag, H3, HighlightContainer, Link } from "../components"
import ReactMarkdown from "react-markdown"
import { isEmpty, isNil } from "ramda"

const RichTextContent = ({ contents }) => {
  return contents.map((content, index) => {
    console.log("^^^ contents.ComponentType", content.ComponentType)
    console.log("^^^ content", content)

    if (
      content.ComponentType === "RichText" ||
      content.ComponentType === "RichTextCentered" ||
      !isEmpty(content.Rich_Text)
    ) {
      return <ReactMarkdown source={content.Rich_Text || content.Rich_Text_Centered_Aligned} />
    }

    // if (
    //     content.ComponentType === "MusicalNotation" ||
    //     !isEmpty(content.Notation_Image)
    // )

    return (
      <Box sx={{ mt: 3 }} key={`exercise-content-${index}`}>
        <H2>{content.Title}</H2>
        <p>{content.Rich_Text}</p>
      </Box>
    )
  })
}

export const DynamicZones = ({ contents, keyTitle = "contents" }) => {
  return contents.map((content, index) => {
    const key = `dynamic-zone-${keyTitle}-${index}`
    console.log("^^^ content.ComponentType", content.ComponentType)
    if (
      content.ComponentType === "RichText" ||
      content.ComponentType === "RichTextCentered" || // todo: make this centered
      !isNil(content.Rich_Text)
    ) {
      return (
        <Box sx={{ mt: 3 }} key={key}>
          <ReactMarkdown source={content.Rich_Text} />
        </Box>
      )
    }

    if (content.ComponentType === "MusicalNotation" || !isNil(content.Notation_Image)) {
      console.log("^^^ MusicalNotation", content)
      return (
        <Flex sx={{ mt: 3, justifyContent: "center", flexDirection: 'column' }} key={key}>
          <Img sx={{ width: "100%" }} fluid={content.Notation_Image.childImageSharp.fluid} />
          <Box sx={{ display: "inline-block" }}>
            Download File: <a href="/uploads/Cantation_I_35e095ef68.pdf">{content.Download_Link_Title}</a>
          </Box>
        </Flex>
      )
    }

    return (
      <Box sx={{ mt: 3 }} key={`exercise-content-${index}`}>
        <H2>{content.Title}</H2>
      </Box>
    )
  })
}
