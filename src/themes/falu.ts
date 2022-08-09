export { ThemeProvider } from 'styled-components';
import _ from 'lodash';
import { buildTheme } from './base';

export const faluColors = {
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
  primary: '#265CBF',
  primaryHover: '#2F4C82',
  primaryFaded: '#85ABF2',
  primaryBackground: '#E8F0FF',
  success: '#308462',
  successHover: '#326952',
  successFaded: '#8BCCB1',
  successBackground: '#EBFFF7',
  danger: '#EF3E33',
  dangerHover: '#CC342C',
  dangerFaded: '#F77E77',
  dangerBackground: '#FADDDC',
  warning: '#FA7B1A',
  warningHover: '#E66300',
  warningFaded: '#FFB780',
  warningBackground: '#FEE8D7',
  secondary: '#A7ADB1',
  secondaryHover: '#687279',
  secondaryFaded: '#DADCDE',
  secondaryBackground: '#F5F7F8',
};

const faluThemeOverrides = {
  name: 'Falu',
};

export const faluTheme = _.merge(
  {},
  buildTheme(faluColors),
  faluThemeOverrides,
);
