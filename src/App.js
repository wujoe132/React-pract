import React, {Component } from "react";
//** Component a property in React */
import Nav from "./components/nav";
import Article from "./components/article"
import Gallery from "./components/gallery"

class App extends Component {
    //** App 也可以拿到 react裡component的porerty*/
    render () {
           //** one of the methods in Component*/
        return ( 
            <div>
                <Nav />
                <Article />
                <Gallery />
            </div>
        ) 
    }
}

export default App;
/** class name */
/** 一進一出 */
/** file name normally lowercase */