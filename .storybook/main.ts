import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

  addons: [
    '@storybook/addon-onboarding',
    '@chromatic-com/storybook',
    '@storybook/addon-themes',
    '@storybook/addon-a11y',
    '@storybook/addon-docs'
  ],

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  staticDirs: ['../src/static'],

  typescript: {
    reactDocgen: 'react-docgen-typescript'
  }
};
export default config;
