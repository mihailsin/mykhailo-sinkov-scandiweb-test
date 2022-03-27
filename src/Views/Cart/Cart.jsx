import React from "react";
import { connect } from "react-redux";
import Container from "../../components/Container";
import { removeProductFromCart } from "../../redux/actions";
class Cart extends React.Component {
  state = {};
  render() {
    const products = this.props.products;
    const omittedKeys = ["image"];
    return (
      <Container>
        <div>
          {products.map((product, idx) => {
            return (
              <div key={idx}>
                {Object.keys(product).map((key, idx) => {
                  if (
                    !omittedKeys.includes(key) &&
                    key !== "orderedProductName"
                  ) {
                    return (
                      <p key={idx}>
                        {key}: {product[key]}
                      </p>
                    );
                  }
                  if (key === "orderedProductName") {
                    return <h3 key={idx}>{product[key]}</h3>;
                  }
                  if (key === "image") {
                    return (
                      <img
                        key={idx}
                        src={product[key]}
                        width="200"
                        alt="product"
                      />
                    );
                  }
                })}
                <button
                  key={idx}
                  onClick={() =>
                    this.props.removeProductFromCart(product.orderedProductName)
                  }
                  type="button"
                >
                  Remove from Cart
                </button>
              </div>
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
