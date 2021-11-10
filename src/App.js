import React from 'react';
import './App.css';
import logo from './assets/img/logo.jpeg'

class App extends React.Component {
  url = "http://www.bridgelabz.com/"
  constructor() {
    super()
    this.state = {
      userName: ''
    }
  }

  onClick = ($event) => {
    console.log("save button is clicked", $event);
    window.open(this.url, "_blank");
  }

  onNameChange = (event) => {
    console.log("value is: ", event.target.value);
    this.setState({ userName: event.target.value });
  }

  render() {
    return (
      <>
        <div>
          <h1>Hello {this.state.userName} from Bridgelabz</h1>
          <img src={logo} alt="Bridgelabz logo" onClick={this.onClick} />
        </div>
        <div>
          <input onChange={this.onNameChange} />
        </div>
      </>
    )
  }
}

export default App;
