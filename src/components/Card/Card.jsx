import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import AddToCartIcon from "../AddToCartIcon/AddToCartIcon";
import {
  CardContainer,
  Thumb,
  Info,
  Item,
  PriceParagraph,
  TextParagraph,
  HiddenCartButton,
  ProductImg,
} from "./Card.styled";
import { PaleBackdrop } from "../NotInStockPic/NotInStockPic.styled";
import { linkTo } from "../../redux/actions";

class Card extends React.Component {
  render() {
    const { brand, gallery, name, prices, id, inStock } = this.props.product;
    const toggleOrderModal = this.props.togglemodal;

    return (
      <Item>
        <Link style={{ textDecoration: "none" }} to={id}>
          <CardContainer onClick={() => this.props.linkTo(id)}>
            {inStock && (
              <Thumb>
                <ProductImg image={gallery[0]} />
              </Thumb>
            )}
            {!inStock && (
              <Thumb>
                <PaleBackdrop>
                  <h2>OUT OF STOCK</h2>
                </PaleBackdrop>
                <ProductImg image={gallery[0]} />
              </Thumb>
            )}
            <Info>
              <TextParagraph>{name}</TextParagraph>
              <TextParagraph>{brand}</TextParagraph>
              {prices.map((price) => {
                if (price.currency.label === this.props.currency) {
                  return (
                    <PriceParagraph key={price.amount}>
                      {price.amount} {price.currency.symbol}
                    </PriceParagraph>
                  );
                }
              })}
            </Info>
          </CardContainer>
        </Link>
        <HiddenCartButton
          onClick={() => {
            toggleOrderModal();
            this.props.linkTo(id);
          }}
          type="button"
        >
          <AddToCartIcon />
        </HiddenCartButton>
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
