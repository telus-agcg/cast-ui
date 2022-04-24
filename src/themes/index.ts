import { colors as defaultColors, theme as defaultTheme } from './default';
import { colors as cobaltColors, theme as cobaltTheme } from './cobalt';
import { colors as verdantColors, theme as verdantTheme } from './verdant';
import { colors as windfallColors, theme as windfallTheme } from './windfall';
import { colors as azureColors, theme as azureTheme } from './azure';
import { colors as umberColors, theme as umberTheme } from './umber';
import { colors as faluColors, theme as faluTheme } from './falu';

export const Themes = {
  defaultTheme,
  cobaltTheme,
  verdantTheme,
  windfallTheme,
  azureTheme,
  umberTheme,
  faluTheme,
};

export { defaultColors, defaultTheme };
export { azureColors, azureTheme };
export { cobaltColors, cobaltTheme };
export { faluColors, faluTheme };
export { umberColors, umberTheme };
export { verdantColors, verdantTheme };
export { windfallColors, windfallTheme };
export { ThemeProvider } from 'styled-components';
