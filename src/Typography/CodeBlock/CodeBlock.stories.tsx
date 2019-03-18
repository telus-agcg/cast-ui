import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { CodeBlock } from './CodeBlock.component';

const sampleCode = `
pre {
  font-family: "Roboto Mono", Courier, monospace;
  font-size: 100%;
  line-height: 100%;
  white-space: pre;
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -o-pre-wrap;
}

code {
  font-family: "Roboto Mono", Consolas, "Andale Mono", "DejaVu Sans Mono", monospace;
  font-size: 95%;
  line-height: 140%;
  white-space: pre;
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -o-pre-wrap;
  padding: 1.5em 2em;
}

#content code{
  display: block;
  border: 1px solid;
}
`;

storiesOf('Typography', module).add(
  'CodeBlock',
  () => (
    <CodeBlock>{sampleCode}</CodeBlock>
  ),
  {
    info: {
      text: `
        ### Notes

        Documentation and examples for Cast UI CodeBlock.
        `,
    },
  },
);
