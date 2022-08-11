import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Themes } from '../themes';
import {
  useTable,
  usePagination,
  useExpanded,
  useGroupBy,
  useSortBy,
  useAbsoluteLayout,
} from 'react-table';
import Icon from 'react-icons-kit';
import { ic_chevron_right as icChevronRight } from 'react-icons-kit/md/ic_chevron_right';
import { ic_expand_less as icChevronUp } from 'react-icons-kit/md/ic_expand_less';
import { ic_expand_more as icChevronDown } from 'react-icons-kit/md/ic_expand_more';
import _ from 'lodash';
import Pagination, {
  PAGE_SIZE_OPTIONS,
} from '../Pagination/Pagination.component';
import TableSpinner from './TableSpinner';

const SIcon = styled(Icon)`
  color: ${(props: any) => props.theme.table.header.color};
  display: inline-block;
  margin-right: 15px;

  svg {
    &:hover {
      background-color: ${(props: any) =>
        props.theme.table.row.borderBottomColor};
      border-radius: 50%;
    }
  }
`;

const SmallIcon = styled(Icon)`
  color: inherit;
  display: inline-block;
  margin-left: 8px;
`;

const DataWrapper = styled.div<{ depth?: number }>`
  padding-left: ${({ depth = 0 }) => depth * 10}px;
`;

const SubComponentWrapper = styled.div`
  width: 100%;
`;

const Div = styled.div`
  font-family: ${(props: any) => props.theme.typography.fontFamily};
  font-size: ${(props: any) => props.theme.table.fontSize};
  padding: 1rem;

  * {
    box-sizing: border-box;
  }

  .table {
    border: 1px solid ${(props: any) => props.theme.table.row.borderBottomColor};
    overflow-x: auto;
  }

  .header {
    font-weight: bold;
    color: ${(props: any) => props.theme.table.header.color};
  }

  .row {
    border-bottom-color: ${(props: any) =>
      props.theme.table.row.borderBottomColor};
    border-bottom-style: solid;
    border-bottom-width: 1px;
    min-height: 40px;
  }

  .cell {
    height: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    padding: 9px 10px;
    line-height: 30px;
  }

  .expander {
    position: relative !important;
  }

  .hidden {
    color: transparent;
  }

  .tr-full {
    border-top-color: ${(props: any) =>
      props.theme.table.row.borderBottomColor};
    border-top-style: solid;
    border-top-width: 1px;
    width: 100%;
  }
`;

const PaginationWrapper = styled.div`
  margin-top: 10px;
  padding: 0px 1rem;
`;

interface StateColumnSorting {
  id: string;
  desc: boolean;
}
export interface Props {
  /**
   * From theme provider
   * @default defaultTheme
   **/
  theme?: any;

  /**
   * Table columns
   * @default columns
   **/
  columns: any[];

  /**
   * Ids of columns to groupBy
   * @default groupByIds
   **/
  groupByIds?: string[];

  /**
   * Ids of columns to sort
   * @default groupByIds
   **/
  sortByIds?: StateColumnSorting[];

  /**
   * Data to display on the table
   * @default data
   **/
  data: any[];

  /**
   * ID
   * @default 'Id'
   **/
  id?: string;

  /****
   * A component that triggers row expanding
   * and has access to row data
   * @default SubComponent
   */
  SubComponent?: React.FC<{ row: any }>;

  /****
   * A component that renders when loading is true
   * @default LoadingComponent
   */
  LoadingComponent?: React.FC<{ loading: boolean }>;

  /***
   * This prop if true enables sort detection,
   * if its already happening outside the table. Ie Server-side sorting.
   */
  manualSortBy?: boolean;

  /***
   * A list of pageSizes available in the table
   */
  pageSizeOptions?: number[];

  /***
   * This prop if true enables controlled pagination.
   * If set to true you will need to provide an addition prop "pages",
   * in order for pagination to work properly.
   */
  manualPagination?: boolean;

  /****
   * Total number of pages
   * this prop is not calculated in the table but is
   * used when "maualPagination: true"
   */
  pages?: number;

  /**
   * This prop indicates the current page
   */
  page?: number;

  /**
   * This prop indicates the selected pageSize
   */
  pageSize?: number;

  /**
   * A function that runs every time pageSize, currentPage or sorting
   * in the table changes
   */
  onFetchData?: (state: any) => void;

  /**
   * Boolean value for hide/show the loadingComponent
   */
  loading?: boolean;

  /**
   * When set to true the pagination component will be shown
   */
  showPagination?: boolean;
}

