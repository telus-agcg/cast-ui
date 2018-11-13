import { configure } from '@storybook/react';
import { setAddon, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

addDecorator(withInfo);
addDecorator(withKnobs);

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.tsx$/);
function loadStories() {
  require('./welcomeStory');
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
