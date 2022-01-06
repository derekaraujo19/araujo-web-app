// import logo from './logo.svg';
import '../App.css';
import React from "react";
import { Route, Switch } from "react-router-dom";
import Title from "./Title";
import NavBar from "./NavBar";
import MusicPage from "./MusicPage";
import Resume from "./Resume";
import Comments from "./Comments";
import Home from "./Home";
import Footnote from "./Footnote";

function App() {
  return (
    <div className="App">
      <Title />
      <NavBar />
      <Switch>
        <Route exact path="/music">
          <MusicPage />
        </Route>
        <Route exact path="/resume">
          <Resume />
        </Route>
        <Route exact path="/comments">
          <Comments />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Footnote />
    </div>
  );
}

export default App;
