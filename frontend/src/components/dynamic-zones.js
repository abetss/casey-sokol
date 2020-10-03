/** @jsx jsx */
import React from "react"
import { jsx, Flex, Box } from "theme-ui"
import Img from "gatsby-image"
import { H2} from "../components"
import { isNil } from "ramda"
import { VideoPlayer } from "./video-player"
import { RichText } from "./rich-text"
import { Link } from "./typography"


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


    if (content.ComponentType === "MusicalNotation"
      && !isNil(content.Notation_Image)
      && !isNil(content.Notation_Image.childImageSharp)
      ) {
      return (
        <Flex sx={{ mt: 3, justifyContent: "center", flexDirection: "column" }} key={key}>
          <Box sx={{ display: "inline-block" }}>
            {
              content.Download_File.map((downloadFile, index) => (
                  <Link to={downloadFile.url} download={true} key={`download-${content.Download_Link_Title}-${index}`}>
                  {content.Download_Link_Title}
                </Link>
              ))
            }
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
