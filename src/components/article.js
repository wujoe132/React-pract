import React, { Component } from "react";
import Card from "./card"


class Article extends Component {
    constructor(props){
        super(props);
        // this.state = {
        //     //** the place allow to put database */
        //     //** this ==> article */
        //     //** state ==> object */
        //     article1: {
        //         title: "Blog1",
        //         content: "This is Blog 1"
        //     },
        //     article2: {
        //         title: "Blog2",
        //         content: "This is Blog 2"
        //     },
        //     article3: {
        //         title: "Blog3",
        //         content: "This is Blog 3"
        //    }
    // }
}
//** 動態性增加了, 根據我放在state裡變化 */

    render(){
        //  console.log(this.state);
        // console.log(this.props);
        const blogs = [{
                        title: "Blog1",
                        content: "This is Blog 1"
                    }, 
                    {
                        title: "Blog2",
                        content: "This is Blog 2"
                    }, 
                    {
                        title: "Blog3",
                        content: "This is Blog 3"
                    }];

        return (
            <div>
                {blogs.map(blog => {
                    return (
                        <Card title={ blog.title } content={ blog.content } />
                    )
                })} 
            </div>
        )
        // return(
        //     <div>
        //         {/* <div>
        //             <h2> { this.state.article1.title }</h2>
        //             <p>{ this.state.article1.content }</p>
        //         </div>
        //         <div>
        //             <h2> { this.state.article2.title }</h2>
        //             <p>{ this.state.article2.content }</p>
        //         </div>
        //         <div>
        //             <h2> { this.state.article3.title }</h2>
        //             <p>{ this.state.article3.content }</p>
        //         </div> */}
        //         <div>
        //             <Card title = { this.state.article1.title } content = {this.state.article1.content }/>
        //         </div>
        //     </div>
        // )
    }
}

export default Article;

//** Card is a child from Article (its parent) */
//** parents pass data to child; power of react thrus this.props */
//** <Card title = { this.state.article1.title } title is self-defined, a child name from aricle its parent */
//**div 裡{} can put js code */