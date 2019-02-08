module.exports = {
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: [{ loader: "babel-loader" }, { loader: "react-svg-loader" }]
      }
    ]
  }
};
