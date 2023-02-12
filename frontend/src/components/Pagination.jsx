import styled from 'styled-components';

// assets
import PrevIcon from '../assets/prev.svg';
import NextIcon from '../assets/next.svg';

// components
import { PaginationButton } from './Buttons';

const StyledPagination = styled.div`
  display: flex;
  height: 34px;
  border-radius: ${props => props.theme.radius[0]};

  background-color: ${props => props.theme.colors.marvel_dark_2};
  color: #ff00ff;

  .page-indicator {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 24px;
    width: fit-content;
  }
`;

const Pagination = ({ currentPage, prevPageFn, nextPageFn }) => {
  return (
    <StyledPagination>
      <PaginationButton>
        <img src={PrevIcon} alt='previous button' />
      </PaginationButton>

      <div className='page-indicator'>{currentPage}</div>

      <PaginationButton>
        <img src={NextIcon} alt='next button' />
      </PaginationButton>
    </StyledPagination>
  );
};

export { Pagination };
