import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 8px 0;
  margin-top: 60px;
  
  text-align: center;
  background-color: #eeeeee;
  
  
  p {
    font-size: 12px;
    font-weight: 400;
    line-height: 14.63px;
  }

  @media (min-height: 900px) {
    position: fixed;
    bottom: 0;
    left: 0;
  }
`;
