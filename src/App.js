import React, {Component } from "react";
//** Component a property in React */
import Nav from "./components/nav";
import Article from "./components/article";
import Gallery from "./components/gallery";
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
    //** App 也可以拿到 react裡component的porerty*/
    render () {
           //** one of the methods in Component*/
        //    console.log(this.state);
           
        return ( 
            <div>
                <Nav />
                <Article articles={ this.state.articles } />
                <Gallery images= { this.state.images }/>
            </div>
        ) 
    }
}

export default App;
/** class name */
/** 一進一出 */
/** file name normally lowercase */