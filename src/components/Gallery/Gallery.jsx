import React from "react";
import { Grid } from "./Gallery.styled";
import Container from "../Container";
import { withRouter } from "react-router-dom";
class Gallery extends React.Component {
  render() {
    return (
      <Container>
        <Grid>{this.props.children}</Grid>
      </Container>
    );
  }
}

export default withRouter(Gallery);
