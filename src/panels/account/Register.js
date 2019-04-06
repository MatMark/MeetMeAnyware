import React, { Component } from "react";
import { LinkButton } from "../../elements"
 
class Register extends Component {
  render() {
    return (
      <div>
        <h2>Rejestracja</h2>  
        <LinkButton link="/home" name="Zarejestruj"/>  
      </div>
    );
  }
}
 
export default Register;