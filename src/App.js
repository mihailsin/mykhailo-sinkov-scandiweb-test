import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import CategoryView from "./Views/Category/CategoryView";
import ProductDescPage from "./Views/ProductDescPage/ProductDescPage";
import Cart from "./Views/Cart";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route component={Cart} path="/cart" />
          <Route
            component={ProductDescPage}
            path={`/${this.props.productId}`}
          />
          <Route component={CategoryView} path="/:category" exact />
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
