import React, { Component } from "react";

class LoginButton extends Component {
    render() {
      return (
        <div>
          <button className="button" onClick={this.props.func}>
            <h3>{this.props.name}</h3>
          </button>
        </div>
      );
    }
  }
   
  export default LoginButton;