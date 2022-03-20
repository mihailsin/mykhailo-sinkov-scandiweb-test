import React from "react";
import { CardContainer, Thumb, Info, Img } from "./Card.styled";

class Card extends React.Component {
  render() {
    const { brand, gallery, name } = this.props.product;
    return (
      <li>
        <CardContainer>
          <Thumb>
            <Img src={gallery[0]} alt="" width="100%" />
          </Thumb>
          <Info>
            <p>{name}</p>
            <p>{brand}</p>
          </Info>
        </CardContainer>
      </li>
    );
  }
}

export default Card;
