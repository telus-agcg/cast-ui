// Import External Dependencies
import * as React from 'react';

// TODO: Use imitation and allow it to be passed as a prop
import { NavLink } from 'react-router-dom';

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
   * HTML element tag e.g 'div' or React Element for breadcrumbs container
   *
   * @default 'nav'
   * @default '(props: Props) => <nav {...props}>{props.children}</nav>'
   **/
  BreadcrumbsContainer?: React.ReactType;
  /**
   * HTML element tag e.g 'span' or React Element for individual breadcrumb container
   *
   * @default 'span'
   * @default '(props: Props) => <span {...props}>{props.children}</span>'
   **/
  BreadcrumbItemContainer?: React.ReactType;
  /**
   * HTML content tag e.g '>' or React Element for individual breadcrumb seperator
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
      BreadcrumbsContainer: BCWrapper,
      BreadcrumbItemContainer: BCIWrapper,
      separator: Separator,
    } = this.props;
    let crumbs = Store.getState();

    crumbs = crumbs.sort((a: any, b: any) => {
      return a.pathname.length - b.pathname.length;
    });
    if (setCrumbs) crumbs = setCrumbs(crumbs);

    const CrumbsWrapper = BCWrapper
      ? (props: Props) => <BCWrapper {...props}>{props.children}</BCWrapper>
      : (props: Props) => <nav {...props}>{props.children}</nav>;
    const CrumbItemWrapper = BCIWrapper
      ? (props: Props) => <BCIWrapper {...props}>{props.children}</BCIWrapper>
      : (props: Props) => <span {...props}>{props.children}</span>;
    const SeparatorWrapper = Separator
      ? (props: Props) => <Separator {...props}>></Separator>
      : (props: Props) => <span {...props}>></span>;

    return (
      <CrumbsWrapper hidden={hidden}>
        {crumbs.map((crumb: any, i: any) => (
          <CrumbItemWrapper key={crumb.id}>
            <NavLink
              exact
              activeClassName={`crumb--active`}
              to={{
                pathname: crumb.pathname,
                search: crumb.search,
                state: crumb.state,
              }}>
              {crumb.title}
            </NavLink>

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
