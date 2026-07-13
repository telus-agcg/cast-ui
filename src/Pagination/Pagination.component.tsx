import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled, { ThemeProvider } from 'styled-components';
import {
  PaginationPageButton,
  PaginationButtonNextPrev,
  PaginationButtonFirstLast,
} from './PaginationButtons';
import { CustomSelect as Select } from '../Select/Select.component';
import { getPropsWithDefaults } from '@utils';
import { Themes } from '@themes';

export const PAGE_SIZE_OPTIONS = [10, 20, 50, 100];

export interface PaginationProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Specify the function to fire when a page is changed
   **/
  onPageChange?(page: number): any;
  /**
   * Specify the total number of pages
   **/
  pages: number;
  /**
   * Specify the currently selected page (zero-based)
   **/
  page: number;
  /**
   * Specify the button definition to use for the individual page buttons
   **/
  PageButtonComponent?: any;
  /**
   * Specify the button definition to use for the previous and next buttons
   **/
  PageButtonNextPrevComponent?: any;
  /**
   * Specify the button definition to use for the first and last buttons
   **/
  PageButtonFirstLastComponent?: any;
  /**
   * Select Button Size
   *
   * @default 'md'
   **/
  btnSize?: 'sm' | 'md' | 'lg';
  /**
   * Specify any child objects (if applicable)
   **/
  children?: any;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
  onPageSizeChange?(pageSize: number, page?: number): any;
  onFetchData?: () => {};
  showPageSizeOptions?: boolean;
  pageSize?: number;
  pageSizeOptions: number[];
  rowsSelectorText?: string;
  rowsText?: string;
  /**
   * Prefix applied to all internal data-testid attributes.
   * Each child element gets `{data-testid}-{role}` (e.g. "my-pagination-first-page").
   * When omitted, no data-testid attributes are added to child elements.
   **/
  'data-testid'?: string;
}

const SDivPaginationWrapper = styled.div`
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-size: ${(props) => props.theme.body.fontSize};
  padding: ${(props) => props.theme.pagination.padding};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const SSpanPageSizeOptionsSelectWrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.pagination.text};
  .select-wrapper {
    min-width: 80px;
  }
  .showText {
    margin-left: 8px;
    white-space: nowrap;
  }
`;

const SPagninationControls = styled.div`
  display: flex;
  align-items: center;
`;

const defaultProps = {
  btnSize: 'md',
  showPageSizeOptions: false,
  rowsSelectorText: '',
  rowsText: '',
  page: 0,
  pageSizeOptions: PAGE_SIZE_OPTIONS,
  pageSize: 10,
  PageButtonComponent: PaginationPageButton,
  PageButtonNextPrevComponent: PaginationButtonNextPrev,
  PageButtonFirstLastComponent: PaginationButtonFirstLast,
  theme: Themes.canopyTheme,
} satisfies Partial<PaginationProps>;

