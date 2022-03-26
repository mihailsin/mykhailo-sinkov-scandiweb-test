import styled from "styled-components";

const FlexContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const PreviewImgContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  max-height: 720px;
  overflow: auto;
`;

const ImgWrapper = styled.div`
  width: 200px;
  height: 200px;
  margin-bottom: 20px;
  border: 1px solid grey;
  cursor: pointer;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  flex-shrink: 0;
`;

const MainImgContainer = styled.div`
  height: 720px;
  width: 720px;
  border: 1px solid black;
  margin-left: 20px;
`;

const ProductOrderContainer = styled.div`
  margin-left: 20px;
  max-width: 700px;
  overflow: auto;
`;

const ColorSelectOption = styled.span`
  display: inline-block;
  background-color: ${(props) => props.swatchcolor};
  border: 1px solid black;
  width: 50px;
  height: 50px;
  cursor: pointer;
  &:not(:first-child) {
    margin-left: 10px;
  }
`;
const AttributeSelectOption = styled.button`
  width: 100px;
  height: 50px;
  border: 1px solid black;
  background-color: #fff;
  cursor: pointer;
  &:not(:first-child) {
    margin-left: 10px;
  }
  &:hover,
  :focus {
    background-color: #000;
    color: #fff;
  }
`;

const CustomRadio = styled.label`
  cursor: pointer;

  &::before {
    content: "";
    display: inline-block;
    background-color: ${(props) => props.swatchcolor};
    border: 1px solid black;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    transition: transform 500ms ease-in-out;
  }

  &::after {
    content: "";
    position: relative;
    z-index: 3;
    display: inline-block;
    border: none;
    width: 30px;
    height: 30px;
    top: 5px;
    left: -36px;
    border-radius: 50%;
  }

  &:not(:first-child) {
    margin-left: 10px;
  }
`;

const RadioButton = styled.input`
  appearance: none;
  position: absolute;
  &:checked + ${CustomRadio}::before {
    transform: scale(1.5);
    transition: transform 500ms ease-in-out;
    border-radius: 50%;
  }
`;

const SubmitButton = styled.button`
  width: 200px;
  height: 50px;
  border: none;
  cursor: pointer;
  color: #fff;
  background-color: #5ece7b;
`;

export {
  PreviewImgContainer,
  ImgWrapper,
  Img,
  FlexContainer,
  MainImgContainer,
  ProductOrderContainer,
  AttributeSelectOption,
  SubmitButton,
  ColorSelectOption,
  RadioButton,
  CustomRadio,
};
