import { defaultTheme } from './default';
import { cobaltTheme } from './cobalt';

export const Themes = { defaultTheme, cobaltTheme };

export * from './default';
export * from './cobalt';
export { default as styled, ThemeProvider } from 'styled-components';
