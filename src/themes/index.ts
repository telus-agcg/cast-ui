import { defaultTheme } from './default';
import { cobaltTheme } from './cobalt';
import { verdantTheme } from './verdant';
import { windfallTheme } from './windfall';

export const Themes = {
  defaultTheme,
  cobaltTheme,
  verdantTheme,
  windfallTheme,
};

export * from './default';
export * from './cobalt';
export * from './verdant';
export * from './windfall';
export { ThemeProvider } from 'styled-components';
