import ModalComponent from "./components/ModalComponent"
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ModalComponent header="Header Name"  body="Body Content" footer="footer Name"/>
        </nav>
        <Switch>
          <Route path="/page#modal" exact>
          </Route>
          <Route path="/">
          </Route>
        </Switch>
      </div>
    </Router>
  );
}