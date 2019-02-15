import {instructor, instructor_image} from '../styles'
import Flower from './flower'
import React from 'React';

export const ReactFlower = ({ name, color, outline}) => (
  <div style={instructor}>
    <Flower color={color} outline={outline}/>
    <h4>{name}</h4>
  </div>
);
