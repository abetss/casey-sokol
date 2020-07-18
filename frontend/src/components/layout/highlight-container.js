/** @jsx jsx */
import { jsx, Box } from "theme-ui"

export const HighlightContainer = ({ children, flex, mr, props }) => (
  <Box {...props} sx={{ px: 4, py: 4, bg: "muted", minHeight: 2, flex: flex || 1, mr: mr || 0 }}>
    {children}
  </Box>
)
