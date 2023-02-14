import { useState } from 'react';
import styled from 'styled-components';

const SelectWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const SelectStyled = styled.select`
  width: 100%;
  padding: 16px;
  border-radius: ${props => props.theme.radius[0]};
  border: 1px solid ${props => props.theme.colors.marvel_grey_1};
  background-color: ${props => props.theme.colors.marvel_dark_2};

  color: ${props => (props.value == '' ? 'rgba(255, 255, 255, 0.5)' : 'white')};
  font-size: 16px;

  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
`;

const Arrow = styled.span`
  position: absolute;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
`;

const Select = ({ options, selectLabel, ...props }) => {
  const [value, setValue] = useState('');

  return (
    <SelectWrapper>
      <SelectStyled
        value={value}
        onChange={e => setValue(e.target.value)}
        required
        {...props}
      >
        <option value='' disabled>
          {selectLabel}
        </option>
        {options.map(option => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </SelectStyled>
      <Arrow>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='10'
          height='6'
          viewBox='0 0 10 6'
        >
          <path fill='#ffffff' fillRule='evenodd' d='M10 0L5 5 0 0z' />
        </svg>
      </Arrow>
    </SelectWrapper>
  );
};

export { Select };
