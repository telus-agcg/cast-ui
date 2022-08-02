/* tslint:disable:max-line-length */
import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import ReactTable, {
  TableProps,
  ReactTableDefaults,
  ControlledStateCallbackProps,
} from 'react-table';
import { Themes } from '../themes';
import Icon from 'react-icons-kit';
import { chevronUp } from 'react-icons-kit/fa/chevronUp';
import { chevronDown } from 'react-icons-kit/fa/chevronDown';
import Pagination, {
  PAGE_SIZE_OPTIONS,
} from '../Pagination/Pagination.component';
import 'react-table/react-table.css';

export type Props = Partial<TableProps> &
  Partial<ControlledStateCallbackProps> & {
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
     * Specify if table page size option is available
     *
     * @default true
     **/
    showPageSizeOptions?: boolean;
    /**
     * From theme provider
     *
     * @default defaultTheme
     **/
    theme?: any;
    /**
     * From theme provider
     *
     * @default 'No results found'
     **/
    noDataText?: string;
    /**
     * From theme provider
     *
     * @default 'No results found'
     **/
    id?: string;
  };

const SIcon = styled(Icon)`
  color: ${(props: any) => props.theme.colors.primary};
  display: inline-block;
  margin-right: 15px;
`;

const SWrapperDiv = styled(ReactTable)`
  background: ${(props: any) => props.theme.input.background};
  border: none !important;
  font-family: ${(props: any) => props.theme.typography.fontFamily};
  font-size: ${(props: any) => props.theme.table.fontSize};
  width: 100%;
  box-sizing: border-box;
  .word-break {
    word-break: break-word;
  }

  .right-align {
    text-align: right; // for blocked elements
    justify-content: flex-end; // for flex elements
  }

  .right-align.-sort-asc,
  .right-align.-sort-desc {
    .rt-resizable-header-content {
      margin-right: 20px;
    }
  }

  .-sort-asc,
  .-sort-desc {
    .rt-resizable-header-content {
      margin-right: 20px;
    }
  }

  .pagination-top,
  .pagination-bottom {
    padding-top: 20px;
  }

  &.ReactTable .rt-table {
    border: ${(props: any) => props.theme.table.border};
  }

  &.ReactTable .rt-thead.-header {
    box-shadow: none;
    color: ${(props: any) => props.theme.table.header.color};
    background-color: ${(props: any) =>
      props.theme.table.header.backgroundColor};
    padding-top: ${(props: any) => props.theme.table.header.topPadding};
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
    padding: ${(props: any) =>
      props.theme.common[props.tableSize!].tableCellPadding};
    padding-left: 10px;
    padding-right: 10px;
    border-right: 0;
  }
  &.ReactTable .rt-thead .rt-th > span,
  &.ReactTable .rt-tbody .rt-td > span,
  &.ReactTable .rt-tfoot .rt-td > span {
    width: 100%;
  }
  &.ReactTable .rt-thead .rt-tr.table-row-readonly,
  &.ReactTable .rt-tbody .rt-tr.table-row-readonly,
  &.ReactTable .rt-tfoot .rt-tr.table-row-readonly {
    background-color: ${(props: any) => props.theme.table.row.readonlyColor};
  }
  &.ReactTable .rt-thead .rt-th.table-column-readonly,
  &.ReactTable .rt-tbody .rt-td.table-column-readonly,
  &.ReactTable .rt-tfoot .rt-td.table-column-readonly {
    background-color: ${(props: any) => props.theme.table.column.readonlyColor};
  }
  &.ReactTable .rt-thead .rt-tr.table-row-highlight,
  &.ReactTable .rt-tbody .rt-tr.table-row-highlight,
  &.ReactTable
    .rt-tfoot
    .rt-tr.table-row-highlight
    &.ReactTable
    .rt-thead
    .rt-th.table-column-readonly,
  &.ReactTable
    .rt-tbody
    .rt-tr.table-row-highlight
    .rt-td.table-column-readonly,
  &.ReactTable
    .rt-tfoot
    .rt-tr.table-row-highlight
    .rt-td.table-column-readonly {
    background-color: ${(props: any) => props.theme.table.row.highlightColor};
  }

  &.ReactTable .rt-thead .rt-th.table-column-highlight,
  &.ReactTable .rt-tbody .rt-td.table-column-highlight,
  &.ReactTable .rt-tfoot .rt-td.table-column-highlight {
    background-color: ${(props: any) =>
      props.theme.table.column.highlightColor};
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

  &.ReactTable .rt-thead .rt-th.right-align.-sort-asc,
  &.ReactTable .rt-thead .rt-th.right-align.-sort-desc {
    padding-right: 24px;
  }

  &.ReactTable .-cursor-pointer {
    cursor: pointer;
  }

  &.ReactTable .rt-tbody .rt-tr-group {
    border: 0;
  }

  .rt-td.rt-expandable + .rt-td:not([class='rt-expandable']) {
    font-size: ${(props: any) => props.theme.table.row.groupedHeader.fontSize};
    font-weight: ${(props: any) =>
      props.theme.table.row.groupedHeader.fontWeight};
  }

  &.ReactTable .rt-thead .rt-th {
    background-repeat: no-repeat;
    background-size: 18px 18px;
    background-position: right 4px center;
  }
  &.ReactTable .rt-thead .rt-th.-sort-asc {
    background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj48cGF0aCBkPSJNMTUuOTk3IDEzLjM3NGwtNy4wODEgNy4wODFMNyAxOC41NGw4Ljk5Ny04Ljk5OCA5LjAwMyA5LTEuOTE2IDEuOTE2eiIvPjwvc3ZnPg==');
  }
  &.ReactTable .rt-thead .rt-th.-sort-desc {
    background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj48cGF0aCBkPSJNMTYuMDAzIDE4LjYyNmw3LjA4MS03LjA4MUwyNSAxMy40NmwtOC45OTcgOC45OTgtOS4wMDMtOSAxLjkxNy0xLjkxNnoiLz48L3N2Zz4=');
  }
  &.ReactTable .rt-noData {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0px;
    height: 100px;
    background-color: ${(props: any) => props.theme.colors.secondaryBackground};
    transform: none;
    left: 0;
  }

  .rt-thead {
    font-size: ${(props: any) => props.theme.table.header.fontSize};
  }

  &.ReactTable .white-space-wrap {
    white-space: normal;
  }
  &.ReactTable .white-space-nowrap {
    white-space: nowrap;
  }
  &.ReactTable .white-space-nowrap > * {
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &.ReactTable .vertically-align-center {
    display: flex;
    align-items: center;
  }
  &.ReactTable .vertically-align-end {
    display: flex;
    align-items: flex-end;
  }
  &.ReactTable .center-align {
    text-align: center; // for blocked elements
    justify-content: center; // for flex elements
  }
`;

