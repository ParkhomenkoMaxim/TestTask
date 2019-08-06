import React, { Component } from "react";
import styles from '../cssModules/Form.css';
import Firebase from 'firebase';

class Form extends Component {

  constructor(props) {
    super(props);
      this.state = {
        firstName: '',
        email: '',
        details: '',
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.send !== this.props.send) {
      Firebase.database().ref('Form').set(this.state);
    }
  }

    handleChange = (event) => {
      let name = event.target.name;
      let value = event.target.value;
      this.setState({[name]: value});
    }

    handleSubmit(e) {
    e.preventDefault();
 }

  render() {
    return (
     <div className = "form">

     <form onSubmit = {this.handleSubmit}>
        <div className = 'inputArea'>

         <label>
          First name
          <input className = 'formInput'
          type="text" name="firstName" id="firstName"
          value={this.state.value} onChange={this.handleChange}
          placeholder="Enter your first name"
          pattern="[A-Za-zА-Яа-я]{1,32}" size="30"
          required/>
        </label>

        <label>
         Your email
          <input className = 'formInput'
          type="email" name="email" id="email"
          value={this.state.value} onChange={this.handleChange}
          placeholder="Enter your email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" size="30"
          required/>
        </label>

        <label>
         Details
          <textarea className = 'formInput formTextArea' name = "details" placeholder="Enter details here" cols="40" rows="5"
          value={this.state.value} onChange={this.handleChange} />
        </label>
        
        </div>

        <div className = 'submitArea'>
         <input className = 'submitButton' type="submit" value="Contact us" />
        </div>

     </form>
     <p>{this.state.test}</p>
     </div>
    );
  }
}


export default Form;
