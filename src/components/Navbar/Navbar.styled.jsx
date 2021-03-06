import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  padding-left: 5px;
  margin: 0px;
  height: 100%;
`;

const ListItem = styled.li`
  &:not(:first-child) {
    margin-left: 16px;
  }
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

const SelectDiv = styled.div`
  &::after {
    content: "";
    display: block;
    position: relative;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 5px 5px 0 5px;
    border-color: #111 transparent transparent transparent;
    bottom: 10px;
    left: 30px;
  }
`;

const Select = styled.select`
  cursor: pointer;
  appearance: none;
  position: relative;
  border: none;
  background-color: transparent;
  width: 40px;
`;

export {
  List,
  ListItem,
  FlexContainer,
  CartButton,
  Nav,
  Filter,
  Chip,
  Select,
  SelectDiv,
};
