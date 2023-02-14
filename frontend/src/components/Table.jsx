import styled from 'styled-components';

// my components
import { BodyText1 } from './Text';
import { Avatar } from './Image';

// hooks
import useTruncate from '../hooks/useTruncate';

const ResponsiveTable = styled.div`
  overflow: hidden;
  width: 100%;
`;

const TableStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.xxs};
  min-width: 740px;

  .th {
    font-weight: 700;
  }

  .td,
  .th {
    padding: 8px 16px;
    display: flex;
    align-items: center;
    max-height: 54px;
    overflow: hidden;
  }

  .tr {
    display: grid;
    grid-template-columns: 108px 82px 2fr 4fr 80px;
    grid-template-rows: repeat(1, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 8px;
    background-color: ${props => props.theme.colors.marvel_dark_2};
    border-radius: 8px;
  }

  .tbody {
    display: flex;
    flex-direction: column;
    gap: ${props => props.theme.spacing.xxs};

    .tr {
      &:hover {
        background-color: ${props => props.theme.colors.marvel_dark_3};
      }
    }
  }
`;

const Table = ({ optionName, children }) => {
  return (
    <ResponsiveTable>
      <TableStyled>
        <div className='thead'>
          <div className='tr'>
            <div className='th'>ID</div>
            <div className='th'>Avatar</div>
            <div className='th'>Name</div>
            <div className='th'>Description</div>
            <div className='th justify-content-center'>{optionName}</div>
          </div>
        </div>
        <div className='tbody'>{children}</div>
      </TableStyled>
    </ResponsiveTable>
  );
};

export { Table };
