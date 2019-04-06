import React, { Component } from "react";

class TextInput extends Component {
    render() {
      return (
        <div>
          <form>
            <label>
              <input type={this.props.type} name={this.props.name} placeholder={this.props.placeholder} required/>
            </label>
          </form>
        </div>
      );
    }
  }
   
  export default TextInput;