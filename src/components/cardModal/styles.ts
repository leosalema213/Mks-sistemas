import styled from "styled-components";

export const CardModalContainer = styled.div`
  background-color: #fff;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 18px 22px;
  border-radius: 8px;
  position: relative;
  margin-bottom: 22px;

  img {
    max-width: 60px;
    max-height: 60px;
  }
  h3 {
    font-size: 13px;
    font-weight: 400;
    line-height: 17px;
    color: #2c2c2c;
    margin-left: 8px;
    width: 110px;
  }
  div.buttonQtd {
    margin: 0 60px 0 30px;
    border-radius: 4px;
    border: 1px solid #bfbfbf;
    position: relative;
    span {
      cursor: pointer;
      font-size: 12px;
      font-weight: 400;
      padding: 0 4px;
    }
    span.value {
      cursor: default;
      border-right: 1px solid #bfbfbf;
      border-left: 1px solid #bfbfbf;
    }
    span.text {
      position: absolute;
      top: -12px;
      left: -6px;
      font-size: 8px;
      font-weight: 400;
    }
  }
  p {
    font-size: 14px;
    font-weight: 700;
  }
  .btn-close {
    cursor: pointer;
    position: absolute;
    background-color: transparent;
    right: -6px;
    top: -6px;
    width: 18px;
    height: 18px;
  }
`;
