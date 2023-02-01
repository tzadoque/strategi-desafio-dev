import styled from 'styled-components';

const DesktopGrid = styled.div`
  display: grid;
  grid-template-columns: 243px 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  min-height: 100vh;
  position: relative;
`;

const CardsGrid = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 250px);
  grid-auto-rows: 290px;
  grid-column-gap: 32px;
  grid-row-gap: 32px;

  @media (min-width: 1400px) {
    grid-template-columns: repeat(4, 250px);
  }

  @media (min-width: 1600px) {
    grid-template-columns: repeat(5, 250px);
  }
`;

export { DesktopGrid, CardsGrid };
