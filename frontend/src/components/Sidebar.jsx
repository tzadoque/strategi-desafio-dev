import styled from 'styled-components';
import MarvelLogoImg from '../assets/marvel-logo.png';
import { Link, NavLink } from 'react-router-dom';

const SidebarStyles = styled.div`
  background-color: #111215;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 86px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  position: sticky;
  z-index: 1000;
  height: 100vh;
  top: 0;

  .logo {
    display: flex;
    justify-content: center;
    img {
      width: 100%;
      max-width: 178px;
    }
  }
`;

const SidebarLinks = styled.ul`
  list-style: none;

  li {
    height: 60px;
    width: 100%;

    padding: 8px;
  }

  a {
    text-decoration: none;
    color: #ffffff;
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100%;
    height: 100%;
    border-bottom: 1px solid transparent;
    transition: 0.2s;
    font-weight: 500;

    &:hover {
      color: #f0141e;
    }

    &.active {
      border-bottom: 1px solid red;
    }
  }
`;

export default function Sidebar() {
  return (
    <SidebarStyles>
      <div className='logo'>
        <Link to='/'>
          <img src={MarvelLogoImg} />
        </Link>
      </div>

      <SidebarLinks>
        <li>
          <NavLink to='/'>Dashboard</NavLink>
        </li>
        <li>
          <NavLink to='/candidates'>Candidates</NavLink>
        </li>
        <li>
          <NavLink to='/teams'>Teams</NavLink>
        </li>
        <li>
          <NavLink to='/avengers'>A V E N G E R S</NavLink>
        </li>
      </SidebarLinks>
    </SidebarStyles>
  );
}
