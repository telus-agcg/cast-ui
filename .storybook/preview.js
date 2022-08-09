import 'typeface-roboto';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import 'react-dates/initialize';
import { withThemes } from '@react-theming/storybook-addon';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import '../src/utils/static/fonts.css';

import { ThemeProvider } from 'styled-components';
import { addDecorator } from '@storybook/react';

import {
  defaultTheme,
  cobaltTheme,
  azureTheme,
  faluTheme,
} from '../src/themes';

addDecorator(
  withThemes(ThemeProvider, [defaultTheme, azureTheme, cobaltTheme, faluTheme]),
);

export const parameters = {
  a11y: {
    // element: '#root',
    // axe-core configurationOptions (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#parameters-1)
    config: {},
    // axe-core optionsParameter (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter)
    options: {},
  },
  controls: { expanded: true },
  options: {
    storySort: {
      method: 'alphabetical',
      includeName: true,
      locales: 'en-US',
      order: ['Intro'],
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};
