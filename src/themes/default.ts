import { lighten, darken } from '../utils/colorUtils';
export { ThemeProvider } from 'styled-components';
import _ from 'lodash';
import { buildTheme } from './base';

export const defaultColors = {
  white: '#ffffff',
  black: '#000000',
  highlight400: '#E8EEFD',
  highlight200: '#F1F6FF',
  drk800: '#303E47',
  drk600: '#687279',
  drk400: '#A7ADB1',
  drk200: '#C6CACC',
  lt800: '#DADCDE',
  lt600: '#E6E8EA',
  lt400: '#F0F2F4',
  lt200: '#F5F7F8',
  primary: '#167BE0',
  primaryHover: darken('#167BE0', 25),
  primaryFaded: lighten('#167BE0', 25),
  primaryBackground: lighten('#167BE0', 50),
  success: '#00BF6F',
  successHover: '#00A254',
  successFaded: '#7EDEB6',
  successBackground: '#DAF8E6',
  danger: '#D93945',
  dangerHover: darken('#D93945', 25),
  dangerFaded: lighten('#D93945', 25),
  dangerBackground: lighten('#D93945', 50),
  warning: '#FD984E',
  warningHover: darken('#FD984E', 25),
  warningFaded: lighten('#FD984E', 25),
  warningBackground: lighten('#FD984E', 50),
  secondary: '#727A80',
  secondaryHover: darken('#727A80', 25),
  secondaryFaded: lighten('#727A80', 25),
  secondaryBackground: lighten('#727A80', 50),
};

const defaultThemeOverrides = {
  name: 'Default',
};

export const defaultTheme = _.merge(
  {},
  buildTheme(defaultColors),
  defaultThemeOverrides,
);
