import React from "react";
import { Wrapper } from "./Container.styled";
class Container extends React.Component {
  render() {
    return <Wrapper>{this.props.children}</Wrapper>;
  }
}

export default Container;
