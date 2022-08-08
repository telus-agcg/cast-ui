import { defaultTheme } from './default';
import { cobaltTheme } from './cobalt';
import { azureTheme } from './azure';
import { faluTheme } from './falu';

export const Themes = {
  defaultTheme,
  cobaltTheme,
  azureTheme,
  faluTheme,
};

export * from './default';
export * from './cobalt';
export * from './azure';
export * from './falu';
export { ThemeProvider } from 'styled-components';
