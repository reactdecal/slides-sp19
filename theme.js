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
    "& .Slide > div": {
      height: "80vh",
      width: "90vw",
      // display: "flex",
      // flexDirection: "column",
      // alignItems: "center",
      padding: "5%",
      border: "10px solid black",
      borderRadius: "20px",
      backgroundColor: "white",
      boxShadow: "10px 10px 0px rgba(0, 0, 0, 0.166)",
      overflowY: "scroll"
    }
  },
  Provider
  // Customize your presentation theme here.
  //
  // Read the docs for more info:
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/theming.md
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/themes.md
};
