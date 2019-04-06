import React, { Component } from "react";
import { NavLink } from "react-router-dom";
 
var eventArrays = [];

eventArrays[0] = ['Piwerko u Janusza', 'Chata Janusza', '06-05-2019'];
eventArrays[1] = ['Meczyk u Zdzicha', 'Zdzicho House', '11-05-2019'];

class YourEvents extends Component {
  render() {
    return (
      <div>
        <h2>Twoje wydarzenia</h2> 
        
        <table summary="Event array" id="eventArray">
        <tbody>
          <tr>
            <td><NavLink to="/register">{eventArrays[0][0]}</NavLink></td>
            <td>{eventArrays[0][1]}</td>
            <td>{eventArrays[0][2]}</td>
          </tr>
          <tr>
          <td>{eventArrays[1][0]}</td>
          <td>{eventArrays[1][1]}</td>
          <td>{eventArrays[1][2]}</td>
          </tr>
          </tbody>
        </table>

      </div>
    );
  }
}
 
export default YourEvents;