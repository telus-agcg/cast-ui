import { create } from '@storybook/theming';
import { addons } from '@storybook/addons';

const theme = create({
  base: 'light',
  brandTitle: 'Cast UI',
  brandUrl: 'https://github.com/telus-agcg/cast-ui',
  brandImage: 'https://cdn2.hubspot.net/hubfs/1976913/TKXS-brand/tkxs-logo.png',
});

addons.setConfig({
  theme,
  isFullscreen: false,
  showPanel: true,
  panelPosition: 'bottom',
  isToolshown: true,
});
