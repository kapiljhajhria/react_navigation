import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './Main'
import About from './About'
import Contact from './Contact'
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

function App() {
  return (
      <Router>
          <div className="App">

              <ul>
                  <Link to="/">
                      <li>Home</li>
                  </Link>
                  <Link to="/about">
                      <li>About</li>
                  </Link>
                  <Link to="/contact">
                      <li>Contact us</li>
                  </Link>

              </ul>
                <Switch>

                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/contact">
                        <Contact/>
                    </Route>
                    <Route path="/">
                        <Main/>
                    </Route>
                </Switch>

          </div>
      </Router>

  );
}

export default App;
