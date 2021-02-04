import 'typeface-roboto';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import { addReadme } from 'storybook-readme';
import 'react-dates/initialize';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { withKnobs } from '@storybook/addon-knobs';
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
  addReadme,
  withKnobs,
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
  backgrounds: [
    { name: 'Light', value: defaultTheme.colors.white, default: true },
    { name: 'Dark', value: defaultTheme.colors.gray },
  ],
  docs: {
    extractComponentDescription: (component, { notes }) => {
      if (notes) {
        return typeof notes === 'string' ? notes : notes.markdown || notes.text;
      }
      return null;
    },
  },
};
