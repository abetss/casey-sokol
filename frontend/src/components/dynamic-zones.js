/** @jsx jsx */
import React from "react"
import { jsx, Flex, Box } from "theme-ui"
import Img from "gatsby-image"
import { H2} from "../components"
import { isNil } from "ramda"
import { VideoPlayer } from "./video-player"
import { RichText } from "./rich-text"


export const DynamicZones = ({ contents, keyTitle = "contents" }) => {
  return contents.map((content, index) => {
    const key = `dynamic-zone-${keyTitle}-${index}`

    if (
      content.ComponentType === "RichText" ||
      content.ComponentType === "RichTextCentered" || // todo: make this centered
      !isNil(content.Rich_Text)
    ) {
      return (
        <Box sx={{ mt: 3 }} key={key}>
          <RichText>{content.Rich_Text}</RichText>
        </Box>
      )
    }

    if (content.ComponentType === "MusicalNotation" || !isNil(content.Notation_Image)) {
      return (
        <Flex sx={{ mt: 3, justifyContent: "center", flexDirection: "column" }} key={key}>
          <Box sx={{ display: "inline-block" }}>
            <a href="/uploads/Cantation_I_35e095ef68.pdf">{content.Download_Link_Title}</a>
          </Box>
          <Img
            sx={{ width: "100%", border: 1, borderColor: "gray", mt: 2 }}
            fluid={content.Notation_Image.childImageSharp.fluid}
          />
        </Flex>
      )
    }

    if (content.ComponentType === "Video" || !isNil(content.Video_ID)) {
      return <VideoPlayer youtubeId={content.Video_ID} marginTop={4} />
    }

    return (
      <Box sx={{ mt: 3 }} key={`exercise-content-${index}`}>
        <H2>{content.Title}</H2>
      </Box>
    )
  })
}
