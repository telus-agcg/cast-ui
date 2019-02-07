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
   * Classname for the breadcrumbs container
   *
   * @default ''
   **/
  className: string;
  /**
   * HTML element tag e.g 'span' or React Element for individual breadcrumb container
   *
   * @default 'span'
   * @default '(props: Props) => <span {...props}>{props.children}</span>'
   **/
  BreadcrumbItemContainer?: React.ReactType;
  /**
   * Text or React Element for breadcrumbs container
   *
   * @default '>'
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

// Specify BEM block name
const block = 'cast-breadcrumbs';

// Create and export the component
export class Breadcrumbs extends React.Component<Props> {
  static defaultProps = {
    className: '',
    hidden: false,
    separator: '>',
    setCrumbs: undefined,
  };

  _unsubscribe: Function = () => true;

  render() {
    const {
      hidden,
      setCrumbs,
      BreadcrumbsContainer: BCWrapper,
      BreadcrumbItemContainer: BCIWrapper,
      separator,
    } = this.props;
    const hiddenMod = hidden ? `${block}--hidden` : '';
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

    return (
      <CrumbsWrapper className={`${block} ${hiddenMod}`}>
        <div className={`${block}__inner`}>
          {crumbs.map((crumb: any, i: any) => (
            <CrumbItemWrapper key={crumb.id} className={`${block}__section`}>
              <NavLink
                exact
                className={`${block}__crumb`}
                activeClassName={`${block}__crumb--active`}
                to={{
                  pathname: crumb.pathname,
                  search: crumb.search,
                  state: crumb.state,
                }}>
                {crumb.title}
              </NavLink>

              {i < crumbs.length - 1 ? (
                <span className={`${block}__separator`}>{separator}</span>
              ) : null}
            </CrumbItemWrapper>
          ))}
        </div>
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
