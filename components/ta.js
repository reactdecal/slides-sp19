const instructor = {display: "flex", flexDirection: "column", height: "100px", alignItems: "center", margin: '0px 20px 0px 20px'}
const instructor_image = {borderRadius: '100%', margin: '20px 20px 0px 20px'}
import React from 'React';

export const TA = ({ name, size, image, fun_fact}) => (
  <div style={instructor}>
    <img src={"../assets/images/TAs/" + image} width={size} height={size} style={{borderRadius: "100%", margin: "20px"}}/>
    <h4>{name}</h4>
  </div>
);
