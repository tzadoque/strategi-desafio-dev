import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// assets
import MarvelLogo from '../assets/marvel-logo.svg';
import SearchIcon from '../assets/search.svg';
import PersonVCard from '../assets/person-vcard.svg';
import PeopleIcon from '../assets/people.svg';
import AvengersIcon from '../assets/avengers.svg';
import NickFuryAvatar from '../assets/img/nick-fury-avatar.png';
import DownIcon from '../assets/down.svg';

// my components
import { ProfileAvatar } from './Image';
import { SidebarLink } from './Link';

const SidebarStyled = styled.div`
  position: relative;
`;

const SidebarContent = styled.div`
  background-color: ${props => props.theme.colors.marvel_dark_2};
  height: 100vh;
  padding: 16px;
  z-index: 999;

  position: fixed;
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.xs};

  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
`;

const SidebarLinks = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.xxs};
`;

const ProfileInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
`;

const Sidebar = () => {
  return (
    <SidebarStyled>
      <SidebarContent>
        <NavLink to='/' style={{ height: '64px' }}>
          <img src={MarvelLogo} alt='' />
        </NavLink>

        <hr />

        <SidebarLinks>
          <li>
            <SidebarLink to='/'>
              <img src={SearchIcon} alt='Search icon' />
              Heroes
            </SidebarLink>
          </li>
          <li>
            <SidebarLink to='/candidates'>
              <img src={PersonVCard} alt='Person VCard icon' />
              Candidates
            </SidebarLink>
          </li>
          <li>
            <SidebarLink to='/teams'>
              <img src={PeopleIcon} alt='People icon' />
              Teams
            </SidebarLink>
          </li>
          <li>
            <SidebarLink to='/avengers'>
              <img src={AvengersIcon} alt='Avengers logo icon' />
              Avengers
            </SidebarLink>
          </li>
        </SidebarLinks>
        <div className='mt-auto'>
          <hr />
          <ProfileInfo>
            <ProfileAvatar src={NickFuryAvatar} />
            Jams Fury
            <img src={DownIcon} alt='Íconde de seta para baixo' />
          </ProfileInfo>
        </div>
      </SidebarContent>
    </SidebarStyled>
  );
};

export { Sidebar };
