import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Themes } from '../../themes';

export type Props = React.LinkHTMLAttributes<HTMLLinkElement> & {
  /**
   * The ID of the control
   *
   * @default null
   **/
  id?: string;
  /**
   * Set an onClick listener
   **/
  onClick?(e: React.MouseEvent<HTMLElement>): void;
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
   * Specify if the link is disabled
   *
   * @default false
   **/
  disabled?: boolean;
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
  outline: none;
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
  &.disabled {
    color: ${(props: Props) =>
      props.theme.typography.link.disabled.color} !important;
    cursor: not-allowed !important;
  }
`;

export const Link: React.FunctionComponent<Props> = ({
  className,
  children,
  theme,
  ...linkProps
}) => {
  const { id } = linkProps;
  return (
    <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
      {linkProps.disabled ? (
        <SLink id={id} className="disabled" onClick={e => e.preventDefault()}>
          {children}
        </SLink>
      ) : (
        <SLink
          className={`${linkProps.solo && 'solo'}  ${className || ''}`}
          href={linkProps.href}
          target={linkProps.target}
          onClick={linkProps.onClick}
          id={id}
        >
          {children}
        </SLink>
      )}
    </ThemeProvider>
  );
};
Link.defaultProps = {
  href: 'javascript:void(0)',
  theme: Themes.defaultTheme,
  disabled: false,
};
