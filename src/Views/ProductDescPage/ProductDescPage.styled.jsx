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
export {
  PreviewImgContainer,
  ImgWrapper,
  Img,
  FlexContainer,
  MainImgContainer,
  ProductOrderContainer,
};
