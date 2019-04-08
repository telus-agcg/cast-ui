/* tslint:disable:max-line-length */
import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import ReactTable, { TableProps, ReactTableDefaults } from 'react-table';
import { Themes } from '../themes';

import { Icon } from 'react-icons-kit';
import { bars as IconLarge } from 'react-icons-kit/fa/bars';
import { ic_format_align_justify as IconCondensed } from 'react-icons-kit/md/ic_format_align_justify';
import { ic_view_headline as IconMedium } from 'react-icons-kit/md/ic_view_headline';
import TablePagination from '../TablePagination/TablePagination.component';
import 'react-table/react-table.css';

export interface Props extends Partial<TableProps> {
  data: any;
  columns: any;
  tableSize?: string;
  children?: any;
  /**
   * Specify if pagination controls should be shown
   *
   * @default true
   **/
  showPagination?: boolean;
  /**
   * Specify if pagination controls should be shown at the top of the table
   *
   * @default false
   **/
  showPaginationTop?: boolean;
  /**
   * Specify if pagination controls should be shown at the bottom of the table
   *
   * @default true
   **/
  showPaginationBottom?: boolean;
  /**
   * Specify if the page size options dropdown should be shown
   *
   * @default true
   **/
  showPageSizeOptions?: boolean;
  /**
   * Specify the available page size options
   *
   * @default true
   **/
  pageSizeOptions?: number[];
  /**
   * Specify the default page size
   *
   * @default true
   **/
  defaultPageSize?: number;
  /**
   * Specify if the current page number should be editable
   *
   * @default true
   **/
  showPageJump?: boolean;
  /**
   * Specify if hierarchies should be collapsed on sorting change
   *
   * @default true
   **/
  collapseOnSortingChange?: boolean;
  /**
   * Specify if hierarchies should be collapsed on page change
   *
   * @default true
   **/
  collapseOnPageChange?: boolean;
  /**
   * Specify if hierarchies should be collapsed on data change
   *
   * @default true
   **/
  collapseOnDataChange?: boolean;
  /**
   * Specify if scrolling should be infinite
   *
   * @default true
   **/
  freezeWhenExpanded?: boolean;
  /**
   * Specify if the grid should be sortable
   *
   * @default true
   **/
  sortable?: boolean;
  /**
   * Specify if the grid should allow multi-column sorting
   *
   * @default true
   **/
  multiSort?: boolean;
  /**
   * Specify if grid columns should be resizable
   *
   * @default true
   **/
  resizable?: boolean;
  /**
   * Specify if grid data should be filterable
   *
   * @default true
   **/
  filterable?: boolean;
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

const SWrapperDiv = styled.div`
  background: ${(props: any) => props.theme.input.background};
  border: 0;
  font-family: ${(props: any) => props.theme.typography.fontFamily};
  font-size: ${(props: any) => props.theme.table.fontSize};

  .table-size-controls {
    text-align: right;
    &-left {
      text-align: left;
    }
    & > div {
      cursor: pointer;
      opacity: 0.5;
      &.selected {
        opacity: 1;
      }
    }
  }

  .pagination-top,
  .pagination-bottom {
    text-align: center;
    padding-top: 20px;
  }

  .ReactTable {
    border: 0;
  }

  .ReactTable .rt-thead.-header {
    box-shadow: none;
    color: ${(props: any) => props.theme.table.header.color};
  }
  .ReactTable .rt-thead .rt-tr {
    border-bottom-color: ${(props: any) =>
      props.theme.table.header.borderBottomColor};
    border-bottom-style: solid;
    border-bottom-width: 2px;
    font-weight: ${(props: any) => props.theme.table.header.fontWeight};
    text-align: left;
  }
  .ReactTable .rt-tbody .rt-tr {
    border-bottom-color: ${(props: any) =>
      props.theme.table.row.borderBottomColor};
    border-bottom-style: solid;
    border-bottom-width: 1px;
  }
  .ReactTable .rt-tbody .rt-tr:hover {
    background-color: ${(props: any) => props.theme.table.row.hoverColor};
  }
  .ReactTable .rt-thead .rt-th,
  .ReactTable .rt-tbody .rt-td,
  .ReactTable .rt-tfoot .rt-td {
    padding: ${(props: Props) =>
      props.theme.common[props.tableSize!].tableCellPadding};
    padding-left: 0;
    padding-right: 0;
    border-right: 0;
  }

  .ReactTable .rt-thead .rt-th.-cursor-pointer,
  .ReactTable .rt-thead .rt-th.rt-resizable-header,
  .ReactTable .rt-thead .rt-th.-sort-asc,
  .ReactTable .rt-thead .rt-td.-sort-asc,
  .ReactTable .rt-thead .rt-th.-sort-desc,
  .ReactTable .rt-thead .rt-td.-sort-desc {
    box-shadow: none;
    outline: none;
  }

  .ReactTable .-cursor-pointer {
    cursor: pointer;
  }

  .ReactTable .rt-tbody .rt-tr-group {
    border: 0;
  }

  .ReactTable .rt-thead .rt-th {
    background-repeat: no-repeat;
    background-size: 18px 18px;
    background-position: right 4px center;
  }
  .ReactTable .rt-thead .rt-th.-sort-asc {
    background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj48cGF0aCBkPSJNMTYuMDAzIDE4LjYyNmw3LjA4MS03LjA4MUwyNSAxMy40NmwtOC45OTcgOC45OTgtOS4wMDMtOSAxLjkxNy0xLjkxNnoiLz48L3N2Zz4=');
  }
  .ReactTable .rt-thead .rt-th.-sort-desc {
    background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj48cGF0aCBkPSJNMTUuOTk3IDEzLjM3NGwtNy4wODEgNy4wODFMNyAxOC41NGw4Ljk5Ny04Ljk5OCA5LjAwMyA5LTEuOTE2IDEuOTE2eiIvPjwvc3ZnPg==');
  }
`;

const initialState = { tableSize: 'md' };
type State = Readonly<typeof initialState>;
// const tableDefaults = ReactTableDefaults;

export class Table extends React.Component<Props> {
  readonly state: State = initialState;

  constructor(props: Props) {
    super(props);
  }

  static defaultProps = {
    ...ReactTableDefaults,
    striped: false,
    columns: [],
    tableSize: 'md',
    theme: Themes.defaultTheme,
  };

  changeTableSize(size: string) {
    this.setState({
      tableSize: size,
    });
  }

  render() {
    console.log(Table.defaultProps);
    const { theme, ...props } = this.props;
    return (
      <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
        <SWrapperDiv {...this.props} tableSize={this.state.tableSize}>
          {this.props.sizable && (
            <div className="table-size-controls">
              <Icon
                icon={IconLarge}
                size={24}
                onClick={this.changeTableSize.bind(this, 'lg')}
                className={this.state.tableSize === 'lg' ? 'selected' : ''}
              />
              <Icon
                icon={IconMedium}
                size={30}
                onClick={this.changeTableSize.bind(this, 'md')}
                className={this.state.tableSize === 'md' ? 'selected' : ''}
              />
              <Icon
                icon={IconCondensed}
                size={24}
                onClick={this.changeTableSize.bind(this, 'sm')}
                className={this.state.tableSize === 'sm' ? 'selected' : ''}
              />
            </div>
          )}
          <ReactTable
            {...props}
            className={`-highlight  + ${this.props.striped ? '-striped ' : ''}`}
            PaginationComponent={TablePagination}
            nextText="Next >"
            previousText="< Previous"
          />
        </SWrapperDiv>
      </ThemeProvider>
    );
  }
}
