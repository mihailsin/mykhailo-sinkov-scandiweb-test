import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
import styled from "styled-components";

const Header = styled.h1`
  margin-top: 60px;
  margin-bottom: 60px;
`;

const ItemQuantityChip = styled.span`
  display: inline-block;
  padding-top: 3px;
  width: 25px;
  height: 25px;
  border: 1px solid #bbbbbb;
  text-align: center;
`;

const CounterButton = styled.button`
  width: 30px;
  height: 30px;
  border: 1px solid #bbbbbb;
  background-color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #111;
    color: #fff;
  }
`;

const ItemCounterContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  margin-right: 10px;
`;

const InteractiveContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const ItemContainer = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  border-top: 1px solid #bbbbbb;
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

const RemoveButton = styled.button`
  border: 1px solid #bbb;
  width: 100%;
  height: 30px;
  cursor: pointer;
  background-color: #fff;
  &:hover {
    background-color: #ff0000;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
`;

export {
  ItemContainer,
  AttributesContainer,
  Swatch,
  RemoveButton,
  Header,
  ItemCounterContainer,
  ItemQuantityChip,
  CounterButton,
  InteractiveContainer,
  ImageContainer,
};
