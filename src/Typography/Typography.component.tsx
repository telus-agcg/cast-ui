import * as React from 'react';
import { createGlobalStyle } from 'styled-components';

import 'typeface-roboto';

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

const GlobalDefaults = createGlobalStyle`
  html, body{
    font-weight: ${(props: Props) => props.theme.typography.fontWeight};
    font-family: ${(props: Props) => props.theme.typography.fontFamily};
    font-size: ${(props: Props) => props.theme.typography.fontSize};
    color: ${(props: Props) => props.theme.colors.primary}
    line-height: ${(props: Props) => props.theme.typography.lineHeight};
  }
`;

export const Typography: React.FunctionComponent<Props> = ({
  children,
  theme,
}) => (
  <div>
    <GlobalDefaults />
    <Headline>27px Light</Headline>
    <SectionHeader>Roboto 16 Medium, line: 1 px, #8D9599</SectionHeader>
  </div>
);
