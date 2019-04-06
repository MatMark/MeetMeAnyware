import React, { Component } from "react";
import { Login } from "./";
 
class Start extends Component {
  render() {
    return (
          <div>
            <ul className="header">
               <Login/>
            </ul>
          </div>
    );
  }
}
 
export default Start;