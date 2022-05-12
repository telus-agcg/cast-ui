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

const _Link = args => (
  <Link data-testid={args.dataTestId} {...args}>
    Read More
  </Link>
);

export const _Regular = _Link.bind({});

_Regular.args = {
  href: 'https://www.tkxs.com',
  target: '_blank',
  disabled: false,
  solo: true,
  dataTestId: 'link-standalone',
};

export const _WithOnclick = _Link.bind({});

_WithOnclick.args = {
  disabled: false,
  dataTestId: 'link-with-onclick',
};

export const WithinText = () => (
  <p>
    Lorem ipsum dolor sit amet, consectetur{' '}
    <Link
      data-testid="link-within-text"
      href="https://www.tkxs.com"
      target="_blank"
    >
      adipiscing
    </Link>{' '}
    elit.
  </p>
);
