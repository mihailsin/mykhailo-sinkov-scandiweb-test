import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import CategoryView from "./Views/Category/CategoryView";
import ProductDescPage from "./Views/ProductDescPage/ProductDescPage";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    const linkToPDP = this.props.productId;
    console.log(linkToPDP);
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<CategoryView />} />
          <Route path={linkToPDP} element={<ProductDescPage />} />
          <Route path="*" element={<CategoryView />} />
        </Routes>
      </>
    );
  }
}

const mapStateToProps = (state) => ({ productId: state.userOptions.productId });

export default connect(mapStateToProps, null)(App);
