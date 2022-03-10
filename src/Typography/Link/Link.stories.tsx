import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Link } from './Link.component';
import { boolean } from '@storybook/addon-knobs/react';

storiesOf('Typography/Link', module)
  .add(
    'Standalone',
    () => (
      <Link
        solo={true}
        href="https://www.tkxs.com"
        target="_blank"
        disabled={boolean('disabled', false)}
        data-testid="link-standalone"
      >
        Read More
      </Link>
    ),
    {
      info: {
        text: `
        ### Notes

        Documentation and examples for Cast UI Link.
        `,
      },
    },
  )
  .add(
    'Within Text',
    () => (
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
    ),
    {
      info: {
        text: `
        ### Notes

        Documentation and examples for Cast UI Link.
        `,
      },
    },
  )
  .add(
    'With onClick',
    () => (
      <Link data-testid="link-with-onclick" onClick={action('Reading more')}>
        Read More
      </Link>
    ),
    {
      info: {
        text: `
        ### Notes

        Documentation and examples for Cast UI Link.
        `,
      },
    },
  );
