import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// import logo from './logo.svg';
// import './App.css';
import GetTracks from './components/GetTracks';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <h2>Sonic Acuity</h2>
          <Route path="/" exact component={GetTracks}/>
          {/* <Route path="/edit/:Id" component={EditTrial2}/> */}
        </div>
      </Router>
    ); 
  }
}

export default App;