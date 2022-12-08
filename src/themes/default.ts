export { ThemeProvider } from 'styled-components';
import _ from 'lodash';
import { buildTheme } from './base';

export const defaultColors = {
  white: '#ffffff',
  highlight200: '#F1F6FF',
  drk800: '#2C363E',
  drk400: '#9EA3A7',
  lt800: '#D5D7D9',
  lt400: '#EEF0F2',
  primary: '#0D70F4',
  primaryHover: '#053FBF',
  primaryFaded: '#599DE3',
  primaryBackground: '#D1E7FD',
  success: '#00C43F',
  successHover: '#147D2C',
  successFaded: '#66D19D',
  successBackground: '#DAF5E3',
  danger: '#F53611',
  dangerHover: '#9C230A',
  dangerFaded: '#DD7057',
  dangerBackground: '#FADCD5',
  warning: '#FF720B',
  warningHover: '#AD4511',
  warningFaded: '#E28E56',
  warningBackground: '#FADBC6',
  secondary: '#BFC3C5',
  secondaryHover: '#687279',
  secondaryFaded: '#DADCDE',
  secondaryBackground: '#F5F7F8',
};

const defaultThemeOverrides = {
  name: 'Default',
};

export const defaultTheme = _.merge(
  {},
  buildTheme(defaultColors),
  defaultThemeOverrides,
);
