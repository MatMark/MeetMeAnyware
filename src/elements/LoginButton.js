import React, { Component } from "react";

class LoginButton extends Component {
    render() {
      return (
        <div>
          <button className="button" onClick={() =>{(login(this.props.login, this.props.password))}}>
            <h3>{this.props.name}</h3>
          </button>
        </div>
      );
    }
  }

  function login(login, password) {
    alert(login + " " + password);
    window.location.href = ('#/home');
  }
   
  export default LoginButton;