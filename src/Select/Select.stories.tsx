import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs/react';
import { Select } from '../';
import { action } from '@storybook/addon-actions';

storiesOf('Select', module)
  .add(
    'Select',
    () => (
      <>
        <Select
          creatable={boolean('creatable', true)}
          isMulti={boolean('isMulti', false)}
          isDisabled={boolean('isDisabled', false)}
          isClearable={boolean('isClearable', false)}
          controlSpecificProps={{
            isSearchable: boolean('isSearchable', false),
          }}
          highlightFilled={boolean('highlightFilled', false)}
          selectSize={select('selectSize', ['sm', 'md', 'lg'], 'md')}
          invalid={boolean('invalid', false)}
          invalidText={text('invalidText', 'A valid value is required')}
          onChange={action('onChange')}
          options={[
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' },
          ]}
        />
      </>
    ),
    {
      info: {
        text: `
### Notes

This is a Select, based on the [react-select](https://github.com/JedWatson/react-select) library.

###### Important

The version of **react-select** used is **version 2** and it introduces a number of changes from version 1.

For example, the *selectedOption* prop cannot accept any simple values such as strings.

The recommended implementation can be found [here](https://react-select.com/upgrade-guide#simple-value)

Review the [upgrade guide](https://react-select.com/upgrade-guide) on what to expect if coming from version 1.
        `,
      },
    },
  )
  .add(
    'Multiselect',
    () => (
      <div>
        <Select
          creatable={boolean('creatable', true)}
          isMulti={boolean('isMulti', true)}
          isDisabled={boolean('isDisabled', false)}
          selectSize={select('selectSize', ['sm', 'md', 'lg'], 'md')}
          invalid={boolean('invalid', false)}
          invalidText={text('invalidText', 'A valid value is required')}
          onChange={action('onChange')}
          isClearable={boolean('isClearable', false)}
          highlightFilled={boolean('highlightFilled', false)}
          options={[
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' },
          ]}
        />
      </div>
    ),
    {
      info: {
        text: `
### Notes

This is a MultiSelect, based on the [react-select](https://github.com/JedWatson/react-select) library.

###### Important

The version of **react-select** used is **version 2** and it introduces a number of changes from version 1.

For example, the *selectedOption* prop cannot accept any simple values such as strings.

The recommended implementation can be found [here](https://react-select.com/upgrade-guide#simple-value)

Review the [upgrade guide](https://react-select.com/upgrade-guide) on what to expect if coming from version 1.
        `,
      },
    },
  );
