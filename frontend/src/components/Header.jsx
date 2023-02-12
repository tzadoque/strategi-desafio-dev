import styled from 'styled-components';
import { Heading3 } from './Text';

const HeaderStyled = styled.header`
  background-color: ${props => props.theme.colors.marvel_dark_2};
  padding: 16px 24px;
`;

const Header = ({ title }) => {
  return (
    <HeaderStyled>
      <Heading3>{title}</Heading3>
    </HeaderStyled>
  );
};

export { Header };
