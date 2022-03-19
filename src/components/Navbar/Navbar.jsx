import React from "react";
import Container from "../Container";
import { List, ListItem, FlexContainer, CartButton } from "./Navbar.styled";
class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <Container>
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
                <CartButton type="button">0</CartButton>
              </ListItem>
            </List>
          </FlexContainer>
        </Container>
      </nav>
    );
  }
}

export default Navbar;
