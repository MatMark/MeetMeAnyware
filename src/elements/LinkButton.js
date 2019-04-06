import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class LinkButton extends Component {
    render() {
      return (
        <NavLink exact to={this.props.link}>
          <div className="button">
            <h3>{this.props.name}</h3>
          </div>
        </NavLink>
      );
    }
  }
   
  export default LinkButton;