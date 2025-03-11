import * as React from "react";
import styled, { ThemeProvider } from "styled-components";
import {
  PaginationPageButton,
  PaginationButtonNextPrev,
  PaginationButtonFirstLast,
} from "./PaginationButtons";
import { v4 as uuidv4 } from "uuid";
import { Themes } from "@themes";
import { CustomSelect } from "../Select/Select.component";

export const PAGE_SIZE_OPTIONS = [10, 20, 50, 100];

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
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
  btnSize?: "sm" | "md" | "lg";
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
}
const initialState = {
  activePage: 1,
  visiblePages: [],
};
type State = {
  activePage: number;
  visiblePages: number[];
};
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
  btnSize: "md",
  showPageSizeOptions: false,
  rowsSelectorText: "",
  rowsText: "",
  page: 0,
  pageSizeOptions: PAGE_SIZE_OPTIONS,
  pageSize: 10,
  PageButtonComponent: PaginationPageButton,
  PageButtonNextPrevComponent: PaginationButtonNextPrev,
  PageButtonFirstLastComponent: PaginationButtonFirstLast,
} satisfies Partial<Props>;

export const Pagination = (props: Props) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const {
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
  } = propsWithDefaults;
  const [activePage, setActivePage] = React.useState<number>(1);
  const [visiblePages, setVisiblePages] = React.useState<number[]>([]);

  React.useEffect(() => {
    setActivePage(page + 1);
    setVisiblePages(getVisiblePages(page ? page : 0, pages));
  }, []);

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
      (option) => option.pageSize === pageSize
    );
    return (
      <SSpanPageSizeOptionsSelectWrapper className="select-wrap -pageSizeOptions">
        <CustomSelect
          id={uuidv4()}
          isMulti={false}
          isDisabled={pages <= 0}
          selectSize="md"
          onChange={(selectedOption) =>
            changePageSize(Number(pageSizeOptions[selectedOption.value]))
          }
          options={options}
          controlSpecificProps={{
            defaultValue: selectedOption,
            isSearchable: false,
            "aria-label": rowsSelectorText,
          }}
        />
        <div className="showText">Rows per page</div>
      </SSpanPageSizeOptionsSelectWrapper>
    );
  };

  return (
    <SDivPaginationWrapper>
      {showPageSizeOptions && renderPageSizeOptions()}
      <SPagninationControls>
        <PageButtonFirstLastComponent
          disabled={activePage === 1}
          isForwardDirection={false}
          onClick={() => {
            changePage(1);
          }}
        />
        <PageButtonNextPrevComponent
          disabled={activePage === 1}
          isForwardDirection={false}
          onClick={() => {
            changePage(activePage - 1);
          }}
        />
        <div>
          {visiblePages.map((page: number, index: number, array: number[]) => {
            const showPrevNextGap = array[index - 1] + 1;
            const prevNextGapPageIndex =
              index === array.length - 1 ? array[index - 1] + 1 : page - 1;
            return (
              <span key={page}>
                {showPrevNextGap && (
                  <PageButtonComponent
                    type="button"
                    btnSize="md"
                    onClick={() => changePage(prevNextGapPageIndex)}
                  >
                    ...
                  </PageButtonComponent>
                )}
                <PageButtonComponent
                  type="button"
                  btnSize="md"
                  data-selected={activePage === page ? "" : undefined}
                  onClick={() => changePage(page)}
                >
                  {page}
                </PageButtonComponent>
              </span>
            );
          })}
        </div>
        <PageButtonNextPrevComponent
          disabled={activePage === pages || pages <= 0}
          isForwardDirection={true}
          onClick={() => {
            changePage(activePage + 1);
          }}
        />
        <PageButtonFirstLastComponent
          disabled={activePage === pages || pages <= 0}
          isForwardDirection={true}
          onClick={() => {
            changePage(pages);
          }}
        />
      </SPagninationControls>
    </SDivPaginationWrapper>
  );
};
