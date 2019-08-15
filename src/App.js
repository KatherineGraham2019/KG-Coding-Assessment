import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Homepage/Home.js';
import Details from './pages/Details/Details.js'
import TitleBar from './pages/TitleBar/TitleBar.js';
import './app.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="title-bar-header">  
          <TitleBar />      
        </header>
        <div className="spacer"></div>
        <div className="content">
          <Route exact path="/" component={Home} />
          <Route exact path="/details" component={Details} />
        </div>
      </div>
      <footer className="footer-class"></footer>
    </Router>
  );
}

export default App;
