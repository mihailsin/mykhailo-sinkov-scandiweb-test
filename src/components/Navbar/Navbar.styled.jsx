import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  padding-left: 0px;
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
  position: relative;
`;

const Chip = styled.span`
  color: #fff;
  position: absolute;
  top: -5px;
  right: 0;
  display: inline-block;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background-color: #111;
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

export { List, ListItem, FlexContainer, CartButton, Nav, Filter, Chip };
