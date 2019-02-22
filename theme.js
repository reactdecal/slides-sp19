import theme from "mdx-deck/themes";
import Provider from "./RDCProvider";
import okaidia from "react-syntax-highlighter/styles/prism/okaidia";

export default {
  ...theme,
  font: "din-2014, sans-serif",
  colors: {
    ...theme.colors,
    background: "rgba(0, 0, 0, 0)"
  },
  heading: {
    margin: "1rem 0"
  },
  paragraph: {
    margin: "0 0 1rem 0"
  },
  prism: {
    style: okaidia
  },
  css: {
    ...theme.css,
    body: {
      maxWidth: "100vw",
      maxHeight: "100vh",
      overflowX: "hidden",
      overflowY: "hidden"
    },
    li: {
      textAlign: "left"
    },
    "& .Slide > div": {
      height: "90vh",
      width: "90vw",
      padding: "5%",
      border: "10px solid black",
      borderRadius: "20px",
      backgroundColor: "white",
      boxShadow: "10px 10px 0px rgba(0, 0, 0, 0.166)",
      overflowY: "scroll",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    },
    ".codesurfer": {
      maxHeight: "100%"
    },
    ".codesurfer > div": {
      height: "100% !important",
      width: "100% !important"
    },
    ".codesurfer > div > div": {
      height: "100% !important"
    }
  },
  Provider
  // Customize your presentation theme here.
  //
  // Read the docs for more info:
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/theming.md
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/themes.md
};
