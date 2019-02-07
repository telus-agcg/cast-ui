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
   * Wrapper for the breadcrumbs container
   *
   * @default '<nav></nav>'
   **/
  wrapper?: React.ReactType;
  /**
   * Classname for the breadcrumbs container
   *
   * @default ''
   **/
  className: string;
  /**
   * Seperator between breadcrumb links
   *
   * @default '>'
   **/
  separator: React.ReactNode;
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
const block = 'breadcrumbs';

// Create and export the component
export class Breadcrumbs extends React.Component<Props> {
  static defaultProps = {
    className: '',
    hidden: false,
    separator: '>',
    setCrumbs: undefined,
    wrapper: (props: Props) => <nav {...props}>{props.children}</nav>,
  };

  _unsubscribe: Function = () => true;

  render() {
    let { className, hidden, wrapper: Wrapper, setCrumbs } = this.props;
    let hiddenMod = hidden ? `${block}--hidden` : '';
    let crumbs = Store.getState();

    crumbs = crumbs.sort((a: any, b: any) => {
      return a.pathname.length - b.pathname.length;
    });

    if (setCrumbs) crumbs = setCrumbs(crumbs);

    return (
      <div className={className}>
        <Wrapper className={`${block} ${hiddenMod}`}>
          <div className={`${block}__inner`}>
            {crumbs.map((crumb: any, i: any) => (
              <span key={crumb.id} className={`${block}__section`}>
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
                  <span className={`${block}__separator`}>
                    {this.props.separator}
                  </span>
                ) : null}
              </span>
            ))}
          </div>
        </Wrapper>

        {this.props.children}
      </div>
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
