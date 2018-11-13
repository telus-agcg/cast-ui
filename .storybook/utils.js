import { withInfo } from '@storybook/addon-info';
export function wInfo(text) {
  return withInfo({
    inline: true,
    source: false,
    text,
  });
}
