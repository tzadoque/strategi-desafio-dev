import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

const BaseLink = styled(NavLink)`
  all: unset;
  width: fit-content;
  height: fit-content;
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
  border: 1px solid transparent;

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

  &:active:after {
    box-shadow: 0 0 0 0 white;
    position: absolute;
    border-radius: ${props => props.theme.radius[0]};

    left: 0;
    top: 0;
    opacity: 1;
    transition: 0s;
  }
`;

const SidebarLink = styled(BaseLink)`
  font-size: 16px;
  height: 38px;
  width: 100%;
  max-width: 200px;
  justify-content: start;

  &.active {
    background-color: ${props => props.theme.colors.marvel_red_1};

    &:hover {
      background-color: ${props => props.theme.colors.marvel_red_2};
    }
  }

  &:hover {
    border-color: ${props => props.theme.colors.marvel_grey_1};
  }
`;

const PrimaryLink = styled(BaseLink)`
  background-color: ${props => props.theme.colors.marvel_red_1};

  &:hover {
    background-color: ${props => props.theme.colors.marvel_red_2};
  }
`;

const OutlineSecondaryLink = styled(BaseLink)`
  border: 1px solid ${props => props.theme.colors.marvel_grey_1};
`;

const UnstyledLink = styled(NavLink)`
  text-decoration: none;
  transition: 0.3s all;

  &:hover {
    transform: translateY(-5px);
    -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  }
`;

const UnderlinedTextLink = styled(NavLink)`
  font-weight: 700;
`;

export {
  BaseLink,
  OutlineSecondaryLink,
  SidebarLink,
  PrimaryLink,
  UnstyledLink,
  UnderlinedTextLink,
};
