import styled from 'styled-components';
import TextTruncate from 'react-text-truncate';

import { BaseBox } from './Box';
import { BodyText1, Heading4 } from './Text';
import { OutlineSecondaryLink } from './Links';

const TeamCardStyled = styled(BaseBox)`
  width: 100%;
  max-width: 283px;
  padding: ${props => props.theme.spacing.xs};
`;

const TeamCard = ({ title, description, path }) => {
  return (
    <TeamCardStyled>
      <Heading4>{title}</Heading4>

      <BodyText1>
        <TextTruncate
          line={5}
          element='span'
          truncateText=' […]'
          text={description}
        />
      </BodyText1>

      <div className='d-flex justify-content-end'>
        <OutlineSecondaryLink to={path}>Open</OutlineSecondaryLink>
      </div>
    </TeamCardStyled>
  );
};

export { TeamCard };
