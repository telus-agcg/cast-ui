import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { create } from '@storybook/theming';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import 'typeface-roboto';
import { defaultTheme } from '../src/themes/default';

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

const GlobalStyle = createGlobalStyle`
  html, body{
    font-weight: ${defaultTheme.typography.fontWeight};
    font-family: ${defaultTheme.typography.fontFamily};
    font-size: ${defaultTheme.typography.fontSize};
    color: ${defaultTheme.colors.primary}
    line-height: ${defaultTheme.typography.lineHeight};
  }

  pre, code{
    white-space: pre;
    white-space: pre-wrap;
    white-space: -moz-pre-wrap;
    white-space: -o-pre-wrap;
  }

  pre{
    font-family: ${defaultTheme.typography.pre.fontFamily};
    font-size: ${defaultTheme.typography.pre.fontSize};
    line-height: ${defaultTheme.typography.pre.lineHeight};
  }

  code{
    font-family: ${defaultTheme.typography.code.fontFamily};
    font-size: ${defaultTheme.typography.code.fontSize};
    line-height: ${defaultTheme.typography.code.lineHeight};
  }

  #content code{
    display: block;
    padding: 1.5em 2em;
    border: 1px solid 
  }
`;

addDecorator(story => (
  <React.Fragment>
    <GlobalStyle />
    {story()}
  </React.Fragment>
));

addDecorator(story => (
  <ThemeProvider theme={defaultTheme}>{story()}</ThemeProvider>
));

// automatically import all files ending in *.stories.tsx
const req = require.context('../src', true, /.stories.tsx$/);
function loadStories() {
  require('./castUI');
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
