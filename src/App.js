import React from 'react';
import './App.css';
import logo from './assets/img/logo.jpeg'

class App extends React.Component {
  url = "http://www.bridgelabz.com/"
  constructor() {
    super()
    this.state = {
      title: "Hello from bridgelabz"
    }
  }

  onClick = ($event) => {
    console.log("save button is clicked", $event);
    window.open(this.url, "_blank");
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <img src={logo} alt="Bridgelabz logo" onClick={this.onClick} />
      </div>
    )
  }
}

export default App;
