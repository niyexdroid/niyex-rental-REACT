import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Gallery from './pages/Gallery.jsx';
import Rent from './pages/Rent.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={ Home } />
          <Route exact path="/About" component={ About } />
          <Route exact path="/Contact" component={ Contact } />
          <Route exact path="/Gallery" component={ Gallery } />
          <Route exact path="/Rent" component={ Rent } />
        </div>
      </Router>
      
    );
  }
}

export default App;
