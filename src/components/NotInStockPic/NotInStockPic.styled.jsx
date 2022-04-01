import styled from "styled-components";

const PaleBackdrop = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  position: absolute;
  z-index: 2;
`;

export { PaleBackdrop };
