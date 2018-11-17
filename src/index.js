import React from "react";
import ReactDom from "react-dom";
import App from "./App";
//** improt a class name*/

ReactDom.render(
    <App />, document.getElementById("root")
    /** App = App.js */
);

/** App is a special case */
//** react.Dom.render only has one in a porkect === entry (index.js) */
//** App.js => normally put component */
//** ReactDom.render render to index.html */

//** index.html 互動 index.js thur ReactDom */
//** index.js 拿到 App*/
//** nav article package up to App */