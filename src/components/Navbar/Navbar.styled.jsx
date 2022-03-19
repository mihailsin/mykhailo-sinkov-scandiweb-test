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
  border-radius: 50%;
`;

const Nav = styled.nav`
  position: relative;
`;

export { List, ListItem, FlexContainer, CartButton, Nav };
