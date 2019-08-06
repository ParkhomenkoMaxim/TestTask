import React, { Component } from "react";
import Title from '../Components/Title';
import UrlAdder from '../Components/UrlAdder';
import FormAndImg from '../Components/FormAndImg';


class Main extends Component {
  constructor(props) {
     super(props);
     this.state = {
       send: false,
     };
   }

  render() {
    return (
     <div className = "main">

      <button className = 'sendButton' type="submit" 
       onClick = {() => {this.setState({send: true})}}>Send data</button>

      <Title send = {this.state.send} />
      <UrlAdder send = {this.state.send} />
      <FormAndImg send = {this.state.send} />

     </div>
    );
  }
}


export default Main;
