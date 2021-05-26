import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Calculator from "./components/Calculator";
import "./App.global.css";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Calculator} />
      </Switch>
    </Router>
  );
}
