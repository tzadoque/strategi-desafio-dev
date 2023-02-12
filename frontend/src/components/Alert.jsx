import styled from 'styled-components';

// assets
import FeedbackSuccessIcon from '../assets/feedback-success.svg';
import FeedbackWarningIcon from '../assets/feedback-warning.svg';
import FeedbackErrorIcon from '../assets/feedback-error.svg';
import CloseIcon from '../assets/close.svg';

// components

import { CloseButton } from './Buttons';

const AlertStyled = styled.div`
  background-color: ${props => props.theme.colors.marvel_dark_2};
  display: flex;
  gap: 8px;
  overflow: hidden;
  border-radius: ${props => props.theme.radius[0]};
  border-bottom: 1px solid transparent;
  width: fit-content;
  padding: 16px;
  border-bottom: 1px solid ${props => props.theme.colors.feedback[props.type]};
`;

const Alert = ({ type, text }) => {
  function closeAlert() {
    console.log('close alert');
  }

  return (
    <AlertStyled type={type}>
      {(type == 'success' && (
        <img src={FeedbackSuccessIcon} alt='success icon' />
      )) ||
        (type == 'warning' && (
          <img src={FeedbackWarningIcon} alt='warning icon' />
        )) ||
        (type == 'error' && <img src={FeedbackErrorIcon} alt='error icon' />)}
      <p>{text}</p>

      <CloseButton onClick={closeAlert}>
        <img src={CloseIcon} alt='close button' />
      </CloseButton>
    </AlertStyled>
  );
};

export { Alert };
