import React, { Component } from "react";
import { LinkButton } from "../../elements"
import { Form, Segment} from 'semantic-ui-react';
import { NavLink } from "react-router-dom";
 
class Login extends Component {
  render() {
    return (
      <div className="login">
        <h2>Logowanie</h2>
            <Segment>
              <Form size="large">
                <Form.Input fluid placeholder="Login"/>
                <Form.Input fluid placeholder="Hasło" type="password"/>
                <LinkButton link="/home" name="Zaloguj"/>
              </Form>
            </Segment>
            <p>Nie masz jeszcze konta? <NavLink to="/register">Zarejestruj się</NavLink></p>
        </div>
    );
  }
}
 
export default Login;