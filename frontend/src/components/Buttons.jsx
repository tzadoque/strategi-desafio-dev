import styled from 'styled-components';

const BaseButton = styled.button`
  all: unset;
  width: fit-content;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-radius: ${props => props.theme.radius[0]};
  padding: 8px 16px;

  font-size: 14px;
  color: ${props => props.theme.colors.white};
  font-weight: 500;

  cursor: pointer;
  transition: 0.3s all;
  position: relative;
  user-select: none;
  background: transparent;

  &:after {
    content: '';
    display: block;
    position: absolute;
    border-radius: ${props => props.theme.radius[0]};

    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 0.3s;
    box-shadow: 0 0 0px 5px white;
  }

  &:active::after {
    box-shadow: 0 0 0 0 white;
    position: absolute;
    border-radius: ${props => props.theme.radius[0]};

    left: 0;
    top: 0;
    opacity: 1;
    transition: 0s;
  }
`;

const PrimaryButton = styled(BaseButton)`
  background-color: ${props => props.theme.colors.marvel_red_1};

  &:hover {
    background-color: ${props => props.theme.colors.marvel_red_2};
  }
`;

const SecondaryButton = styled(BaseButton)`
  background-color: ${props => props.theme.colors.marvel_grey_1};
`;

const OutlineSecondaryButton = styled(BaseButton)`
  border: 1px solid ${props => props.theme.colors.marvel_grey_1};
`;

const CloseButton = styled(BaseButton)`
  padding: 0;
  width: 21px;
  height: 21px;
`;

const PaginationButton = styled(BaseButton)`
  padding: 8px;
`;

export {
  PrimaryButton,
  SecondaryButton,
  OutlineSecondaryButton,
  CloseButton,
  PaginationButton,
};
