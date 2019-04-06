import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "semantic-ui-react";

class LinkButton extends Component {
    render() {
      return (
            <div>
              <ul className="header">
                  <NavLink exact to={this.props.link}>
                    <Button>
                      {this.props.name}
                    </Button>
                  </NavLink>
              </ul>
            </div>
      );
    }
  }
   
  export default LinkButton;