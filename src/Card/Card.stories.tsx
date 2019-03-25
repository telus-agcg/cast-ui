import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { select, color } from '@storybook/addon-knobs/react';

import { Card } from '../';
import Title from '../Typography/Title';

storiesOf('Card', module).add(
  'Card',
  () => (
    <Card
      cardStyle={select(
        'cardStyle',
        ['success', 'primary', 'default', 'danger', 'warning'],
        'default',
      )}
      highlightBorder={select(
        'highlightBorder',
        ['top', 'left', 'right', 'bottom', 'all'],
        'top',
      )}
      bgColor={color(
        'bgColor',
        '#FFFFFF',
      )}
    >
      <Title>Card Header</Title>
      <div>
        <b>Nullam mattis egestas tortor</b>
        <p>Aliquam porttitor aliquet fringilla.</p>
        <b>Nullam mattis egestas tortor</b>
        <p>Duis pellentesque, risus id faucibus porttitor,<br/>
          dolor arcu tristique ligula, id tincidunt odio nisl id tellus.
          dolor arcu tristique ligula, id tincidunt odio nisl id tellus.</p>
      </div>
    </Card>
  ),
  {
    info: {
      text: `
        ### Notes

        Cards include various options for customizing their backgrounds, borders, and color.

        ##### Card Style
        Use the **cardStyle** prop to set the style of the card

        Options include
        - default (default)
        - primary
        - success
        - warning
        - danger

        ##### Background
        Use the **bgColor** prop to set the background of the card in CSS color format.

        ##### Borders
        Use the **highlightBorder** prop to select the border
        that will bear the prominent size and color of the style.

        Options include
        - top (default)
        - right
        - left
        - bottom
        - all

        When using **all** all the borders will be the same size as defined in your theme.
        `,
    },
  },
);
