import styled from "styled-components";

export const CardContainer = styled.div`
  width: 220px;
  height: 300px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 7px;
  position: relative;
  border-radius: 8px;
`;
export const CardButton = styled.button`
  display: flex;
  gap: 14px;
  justify-content: center;

  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  
  border: none;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  padding: 10px;
  background-color: #0f52ba;
  border-radius: 0 0 8px 8px;
  cursor: pointer;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  padding: 0px 14px;

  img {
    width: 100%;
    max-height: 138px;
  }

  .card_title {
    display: flex;
    justify-content: space-between;
    margin: 12px 0;
    gap: 2px;

    h2 {
      color: #2c2c2c;
      font-size: 16px;
      font-weight: 500;
      line-height: 19px;
    }
    span {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 70px;
      height: 30px;

      padding: 4px 6px;
      border-radius: 6px;
      font-size: 15px;

      font-weight: 700;
      color: #fff;
      background-color: #373737;
    }
  }

  p {
    font-size: 10px;
    font-weight: 300;
    line-height: 12px;
    max-height: 26px;
  }
`;
