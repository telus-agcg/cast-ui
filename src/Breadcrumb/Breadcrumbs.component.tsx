// Import External Dependencies
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// Import Utilities
import Store from './store';

type Props = {
  /** the content of the panel  */
  children?: React.ReactNode;
  /**
   * Show or hide breadcrumbs
   *
   * @default false
   **/
  hidden?: boolean;
  /**
   * HTML element tag e.g 'div' or React Element|Component for breadcrumbs container
   *
   * @default 'nav'
   * @default '(props: Props) => <nav {...props}>{props.children}</nav>'
   **/
  BreadcrumbsContainer?: React.ReactType;
  /**
   * HTML element tag e.g 'span' or React Element|Component for individual breadcrumb container
   *
   * @default 'span'
   * @default '(props: Props) => <span {...props}>{props.children}</span>'
   **/
  BreadcrumbItemContainer?: React.ReactType;
  /**
   * HTML element tag e.g 'a' or React Element|Component for individual breadcrumb item
   *
   * @default 'NavLink from `react-router-dom`''
   * @default '(props: Props) => <NavLink {...props}>{props.children}</NavLink>'
   **/
  BreadcrumbItem?: React.ReactType;
  /**
   * HTML content tag e.g '>' or React Element|Component for individual breadcrumb item seperator
   *
   * @default '>'
   * @default '(props: Props) => <span {...props}> > </span>'
   **/
  separator?: React.ReactType;
  /**
   * Set/Update the crumbs list
   *
   * @default null
   **/
  setCrumbs?: Function;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

// Create and export the component
export class Breadcrumbs extends React.Component<Props> {
  static defaultProps = {
    hidden: false,
    setCrumbs: undefined,
  };

  _unsubscribe: Function = () => true;

  render() {
    const {
      hidden,
      setCrumbs,
      BreadcrumbsContainer: BCCWrapper,
      BreadcrumbItemContainer: BCICWrapper,
      BreadcrumbItem: BCIWrapper,
      separator: Separator,
    } = this.props;
    let crumbs = Store.getState();

    crumbs = crumbs.sort((a: any, b: any) => {
      return a.pathname.length - b.pathname.length;
    });
    if (setCrumbs) crumbs = setCrumbs(crumbs);

    console.log(' these are the crumbs ', crumbs);

    const CrumbsWrapper = BCCWrapper
      ? (props: any) => <BCCWrapper {...props}>{props.children}</BCCWrapper>
      : (props: any) => <nav {...props}>{props.children}</nav>;
    const CrumbItemWrapper = BCICWrapper
      ? (props: any) => <BCICWrapper {...props}>{props.children}</BCICWrapper>
      : (props: any) => <span {...props}>{props.children}</span>;
    const CrumbItem = BCIWrapper
      ? (props: any) => <BCIWrapper {...props}>{props.children}</BCIWrapper>
      : (props: any) => <NavLink {...props}>{props.children}</NavLink>;
    const SeparatorWrapper = Separator
      ? (props: any) => <Separator {...props}>></Separator>
      : (props: any) => <span {...props}>></span>;

    const SCrumbItem = styled(CrumbItem)`
      font-size: 14px;
      font-weight: 700;
    `;

    return (
      <CrumbsWrapper hidden={hidden}>
        {crumbs.map((crumb: any, i: any) => (
          <CrumbItemWrapper key={crumb.id}>
            <SCrumbItem
              exact
              activeClassName="crumb-item--active"
              to={{
                pathname: crumb.pathname,
                search: crumb.search,
                state: crumb.state,
              }}>
              {crumb.title}
            </SCrumbItem>

            {i < crumbs.length - 1 ? <SeparatorWrapper /> : null}
          </CrumbItemWrapper>
        ))}
      </CrumbsWrapper>
    );
  }

  componentWillMount() {
    this._unsubscribe = Store.subscribe(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }
}
