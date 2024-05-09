import styled from "styled-components";

export const Main = styled.div`
  max-width: 938px;
  margin: 0 auto;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 22px;
  row-gap: 30px;

  /* @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  } */

  @media (max-width: 900px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    column-gap: 12px;
    row-gap: 30px;
  }
`;
