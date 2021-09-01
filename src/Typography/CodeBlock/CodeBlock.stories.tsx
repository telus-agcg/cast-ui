import * as React from 'react';

import { CopyToClipboard } from '../../CopyToClipboard';

export const sampleCode = `
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

export default {
  title: 'Typography',
  excludeStories: ['sampleCode'],
  component: CopyToClipboard,
};

export const CodeBlock = () => (
  <CopyToClipboard copyContent={sampleCode || ''} includeCopyButton={true} />
);

CodeBlock.story = {
  parameters: {
    info: {
      text: `
        ### Notes

        The [CopyToClipboard](http://localhost:6006/?path=/story/copytoclipboard--copytoclipboard)
        component can be used to display a code block.
        `,
    },
  },
};
