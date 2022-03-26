import React from "react";
import { RelativeContainer } from "./CartModal.styled";
import { connect } from "react-redux";

class CartModal extends React.Component {
  render() {
    const products = this.props.products;
    console.log(products);
    products.map((product) => console.log(product));

    return (
      <RelativeContainer>
        {products.map((product) => {
          if (
            Object.keys(product) === "orderedProductName" ||
            Object.keys(product) === "image"
          ) {
            return (
              <>
                <h3>{product.orderedProductName}</h3>;
              </>
            );
          } else
            return (
              <>
                <p>{product}</p>
                <div>
                  <button>VIEW BAG</button>
                  <button>CHECK OUT</button>
                </div>
              </>
            );
        })}
      </RelativeContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.userOptions.productsInCart,
});

export default connect(mapStateToProps, null)(CartModal);
