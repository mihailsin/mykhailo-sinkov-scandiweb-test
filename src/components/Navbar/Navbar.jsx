import React from "react";
import { NavLink } from "react-router-dom";
import { changeFilter, changeCurrency } from "../../redux/actions";
import { connect } from "react-redux";
import Container from "../Container";
import CartModal from "../CartModal";
import { Query } from "@apollo/client/react/components";
import queries from "../../queries";
import {
  List,
  ListItem,
  FlexContainer,
  CartButton,
  Nav,
  Filter,
} from "./Navbar.styled";
import { Backdrop } from "../CartModal/CartModal.styled";

//Styles for navLinks described here

const linkStyle = {
  base: {
    color: "#000000",
    textDecoration: "none",
  },
  active: {
    color: "#5ECE7B",
    textDecoration: "underline",
  },
};

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
              <Query query={queries.CATEGORIES_QUERY}>
                {({ data, loading }) => {
                  if (loading) return "loading...";
                  return data.categories.map((category, idx) => {
                    return (
                      <ListItem key={idx}>
                        <NavLink
                          style={linkStyle.base}
                          activeStyle={linkStyle.active}
                          to={category.name}
                          onClick={() => this.props.changeFilter(category.name)}
                        >
                          {category.name.toUpperCase()}
                        </NavLink>
                      </ListItem>
                    );
                  });
                }}
              </Query>
            </List>
            <List>
              <ListItem>
                <select
                  id="currency"
                  name="currency"
                  value={this.props.currency}
                  onChange={(e) => this.props.changeCurrency(e.target.value)}
                >
                  <Query query={queries.CURRENCY_QUERY}>
                    {({ data, loading }) => {
                      if (loading) return "loading...";
                      return data.currencies.map(({ symbol, label }, idx) => {
                        return (
                          <option
                            key={idx}
                            value={label}
                            // selected={label === this.props.currency}
                          >
                            {/* {symbol} &nbsp; */}
                            {label}
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

const mapStateToProps = (state) => ({
  currency: state.userOptions.currency,
  filter: state.userOptions.filter,
});
const mapDispatchToProps = () => ({
  changeFilter,
  changeCurrency,
});

export default connect(mapStateToProps, mapDispatchToProps())(Navbar);
