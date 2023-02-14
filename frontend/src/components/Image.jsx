import styled from 'styled-components';

const ProfileAvatar = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 100%;
  border: 1px solid ${props => props.theme.colors.marvel_grey_1};
  box-sizing: border-box;
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 100%;
  box-sizing: border-box;
`;

const AvengersImage = styled.img`
  width: auto;
  max-width: 231.05px;
  height: 100%;
  max-height: 250px;
  box-sizing: border-box;
`;

export { ProfileAvatar, Avatar, AvengersImage };