export const DataTable: React.FC<Props> = ({
  columns,
  data,
  groupByIds = [],
  id,
  loading,
  LoadingComponent = TableSpinner,
  manualPagination = false,
  manualSortBy = false,
  onFetchData,
  page: currentPage,
  pageSize: selectedPageSize,
  pages,
  pageSizeOptions = PAGE_SIZE_OPTIONS,
  sortByIds = [],
  showPagination = true,
  SubComponent,
  theme,
}) => {
  const memoizedColumns = React.useMemo(() => columns, [columns]);
  const memoizedData = React.useMemo(() => data, [data]);
  const hasFooter = memoizedColumns.some(column => !!column.Footer);

  const renderRowSubComponent = React.useCallback(({ row }) => {
    if (_.isNil(SubComponent)) {
      return null;
    }
    return <SubComponent row={row} />;
  }, []);

  const getPaginationProps = () => {
    if (manualPagination) {
      return {
        manualPagination,
        pageCount: pages,
      };
    }
    return {
      manualPagination,
    };
  };

  const {
    getTableProps,
    getTableBodyProps,
    gotoPage,
    headerGroups,
    footerGroups,
    prepareRow,
    page,
    pageCount,
    setPageSize,
    state: { pageIndex, pageSize, sortBy },
  } = useTable(
    {
      manualSortBy,
      columns: memoizedColumns,
      data: memoizedData,
      initialState: {
        groupBy: groupByIds,
        pageIndex: currentPage || 0,
        pageSize: selectedPageSize || pageSizeOptions[0],
        sortBy: sortByIds,
      },
      paginateExpandedRows: false,
      ...getPaginationProps(),
    },
    useAbsoluteLayout,
    useGroupBy,
    useSortBy,
    useExpanded,
    usePagination,
  );

  if (loading) {
    return <LoadingComponent loading={loading} />;
  }

  React.useEffect(() => {
    if (onFetchData) {
      onFetchData({
        pageSize,
        page: pageIndex,
        sorted: sortBy,
      });
    }
  }, [pageIndex, pageSize, sortBy]);

  return (
    <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
      <div>
        <Div>
          <div id={id} {...getTableProps()} className="table">
            {headerGroups.map(headerGroup => (
              <div
                {...headerGroup.getHeaderGroupProps()}
                className="row header-group"
              >
                {headerGroup.headers.map(column => (
                  <div
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className="cell header"
                  >
                    {column.render('Header')}
                    <React.Fragment>
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <SmallIcon size={20} icon={icChevronDown} />
                        ) : (
                          <SmallIcon size={20} icon={icChevronUp} />
                        )
                      ) : null}
                    </React.Fragment>
                  </div>
                ))}
              </div>
            ))}
            <div {...getTableBodyProps()} className="rows">
              {page.map((row, i) => {
                prepareRow(row);
                return (
                  <>
                    <div {...row.getRowProps()} className="row body">
                      {row.cells.map((cell, index) => {
                        if (index === 0) {
                          return (
                            <div
                              {...cell.getCellProps(
                                row.getToggleRowExpandedProps(),
                              )}
                              className="cell expander"
                            >
                              <DataWrapper depth={row.depth}>
                                {(row.canExpand || SubComponent) && (
                                  <React.Fragment>
                                    {row.isExpanded ? (
                                      <SIcon size={24} icon={icChevronUp} />
                                    ) : (
                                      <SIcon size={24} icon={icChevronRight} />
                                    )}
                                  </React.Fragment>
                                )}
                                {cell.isAggregated ? (
                                  cell.render('Aggregated')
                                ) : cell.isPlaceholder ? (
                                  <span className="hidden">dont display</span>
                                ) : (
                                  cell.render('Cell')
                                )}
                              </DataWrapper>
                            </div>
                          );
                        }
                        if (cell.isPlaceholder) {
                          return null;
                        }
                        return (
                          <div {...cell.getCellProps()} className="cell">
                            <DataWrapper depth={row.depth}>
                              {cell.isAggregated
                                ? cell.render('Aggregated')
                                : cell.isPlaceholder
                                ? null
                                : cell.render('Cell')}
                            </DataWrapper>
                          </div>
                        );
                      })}
                    </div>
                    {row.isExpanded ? (
                      <>
                        {SubComponent && (
                          <div className="row body">
                            <SubComponentWrapper>
                              {renderRowSubComponent({ row })}
                            </SubComponentWrapper>
                          </div>
                        )}
                      </>
                    ) : null}
                  </>
                );
              })}
            </div>
            {hasFooter &&
              footerGroups.map(group => (
                <div className="row footer" {...group.getFooterGroupProps()}>
                  {group.headers.map(column => (
                    <div {...column.getFooterProps()} className="cell">
                      {column.render('Footer')}
                    </div>
                  ))}
                </div>
              ))}
          </div>
        </Div>
        {showPagination && (
          <PaginationWrapper>
            <Pagination
              page={pageIndex}
              pages={pageCount}
              pageSize={pageSize}
              pageSizeOptions={pageSizeOptions}
              showPageSizeOptions={true}
              onPageChange={gotoPage}
              onPageSizeChange={setPageSize}
            />
          </PaginationWrapper>
        )}
      </div>
    </ThemeProvider>
  );
};

DataTable.defaultProps = {
  theme: Themes.defaultTheme,
};
