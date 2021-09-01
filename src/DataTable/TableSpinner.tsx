import * as React from 'react';
import styled from 'styled-components';
import { Spinner } from '../Spinner';

const Loader = styled.div`
  font-family: ${(props: any) => props.theme.typography.fontFamily};
  font-size: ${(props: any) => props.theme.table.fontSize};
  display: flex !important;
  align-items: center;
  justify-content: center;
  min-height: 110px;
  height: 100%;
  transform: none;
  flex-direction: column;
  background: ${props => props.theme.table.row.readonlyColor};
  z-index: 50;
  top: 0;
  position: absolute;
  width: 100%;
  .spinner {
    transform: none !important;
    top: auto !important;
    margin: unset;
  }
  & > span {
    position: relative;
    top: 5px;
  }
`;

interface Props {
  loading: boolean;
}

const TableSpinner = ({ loading, ...props }: Props) => {
  return loading ? (
    <Loader>
      <>
        <div className="spinner">
          <Spinner />
        </div>
        <span>Loading...</span>
      </>
    </Loader>
  ) : null;
};

export default TableSpinner;
