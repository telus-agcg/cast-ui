import type { Preview } from '@storybook/react';

import { ThemeProvider } from 'styled-components';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';

import { canopyTheme, cobaltTheme, defaultTheme } from '../src/themes';
import '../src/static/fonts.css';
import '@fontsource-variable/roboto';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeFromJSXProvider({
      themes: {
        canopy: canopyTheme,
        default: defaultTheme,
        cobalt: cobaltTheme,
      },
      defaultTheme: 'canopy',
      Provider: ThemeProvider,
    }),
  ],
};

export default preview;
