export type castTableProps = {
  data: any;
  columns: any;
  tableSize?: 'sm' | 'md' | 'lg';
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
};
