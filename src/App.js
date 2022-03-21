import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import CategoryView from "./Views/Category/CategoryView";
import { Routes, Route } from "react-router-dom";
import { Query } from "@apollo/client/react/components";
import queries from "./queries";
class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <CategoryView />
      </>
    );
  }
}

export default App;
