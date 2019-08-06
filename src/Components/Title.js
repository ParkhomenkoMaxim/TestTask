import React, { Component } from "react";
import Firebase from 'firebase';

class Title extends Component {

    constructor(props) {
      super(props);
        this.state = {
          value: '',
        };

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidUpdate(prevProps) {
      if (prevProps.send !== this.props.send) {
        Firebase.database().ref('Title').set(this.state.value);
        this.setState({value: ''});
      }
    }

      handleChange(event) {
        this.setState({value: event.target.value});
      }

      render() {
        return (

          <div className = 'title section'>
              <textarea className = 'textarea' placeholder="Enter text here" cols="35" rows="5"
               value={this.state.value} onChange={this.handleChange} />
          </div>

    );
  }
}


export default Title;
