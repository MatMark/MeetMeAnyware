import React, { Component } from "react";
import { LinkButton, TextInput } from "../../elements"
import { NavLink } from "react-router-dom";
 
class Login extends Component {
  render() {
    return (
      <div className="login">
        <h2>Logowanie</h2>
        <TextInput type="text" name="login" placeholder="Login"/>
        <TextInput type="text" name="password" placeholder="Hasło"/>
        <LinkButton link="/home" name="Zaloguj"/>
        <p>Nie masz jeszcze konta? <NavLink to="/register">Zarejestruj się</NavLink></p>
      </div>
    );
  }
}
 
export default Login;