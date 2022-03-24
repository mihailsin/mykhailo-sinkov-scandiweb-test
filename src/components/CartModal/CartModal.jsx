import React from "react";
import { RelativeContainer } from "./CartModal.styled";

class CartModal extends React.Component {
  render() {
    return (
      <RelativeContainer>
        <h3>My Bag</h3>
        <div>here would be item</div>
        <p>total</p>
        <div>
          <button>VIEW BAG</button>
          <button>CHECK OUT</button>
        </div>
      </RelativeContainer>
    );
  }
}

export default CartModal;
