import * as React from 'react';
import _ from 'lodash';
import cn from 'classnames';
import styled, { ThemeProvider } from 'styled-components';

import { Themes } from '../../themes';
import { getDataProps, getAriaProps } from '../../utils/common';

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
   * Set an onMouseEnter listener
   **/
  onMouseEnter?(e: React.MouseEvent<HTMLElement>): void;
  /**
   * Set a target for the Link
   *
   * @default ''
   **/
  target?: string;
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
  /**
   * defines role of this link
   *
   * @default 'link'
   **/
  role?: string;
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
  role,
  ...linkProps
}) => {
  const { id } = linkProps;
  const dataProps: any = getDataProps(linkProps);
  const ariaProps: any = getAriaProps(linkProps);
  return (
    <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
      {linkProps.disabled ? (
        <SLink
          {...dataProps}
          {...ariaProps}
          id={id}
          className={cn([className, 'disabled'])}
          onClick={(e) => e.preventDefault()}
          role={role}
        >
          {children}
        </SLink>
      ) : (
        <SLink
          {...dataProps}
          {...ariaProps}
          id={id}
          className={className}
          onClick={linkProps.onClick}
          onMouseEnter={linkProps.onMouseEnter}
          href={linkProps.href}
          target={linkProps.target}
          role={role}
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
