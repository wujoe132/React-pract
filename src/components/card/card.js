import React, { Component } from "react";
import style from "./style";

class Card extends Component {
// constructor(props) {
//     super(props);
// }
constructor(props){
    super(props)
}


    render(){
        // console.log(this.props);
        // console.log("this is the this.props.articles", this.props.articles);
        
        
        return (
            <div>
                {/* <h2> { this.props.articles[0].title }</h2>
                <p> {this.props.articles[0].content }</p> */}
                    {this.props.articles.map((article, index) => {  
                        return (
                            <div key={ index }>
                                <h2 style={ style.title } onClick={ this.props.handleClick } onDoubleClick= { this.props.handleDoubleClick }>{ article.title }</h2> 
                                <p style= { style.p }>{ article.content }</p>
                                <p style= { style.p }> { article.author }</p>
                            </div>
                        )
                    })}       
            </div>
        )
    }
}
export default Card;
//** this props == */