import * as React from 'react';

import { Headline } from './Headline/Headline.component';

export type Props = {
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

export const Typography: React.FunctionComponent<Props> = ({
  children,
  theme,
}) => (
  <div><Headline>Text</Headline></div>
);
