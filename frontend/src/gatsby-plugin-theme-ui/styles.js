import texturedPaper from '../images/textured-paper.png';
import handMadePaper from '../images/handmade-paper.png';
import cardboardFlat from '../images/cardboard-flat.png';
import beigePaper from '../images/beige-paper.png';
import mooning from '../images/mooning.png';
import mochaGrunge from '../images/mocha-grunge.png';

const heading = {
  color: "heading",
  fontFamily: "heading",
  lineHeight: "heading",
  fontWeight: "heading",
  marginBottom: 0
}

const currentTexture = (typeof localStorage !== 'undefined' && localStorage.getItem('theme-texture')) || 'paper';

const getBodyBackgroundImage = texture => {
  switch(texture) {
    case 'crisp':
      return 'none';
    case 'paper':
      return `url(${handMadePaper})`;
    case 'texturedPaper':
      return `url(${texturedPaper})`;
    case 'beigePaper':
      return `url(${beigePaper})`;
    case 'mooning':
      return `url(${mooning})`;
    case 'mochaGrunge':
      return `url(${mochaGrunge})`;
    case 'cardboardFlat':
      return `url(${cardboardFlat})`;
    default:
      return `url(${handMadePaper})`;
  }
}

const bodyBackgroundImage = getBodyBackgroundImage(currentTexture);


export const styles = {
  root: {
    fontFamily: "body",
    lineHeight: "body",
    fontWeight: "body",
    fontSize: [2, 3],
    margin: 0,
    fontSmoothing: "antialiased",
    fontKerning: "normal",
    fontFeatureSettings: `"kern", "liga", "clig", "calt"`,
    backgroundImage: bodyBackgroundImage,
  },
  h1: {
    ...heading,
    fontSize: [5, 6],
    lineHeight: '1.425',
    color: 'primary-darker',
    mt: 4
  },
  h2: {
    ...heading,
    fontSize: [4, 5],
    color: 'primary-darker',
    mt: 4,
    mb: 2
  },
  h3: {
    ...heading,
    fontSize: 3,
    color: 'primary-darker',
    mt: 3,
    mb: 2
  },
  h4: {
    ...heading,
    fontSize: 2,
    color: 'primary-darker',
    mt: 3
  },
  h5: {
    ...heading,
    fontSize: 1,
    color: 'primary-darker',
    mt: 3
  },
  h6: {
    ...heading,
    fontSize: 0,
    color: 'primary-darker',
    mt: 3
  },
  hr: {
    color: "primary",
    borderWidth: '2px',
    borderStyle: 'dashed'
  },
  p: {
    color: "primary",
    fontFamily: "body",
    fontWeight: "body",
    lineHeight: "body",
    mt:5,
    mb:5,
  },
  span: {
    color: "text",
    fontFamily: "body",
    fontWeight: "body",
    lineHeight: "body",
  },
  a: {
    color: "link",
  },
  pre: {
    fontFamily: "monospace",
    overflowX: "auto",
    code: {
      color: "inherit",
    },
  },
  code: {
    fontFamily: "monospace",
    fontSize: "inherit",
  },
  table: {
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: 0,
  },
  th: {
    textAlign: "left",
    borderBottomStyle: "solid",
  },
  td: {
    textAlign: "left",
    borderBottomStyle: "solid",
  },
  img: {
    maxWidth: "100%",
  },
}
