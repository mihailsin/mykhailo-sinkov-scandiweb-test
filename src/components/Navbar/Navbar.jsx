import React from "react";
import Container from "../Container";
import CartModal from "../CartModal";
import { Query } from "@apollo/client/react/components";
import { gql } from "@apollo/client";
import {
  List,
  ListItem,
  FlexContainer,
  CartButton,
  Nav,
  Filter,
} from "./Navbar.styled";

const CURRENCY_QUERY = gql`
  {
    currencies {
      label
      symbol
    }
  }
`;

const CATEGORIES_QUERY = gql`
  {
    categories {
      name
    }
  }
`;

class Navbar extends React.Component {
  state = {
    currency: null,
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
              <Query query={CATEGORIES_QUERY}>
                {({ data, loading }) => {
                  if (loading) return "loading...";
                  return data.categories.map((category, idx) => {
                    return (
                      <ListItem key={idx}>
                        <Filter>{category.name.toUpperCase()}</Filter>
                      </ListItem>
                    );
                  });
                }}
              </Query>
            </List>
            <List>
              <ListItem>
                <select id="currency" name="currency">
                  <Query query={CURRENCY_QUERY}>
                    {({ data, loading }) => {
                      if (loading) return "loading...";
                      return data.currencies.map(({ symbol, label }, idx) => {
                        return (
                          <option key={idx} value={label}>
                            {symbol}
                          </option>
                        );
                      });
                    }}
                  </Query>
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
