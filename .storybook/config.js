import { configure, addDecorator, addParameters } from '@storybook/react';
import { create } from '@storybook/theming';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import 'typeface-roboto';
import '../src/utils/static/fonts.css';
import {
  defaultTheme,
  cobaltTheme,
  verdantTheme,
  windfallTheme,
  azureTheme,
} from '../src/themes';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { addReadme } from 'storybook-readme';

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
  backgrounds: [
    { name: 'Light', value: defaultTheme.colors.white, default: true },
    { name: 'Dark', value: defaultTheme.colors.gray },
  ],
  options: {
    theme: create({
      base: 'light',
      brandTitle: 'Cast UI',
      brandUrl: 'https://github.com/technekes/cast-ui',
      // To control appearance:
      brandImage:
        'https://cdn2.hubspot.net/hubfs/1976913/TKXS-brand/tkxs-logo.png',
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

addDecorator(withKnobs);
addDecorator(addReadme);
addDecorator(
  withThemesProvider([
    defaultTheme,
    azureTheme,
    cobaltTheme,
    verdantTheme,
    windfallTheme,
  ]),
);

// automatically import all files ending in *.stories.tsx
const req = require.context('../src', true, /.stories.tsx$/);
function loadStories() {
  require('./castUI');
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
