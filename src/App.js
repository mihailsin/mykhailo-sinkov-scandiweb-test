import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import CategoryView from "./Views/Category/CategoryView";

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
