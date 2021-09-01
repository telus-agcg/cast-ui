import * as React from 'react';
import { Link } from './Link.component';

export default {
  title: 'Typography/Link',
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
  id: 'link1',
  href: 'https://www.tkxs.com',
  target: '_blank',
  disabled: false,
  solo: true,
};

_RegularLink.story = {
  parameters: {
    info: {
      text: `
      ### Notes

      Documentation and examples for Cast UI Link.
      `,
    },
  },
};

export const _LinkOnClick = _Link.bind({});

_LinkOnClick.args = {
  id: 'link2',
  disabled: false,
};

_LinkOnClick.story = {
  parameters: {
    info: {
      text: `
      ### Notes

      Documentation and examples for Cast UI Link.
      `,
    },
  },
};

export const WithinText = () => (
  <p>
    Lorem ipsum dolor sit amet, consectetur{' '}
    <Link id="link3" href="https://www.tkxs.com" target="_blank">
      adipiscing
    </Link>{' '}
    elit.
  </p>
);

WithinText.story = {
  parameters: {
    info: {
      text: `
      ### Notes

      Documentation and examples for Cast UI Link.
      `,
    },
  },
};
