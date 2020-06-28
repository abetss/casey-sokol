import { styles } from "./styles"
import { variants } from "./variants"
import { colors } from "./colors"

export default {
  space: [0, 4, 8, 16, 32, 64, 128, 192 , 256, 512],
  sizes: [16, 32, 64, 128, 256, 512, 1024],
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    logo: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;',
    heading:
      'Merienda, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;',
    monospace: "Menlo, monospace",
    quote: 'Merienda, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
  },
  fontSizes: [14, 16, 18, 22, 26, 32, 40, 48, 58],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.425,
  },
  letterSpacings: {
    normal: "normal",
    tracked: "0.1em",
    tight: "-0.05em",
    mega: "0.25em",
  },
  borders: [0, "1px solid", "2px solid", "4px solid", "8px solid", "16px solid", "32px solid"],

  breakpoints: ["40em", "56em", "64em"],
  layout: {
    container: {
      mx: `auto`,
      maxWidth: [`90vw`, "85vw", "80vw"],
      pt: [4, 4, 5],
    }
  },
  colors,
  styles,
  ...variants,
}
