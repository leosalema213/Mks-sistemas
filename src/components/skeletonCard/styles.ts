import styled from "styled-components";

export const SkeletonCardContainer = styled.div`
  width: 220px;
  height: 300px;
  box-shadow: rgba(0, 0, 0, .2) 0px 0px 7px;
  position: relative;
  border-radius: 8px;

  button {
    display: flex;
    gap: 14px;
    justify-content: center;

    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    
    border: none;
    padding: 18px;
    background-color: #ccc;
    border-radius: 0 0 8px 8px;
  }
  
`;

export const SkeletonCardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  padding: 0px 14px;

  img {
    width: 100%;
    height: 138px;
    background-color: #ccc;
  }
  
  .card_title {
    display: flex;
    justify-content: space-between;
    margin: 12px 0;
    gap: 2px;
    background-color: #ccc;

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 70px;
      height: 30px;

      padding: 4px 6px;
      border-radius: 6px;

      background-color: #ccc;
    }
  }

  p {
      height: 60px;
      background-color: #ccc;
    }
`;
