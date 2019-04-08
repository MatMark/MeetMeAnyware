import React, { Component } from "react";
import {TextInput} from "../../elements"
// import axios from "axios"
import LoginButton from "../../elements/LoginButton";

class NewEvent extends Component {

  createEventFunction(){
    var name = document.getElementById('name')
    var date = document.getElementById('date')
    var place = document.getElementById('place')
    var description = document.getElementById('description')
    var headers = new Headers();

    if(name.checkValidity() && date.checkValidity() && place.checkValidity() && description.checkValidity()){
     
      headers.append('Accept', 'application/json'); // This one is enough for GET requests
      headers.append('Content-Type', 'application/json-patch+json'); // This one sends body

      fetch('http://localhost:5000/api/Events', {
        method: 'POST',
        mode: 'no-cors',
        headers: headers,
        body: JSON.stringify({
          id: 3,
          title: "sss", //name.value,
          date: "2019-08-04T00:00:00", //date.value,
          idOwner: 1,
          idParticipants: 1,
          idOwnerNavigation: null,
          idParticipantsNavigation: null,
          users: []
          // place: place.value
          // description: description.value
        }),
    }).then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error));

      // axios.put('http://localhost:5000/api/Events').then(
      //   res => {
      //         if (res.data === true){
      //           alert("Wydarzenie utworzone");
      //           window.location.reload();
      //         }
      //     else
      //         alert("Nie udało się utworzyć wydarzenia");
      // }).catch(res => alert(res))

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
        <LoginButton func={this.createEventFunction.bind(this)} name="Utwórz wydarzenie"/>
      </div>
    );
  }
}

export default NewEvent;