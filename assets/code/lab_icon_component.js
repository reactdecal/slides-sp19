import React from "react";

const ICON_URLS = {
  rt: "...",
  like: "...",
  verified: "..."
};

const Icon = props => {
  const iconUrl = ICON_URLS[props.type];
  return <img src={iconUrl} height="17" width="17" />;
};

export default Icon;
