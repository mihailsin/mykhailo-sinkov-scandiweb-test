import React from "react";
import CartModal from "../CartModal";
import Cart from "../Cart";

class CartContainer extends React.Component {
  render() {
    const { isModalOpen } = this.state.isModalOpen;
    return (
      <>
        {isModalOpen && <CartModal />}
        <Cart></Cart>
      </>
    );
  }
}

export default CartContainer;
