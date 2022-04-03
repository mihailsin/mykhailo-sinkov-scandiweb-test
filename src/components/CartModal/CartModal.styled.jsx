import styled from "styled-components";

const RelativeContainer = styled.div`
  z-index: 99;
  border: 1px solid #000;
  background-color: #fff;
  padding-left: 10px;
  padding-right: 10px;
  height: 540px;
  width: 325px;
  position: absolute;
  right: 0;
  top: 100%;
  overflow: auto;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const Button = styled.button`
  cursor: pointer;
  width: 45%;
  height: 30px;
  border: 1px solid #111;
  background-color: transparent;
  color: #111;
  &:hover,
  focus {
    color: #fff;
    background-color: #5ece7b;
  }
`;
const SpanButton = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 45%;
  height: 30px;
  border: 1px solid #111;
  background-color: transparent;
  color: #111;
  &:hover,
  focus {
    color: #fff;
    background-color: #5ece7b;
  }
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
  margin-right: 5px;
`;

const InteractiveContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  padding-right: 5px;
`;

const ItemContainer = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  border-top: 1px solid #bbbbbb;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;

const AttributesContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

const AttributeParagraph = styled.p`
  font-size: 14px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const SwatchContainer = styled.div`
  font-size: 14px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`;

const Swatch = styled.span`
  border: 1px solid #111;
  display: inline-block;
  width: 20px;
  height: 20px;
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

const ItemTitle = styled.h4`
  margin-top: 0;
  margin-bottom: 10px;
`;

const ItemPrice = styled.h4`
  margin-bottom: 0;
  margin-top: auto;
`;

export {
  ItemTitle,
  ItemContainer,
  AttributesContainer,
  Swatch,
  RemoveButton,
  RelativeContainer,
  ItemCounterContainer,
  ItemQuantityChip,
  CounterButton,
  InteractiveContainer,
  ImageContainer,
  ItemPrice,
  ButtonsContainer,
  Button,
  SwatchContainer,
  AttributeParagraph,
  SpanButton,
};
