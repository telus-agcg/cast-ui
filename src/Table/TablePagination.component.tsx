// import React, { Component } from 'react';
import * as React from 'react';

type Props = {
  pages: number;
  page: number;
  PageButtonComponent: any;
  onPageChange: any;
  previousText: string;
  nextText: string;
  children?: any;
};

const initialState = {
  visiblePages: [],
};
type State = {
  visiblePages: number[];
};

const defaultButton = (props: Props) => <button {...props}>{props.children}</button>;

class TablePagination extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    console.log('constructor');

    this.changePage = this.changePage.bind(this);

    this.state = {
      visiblePages: this.getVisiblePages(0, props.pages),
    };
  }
  readonly state: State = initialState;

  componentWillReceiveProps(nextProps: Props) {
    if (this.props.pages !== nextProps.pages) {
      this.setState({
        visiblePages: this.getVisiblePages(0, nextProps.pages),
      });
    }

    this.changePage(nextProps.page + 1);
  }

  filterPages = (visiblePages: number[], totalPages: number) => {
    return visiblePages.filter((page: number) => page <= totalPages);
  }

  getVisiblePages = (page: number, total: number) => {
    if (total < 7) {
      return this.filterPages([1, 2, 3, 4, 5, 6], total);
    }

    if (page % 5 >= 0 && page > 4 && page + 2 < total) {
      return [1, page - 1, page, page + 1, total];
    }
    if (page % 5 >= 0 && page > 4 && page + 2 >= total) {
      return [1, total - 3, total - 2, total - 1, total];
    }
    return [1, 2, 3, 4, 5, total];
  }

  changePage(page: number) {
    const activePage = this.props.page + 1;

    if (page === activePage) {
      return;
    }

    const visiblePages = this.getVisiblePages(page, this.props.pages);

    this.setState({
      visiblePages: this.filterPages(visiblePages, this.props.pages),
    });

    this.props.onPageChange(page - 1);
  }

  render() {
    const { PageButtonComponent = defaultButton } = this.props;
    const { visiblePages } = this.state;
    // console.log('this.state');
    // console.log(this.state);
    const activePage = this.props.page + 1;

    return (
      <div className="Table__pagination">
        <div className="Table__prevPageWrapper">
          <PageButtonComponent
            className="Table__pageButton"
            onClick={() => {
              if (activePage === 1) return;
              this.changePage(activePage - 1);
            }}
            disabled={activePage === 1}
          >
            {this.props.previousText}
          </PageButtonComponent>
        </div>
        <div className="Table__visiblePagesWrapper">
          {visiblePages.map((page: number, index: number, array: number[]) => {
            return (
              <PageButtonComponent
                key={page}
                className={
                  activePage === page
                    ? 'Table__pageButton Table__pageButton--active'
                    : 'Table__pageButton'
                }
                onClick={this.changePage.bind(null, page)}
              >
                {array[index - 1] + 2 < page ? `...${page}` : page}
              </PageButtonComponent>
            );
          })}
        </div>
        <div className="Table__nextPageWrapper">
          <PageButtonComponent
            className="Table__pageButton"
            onClick={() => {
              if (activePage === this.props.pages) return;
              this.changePage(activePage + 1);
            }}
            disabled={activePage === this.props.pages}
          >
            {this.props.nextText}
          </PageButtonComponent>
        </div>
      </div>
    );
  }
}

export default TablePagination;
