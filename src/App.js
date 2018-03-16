import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Form, Button, Input , List , Image ,Divider} from 'semantic-ui-react'
import Conthijo from './components/Conthijo'
import { connect } from 'react-redux';
import { counterIncrement, counterDecrement , counterInput } from './actions' // testear con le index
import {fetchPeople} from './actions/Actions'; 

class App extends Component {
 
  constructor(props) {
    super(props);

    this.state1 = {contador: 0, ingreso:''};
 
      }
 
  insertarContador = () => {
    this.props.counterInput(this.state1.ingreso);
  }

  setContador = (e,value) => {
    this.state1.ingreso = e.target.value;
  }

  llamoApi = () =>{
    if (this.props.randompeople.isFetching===false) {
    this.props.fetchPeople()} else {alert("no se puede todavia") };
   
  }

  masinfo = (calle, ciudad) =>{
    alert("Calle:" + calle + " Ciudad: " + ciudad) ;
   
  }
  



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <divider/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        <p>
          Contador padre : {this.props.countst}    {/* toma el valor del store*/}
          <Conthijo conta={this.state1.contador} />  {/* ADIOS */}
        </p>
        <p>  <Button onClick={this.props.counterIncrement} >Suma contador</Button> </p>
        </p>
        <divider/>
        <Form>
          <Form.Field>
            <label>ingrese Numero</label>
            <Input placeholder='Ingrese Numero' onChange={this.setContador} />
            <Button onClick={this.insertarContador}>Ingresar</Button>
          </Form.Field>
        </Form>
        <Divider/>
         <p>  <Button onClick={ () => this.llamoApi() } >Llama API</Button> </p>
        <Divider/>
        <List>
          {this.props.randompeople.people.map( (m) => 
          <List.Item>
            <Image avatar src={m.picture.thumbnail} onClick={ () => this.masinfo(m.location.street,m.location.city) } />
            <List.Content>
              <List.Header as='a'>{m.name.first}</List.Header>
              <List.Description>email <a><b>{m.email}</b></a> </List.Description>
            </List.Content>
          </List.Item>
          )}
          </List>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    randompeople : state
  }
}
const ActiontoProps = {
  counterIncrement,counterDecrement,counterInput,fetchPeople
}
export default connect(mapStateToProps,ActiontoProps)(App);