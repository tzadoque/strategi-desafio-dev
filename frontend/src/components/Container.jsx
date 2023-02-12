import styled from 'styled-components';

const MainContainer = styled.div`
  min-height: 90%;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const CenterContainer = styled(MainContainer)`
  justify-content: center;
  align-items: center;
`;

export { MainContainer, CenterContainer };
