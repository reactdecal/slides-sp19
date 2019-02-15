import React from 'React';
const instructor = {display: "flex", flexDirection: "column", height: "100px", alignItems: "center", margin: '0px 20px 0px 20px'}
const instructor_image = {borderRadius: '100%', margin: '20px 20px 0px 20px'}

export default class Instructor extends React.Component {

  render() {
     return (
       <div style={instructor}>
         <img src={"../assets/images/TAs/" + this.props.image} width={this.props.size} height={this.props.size} style={instructor_image}/>
         <h4>{this.props.name}</h4>
       </div>
     )
  }

}
