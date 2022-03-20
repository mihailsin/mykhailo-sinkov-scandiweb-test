import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  border: 1px solid #cccccc;
  justify-content: space-between;
  width: 250px;
  cursor: pointer;
`;

const Thumb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
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

export { CardContainer, Thumb, Info, Img };
