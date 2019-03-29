import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { Themes, ThemeProvider } from '../themes';
import { CopyToClipboard } from '../CopyToClipboard/CopyToClipboard.component';

storiesOf('Cast UI', module).add(
  'defaultTheme', () => (
    <div>
      <pre>{'import \{ Themes \} from \'@tkxs/cast-ui\''}</pre>
      <CopyToClipboard
        copyContent={`Themes.defaultTheme = ${JSON.stringify(Themes.defaultTheme, null, 2)}`}
      />
    </div>
  ),
  {
    info: {
      text: `
        ### Notes

        This is the \`defaultTheme\`, which can be overridden by passing a
        theme of the same shape into the \`ThemeProvider\`.
        Components receive this theme if no other theme is provided.
        `,
      source: false,
      propTables: false,
    },
  },
);

const App = () => null;

storiesOf('Cast UI', module).add(
  'ThemeProvider', () => (
    <ThemeProvider theme={Themes.defaultTheme}>
      <App />
    </ThemeProvider>
  ),
  {
    info: {
      text: `
        ### Notes

        The ThemeProvider is passed on from styled-components and will provide
        the child components with the Theme object as a prop.

        \`import { Themes, ThemeProvider } from '@tkxs/cast-ui';\`\n
        `,
      propTables: false,
    },
  },
);
