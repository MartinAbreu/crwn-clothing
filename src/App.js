import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import HatsPage from "./pages/hatspage/hatspage.component";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
