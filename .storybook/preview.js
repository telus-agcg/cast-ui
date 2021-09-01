import 'typeface-roboto';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import 'react-dates/initialize';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import '../src/utils/static/fonts.css';
import {
  defaultTheme,
  cobaltTheme,
  verdantTheme,
  windfallTheme,
  azureTheme,
  umberTheme,
} from '../src/themes';

export const decorators = [
  withThemesProvider([
    defaultTheme,
    azureTheme,
    umberTheme,
    cobaltTheme,
    verdantTheme,
    windfallTheme,
  ]),
];

export const parameters = {
  controls: { expanded: true },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};
