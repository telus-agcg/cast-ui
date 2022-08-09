export { ThemeProvider } from 'styled-components';
import _ from 'lodash';
import { buildTheme } from './base';

export const azureColors = {
  white: '#ffffff',
  black: '#000000',
  highlight400: '#E1F0FF',
  highlight200: '#F3F9FF',
  drk800: '#303E47',
  drk600: '#54585A',
  drk400: '#898D8D',
  drk200: '#B2B4B4',
  lt800: '#C8C9C9',
  lt600: '#D7D8D8',
  lt400: '#EFEFEF',
  lt200: '#F8F8F8',
  primary: '#146AB4',
  primaryHover: '#194C8A',
  primaryFaded: '#8BC1F7',
  primaryBackground: '#E2F0FD',
  success: '#7FB541',
  successHover: '#5D8E24',
  successFaded: '#CCEDA7',
  successBackground: '#F3FAEA',
  danger: '#FA320E',
  dangerHover: '#DD2301',
  dangerFaded: '#FD9380',
  dangerBackground: '#FFDFD9',
  warning: '#FD8236',
  warningHover: '#E65900',
  warningFaded: '#FFB07F',
  warningBackground: '#FFDFCB',
  secondary: '#898D8D',
  secondaryHover: '#54585A',
  secondaryFaded: '#C8C9C9',
  secondaryBackground: '#F8F8F8',
};

const azureThemeOverrides = {
  name: 'Azure',
};

export const azureTheme = _.merge(
  {},
  buildTheme(azureColors),
  azureThemeOverrides,
);
