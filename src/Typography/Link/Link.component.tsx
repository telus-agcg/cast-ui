import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Themes } from '../../themes';

export type Props = React.LinkHTMLAttributes<HTMLLinkElement> & {
  /**
   * Set a target for the Link
   *
   * @default ''
   **/
  target?: string;
  /**
   * Specify if the link is stand alone
   *
   * @default false
   **/
  solo?: boolean;
  /**
   * Set a className for the Link
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

const SLink = styled.a`
  font-weight: ${(props: Props) => props.theme.typography.link.fontWeight};
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.typography.link.fontSize};
  color: ${(props: Props) => props.theme.typography.link.color};
  cursor: pointer;
  text-decoration: ${(props: Props) =>
    props.theme.typography.link.textDecoration};
  display: inline-block;
  &:hover,
  &:focus {
    color: ${(props: Props) => props.theme.typography.link.hover.color};
    text-decoration: ${(props: Props) =>
      props.theme.typography.link.hover.textDecoration};
  }
  &:visited {
    color: ${(props: Props) => props.theme.typography.link.visited.color};
    text-decoration: ${(props: Props) =>
      props.theme.typography.link.visited.textDecoration};
  }
  &.solo {
    text-decoration: ${(props: Props) =>
      props.theme.typography.link.hover.textDecoration};
    &:hover,
    &:focus {
      color: ${(props: Props) => props.theme.typography.link.hover.color};
      text-decoration: ${(props: Props) =>
        props.theme.typography.link.hover.textDecoration};
    }
    &:visited {
      color: ${(props: Props) => props.theme.typography.link.color};
      text-decoration: ${(props: Props) =>
        props.theme.typography.link.textDecoration};
    }
  }
`;

export const Link: React.FunctionComponent<Props> = ({
  className,
  children,
  theme,
  ...linkProps
}) => (
  <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
    <SLink
      className={`${linkProps.solo && 'solo'} ${className || ''}`}
      href={linkProps.href}
      target={linkProps.target}
    >
      {children}
    </SLink>
  </ThemeProvider>
);
Link.defaultProps = {
  href: 'javascript:void(0)',
  theme: Themes.defaultTheme,
};
