import {instructor, instructor_image} from '../styles'
import React from 'React';

export const TA = ({ name, size, image, fun_fact}) => (
  <div style={instructor}>
    <img src={"./images/" + image} width={size} height={size} style={{borderRadius: "100%", margin: "20px"}}/>
    <h4>{name}</h4>
  </div>
);
