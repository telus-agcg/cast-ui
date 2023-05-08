import _ from 'lodash';

export const getDataProps = (props) =>
  _.pickBy(props, (value, key) => key.startsWith('data-'));

export const getAriaProps = (props) =>
  _.pickBy(props, (value, key) => key.startsWith('aria-'));
