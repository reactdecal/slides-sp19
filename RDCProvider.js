import React from "react";
import Helmet from "react-helmet";
import Logo from "./assets/images/logos/rdc-icon.svg";
import Flower from "./assets/images/logos/flower.svg";

const RDCProvider = ({ children, ...props }) => (
  <div>
    <Helmet>
      <link rel="stylesheet" href="https://use.typekit.net/ffz7vta.css" />
      <style type="text/css">
        {`body {
          max-height: 100vh;
          max-width: 100vw;
          overflow: hidden;
        }`}
      </style>
    </Helmet>
    {React.cloneElement(children, props)}
    {/* <Logo
      width={50}
      className="icon"
      style={{ position: "absolute", top: -5, left: "4%", zIndex: -1 }}
    /> */}
    {/* <h1
      style={{
        position: "absolute",
        top: "1%",
        left: "6%",
        fontFamily: "din-2014",
        fontWeight: 400
      }}
    >
      Lab 2: Look Ma, No H(tml)and(CS)s!
    </h1> */}

    <Flower
      width={1200}
      style={{
        position: "absolute",
        bottom: -100,
        right: -300,
        zIndex: -1
      }}
    />
  </div>
);

export default RDCProvider;
