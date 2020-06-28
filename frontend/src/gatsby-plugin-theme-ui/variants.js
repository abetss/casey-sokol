import texturedPaper from '../images/textured-paper.png';
import handMadePaper from '../images/handmade-paper.png';
import cardboardFlat from '../images/cardboard-flat.png';
import beigePaper from '../images/beige-paper.png';
import mooning from '../images/mooning.png';
import mochaGrunge from '../images/mocha-grunge.png';
import oldHusks from '../images/old-husks.png';
import gSite from '../images/repBgLeft.gif';

export const variants = {
  links: {
    nav: {
      pr: 4,
      py: 1,
      textTransform: "uppercase",
      fontWeight: ["bold", 500],
      letterSpacing: "0.1em",
      color: "header.secondary",
      whiteSpace: "nowrap",
      textDecoration: "none",
      "&:hover": {
        color: "header.secondary",
        opacity: 0.9,
      },
      "&:active, &:focus": {
        color: "header.secondary",
      },
    },
  },
  container: {
    padding: {
      px: ["10vw", "15vw", "20vw"],
      maxWidth: "100vw",
    },
    margin: {
      mx: `auto`,
      maxWidth: [`90vw`, "85vw", "80vw"],
    },
    containerTop: {
      pt: [3, 4, 5],
    },
  },
  text: {
    caps: {
      textTransform: "uppercase",
      letterSpacing: "0.2em",
    },
    heading: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
    },
  },
  texture: {
    crisp: {
      backgroundImage: "none",
    },
    texturedPaper: {
      backgroundImage: `url(${texturedPaper})`,
    },
    cardboardFlat: {
      backgroundImage: `url(${cardboardFlat})`, // 1
    },
    beigePaper: {
      backgroundImage: `url(${beigePaper})`, // 2
    },
    mooning: {
      backgroundImage: `url(${mooning})`, // 3
    },
    paper: {
      backgroundImage: `url(${handMadePaper})`, // 1
    },
    old: {
      backgroundImage: `url(${mochaGrunge})`,
    },
    wallPaint: {
      backgroundImage: `url(${oldHusks})`,
    },
    gSite: {
      backgroundImage: `url(${gSite})`,
    },
  },
}
