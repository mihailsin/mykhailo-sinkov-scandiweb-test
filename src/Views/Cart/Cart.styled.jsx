import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
import styled from "styled-components";

const ItemContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;

const AttributesContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

const Swatch = styled.span`
  display: block;
  width: 100px;
  height: 50px;
  background-color: ${(props) => props.swatchcolor};
`;

const ImageContainer = styled.div``;

export { ItemContainer, AttributesContainer, Swatch };
