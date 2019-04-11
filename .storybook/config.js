import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { create } from '@storybook/theming';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import { ThemeProvider } from 'styled-components';
import 'typeface-roboto';
import { defaultTheme, cobaltTheme } from '../src/themes';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';

const wInfoStyle = {
  header: {
    h1: {
      marginRight: '20px',
      fontSize: '25px',
      display: 'inline',
      fontFamily: defaultTheme.typography.fontFamily,
    },
    body: {
      paddingTop: 0,
      paddingBottom: 0,
      fontFamily: defaultTheme.typography.fontFamily,
    },
    h2: {
      fontFamily: defaultTheme.typography.fontFamily,
      display: 'inline',
      color: '#999',
    },
  },
  infoBody: {
    fontFamily: defaultTheme.typography.fontFamily,
    backgroundColor: '#fafafa',
    padding: '0px 5px',
    lineHeight: '2',
  },
};

addDecorator(withThemesProvider([defaultTheme, cobaltTheme]));

addParameters({
  options: {
    theme: create({
      base: 'light',
      brandTitle: 'Cast UI',
      brandUrl: 'https://github.com/technekes/cast-ui',
      // To control appearance:
      brandImage: 'https://cdn2.hubspot.net/hubfs/1976913/tkxs-logo.png',
    }),
    isFullscreen: false,
    panelPosition: 'right',
  },
});
addDecorator(
  withInfo({
    inline: true,
    source: true,
    styles: wInfoStyle,
  }),
);
export const wInfo = text =>
  withInfo({ inline: true, source: true, styles: wInfoStyle, text: text });

addDecorator(withKnobs);

addDecorator(story => (
  <ThemeProvider theme={cobaltTheme}>{story()}</ThemeProvider>
));

// automatically import all files ending in *.stories.tsx
const req = require.context('../src', true, /.stories.tsx$/);
function loadStories() {
  require('./castUI');
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
