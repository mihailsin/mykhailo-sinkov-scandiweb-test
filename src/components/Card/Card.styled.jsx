import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  border: 1px solid rgba(0, 0, 0, 0.1);
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
  &:hover,
  :focus {
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  }
`;

const Thumb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  flex-shrink: 0;
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
const AmountParagraph = styled.p`
  margin-left: 10px;
  margin-bottom: 0;
  font-size: 14px;
  font-style: italic;
  &:not(:last-child) {
    margin-top: 5px;
  }
  margin-bottom: 5px;
`;
const Item = styled.li`
  width: 100%;
`;

export {
  CardContainer,
  Thumb,
  Info,
  Img,
  Item,
  AmountParagraph,
  TextParagraph,
};
