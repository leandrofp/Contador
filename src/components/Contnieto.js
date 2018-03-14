import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import '../App.css';


class Contnieto extends Component {
 
  constructor(props) {
    super(props);
    this.state = {contanieto: 0 };
      
      }

      componentWillReceiveProps(nextProps) { 
        this.setState({ contanieto: nextProps.conta }); 
        /* cuando actualizo un prop del padre se activa el evento, reemplaza el contanieto por el que tendra el padre */
      
      }

      sumacontadorState = () =>{
        this.setState({contanieto: this.state.contanieto + 1});
      }
      

    
  render() {
    return (
      <div className="App">
        

        <p className="App-intro">
         
         <p> Contador Nieto2 Props: {this.props.conta}</p>        {/*contador que hereda*/}
         <p> Contador Nieto State: {this.state.contanieto} </p>   {/*contador propio*/}
         <p> <Button onClick={this.sumacontadorState} >Suma state Nieto</Button> </p>
          
         </p> 
      </div>
    );
  }
}

export default Contnieto;