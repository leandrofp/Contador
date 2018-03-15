import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import '../App.css';
import { connect } from 'react-redux';
import { counterIncrement, counterDecrement } from '../actions' 


class Contnieto extends Component {
 
  constructor(props) {
    super(props);
    this.state = {contanieto: 0 };
      
      }

      componentWillReceiveProps(nextProps) { 
        this.setState({ contanieto: nextProps.conta }); 
      
      }

      sumacontadorState = () =>{
        this.setState({contanieto: this.state.contanieto + 1});
      }

 
  render() {
    return (
      <div className="App">
        

        <p className="App-intro">
         
         <p> Contador Nieto2 Props: {this.props.countst}</p>        {/*contador que hereda*/}
         <p> Contador Nieto State: {this.state.contanieto} </p>   {/*contador propio*/}
         <p> <Button onClick={this.props.counterIncrement} >Suma state Nieto</Button> </p>
          
         </p> 
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    countst: state.count1
  }
}
const ActiontoProps = {
  counterIncrement,counterDecrement
}
export default connect(mapStateToProps,ActiontoProps)(Contnieto);