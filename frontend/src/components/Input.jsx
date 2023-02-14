import { useState } from 'react';
import styled from 'styled-components';

const BaseInput = styled.input`
  background-color: transparent;
  border: 1px solid ${props => props.theme.colors.marvel_grey_1};
  border-radius: ${props => props.theme.radius[0]};
  padding: 16px;
  font-weight: 400;
  font-size: 16px;
  color: #ffffff;
  background-color: ${props => props.theme.colors.marvel_dark_2};
  outline: none;

  &:focus {
    border: 1px solid #ffffff;
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const TextInput = ({ value, ...props }) => {
  const [inputValue, setInputValue] = useState(value);

  return (
    <BaseInput
      type='text'
      {...props}
      onChange={e => setInputValue(e.target.value)}
      value={inputValue}
    />
  );
};

const BaseTextArea = styled.textarea`
  width: 100%;
  height: fit-content;
  overflow: hidden;
  resize: none;
  min-height: 200px;
  background-color: ${props => props.theme.colors.marvel_dark_2};
  border-radius: ${props => props.theme.radius[0]};
  padding: ${props => props.theme.spacing.xs};

  font-size: 16px;
  color: #ffffff;

  outline: none;

  &:focus {
    border: 1px solid #ffffff;
  }
`;

const TextArea = ({ value, ...props }) => {
  const [inputValue, setInputValue] = useState(value);

  return (
    <BaseTextArea
      {...props}
      value={inputValue}
      onChange={e => setInputValue(e.target.value)}
    />
  );
};

export { TextInput, TextArea };
