import styled from "styled-components";
import { HeaderProps } from ".";

export const HeaderContainer = styled.header<HeaderProps>`
  display: flex;
  padding: 28px 80px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 80px;

  background-color: ${(props) =>
    props.bg_header_color && props.bg_header_color};
  color: #ffffff;

  .carrinho {
    display: flex;
    justify-content: center;
    gap: 16px;
    padding: 11px 18px 11px 12px;

    color: #000;
    background-color: #fff;
    border: none;
    border-radius: 8px;

    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
  }

  @media (max-width: 480px) {
    padding: 12px;
  }
`;

export const HeaderTitle = styled.div`
  display: flex;
  gap: 8px;

  h1 {
    font-size: 40px;
    font-weight: 600;
    line-height: 19px;
  }
  p {
    font-size: 20px;
    font-weight: 300;
    line-height: 19px;
    margin-top: 4px;
  }
  @media (max-width: 480px) {
    h1 {
      font-size: 30px;
    }
    p {
      font-size: 16px;
    }
  }
`;
