import React from "react";
import { RelativeContainer } from "./CartModal.styled";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class CartModal extends React.Component {
  render() {
    const products = this.props.products;
    return (
      <RelativeContainer>
        {/* {products.map((product, idx) => {
         
          if (Object.keys(product) === "image") return <h3>image</h3>;
          else
            return (
              <React.Fragment key={idx}>
                <p>
                  {Object.keys(product)}: {Object.values(product)}
                </p>
              </React.Fragment>
            );
        })} */}
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
