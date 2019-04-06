import React, { Component } from "react";
import { LinkButton, TextInput } from "../../elements"
 
class Register extends Component {
  render() {
    return (
      <div>
        <h2>Rejestracja</h2>  
        <TextInput type="text" name="login" placeholder="Login"/>
        <TextInput type="password" name="password" placeholder="Hasło"/>
        <TextInput type="password" name="repaeatPassword" placeholder="Powtórz hasło"/>
        <TextInput type="text" name="name" placeholder="Imię"/>
        <TextInput type="text" name="surname" placeholder="Nazwisko"/>
        <TextInput type="email" name="email" placeholder="e-mail"/>
        <LinkButton link="/home" name="Zarejestruj"/>  
      </div>
    );
  }
}
 
export default Register;