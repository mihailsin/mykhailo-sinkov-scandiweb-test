import styled from "styled-components";

const RelativeContainer = styled.div`
  border: 1px solid #000;
  background-color: #fff;
  height: 540px;
  width: 325px;
  position: absolute;
  right: 0;
  top: 100%;
`;

const Backdrop = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
`;

export { RelativeContainer, Backdrop };
