/* tslint:disable:max-line-length */
import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import ReactTable, { TableProps, ReactTableDefaults } from 'react-table';
import { Themes } from '../themes';

import TablePagination from '../TablePagination/TablePagination.component';
import 'react-table/react-table.css';

export interface Props extends TableProps {
  data: any;
  tableSize?: string;
  /**
   * Specify if grid data rows should be striped
   *
   * @default false
   **/
  striped?: boolean;
  /**
   * Specify if table size is adjustable
   *
   * @default true
   **/
  sizable?: boolean;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
}

const SWrapperDiv = styled(ReactTable)`
  background: ${(props: any) => props.theme.input.background};
  border: 0;
  font-family: ${(props: any) => props.theme.typography.fontFamily};
  font-size: ${(props: any) => props.theme.table.fontSize};
  width: 100%;
  box-sizing: border-box;

  .pagination-top,
  .pagination-bottom {
    text-align: center;
    padding-top: 20px;
  }

  &.ReactTable {
    border: 0;
  }

  &.ReactTable .rt-thead.-header {
    box-shadow: none;
    color: ${(props: any) => props.theme.table.header.color};
  }
  &.ReactTable .rt-thead .rt-tr {
    border-bottom-color: ${(props: any) =>
      props.theme.table.header.borderBottomColor};
    border-bottom-style: solid;
    border-bottom-width: 2px;
    font-weight: ${(props: any) => props.theme.table.header.fontWeight};
    text-align: left;
  }
  &.ReactTable .rt-tbody .rt-tr {
    border-bottom-color: ${(props: any) =>
      props.theme.table.row.borderBottomColor};
    border-bottom-style: solid;
    border-bottom-width: 1px;
  }
  &.ReactTable .rt-tbody .rt-tr:hover {
    background-color: ${(props: any) => props.theme.table.row.hoverColor};
  }
  &.ReactTable .rt-thead .rt-th,
  &.ReactTable .rt-tbody .rt-td,
  &.ReactTable .rt-tfoot .rt-td {
    padding: ${(props: Props) =>
      props.theme.common[props.tableSize!].tableCellPadding};
    padding-left: 0;
    padding-right: 0;
    border-right: 0;
  }

  &.ReactTable .rt-thead .rt-th.-cursor-pointer,
  &.ReactTable .rt-thead .rt-th.rt-resizable-header,
  &.ReactTable .rt-thead .rt-th.-sort-asc,
  &.ReactTable .rt-thead .rt-td.-sort-asc,
  &.ReactTable .rt-thead .rt-th.-sort-desc,
  &.ReactTable .rt-thead .rt-td.-sort-desc {
    box-shadow: none;
    outline: none;
  }

  &.ReactTable .-cursor-pointer {
    cursor: pointer;
  }

  &.ReactTable .rt-tbody .rt-tr-group {
    border: 0;
  }

  &.ReactTable .rt-thead .rt-th {
    background-repeat: no-repeat;
    background-size: 18px 18px;
    background-position: right 4px center;
  }
  &.ReactTable .rt-thead .rt-th.-sort-asc {
    background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj48cGF0aCBkPSJNMTYuMDAzIDE4LjYyNmw3LjA4MS03LjA4MUwyNSAxMy40NmwtOC45OTcgOC45OTgtOS4wMDMtOSAxLjkxNy0xLjkxNnoiLz48L3N2Zz4=');
  }
  &.ReactTable .rt-thead .rt-th.-sort-desc {
    background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj48cGF0aCBkPSJNMTUuOTk3IDEzLjM3NGwtNy4wODEgNy4wODFMNyAxOC41NGw4Ljk5Ny04Ljk5OCA5LjAwMyA5LTEuOTE2IDEuOTE2eiIvPjwvc3ZnPg==');
  }
`;

export class Table extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  static defaultProps = {
    ...ReactTableDefaults,
    striped: false,
    tableSize: 'md',
    theme: Themes.defaultTheme,
  };

  render() {
    const { theme, ...props } = this.props;
    return (
      <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
        <SWrapperDiv
          {...props}
          PaginationComponent={TablePagination}
          nextText="Next >"
          previousText="< Previous"
        />
      </ThemeProvider>
    );
  }
}
