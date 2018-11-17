import React, { Component } from "react";

class Card extends Component {
// constructor(props) {
//     super(props);
// }
 
    render(){
        // console.log(this.props);
        
        return(
            <div>
                <h2> {this.props.title }</h2>
                <p> {this.props.content }</p>
            </div>
        )
    }
}
export default Card;
//** this props == */