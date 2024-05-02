import styled from "styled-components";

export const Main = styled.div`
  max-width: 938px;
  margin: 0 auto;
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  column-gap: 22px;
  row-gap: 30px;
`