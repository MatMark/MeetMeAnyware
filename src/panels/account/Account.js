import React, { Component } from "react";
import { LinkButton }from "../../elements";
 
class Account extends Component {
  render() {
    return (
          <div>
            <ul className="header">
               <LinkButton name="Wyloguj" link="/logout"/>
            </ul>
          </div>
    );
  }
}
 
export default Account;