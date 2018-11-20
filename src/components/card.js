import React, { Component } from "react";

class Card extends Component {
// constructor(props) {
//     super(props);
// }
 
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
                                <h2>{ article.title }</h2> 
                                <p>{ article.content }</p>
                                <p> { article.author }</p>
                            </div>
                        )
                    })}       
            </div>
        )
    }
}
export default Card;
//** this props == */