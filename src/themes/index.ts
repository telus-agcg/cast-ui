import { defaultTheme } from './default';
import { cobaltTheme } from './cobalt';
import { canopyTheme } from './canopy';

export const Themes = {
  defaultTheme,
  cobaltTheme,
  canopyTheme,
};

export * from './default';
export * from './cobalt';
export * from './canopy';
export { ThemeProvider } from 'styled-components';
