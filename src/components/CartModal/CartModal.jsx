import React from "react";
import {
  RelativeContainer,
  ItemContainer,
  AttributesContainer,
  Swatch,
  RemoveButton,
  ItemCounterContainer,
  CounterButton,
  ItemQuantityChip,
  InteractiveContainer,
  ImageContainer,
  ItemTitle,
  ItemPrice,
  ButtonsContainer,
  Button,
  SwatchContainer,
  AttributeParagraph,
  SpanButton,
} from "./CartModal.styled";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeProductFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../../redux/actions";

class CartModal extends React.Component {
  decrementProductsQuantity = (id, quantity) => {
    const decrement = this.props.decrementQuantity;
    if (quantity > 1) {
      decrement(id);
    } else
      alert(
        "quantity can not be less then 1! if you want to get rid of it - remove product!"
      );
  };

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.toggleModal();
    }
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }
  render() {
    const products = this.props.products;
    const omittedKeys = [
      "image",
      "orderedProductName",
      "price",
      "Color",
      "uniqueId",
      "quantity",
    ];
    return (
      <RelativeContainer>
        <ButtonsContainer>
          <SpanButton>
            <Link
              style={{
                textDecoration: "none",
                color: "inherit",
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
              onClick={() => this.props.toggleModal()}
              to="/cart"
            >
              VIEW BAG
            </Link>
          </SpanButton>

          <Button onClick={() => this.props.toggleModal()}>CHECK OUT</Button>
        </ButtonsContainer>
        <div>
          {products.length === 0 && <h2>Your cart is empty right now.</h2>}
          {products.map((product, idx) => {
            return (
              <ItemContainer key={idx}>
                <AttributesContainer>
                  <ItemTitle key={idx}>{product.orderedProductName}</ItemTitle>
                  {product.Color && (
                    <SwatchContainer>
                      <span>Color &nbsp;</span>{" "}
                      <Swatch swatchcolor={product.Color} />
                    </SwatchContainer>
                  )}
                  {Object.keys(product).map((key, idx) => {
                    if (!omittedKeys.includes(key)) {
                      return (
                        <AttributeParagraph key={idx}>
                          {key}: {product[key]}
                        </AttributeParagraph>
                      );
                    }
                  })}
                  <ItemPrice>Price: {product.price}</ItemPrice>
                </AttributesContainer>

                <InteractiveContainer key={idx}>
                  <ItemCounterContainer>
                    <CounterButton
                      type="button"
                      onClick={() =>
                        this.props.incrementQuantity(product.uniqueId)
                      }
                    >
                      +
                    </CounterButton>
                    <ItemQuantityChip>{product.quantity}</ItemQuantityChip>
                    <CounterButton
                      type="button"
                      onClick={() =>
                        this.decrementProductsQuantity(
                          product.uniqueId,
                          product.quantity
                        )
                      }
                    >
                      -
                    </CounterButton>
                  </ItemCounterContainer>
                  <ImageContainer>
                    <img src={product.image} width="100" alt="product" />
                    <RemoveButton
                      onClick={() =>
                        this.props.removeProductFromCart(product.uniqueId)
                      }
                      type="button"
                    >
                      Delete Product
                    </RemoveButton>
                  </ImageContainer>
                </InteractiveContainer>
              </ItemContainer>
            );
          })}
        </div>
      </RelativeContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.userOptions.productsInCart,
});
const mapDispatchToProps = () => ({
  removeProductFromCart,
  incrementQuantity,
  decrementQuantity,
});

export default connect(mapStateToProps, mapDispatchToProps())(CartModal);
