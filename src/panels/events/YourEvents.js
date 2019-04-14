import React, { Component } from "react";
 
var eventArrays = [];

eventArrays[0] = ['Piwerko u Janusza', 'Chata Janusza', '06-05-2019'];
eventArrays[1] = ['Meczyk u Zdzicha', 'Zdzicho House', '11-05-2019'];

class YourEvents extends Component {

  displayName = YourEvents.name
 
  constructor(props) {
    super(props);
    this.state = { event: [], loading: true };
 
      fetch('https://mmabackend.azurewebsites.net/api/Events')
      .then(response => response.json())
      .then(data => {
        this.setState({ event: data, loading: false });
      });
  }
 
  static showEvents(event) {
    return (
      <table className='table'>
        <thead>
          <tr>
            <th><p>ID</p></th>
            <th><p>Nazwa</p></th>
            <th><p>Data</p></th>
          </tr>
        </thead>
        <tbody>
          {event.map(event =>
            <tr key={event.id}>
              <td><p>{event.id}</p></td>
              <td><p>{event.title}</p></td>
              <td><p>{event.date}</p></td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : YourEvents.showEvents(this.state.event);
 
    return (
      <div>
        <h2>Twoje wydarzenia</h2>
        <p>This panel of wydarzenia presenting aktualne events from nasza baza danych</p>
        {contents}
      </div>
    );
  }
}
 
export default YourEvents;