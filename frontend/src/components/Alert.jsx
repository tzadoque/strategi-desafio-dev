import styled from 'styled-components';
import { useContext } from 'react';

// context
import { GlobalContext } from '../context/GlobalContext';

// assets
import FeedbackSuccessIcon from '../assets/feedback-success.svg';
import FeedbackWarningIcon from '../assets/feedback-warning.svg';
import FeedbackErrorIcon from '../assets/feedback-error.svg';
import CloseIcon from '../assets/close.svg';

// my components
import { CloseButton } from './Button';

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

  position: absolute;
  bottom: ${props => props.theme.spacing.sm};
  left: ${props => props.theme.spacing.sm};

  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
`;

const Alert = ({ type, text }) => {
  const { setAlert, setShowAlert } = useContext(GlobalContext);

  function closeAlert() {
    setAlert(null);
    setShowAlert(false);
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
