import React from "react";
import { connect } from "react-redux";
import Container from "../../components/Container";
import {
  removeProductFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../../redux/actions";
import {
  ItemContainer,
  AttributesContainer,
  Swatch,
  RemoveButton,
  Header,
  ItemCounterContainer,
  CounterButton,
  ItemQuantityChip,
  InteractiveContainer,
  ImageContainer,
} from "./Cart.styled";
class Cart extends React.Component {
  decrementProductsQuantity = (id, quantity) => {
    const decrement = this.props.decrementQuantity;
    if (quantity > 1) {
      decrement(id);
    } else
      alert(
        "quantity can not be less then 1! if you want to get rid of it - remove product!"
      );
  };

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
      <Container>
        <div>
          <Header>CART</Header>
          {products.length === 0 && <h2>Your cart is empty right now.</h2>}
          {products.map((product, idx) => {
            return (
              <ItemContainer key={idx}>
                <AttributesContainer>
                  <h3 key={idx}>{product.orderedProductName}</h3>
                  <h4>Price: {product.price}</h4>
                  {product.Color && (
                    <div>
                      Color: <Swatch swatchcolor={product.Color} />
                    </div>
                  )}
                  {Object.keys(product).map((key, idx) => {
                    if (!omittedKeys.includes(key)) {
                      return (
                        <p key={idx}>
                          {key}: {product[key]}
                        </p>
                      );
                    }
                  })}
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
                    <img src={product.image} width="200" alt="product" />
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
      </Container>
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

export default connect(mapStateToProps, mapDispatchToProps())(Cart);
