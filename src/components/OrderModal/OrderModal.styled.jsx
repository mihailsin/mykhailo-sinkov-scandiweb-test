import styled from "styled-components";

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const Modal = styled.div`
  padding: 20px 0px;
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: #fff;
  min-height: 600px;
  max-width: 400px;
  width: 100%;
  transform: translate(-50%, -50%);
`;

const CloseButton = styled.button`
  position: absolute;
  cursor: pointer;
  top: 20px;
  right: 20px;

  border: none;
  background-color: transparent;
  &:hover,
  :focus {
    color: #dd0000;
  }
`;

export { Backdrop, Modal, CloseButton };
