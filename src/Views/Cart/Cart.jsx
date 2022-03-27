import React from "react";
import { connect } from "react-redux";
import Container from "../../components/Container";
class Cart extends React.Component {
  state = {};
  render() {
    const products = this.props.products;
    const omittedKeys = ["image"];
    return (
      <Container>
        <div>
          {products.map((product) => {
            return (
              <div>
                {Object.keys(product).map((key, idx) => {
                  if (
                    !omittedKeys.includes(key) &&
                    key !== "orderedProductName"
                  ) {
                    return (
                      <h3 key={idx}>
                        {key}: {product[key]}
                      </h3>
                    );
                  }
                  if (key === "orderedProductName") {
                    return <h1 key={idx}>{product[key]}</h1>;
                  }
                  if (key === "image") {
                    return (
                      <>
                        <img src={product[key]} width="200" alt="product" />
                      </>
                    );
                  }
                })}
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

export default connect(mapStateToProps, null)(Cart);
