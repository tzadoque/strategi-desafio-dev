import styled from 'styled-components';

const BaseBox = styled.div`
  background-color: ${props => props.theme.colors.marvel_dark_2};
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.sm};
  border-radius: ${props => props.theme.radius[0]};
`;

const ModalBox = styled(BaseBox)`
  padding: ${props => props.theme.spacing.sm};
  min-width: 350px;
  height: fit-content;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.xxs};
  width: 100%;
`;

const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.sm};
  border-radius: ${props => props.theme.radius[0]};
  min-width: 350px;
  height: fit-content;
`;

const ContentBox = styled(BaseBox)`
  flex-direction: row;
  padding: ${props => props.theme.spacing.sm};
`;

export { BaseBox, ModalBox, InputBox, FormBox, ContentBox };
