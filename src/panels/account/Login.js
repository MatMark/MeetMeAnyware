import React, { Component } from "react";
import { TextInput } from "../../elements"
import { NavLink } from "react-router-dom";
import LoginButton from "../../elements/LoginButton";
 
class Login extends Component {
  render() {
    return (
      <div className="login">
        <h2>Logowanie</h2>
        <TextInput type="text" name="login" placeholder="Login"/>
        <TextInput type="password" name="password" placeholder="Hasło"/>
        <LoginButton name="Zaloguj" login="Morys" password="123456"/>
        <p>Nie masz jeszcze konta? <NavLink to="/register">Zarejestruj się</NavLink></p>
      </div>
    );
  }
}
 
export default Login;