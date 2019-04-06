import React, { Component } from "react";
import { TextInput } from "../../elements"
import { NavLink } from "react-router-dom";
import LoginButton from "../../elements/LoginButton";
import axios from "axios"
 
class Login extends Component {

  LoginUser(){
    var login = document.getElementById('loginField')
    var password = document.getElementById('passwordField')

    if(login.checkValidity() && password.checkValidity()){
     
      axios.get('api/users/'+login.value+"/"+password.value).then(
        res => {
              if (res.data === true)
              window.location.href = ('#/home');
          else
              alert("Podaj poprawny login i hasło!");
      }).catch(res => alert(res))

    } else {
      alert("Wszystkie pola muszą być wypełnione");
    }
  }

  render() {
    return (
      <div className="login">
        <h2>Logowanie</h2>
        <TextInput id="loginField" type="text" name="login" placeholder="Login"/>
        <TextInput id="passwordField" type="password" name="password" placeholder="Hasło"/>
        <LoginButton func={this.LoginUser.bind(this)} name="Zaloguj"/>
        <p>Nie masz jeszcze konta? <NavLink to="/register">Zarejestruj się</NavLink></p>
      </div> 
    );
    
  }
}
 
export default Login;