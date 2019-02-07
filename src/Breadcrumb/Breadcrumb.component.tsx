// Import External Dependencies
import * as React from 'react';
import UUID from 'uuid';
import _ from 'lodash';

// Import Utilities
import { Dispatch } from './store';

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
   * @default '{}'
   **/
  data: any;
  /**
   * Classname for the breadcrumbs container
   *
   * @default ''
   **/
  className?: string;
  /**
   * Seperator between breadcrumb links
   *
   * @default '>'
   **/
  separator?: React.ReactNode;
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
export class Breadcrumb extends React.Component<Props> {
  static defaultProps = {
    hidden: false,
    children: null,
  };

  state = {
    id: UUID.v4(),
  };

  render() {
    return this.props.children;
  }

  componentDidMount() {
    let { data, hidden } = this.props;

    if (!hidden) this._dispatch('ADD_CRUMB', data);
  }

  componentWillReceiveProps(nextProps: Props) {
    let { data, hidden } = nextProps;

    // Update the crumb if its data has changed
    if (!_.isEqual(data, this.props.data)) {
      this._dispatch('UPDATE_CRUMB', data);
    }

    // Remove/add crumb based on `hidden` prop
    if (hidden && !this.props.hidden) {
      this._dispatch('REMOVE_CRUMB', data);
    } else if (!hidden && this.props.hidden) {
      this._dispatch('ADD_CRUMB', data);
    }
  }

  componentWillUnmount() {
    this._dispatch('REMOVE_CRUMB', this.props.data);
  }

  /**
   * Dispatch the given `action`
   *
   * @param  {string} action - A valid action name accepted by the store
   * @param  {object} data   - The breadcrumb data to pass
   */
  _dispatch(action: any, data: any) {
    let { id } = this.state;

    Dispatch({
      type: action,
      payload: { id, ...data },
    });
  }
}
