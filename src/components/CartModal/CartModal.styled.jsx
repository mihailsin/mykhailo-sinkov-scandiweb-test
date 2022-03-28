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

const Swatch = styled.span`
  display: block;
  width: 50px;
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

const ItemPrice = styled.h5`
  margin-top: 0;
  margin-bottom: 10px;
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
};
