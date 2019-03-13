import * as React from 'react';

import { Headline } from './Headline/Headline.component';
import { SectionHeader } from './SectionHeader/SectionHeader.component';

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
  <div>
    <Headline>27px Light</Headline>
    <SectionHeader>Roboto 16 Medium, line: 1 px, #8D9599</SectionHeader>
  </div>
);
