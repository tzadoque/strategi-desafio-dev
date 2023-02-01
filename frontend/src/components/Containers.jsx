import styled from 'styled-components';
import BackgroundImage from '../assets/background.jpg';

const MainContent = styled.main`
  background: url(${props => BackgroundImage}) no-repeat center;
  background-position-y: 100px;
  background-attachment: fixed;
  background-size: cover;

  width: 100%;
  padding: 32px;
`;

export { MainContent };
