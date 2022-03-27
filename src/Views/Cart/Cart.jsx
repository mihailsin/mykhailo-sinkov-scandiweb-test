import React from "react";
import { connect } from "react-redux";
import Container from "../../components/Container";
import { removeProductFromCart } from "../../redux/actions";
import { ItemContainer, AttributesContainer, Swatch } from "./Cart.styled";
class Cart extends React.Component {
  state = {};
  render() {
    const products = this.props.products;
    const omittedKeys = ["image", "orderedProductName", "price", "Color"];
    return (
      <Container>
        <div>
          {products.map((product, idx) => {
            return (
              <ItemContainer key={idx}>
                <AttributesContainer>
                  <h3 key={idx}>{product.orderedProductName}</h3>
                  <h4>Price: {product.price}</h4>
                  <div>
                    Color: <Swatch swatchcolor={product.Color} />
                  </div>
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
                <div>
                  <img
                    key={idx}
                    src={product.image}
                    width="200"
                    alt="product"
                  />
                  <button
                    key={idx}
                    onClick={() =>
                      this.props.removeProductFromCart(
                        product.orderedProductName
                      )
                    }
                    type="button"
                  >
                    Remove from Cart
                  </button>
                </div>
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