export const Pagination = (props: PaginationProps) => {
  const propsWithDefaults = getPropsWithDefaults(defaultProps, props);
  const {
    theme,
    page,
    pages,
    onPageChange,
    onPageSizeChange,
    pageSizeOptions,
    rowsText,
    pageSize,
    rowsSelectorText,
    showPageSizeOptions,
    PageButtonNextPrevComponent,
    PageButtonFirstLastComponent,
    PageButtonComponent,
    ...rest
  } = propsWithDefaults;

  const dataTestId = propsWithDefaults['data-testid'] as string | undefined;

  const testId = (suffix: string): string | undefined => {
    try {
      return dataTestId ? `${dataTestId}-${suffix}` : undefined;
    } catch {
      return undefined;
    }
  };
  const [activePage, setActivePage] = React.useState<number>(1);
  const [visiblePages, setVisiblePages] = React.useState<number[]>([]);

  React.useEffect(() => {
    setActivePage(page + 1);
    setVisiblePages(getVisiblePages(page ? page : 0, pages));
  }, [page, pages]);

  const filterPages = (visiblePages: number[], totalPages: number) => {
    return visiblePages.filter((page: number) => page <= totalPages);
  };

  const getVisiblePages = (page: number, total: number) => {
    if (total < 7) {
      return filterPages([1, 2, 3, 4, 5, 6], total);
    }
    if (page % 5 >= 0 && page > 4 && page + 3 < total) {
      return [1, page - 1, page, page + 1, total];
    }
    if (page % 5 >= 0 && page > 4 && page + 3 >= total) {
      return [1, total - 3, total - 2, total - 1, total];
    }
    return [1, 2, 3, 4, 5, total];
  };

  const changePage = (page: number) => {
    if (page === activePage) {
      return;
    }
    const visiblePages = getVisiblePages(page, pages);
    setActivePage(page);
    setVisiblePages(filterPages(visiblePages, pages));
    onPageChange!(page - 1);
  };

  const changePageSize = (pageSize: number) => {
    console.log(pageSize);
    if (onPageSizeChange) {
      onPageSizeChange(pageSize);
    }
  };

  const renderPageSizeOptions = () => {
    const options = pageSizeOptions.map((option, i) => ({
      pageSize: option,
      label: `${option} ${rowsText}`,
      value: i,
    }));
    const selectedOption = options.find(
      (option) => option.pageSize === pageSize,
    );
    return (
      <SSpanPageSizeOptionsSelectWrapper className="select-wrap -pageSizeOptions">
        <Select
          id={uuidv4()}
          isMulti={false}
          isDisabled={pages <= 0}
          selectSize="md"
          onChange={(selectedOption) =>
            changePageSize(Number(pageSizeOptions[selectedOption.value]))
          }
          options={options}
          data-testid={testId('rows-per-page')}
          testIdPrefix={testId('rows-per-page')}
          controlSpecificProps={{
            defaultValue: selectedOption,
            isSearchable: false,
            'aria-label': rowsSelectorText,
          }}
          isFilterable={false}
        />
        <div className="showText">Rows per page</div>
      </SSpanPageSizeOptionsSelectWrapper>
    );
  };

  return (
    <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
      <SDivPaginationWrapper {...rest}>
        {showPageSizeOptions && renderPageSizeOptions()}
        <SPagninationControls>
          <PageButtonFirstLastComponent
            disabled={activePage === 1}
            isForwardDirection={false}
            onClick={() => {
              changePage(1);
            }}
            data-testid={testId('first-page')}
          />
          <PageButtonNextPrevComponent
            disabled={activePage === 1}
            isForwardDirection={false}
            onClick={() => {
              changePage(activePage - 1);
            }}
            data-testid={testId('prev-page')}
          />
          <div>
            {visiblePages.map(
              (page: number, index: number, array: number[]) => {
                const showPrevNextGap = array[index - 1] + 1 < page;
                const prevNextGapPageIndex =
                  index === array.length - 1 ? array[index - 1] + 1 : page - 1;
                return (
                  <span key={page}>
                    {showPrevNextGap && (
                      <PageButtonComponent
                        type="button"
                        btnSize="md"
                        onClick={() => changePage(prevNextGapPageIndex)}
                        data-testid={testId(`page-gap-${prevNextGapPageIndex}`)}
                      >
                        ...
                      </PageButtonComponent>
                    )}
                    <PageButtonComponent
                      type="button"
                      btnSize="md"
                      data-selected={activePage === page ? '' : undefined}
                      onClick={() => changePage(page)}
                      data-testid={testId(`page-${page}`)}
                    >
                      {page}
                    </PageButtonComponent>
                  </span>
                );
              },
            )}
          </div>
          <PageButtonNextPrevComponent
            disabled={activePage === pages || pages <= 0}
            isForwardDirection={true}
            onClick={() => {
              changePage(activePage + 1);
            }}
            data-testid={testId('next-page')}
          />
          <PageButtonFirstLastComponent
            disabled={activePage === pages || pages <= 0}
            isForwardDirection={true}
            onClick={() => {
              changePage(pages);
            }}
            data-testid={testId('last-page')}
          />
        </SPagninationControls>
      </SDivPaginationWrapper>
    </ThemeProvider>
  );
};
