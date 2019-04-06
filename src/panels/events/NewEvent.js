import React, { Component } from "react";
import {TextInput} from "../../elements"

class NewEvent extends Component {

  createEventFunction(){
    alert("Wydarzenie utworzone");
    window.location.reload();
  }

  render() {
    return (
      <div>
        <h2>Nowe wydarzenie</h2> 
        <TextInput type="text" name="eventName" placeholder="Nazwa wydarzenia"/>
        <TextInput type="date" name="eventDate" placeholder="Data Wydarzenia"/>
        <TextInput type="text" name="eventPlace" placeholder="Miejsce wydarzenia"/>
        <TextInput type="text"  name="eventDescription"  placeholder="Opis"/>
        <button className="button" onClick={this.createEventFunction.bind(this)}>Utworz wydarzenie</button> 
      </div>
    );
  }
}

export default NewEvent;