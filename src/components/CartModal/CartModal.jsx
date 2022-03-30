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
const mapDispatchToProps = () => ({
  removeProductFromCart,
  incrementQuantity,
  decrementQuantity,
});

export default connect(mapStateToProps, mapDispatchToProps())(CartModal);
