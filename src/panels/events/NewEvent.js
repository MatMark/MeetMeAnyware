import React, { Component } from "react";
import {TextInput} from "../../elements"
import axios from "axios"

class NewEvent extends Component {

  createEventFunction(){
    var name = document.getElementById('name')
    var date = document.getElementById('date')
    var place = document.getElementById('place')
    var description = document.getElementById('description')

    if(name.checkValidity() && date.checkValidity() && place.checkValidity() && description.checkValidity()){
     
      axios.put('api/events/'+name.value+"/"+date.value+"/"+place.value+"/"+description.value).then(
        res => {
              if (res.data === true){
                alert("Wydarzenie utworzone");
                window.location.reload();
              }
          else
              alert("Nie udało się utworzyć wydarzenia");
      }).catch(res => alert(res))

    } else {
      alert("Wszystkie pola muszą być wypełnione prawidłowo");
    }

    
  }

  render() {
    return (
      <div>
        <h2>Nowe wydarzenie</h2> 
        <TextInput id="name" type="text" name="eventName" placeholder="Nazwa wydarzenia"/>
        <TextInput id="date" type="date" name="eventDate" placeholder="Data Wydarzenia"/>
        <TextInput id="place" type="text" name="eventPlace" placeholder="Miejsce wydarzenia"/>
        <TextInput id="description" type="text"  name="eventDescription"  placeholder="Opis"/>
        <button className="button" onClick={this.createEventFunction.bind(this)}>Utwórz wydarzenie</button> 
      </div>
    );
  }
}

export default NewEvent;