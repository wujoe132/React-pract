import React, { Component } from "react";

class Gallery extends Component {
    constructor(props){
        super(props)
    }
// handleClick(event){
//     event.target.style.border = "1px solid";
//     event.target.style.borderColor = "blue";
// }
    render(){
        console.log(this.props);
        
        return(
            <div>
                <div>
                   {/* <h2> { this.props.images[0].title }</h2>
                   <img src={ this.props.images[0].src }></img> */}
                   {this.props.images.map((images, index) => {  
                        return (
                            <div key={ index }>
                                <h2 onClick={ this.props.handleClick } onDoubleClick={ this.props.handleDoubleClick }>{ images.title }</h2> 
                                <img src={ images.src }></img>
                            </div>
                        )
                    })} 
               </div> 
            </div>


        )
    }
}
export default Gallery;