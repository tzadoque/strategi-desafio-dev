import { useContext } from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../context/GlobalContext';
import AvatarImg from '../assets/avatar.png';

const HeaderStyles = styled.header`
  position: sticky;
  z-index: 999;
  top: 0;
  .top {
    background: #202020;
    color: #ffffff;
    padding: 25px 64px 25px 32px;
    display: flex;
    justify-content: space-between;

    .header-title {
      font-size: 32px;
      font-weight: bold;
    }
  }

  .bottom {
    background: #f0141e;
    padding: 12px 32px;
    color: #ffffff;
    font-size: 21px;
    font-weight: 400;
  }
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);

  .avatar {
    display: flex;
    align-items: center;
    gap: 21px;
    font-size: 16px;
    font-weight: bold;
    color: #ffffff;

    img {
      border: 1px solid #ffffff;
      border-radius: 50%;
    }
  }
`;

export default function Header() {
  const { pageTitle } = useContext(GlobalContext);

  return (
    <HeaderStyles>
      <div className='top'>
        <span className='header-title'>Marvel Heroes Manager</span>

        <div className='avatar'>
          <span>Jams Fury</span>
          <img src={AvatarImg} alt='' />
        </div>
      </div>
      <div className='bottom'>{pageTitle}</div>
    </HeaderStyles>
  );
}
