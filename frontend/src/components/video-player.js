/** @jsx jsx */
import { jsx, Box, css } from "theme-ui"

export const VideoPlayer = (props) => (
  <Box
    css={css({
      position: "relative",
      paddingBottom: "56.25%" /* 16:9 */,
      paddingTop: 25,
      height: 0,
    })}
    {...props}
  >
    <iframe
      id={`player-${props.youtubeId}`}
      type="text/html"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
      src={`https://www.youtube.com/embed/${props.youtubeId}`}
      frameborder="0"
    ></iframe>
  </Box>
)
