import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
`;

const ListItem = styled.li`
  margin-left: 16px;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
`;

const CartButton = styled.button`
  border: none;
  background-color: #fff;
  cursor: pointer;
`;

const Nav = styled.nav`
  position: relative;
`;

const Filter = styled.button`
  background-color: #ffffff;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  border: none;

  &:focus {
    color: #5ece7b;
  }
`;

export { List, ListItem, FlexContainer, CartButton, Nav, Filter };
