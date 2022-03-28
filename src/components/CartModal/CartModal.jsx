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
} from "./CartModal.styled";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class CartModal extends React.Component {
  render() {
    const products = this.props.products;
    const omittedKeys = ["image", "orderedProductName", "price", "Color"];
    return (
      <RelativeContainer>
        <div>
          {products.map((product, idx) => {
            return (
              <ItemContainer key={idx}>
                <AttributesContainer>
                  <ItemTitle key={idx}>{product.orderedProductName}</ItemTitle>
                  <ItemPrice>Price: {product.price}</ItemPrice>
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
                    <img src={product.image} width="100" alt="product" />
                    <RemoveButton
                      onClick={() =>
                        this.props.removeProductFromCart(
                          product.orderedProductName
                        )
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
        <div>
          <button>
            <Link to="/cart">VIEW BAG</Link>
          </button>
          <button>CHECK OUT</button>
        </div>
      </RelativeContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.userOptions.productsInCart,
});

export default connect(mapStateToProps, null)(CartModal);
