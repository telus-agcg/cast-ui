import { Themes } from '../themes';

type ThemeInterface = typeof Themes.canopyTheme;

declare module 'styled-components' {
  interface DefaultTheme extends ThemeInterface {}
}
