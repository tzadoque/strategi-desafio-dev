import styled from 'styled-components';

const DisplayText = styled.h1`
  font-size: ${props => props.theme.font.display};
  font-weight: 700;
`;

const Heading1 = styled.h1`
  font-size: ${props => props.theme.font.heading1};
  font-weight: 700;
`;

const Heading2 = styled.h2`
  font-size: ${props => props.theme.font.heading2};
  font-weight: 600;
`;

const Heading3 = styled.h3`
  font-size: ${props => props.theme.font.heading3};
  font-weight: 600;
`;

const Heading4 = styled.h4`
  font-size: ${props => props.theme.font.heading4};
  font-weight: 500;
`;

const BodyText1 = styled.p`
  font-size: ${props => props.theme.font.body1};
  font-weight: 400;
`;

const BodyText2 = styled.p`
  font-size: ${props => props.theme.font.body2};
  font-weight: 400;
`;

export {
  DisplayText,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  BodyText1,
  BodyText2,
};
