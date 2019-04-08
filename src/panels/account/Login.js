import React, { Component } from "react";
import { TextInput } from "../../elements"
import { NavLink } from "react-router-dom";
import LoginButton from "../../elements/LoginButton";
// import axios from "axios"
 
class Login extends Component {

  LoginUser(){
    var login = document.getElementById('loginField')
    var password = document.getElementById('passwordField')
    var headers = new Headers();

    if(login.checkValidity() && password.checkValidity()){
     
      headers.append('Accept', 'application/json'); // This one is enough for GET requests
      // headers.append('Access-Control-Allow-Origin', 'http://localhost:5000/api/Users');
      // headers.append('Content-Type', 'application/json-patch+json'); // This one sends body

      fetch('http://localhost:5000/api/Users', {
        method: 'GET',
        mode: 'no-cors',
        headers: headers

    }).then(res => res)
    .then(response => console.log('Success:', response.json()))
    .then(data => console.log("Body:", data))
    .catch(error => console.error('Error:', error.json()));

      // axios.get('api/users/'+login.value+"/"+password.value).then(
      //   res => {
      //         if (res.data === true)
      //         window.location.href = ('#/home');
      //     else
      //         alert("Podaj poprawny login i hasło!");
      // }).catch(res => alert(res))

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