const collator = new Intl.Collator(undefined, {
  numeric: true,
  sensitivity: 'base',
});

export class Table extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  static defaultProps = {
    defaultSortMethod: collator.compare,
    striped: false,
    tableSize: 'md',
    theme: Themes.defaultTheme,
    minRows: 0,
    defaultPageSize: 10,
    resizable: false,
    PaginationComponent: Pagination,
    getTdProps: ReactTableDefaults.getTdProps,
    getTrProps: ReactTableDefaults.getTrProps,
    showPageSizeOptions: true,
    noDataText: 'No results found',
    pageSizeOptions: PAGE_SIZE_OPTIONS,
  };

  render() {
    const {
      data,
      getTdProps,
      getTrProps,
      loading,
      noDataText,
      theme,
      ...props
    } = this.props;

    const customProps = { id: props.id };

    return (
      <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
        <SWrapperDiv
          {...ReactTableDefaults}
          data={data}
          getTrProps={(state, rowInfo, column, id) => {
            let className = '';
            if (
              rowInfo &&
              rowInfo.nestingPath.length === 1 &&
              state.expanded[rowInfo.nestingPath[0]]
            ) {
              className = 'table-row-highlight';
            }

            const incomingTrProps: any = getTrProps!(state, rowInfo, column);
            if (incomingTrProps && incomingTrProps.className) {
              className += ` ${incomingTrProps.className}`;
            }
            return {
              ...incomingTrProps,
              className,
              id: `${props.id}-row-${rowInfo.viewIndex}`,
            };
          }}
          getTdProps={(state, rowInfo, column) => {
            let className = 'white-space-wrap vertically-align-center';
            const incomingTdProps: any = getTdProps!(state, rowInfo, column);
            if (incomingTdProps && incomingTdProps.className) {
              className += ` ${incomingTdProps.className}`;
            }
            return {
              ...incomingTdProps,
              className,
            };
          }}
          getProps={() => customProps}
          showPagination={data.length > 0}
          column={{
            ...ReactTableDefaults.column,
            resizable: false,
            Expander: ({ isExpanded, ...rest }) => (
              <>
                {isExpanded ? (
                  <SIcon data-testid="collapser" icon={chevronUp} />
                ) : (
                  <SIcon data-testid="expander" icon={chevronDown} />
                )}
              </>
            ),
          }}
          loading={loading}
          noDataText={loading ? '' : noDataText}
          rowsText={props.rowsText ? props.rowsText : ''}
          {...props}
        />
      </ThemeProvider>
    );
  }
}
