import React, {Component } from "react";
//** Component a property in React */
import Nav from "./components/nav";
import Article from "./components/article";
import Gallery from "./components/galley/gallery";
import articles from "../data/articles";
import images from "../data/images";


class App extends Component {
    constructor (props){
        super(props);
        this.state = {
            articles: articles,
            images: images
        }
    }
handleClick(event){
    console.log(event.target);
    event.target.style.color = "blue";
    event.target.style.border = "solid";
    event.target.style.borderColor = "red";
}

handleDoubleClick(event) {
    event.target.style.color = "black";
    event.target.style.border = "none";

}
    
    //** App 也可以拿到 react裡component的porerty*/
    render () {
           //** one of the methods in Component*/
        //    console.log(this.state);
           
        return ( 
            <div>
                <Nav />
                <Article articles={ this.state.articles } handleClick={ this.handleClick } handleDoubleClick= { this.handleDoubleClick }/>
                <Gallery images= { this.state.images } handleClick={ this.handleClick } handleDoubleClick={ this.handleDoubleClick }/>
            </div>
        ) 
    }
}

export default App;
/** class name */
/** 一進一出 */
/** file name normally lowercase */