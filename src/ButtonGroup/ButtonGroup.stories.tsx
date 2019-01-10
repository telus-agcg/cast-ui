import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { wInfo } from '../storybook-utils';

import { ButtonGroup } from './ButtonGroup.component';
import { Button } from '../Button/Button.component';

storiesOf('ButtonGroup', module).add(
  'ButtonGroup',
  wInfo(`
  ### Notes
  This is a ButtonGroup
  ### Usage
  ~~~js
  <ButtonGroup>
    <Button btnStyle="primary" btnSize="md" onClick={onClick}>
      OK
    </Button>
    <Button btnStyle="default" btnSize="md" onClick={onClick}>
      Cancel
    </Button>
  </ButtonGroup>
  ~~~`)(() => (
    <ButtonGroup role="group">
        <Button
        btnStyle="default"
        btnSize="md"
        onClick={() => false}
        >
            1
        </Button>
        <Button
        btnStyle="default"
        btnSize="md"
        onClick={() => false}
        >
            2
        </Button>
        <Button
        btnStyle="default"
        btnSize="md"
        onClick={() => false}
        >
            3
        </Button>
    </ButtonGroup>
  )),
);
