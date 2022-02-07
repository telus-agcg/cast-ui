import { create } from '@storybook/theming';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'Cast UI',
    brandUrl: 'https://github.com/technekes/cast-ui',
    // To control appearance:
    brandImage:
      'https://cdn2.hubspot.net/hubfs/1976913/TKXS-brand/tkxs-logo.png',
  }),
  isFullscreen: false,
  showPanel: true,
  panelPosition: 'bottom',
  isToolshown: true,
});
