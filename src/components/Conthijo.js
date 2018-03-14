import React, { Component } from 'react';
import '../App.css';
import Contnieto from './Contnieto';


class Conthijo extends Component {
 
  constructor(props) {
    super(props);

      
      }


  
  render() {
    return (
     <div className="App" > 
     
        

       <p className="App-intro"> 
         
          Contador Hijo: {this.props.conta}
          
          
        </p>
        <p><Contnieto conta={this.props.conta} /> </p> 
      </div>
    );
  }
}

export default Conthijo;