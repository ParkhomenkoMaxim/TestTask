import React from 'react';
import Firebase from 'firebase';
import firebaseConfig from './firebaseConfig';
import './App.css';
import Main from './Components/Main';

class App extends React.Component {

    constructor(props){
    super(props);
    Firebase.initializeApp(firebaseConfig);

 }

  render() {
    return(

      <div>

        <Main/>

      </div>

    );
  }
}

export default App;
