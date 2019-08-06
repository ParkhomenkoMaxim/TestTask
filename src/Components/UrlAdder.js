import React, { Component } from "react";
import Firebase from 'firebase';


class UrlAdder extends Component {

  constructor(props) {
     super(props);
     this.state = {
       value: '',
       urls: [],
     };

     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
   }

   componentDidUpdate(prevProps) {
     if (prevProps.send !== this.props.send) {
       Firebase.database().ref('Url').set(this.state.urls);
     }
    }

   handleChange(event) {
     this.setState({value: event.target.value});
   }

    handleSubmit(e) {
     e.preventDefault();
     this.setState({urls: this.state.urls.concat(this.state.value)});
     this.setState({
       value: ''
     });
   }

  render() {
    return (
     <div className = "urlAdder section">

      <form onSubmit={this.handleSubmit}>
          <label>
           {'Enter URL:     '}
              <input className = ''
              type="url" name="url" id="url"
              value={this.state.value} onChange={this.handleChange}
              placeholder="https://example.com"
              pattern="https?://.+" size="39"
              required/>
          </label>
          <input className = 'addButton' type="submit" value="ADD" />
      </form>

      <div>
            {this.state.urls.map((url) => (
                  <p>{url}</p>
            ))}
      </div>

     </div>
    );
  }
}


export default UrlAdder;
