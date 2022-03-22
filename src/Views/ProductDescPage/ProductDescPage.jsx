import React from "react";
import { connect } from "react-redux";
import Container from "../../components/Container";

class ProductDescPage extends React.Component {
  render() {
    return (
      <>
        <Container>
          <div></div>
          <div></div>
        </Container>
      </>
    );
  }
}

export default connect()(ProductDescPage);
