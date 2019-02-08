import React from 'React';
import {instructor, instructor_image} from '../styles'

export default class Instructor extends React.Component {

  render() {
     return (
       <div style={instructor}>
         <img src={"../images/" + this.props.image} width={this.props.size} height={this.props.size} style={instructor_image}/>
         <h4>{this.props.name}</h4>
       </div>
     )
  }

}
