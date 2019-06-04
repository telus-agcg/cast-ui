import * as React from 'react';
import ReactPaginate, { ReactPaginateProps } from 'react-paginate';
import Icon from 'react-icons-kit';
import { chevronLeft } from 'react-icons-kit/fa/chevronLeft';
import { chevronRight } from 'react-icons-kit/fa/chevronRight';
import styled, { ThemeProvider } from 'styled-components';
import { Themes } from '../themes';

const SPaginate = styled.div`
  .cast-paginate {
    display: inline-block;
    padding-left: 0;
    font-family: ${(props: Partial<Props>) =>
      props.theme.typography.fontFamily};
    a {
      background: ${(props: Partial<Props>) =>
        props.theme.pagination.background};
      border: 1px solid
        ${(props: Partial<Props>) => props.theme.pagination.borderColor};
      padding: ${(props: Partial<Props>) =>
        props.theme.pagination.button.padding[props.btnSize || 'md']};
      font-family: ${(props: Partial<Props>) =>
        props.theme.typography.fontFamily};
      font-size: ${(props: Partial<Props>) =>
        props.theme.common[props.btnSize || 'md'].fontSize};
      font-weight: ${(props: Partial<Props>) =>
        props.theme.pagination.button.fontWeight};
      color: ${(props: Partial<Props>) => props.theme.pagination.text};
      border-radius: ${(props: Partial<Props>) =>
        props.theme.pagination.borderRadius};
      outline: none;
      user-select: none;
      cursor: pointer;
    }
    li {
      display: inline-block;
    }
    .selected a {
      font-weight: ${(props: Partial<Props>) =>
        props.theme.pagination.activeFontWeight};
      background: ${(props: Partial<Props>) =>
        props.theme.pagination.activeBackground};
      border: 1px solid;
      border-color: ${(props: Partial<Props>) =>
        props.theme.pagination.activeBorderColor};
      color: ${(props: Partial<Props>) => props.theme.pagination.activeText};
    }
    .disabled a {
      background: ${(props: Partial<Props>) =>
        props.theme.pagination.disabledBackground};
      border: 1px solid;
      border-color: ${(props: Partial<Props>) =>
        props.theme.pagination.disabledBorderColor};
      color: ${(props: Partial<Props>) => props.theme.pagination.disabledText};
      cursor: not-allowed;
    }
  }
`;

const defaultProps = {
  btnSize: 'md' as 'md' | 'lg' | 'sm',
  containerClassName: 'cast-paginate',
  compact: false,
  pageRangeDisplayed: 3,
  marginPagesDisplayed: 1,
  theme: Themes.defaultTheme,
};

type DefaultProps = Readonly<typeof defaultProps>;

export type Props = Partial<ReactPaginateProps> &
  Partial<DefaultProps> & {
    /* The size of the clickable links
      @default 'md'
    */
    btnSize?: 'sm' | 'md' | 'lg';
    pageCount: number;
    onPageChange: any;
    /* provided from the ThemeProvider
      @default tkxs theme
    */
    theme?: any;
  };

const PreviousLabel = () => (
  <React.Fragment>
    <Icon icon={chevronLeft} size={10} />
    <span style={{ fontWeight: 'bold', marginLeft: '10px' }}>Previous</span>
  </React.Fragment>
);
const NextLabel = () => (
  <React.Fragment>
    <span style={{ fontWeight: 'bold', marginRight: '10px' }}>Next</span>
    <Icon icon={chevronRight} size={10} />
  </React.Fragment>
);

export class Pagination extends React.Component<Props> {
  static defaultProps = defaultProps;
  render() {
    const { theme, onPageChange, ...props } = this.props;
    return (
      <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
        <SPaginate {...props}>
          <ReactPaginate
            pageCount={this.props.pageCount}
            pageRangeDisplayed={
              this.props.pageRangeDisplayed || defaultProps.pageRangeDisplayed
            }
            marginPagesDisplayed={
              this.props.marginPagesDisplayed ||
              defaultProps.marginPagesDisplayed
            }
            containerClassName={'cast-paginate'}
            previousLabel={<PreviousLabel />}
            nextLabel={<NextLabel />}
            onPageChange={onPageChange}
            {...props}
          />
        </SPaginate>
      </ThemeProvider>
    );
  }
}
