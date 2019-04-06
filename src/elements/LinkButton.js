import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class LinkButton extends Component {
    render() {
      return (
        <div>
          <NavLink className="button" exact to={this.props.link}>
            <h3>{this.props.name}</h3>
          </NavLink>
        </div>
      );
    }
  }
   
  export default LinkButton;