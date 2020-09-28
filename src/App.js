import React, { Component } from "react";
import "./App.css";
import MainComponent from "./components/MainComponent";
import { BrowserRouter } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <MainComponent />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
