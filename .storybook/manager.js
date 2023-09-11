import { create } from '@storybook/theming';
import { addons } from '@storybook/addons';

const theme = create({
  base: 'light',
  brandTitle: 'Cast UI',
  brandUrl: 'https://github.com/telus-agcg/cast-ui',
  brandImage:
    'https://images.ctfassets.net/x9vf49eb1fms/2eW0iVEwRrjNk1AeEae9tM/b7460c4ddde78307128180888b855e9b/TELUS_Ag_CG_EN_Hor_2022_Digital_RGB.png',
});

addons.setConfig({
  theme,
  isFullscreen: false,
  showPanel: true,
  panelPosition: 'bottom',
  isToolshown: true,
});
