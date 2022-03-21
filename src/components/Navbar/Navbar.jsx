import React from "react";
import { changeFilter } from "../../redux/actions";
import { connect } from "react-redux";
import Container from "../Container";
import CartModal from "../CartModal";
import { Query } from "@apollo/client/react/components";
import { NavLink } from "react-router-dom";
import queries from "../../queries";
import {
  List,
  ListItem,
  FlexContainer,
  CartButton,
  Nav,
  Filter,
} from "./Navbar.styled";

class Navbar extends React.Component {
  state = {
    currency: null,
    isModalOpen: false,
  };

  selectFilter = (e) => {
    console.log(e.target.value);
    return e.target.value;
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
                        <Filter
                          value={category.name}
                          onClick={(e) =>
                            this.props.changeFilter(e.target.value)
                          }
                        >
                          {category.name.toUpperCase()}
                        </Filter>
                      </ListItem>
                    );
                  });
                }}
              </Query>
            </List>
            <List>
              <ListItem>
                <select id="currency" name="currency">
                  <Query query={queries.CURRENCY_QUERY}>
                    {({ data, loading }) => {
                      if (loading) return "loading...";
                      return data.currencies.map(({ symbol, label }, idx) => {
                        return (
                          <option key={idx} value={label}>
                            {symbol} &nbsp;
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

const mapStateToProps = (state) => ({ filter: state.filter });
const mapDispatchToProps = () => ({
  changeFilter,
});

export default connect(mapStateToProps, mapDispatchToProps())(Navbar);
