const defaultColors = {
  header: {
    primary: "#8A0000",
    secondary: "#ffbd43",
    background: "#fff",
  },
  text: "#000",
  "text-muted": "#969494",
  background: "#fff",
  link: "#006ab6",
  primary: "#950505",
  "primary-darker": "#640101",
  // "primary-darker": "#340061",
  "primary-light": "#C92929",
  secondary: "#ffcf77",
  accent: "#ffbd43",
  muted: "#f6f6f6",
  "muted-darker": "#ededed",
}

const dark = {
  text: "#fff",
  "text-muted": "#a7a7a7",
  background: "#2b2b2b",
  primary: "#FA6666",
  "primary-darker": "#FA9191",
  "primary-light": "#DD5A5A",
  link: "#68bbf6",
  secondary: "#7e5302",
  accent: "#c3a05e",
  muted: "#474747",
  "muted-darker": "#606060",
}

const warm = {
  header: {
    primary: "#760202",
    secondary: "#fdb531",
    background: "#faf5ec",
  },
  text: "#000",
  "text-muted": "#807f7f",
  background: "#faf5ec",
  primary: "#950505",
  "primary-darker": "#760202",
  "primary-light": "#C92929",
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
        primary: "#950505",
        secondary: "#ffbd43",
        background: "#fff",
      },
      text: "#000",
      "text-muted": "#807f7f",
      background: "#fff",
      primary: "#950505",
      "primary-darker": "#760202",
      "primary-light": "#C92929",
      secondary: "#ffcf77",
      accent: "#ffbd43",
      muted: "#f6f6f6",
      "muted-darker": "#ededed",
    },
    "dark-texture": {
      header: {
        primary: "#8A0000",
        secondary: "#ffbd43",
        background: "#fff",
      },
      text: "#fff",
      "text-muted": "#a7a7a7",
      background: "#2b2b2b",
      link: "#68bbf6",
      primary: "#FA6666",
      "primary-darker": "#FA9191",
      "primary-light": "#DD5A5A",
      secondary: "#7e5302",
      accent: "#c3a05e",
      muted: "#474747",
      "muted-darker": "#606060",
    },
    "warm-texture": {
      ...warm,
      header: {
        primary: "#8A0000",
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
