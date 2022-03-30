import styled from "styled-components";

const Grid = styled.ul`
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-items: center;
  row-gap: 50px;
  column-gap: 50px;

  list-style: none;
  padding-left: 0px;
`;

export { Grid };
