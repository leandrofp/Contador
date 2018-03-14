import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'semantic-ui-react'
import Conthijo from './components/Conthijo'

class App extends Component {
 
  constructor(props) {
    super(props);

    this.state = {contador: 0};
 
      }
 
    sumacontador = () =>{
    this.setState({contador: this.state.contador + 1});
   
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        <p>
          Contador padre : {this.state.contador}
          <Conthijo conta={this.state.contador} />  
        </p>
        <p>  <Button onClick={this.sumacontador} >Suma contador</Button> </p>
        </p>
      </div>
    );
  }
}

export default App;