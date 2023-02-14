import { useContext } from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../context/GlobalContext';
import { Heading3 } from './Text';

const HeaderStyled = styled.header`
  background-color: ${props => props.theme.colors.marvel_dark_2};
  padding: 16px 24px;
  position: sticky;
  top: 0;
  z-index: 998;

  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
`;

const Header = () => {
  const { headerTitle } = useContext(GlobalContext);

  return (
    <HeaderStyled>
      <Heading3>{headerTitle}</Heading3>
    </HeaderStyled>
  );
};

export { Header };
