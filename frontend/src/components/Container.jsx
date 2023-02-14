import styled from 'styled-components';

const MainContainer = styled.div`
  min-height: 90%;
  max-width: 1206px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 0 auto;
`;

const CenterContainer = styled(MainContainer)`
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  z-index: 1000;
  background-color: ${props => props.theme.colors.modal_background};
  display: flex;
  justify-content: center;
  padding: 64px;
  align-items: center;
  overflow: auto;
`;

export { MainContainer, CenterContainer, ModalContainer };
