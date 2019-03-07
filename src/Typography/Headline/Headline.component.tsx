import * as React from 'react';
import styled from 'styled-components';

export type Props = {
  /**
   * Set a className for the Headline
   *
   * @default ''
   **/
  className?: string;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

const SHeadline = styled.h1`
  font-weight: ${(props: Props) => props.theme.typography.headline.fontWeight};
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.typography.headline.fontSize};
`;

export const Headline: React.FunctionComponent<Props> = ({
  className,
  children,
  theme,
}) => (
  <SHeadline className={className}>
    {children}
  </SHeadline>
);
