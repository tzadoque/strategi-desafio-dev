import styled from 'styled-components';

const BaseBox = styled.div`
  background-color: ${props => props.theme.colors.marvel_dark_2};
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.sm};
  border-radius: ${props => props.theme.radius[0]};
`;

export { BaseBox };
