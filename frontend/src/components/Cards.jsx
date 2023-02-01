import { useState } from 'react';
import styled from 'styled-components';

const HeroCardStyles = styled.div`
  width: 100%;
  height: 100%;
  min-height: 200px;
  max-height: 290px;
  background-color: #111215;
  border: 2px solid #111215;
  box-sizing: border-box;

  p {
    color: #ffffff;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
  }

  .front {
    display: ${props => (props.flip ? 'none' : 'flex')};
    flex-direction: column;
    justify-content: start;
    gap: 8px;

    .thumbnail {
      height: 250px;
    }

    .id-span {
      position: absolute;
      display: block;
      background-color: #111215;
      color: #ffffff;
      padding: 8px;
      font-size: 10px;
      font-weight: bold;
    }
  }

  .back {
    display: ${props => (props.flip ? 'flex' : 'none')};
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: 16px;
    box-sizing: border-box;

    .avatar-container {
      display: flex;
      align-items: center;
      gap: 16px;
      font-size: 21px;
    }
    .avatar {
      width: 48px;
      height: 48px;
      object-fit: cover;
      border-radius: 50%;
    }

    button {
      all: unset;
      background: #f0141e;
      width: 100%;
      padding: 8px;
      box-sizing: border-box;
      text-align: center;
      color: #ffffff;
      font-size: 21px;
      display: block;
      cursor: pointer;
    }

    .description-container {
      height: 128px;
      overflow-y: scroll;

      p {
        text-align: start;
      }
    }
  }
`;

function HeroCard({ thumb, name, id, description }) {
  const [flip, setFlip] = useState(false);
  const [added, setAdded] = useState(false);

  function addedHeroToCandidates(e) {
    setAdded(true);
    
  }

  return (
    <HeroCardStyles
      onMouseEnter={() => setFlip(true)}
      flip={flip}
      onMouseLeave={() => setFlip(false)}
    >
      <div className='front'>
        <span className='id-span'>#{id}</span>
        <img src={thumb} className='thumbnail' alt='' />
        <p>{name}</p>
      </div>
      <div className='back'>
        <div className='avatar-container'>
          <img src={thumb} className='avatar' alt='' />
          <p>{name}</p>
        </div>
        <div className='description-container'>
          <p>{description}</p>
        </div>
        <button>add to candidates</button>
      </div>
    </HeroCardStyles>
  );
}

export { HeroCard };
