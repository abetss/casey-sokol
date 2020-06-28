
const defaultColors = {
  header: {
    primary: "#006ab6",
    secondary: "#ffbd43",
    background: "#fff",
  },
  text: "#000",
  "text-muted": "#807f7f",
  background: "#fff",
  primary: "#006ab6",
  "primary-darker": "#005c9d",
  "primary-light": "#9cd6ff",
  secondary: "#ffcf77",
  accent: "#ffbd43",
  muted: "#f6f6f6",
  "muted-darker": "#ededed",
}

const dark = {
  text: "#fff",
  "text-muted": "#a7a7a7",
  background: "#2b2b2b",
  primary: "#9cd6ff",
  "primary-darker": "#bde2fc",
  "primary-light": "#006ab6",
  secondary: "#7e5302",
  accent: "#c3a05e",
  muted: "#474747",
  "muted-darker": "#606060",
}

const warm = {
  header: {
    primary: "#035996",
    secondary: "#fdb531",
    background: "#faf5ec",
  },
  text: "#000",
  "text-muted": "#807f7f",
  background: "#faf5ec",
  primary: "#006ab6",
  "primary-darker": "#005c9d",
  "primary-light": "#9cd6ff",
  secondary: "#ffbd43",
  accent: "#ffbd43",
  muted: "#fff0d7",
  "muted-darker": "#fce8c6",
}

export const colors = {
  ...defaultColors,
  modes: {
    dark,
    warm,
    "default-texture": {
      header: {
        primary: "#0031a5",
        secondary: "#ffbd43",
        background: "#fff",
      },
      text: "#000",
      "text-muted": "#807f7f",
      background: "#fff",
      primary: "#006ab6",
      "primary-darker": "#005c9d",
      "primary-light": "#9cd6ff",
      secondary: "#ffcf77",
      accent: "#ffbd43",
      muted: "#f6f6f6",
      "muted-darker": "#ededed",
    },
    "dark-texture": {
      header: {
        primary: "#0031a5",
        secondary: "#ffbd43",
        background: "#fff",
      },
      text: "#fff",
      "text-muted": "#a7a7a7",
      background: "#2b2b2b",
      primary: "#9cd6ff",
      "primary-darker": "#bde2fc",
      "primary-light": "#006ab6",
      secondary: "#7e5302",
      accent: "#c3a05e",
      muted: "#474747",
      "muted-darker": "#606060",
    },
    "warm-texture": {
      ...warm,
      header: {
        primary: "#002377",
        secondary: "#fdb531",
        background: "#f6f0e4",
      },
      // text: "#000",
      // "text-muted": "#807f7f",
      // background: "#f6f0e4",
      background: "#fffbf3",
      // primary: "#006ab6",
      // "primary-darker": "#005c9d",
      // "primary-light": "#9cd6ff",
      // secondary: "#ffbd43",
      // accent: "#ffbd43",
      // muted: "#fff0d7",
      // "muted-darker": "#fce8c6",
    },
  },
}

// #610000
// #340061
// #0031a5
// #0d403c
// #2c2302
// #01496b
