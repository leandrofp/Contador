import React, { Component } from 'react';
import '../App.css';
import Contnieto from './Contnieto';
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux';
import {counterSet} from '../actions' ;



class Conthijo extends Component {
 
  render() {
    return (
      <div className="App" > 
        <p className="App-intro">     
          Contador Hijo: {this.props.countst}      
        </p>
        <p><Contnieto/> </p>
         <Button onClick ={this.props.counterSet}> RESET </Button> 
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    countst: state.count1
  }
}
export default connect(mapStateToProps,{counterSet})(Conthijo);