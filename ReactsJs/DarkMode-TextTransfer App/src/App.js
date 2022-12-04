import './App.css';
import React from 'react'
import PropTypes from 'prop-types'
import About from './components/About';

import Navbar from './components/Navbar';
import Textform from './components/Textform';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//let name = "Zeeshan";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="container my-3">
          <Switch >
            <Route exact path="/">
              <Textform heading="Enter the text to analyze below" />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>


        </div>

      </Router>
      {/* <Navbar /> */}
      {/*  if you used same navbar but different text then you props*/}
      {/* <Textform heading="Text Area" /> */}
      {/* <About /> */}

    </>
  );
}
// Navbar.propTypes = { title: PropTypes.string, aboutText: PropTypes.string }


Navbar.defaultProps = { title: "Home", aboutText: "About Us" }



export default App;
