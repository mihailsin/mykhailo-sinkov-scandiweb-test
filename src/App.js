import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import CategoryView from "./Views/Category/CategoryView";
import ProductDescPage from "./Views/ProductDescPage/ProductDescPage";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    const linkToPDP = this.props.productId;
    const linkToCategory = this.props.filter;
    return (
      <>
        <Navbar />
        <Switch>
          <Route component={CategoryView} path={`/${linkToCategory}`} />
          <Route component={ProductDescPage} path={`/${linkToPDP}`} />
        </Switch>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  productId: state.userOptions.productId,
  filter: state.userOptions.filter,
});

export default connect(mapStateToProps, null)(App);
