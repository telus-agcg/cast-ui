import { defaultTheme } from './default';
import { cobaltTheme } from './cobalt';
import { verdantTheme } from './verdant';
import { windfallTheme } from './windfall';
import { azureTheme } from './azure';

export const Themes = {
  defaultTheme,
  cobaltTheme,
  verdantTheme,
  windfallTheme,
  azureTheme,
};

export * from './default';
export * from './cobalt';
export * from './verdant';
export * from './windfall';
export * from './azure';
export { ThemeProvider } from 'styled-components';
