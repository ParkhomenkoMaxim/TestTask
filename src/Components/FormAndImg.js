import React, { Component } from "react";
import Form from '../Components/Form';
import ImgLoader from '../Components/ImgLoader';

class FormAndImg extends Component {
  constructor(props) {
     super(props);
     this.state = {
       send: false,
     };
   }


  componentDidUpdate(prevProps) {
    if (prevProps.send !== this.props.send) {
      this.setState({send: true});
    }
  }


  render() {
    return (
     <div className = 'section'>

     <div className = 'imgLoader'>
      <ImgLoader send = {this.state.send} />
     </div>

      <div className = 'form'>
      <Form send = {this.state.send} />
      </div>

     </div>
    );
  }
}


export default FormAndImg;
