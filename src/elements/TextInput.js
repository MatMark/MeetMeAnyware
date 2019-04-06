import React, { Component } from "react";

class TextInput extends Component {
    render() {
      return (
        <form>
          <label>
            <input type={this.props.type} name={this.props.name} placeholder={this.props.placeholder}/>
          </label>
        </form>
      );
    }
  }
   
  export default TextInput;