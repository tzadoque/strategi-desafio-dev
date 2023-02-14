import styled from 'styled-components';

// my components
import { BaseBox } from './Box';
import { BodyText1, Heading4 } from './Text';
import { OutlineSecondaryLink } from './Link';

// hooks
import useTruncate from '../hooks/useTruncate';

const TeamCardStyled = styled(BaseBox)`
  width: 100%;
  max-width: 283px;
  padding: ${props => props.theme.spacing.xs};

  transition: 0.3s all;

  &:hover {
    transform: translateY(-5px);
    -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  }
`;

const TeamCard = ({ title, description, path }) => {
  return (
    <TeamCardStyled>
      <Heading4>{title}</Heading4>

      <BodyText1>{useTruncate(description, 130)}</BodyText1>

      <div className='d-flex justify-content-end'>
        <OutlineSecondaryLink to={path}>Open</OutlineSecondaryLink>
      </div>
    </TeamCardStyled>
  );
};

const AvengersCardStyled = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: ${props => props.theme.radius[0]};
  background-color: ${props => props.theme.colors.marvel_dark_2};

  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }

  div {
    padding: 16px;
  }
`;

const AvengersCard = ({ name, imageUrl }) => {
  return (
    <AvengersCardStyled>
      <img src={imageUrl} alt='' />

      <div>
        <BodyText1>{name} teste</BodyText1>
      </div>
    </AvengersCardStyled>
  );
};

export { TeamCard, AvengersCard };
