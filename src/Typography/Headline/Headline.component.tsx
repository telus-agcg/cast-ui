import * as React from 'react';
import styled from 'styled-components';
import { Themes } from '../../themes';

export type Props = {
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

const SHeadline = styled.h2`
  font-weight: ${(props: Props) => props.theme.typography.headline.fontWeight};
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.typography.headline.fontSize};
  color: ${(props: Props) => props.theme.colors.primary}
  line-height: ${(props: Props) => props.theme.typography.headline.lineHeight};
`;

export const Headline: React.FunctionComponent<Props> = ({
  children,
  ...props
}) => <SHeadline {...props}>{children}</SHeadline>;
Headline.defaultProps = { theme: Themes.defaultTheme };
