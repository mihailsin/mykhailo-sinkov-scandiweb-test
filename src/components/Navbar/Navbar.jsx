import React from "react";
import Container from "../Container";
import CartModal from "../CartModal";
import {
  List,
  ListItem,
  FlexContainer,
  CartButton,
  Nav,
} from "./Navbar.styled";
class Navbar extends React.Component {
  state = {
    isModalOpen: false,
  };

  toggleModal = () => {
    this.setState((state) => ({ isModalOpen: !state.isModalOpen }));
  };

  render() {
    return (
      <Container>
        <Nav>
          <FlexContainer>
            <List>
              <ListItem>Women</ListItem>
              <ListItem>Men</ListItem>
              <ListItem>Kids</ListItem>
            </List>
            <List>
              <ListItem>
                <select id="currency" name="currency">
                  <option value="USD" selected>
                    USD
                  </option>
                  <option value="EUR">EUR</option>
                  <option value="YEN">YEN</option>
                </select>
              </ListItem>
              <ListItem>
                <CartButton type="button" onClick={this.toggleModal}>
                  0
                </CartButton>
                {this.state.isModalOpen && <CartModal />}
              </ListItem>
            </List>
          </FlexContainer>
        </Nav>
      </Container>
    );
  }
}

export default Navbar;
