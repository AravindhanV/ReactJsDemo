import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      title: "Hello from bridgelabz"
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <img src={logo} alt="Bridgelabz logo" />
      </div>
    )
  }
}

export default App;
