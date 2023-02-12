import { createGlobalStyle } from 'styled-components';

export const GlobalCss = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${props => props.theme.colors.white};
    font-family: 'Inter';
  }

  body {
    background-color: ${props => props.theme.colors.marvel_dark_1};
    min-height: 100vh;
  }

  hr {
    border-color: ${props => props.theme.colors.marvel_grey_1};
  }

  .d-flex {
    display: flex;
  }

  .flex-column {
    flex-direction: column;
  }

  .justify-content-end {
    justify-content: end;
  }

  .align-items-end {
    align-items: flex-end;
  }

  .gap-8 {
    gap: 8px;
  }

  .gap-16 {
    gap: 16px;
  }

  .gap-24 {
    gap: 24px;
  }

  .my-24 {
    margin-top: 24px;
    margin-bottom: 24px;
  }

  .mx-24 {
    margin-right: 24px;
    margin-left: 24px;
  }

  .mt-auto {
    margin-top: auto;
  }
`;
