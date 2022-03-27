import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import {
  CardContainer,
  Thumb,
  Info,
  Img,
  Item,
  AmountParagraph,
  TextParagraph,
} from "./Card.styled";
import { linkTo } from "../../redux/actions";

class Card extends React.Component {
  render() {
    const { brand, gallery, name, prices, id } = this.props.product;
    return (
      <Item>
        <Link to={id}>
          <CardContainer onClick={() => this.props.linkTo(id)}>
            <Thumb>
              <Img src={gallery[0]} alt="" width="100%" />
            </Thumb>
            <Info>
              <TextParagraph>{name}</TextParagraph>
              <TextParagraph>{brand}</TextParagraph>
              {prices.map((price) => {
                if (price.currency.label === this.props.currency) {
                  return (
                    <AmountParagraph key={price.amount}>
                      {price.amount} {price.currency.symbol}
                    </AmountParagraph>
                  );
                }
              })}
            </Info>
          </CardContainer>
        </Link>
      </Item>
    );
  }
}

const mapStateToProps = (state) => ({
  currency: state.userOptions.currency,
  productId: state.userOptions.productId,
});

const mapDispatchToProps = (dispatch) => ({
  linkTo,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps())(Card));
