import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 486px;
  height: 100%;

  background-color: #0f52ba;
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 488px) {
    width: 100%;
  }
`;

export const HeaderModal = styled.div`
  padding: 40px 40px 20px;
  display: flex;
  justify-content: space-between;

  h2 {
    font-size: 27px;
    font-weight: 700;
    color: #fff;
  }
  button {
    margin-bottom: 40px;

    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  @media (max-width: 488px) {
    padding: 20px;

    button {
      img {
        width: 32px;
        height: 32px;
      }
    }
  }
`;

export const ContentModal = styled.div`
  padding: 6px 40px 4px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: auto;

  @media (max-width: 488px) {
    padding: 20px;
  }
`;

export const FooterModal = styled.div`
  div.total {
    padding: 20px 40px;
    display: flex;
    flex-direction: c;
    justify-content: space-between;
    color: #fff;
    font-size: 28px;
    font-weight: 700;
  }
  button {
    font-size: 28px;
    font-weight: 700;
    padding: 40px;
    width: 100%;
    cursor: pointer;

    background-color: #000;
    color: #fff;
    border: none;
  }

  @media (max-width: 488px) {
    div.total {
      padding: 20px 20px;
      font-size: 22px;
    }
    button {
        font-size: 24px;
      }
  }
`;
