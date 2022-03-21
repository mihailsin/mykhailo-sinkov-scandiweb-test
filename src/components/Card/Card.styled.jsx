import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  border: 1px solid #cccccc;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
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
  border-top: 1px solid #cccccc;
`;

const Item = styled.li`
  width: 100%;
`;

export { CardContainer, Thumb, Info, Img, Item };
