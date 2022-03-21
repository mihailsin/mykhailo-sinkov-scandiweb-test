import styled from "styled-components";

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-items: center;
  row-gap: 50px;
  column-gap: 50px;

  list-style: none;
`;

export { Grid };
