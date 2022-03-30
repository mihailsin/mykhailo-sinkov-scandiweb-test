import React from "react";
import { connect } from "react-redux";
import Container from "../../components/Container";
import { removeProductFromCart } from "../../redux/actions";
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
  state = {};
  render() {
    const products = this.props.products;
    const omittedKeys = [
      "image",
      "orderedProductName",
      "price",
      "Color",
      "uniqueId",
    ];
    return (
      <Container>
        <div>
          <Header>CART</Header>
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
                    <CounterButton type="button">+</CounterButton>
                    <ItemQuantityChip>0</ItemQuantityChip>
                    <CounterButton type="button">-</CounterButton>
                  </ItemCounterContainer>
                  <ImageContainer>
                    <img src={product.image} width="200" alt="product" />
                    <RemoveButton
                      onClick={() =>
                        this.props.removeProductFromCart(product.uniqueId)
                      }
                      type="button"
                    >
                      Remove from Cart
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
});

export default connect(mapStateToProps, mapDispatchToProps())(Cart);
