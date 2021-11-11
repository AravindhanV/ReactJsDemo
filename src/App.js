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
    const nameRegex = RegExp('^[A-Z][a-zA-Z\\s]{2,}')
    this.setState({ userName: event.target.value });
    if (nameRegex.test(event.target.value)) {
      this.setState({ nameError: '' })
    } else {
      this.setState({ nameError: 'Name is incorrect' })
    }
  }

  render() {
    return (
      <>
        <body>
          <h1>Hello {this.state.userName}</h1>
          <img src={logo} onClick={this.onClick} alt="loaded" />
          <br />
          <center>
            <input onChange={this.onNameChange} />
            <span className="error-output">{this.state.nameError}</span>
          </center>
          <p>At Bridgelabz,we're a techie community of</p>
          <ul>
            <li>technologists</li>
            <li>thinkers</li>
            <li>builders</li>
          </ul>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, molestiae cum non eos sit, fuga vitae ipsa itaque
            reprehenderit omnis nam, suscipit voluptas! Dolorum, autem laboriosam exercitationem non necessitatibus alias.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum laudantium placeat nostrum optio.
            Exercitationem tempora consectetur libero natus impedit omnis, hic nihil accusantium, amet asperiores quod
            voluptates cumque, reprehenderit animi?
          </p>
          <p>
            To know about us,visit <a href="https://www.bridgelabz.com/">Bridgelabz</a> to learn even more about our mission
            i.e <strong> Employability to all</strong>
          </p>
        </body>
      </>
    )
  }
}

export default App;
