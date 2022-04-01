import styled from "styled-components";

const Div = styled.div`
  margin-top: 80px;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const PreviewImgContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  max-height: 600px;
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
  @media screen and (max-width: 1024px) {
    height: 400px;
    width: 400px;
  }
  height: 600px;
  width: 600px;
  border: 1px solid black;
  margin-left: 20px;
`;

const ProductOrderContainer = styled.div`
  margin-left: 20px;
  max-width: 700px;
  overflow: auto;
`;

const ProductName = styled.h2`
  margin-top: 0px;
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
    margin-left: 8px;
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

///////////

const CustomLabel = styled.label`
  cursor: pointer;

  &::before {
    content: "${(props) => props.content}";
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    padding: 0px 5px;

    min-width: 70px;
    height: 40px;

    background-color: #fff;
    border: 1px solid black;

    transition: background-color 500ms ease-in-out, color 500ms ease-in-out;

    &:not(:first-child) {
      margin-left: 10px;
    }
  }

  /* &::after {
    content: "";
    position: relative;
    z-index: 3;
    display: inline-block;
    border: none;
    width: 30px;
    height: 30px;
    top: 5px;
    left: -36px;
  } */

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const CustomInput = styled.input`
  margin: 0px;
  appearance: none;
  position: absolute;
  &:checked + ${CustomLabel}::before {
    background-color: #111;
    color: #fff;
    transition: background-color 500ms ease-in-out, color 500ms ease-in-out;
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
  RadioButton,
  CustomRadio,
  Div,
  ProductName,
  CustomInput,
  CustomLabel,
};
