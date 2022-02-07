import * as React from 'react';
import { Link } from './Link.component';

export default {
  title: 'Components/Navigation/Link',
  component: Link,
  argTypes: {
    theme: {
      table: {
        disable: true,
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    onClick: {
      action: {
        type: 'onClick',
      },
    },
  },
};

const _Link = args => <Link {...args}>Read More</Link>;

export const _RegularLink = _Link.bind({});

_RegularLink.args = {
  href: 'https://www.tkxs.com',
  target: '_blank',
  disabled: false,
  solo: true,
};

export const _LinkOnClick = _Link.bind({});

_LinkOnClick.args = {
  disabled: false,
};

export const WithinText = () => (
  <p>
    Lorem ipsum dolor sit amet, consectetur{' '}
    <Link href="https://www.tkxs.com" target="_blank">
      adipiscing
    </Link>{' '}
    elit.
  </p>
);
