import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  border: 1px solid #000000;
  justify-content: space-between;
`;

const Thumb = styled.div`
  height: 300px;
`;

const Info = styled.div`
  display: flex;
  flex-flow: column nowrap;
  border: 1px solid, #111111;
`;

export { CardContainer, Thumb, Info };
