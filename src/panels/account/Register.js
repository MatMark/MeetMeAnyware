import React, { Component } from "react";
import { TextInput } from "../../elements"
import LoginButton from "../../elements/LoginButton";
 
class Register extends Component {

  RegisterUser() {
    var login = document.getElementById('loginField').value
    var pass1 = document.getElementById('passField1').value
    var pass2 = document.getElementById('passField2').value
    var name = document.getElementById('nameField').value
    var surname = document.getElementById('surnameField').value
    var email = document.getElementById('emailField').value
    alert("Login: " + login + "\nHasło: " + pass1 + "\nHasło2: " + pass2 + "\nImię: " + name + "\nNazwisko: " + surname + "\nemail: " + email);
    window.location.href = ('#/home');
  }

  render() {
    return (
      <div>
        <h2>Rejestracja</h2>  
        <TextInput id="loginField" type="text" name="login" placeholder="Login"/>
        <TextInput id="passField1" type="password" name="password" placeholder="Hasło"/>
        <TextInput id="passField2" type="password" name="repaeatPassword" placeholder="Powtórz hasło"/>
        <TextInput id="nameField" type="text" name="name" placeholder="Imię"/>
        <TextInput id="surnameField" type="text" name="surname" placeholder="Nazwisko"/>
        <TextInput id="emailField" type="email" name="email" placeholder="e-mail"/>
        <LoginButton func={this.RegisterUser.bind(this)} name="Zarejestruj"/>  
      </div>
    );
  }
}
 
export default Register;