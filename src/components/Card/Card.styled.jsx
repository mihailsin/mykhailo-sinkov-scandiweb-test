import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  border: 1px solid rgba(0, 0, 0, 0.1);
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
  transition: box-shadow 300ms ease-in-out;
  &:hover,
  :focus {
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    transition: box-shadow 300ms ease-in-out;
  }
`;

const Thumb = styled.div`
  @media screen and (max-width: 1024px) {
    height: 200px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  padding-left: 20px;
  padding-right: 20px;
  position: relative;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  flex-shrink: 0;
`;

const ProductImg = styled.div`
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

const Info = styled.div`
  display: flex;
  flex-flow: column nowrap;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

const TextParagraph = styled.p`
  color: rgba(0, 0, 0, 0.5);
  margin-left: 10px;
  margin-bottom: 0;
  font-size: 14px;
  &:not(:last-child) {
    margin-top: 5px;
  }
`;
const PriceParagraph = styled.p`
  margin-left: 10px;
  margin-bottom: 0;
  font-size: 14px;
  font-style: italic;
  color: #111;
  &:not(:last-child) {
    margin-top: 5px;
  }
  margin-bottom: 5px;
`;

const HiddenCartButton = styled.button`
  position: absolute;
  right: 15px;
  bottom: 30px;
  opacity: 0;
  transition: opacity 500ms ease-in-out;
  border: none;
  cursor: pointer;
  background-color: transparent;

  padding: 0;
  height: auto;
  width: auto;
  z-index: 3;
`;

const Item = styled.li`
  position: relative;
  width: 100%;
  &:hover {
    ${HiddenCartButton} {
      opacity: 1;
      transition: opacity 500ms ease-in-out;
    }
  }
`;

export {
  CardContainer,
  Thumb,
  Info,
  Img,
  Item,
  PriceParagraph,
  TextParagraph,
  HiddenCartButton,
  ProductImg,
};
