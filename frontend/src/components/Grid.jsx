import styled from 'styled-components';

const DesktopGrid = styled.div`
  display: grid;
  grid-template-columns: 186px 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  position: relative;
`;

const TeamCardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-column-gap: 24px;
  grid-row-gap: 24px;
`;

const AvengersCardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: auto;
  grid-column-gap: 24px;
  grid-row-gap: 24px;
`;

export { DesktopGrid, TeamCardsGrid, AvengersCardsGrid };
