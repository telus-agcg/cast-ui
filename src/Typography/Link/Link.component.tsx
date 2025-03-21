import * as React from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import clsx from 'clsx';
import { getDataProps } from '@utils';

export type LinkProps = React.LinkHTMLAttributes<HTMLLinkElement> & {
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
};

const SLink = styled.a<LinkProps>`
  font-weight: ${(props: any) => props.theme.typography.link.fontWeight};
  font-family: ${(props: any) => props.theme.typography.fontFamily};
  font-size: ${(props: any) => props.theme.typography.link.fontSize};
  color: ${(props: any) => props.theme.typography.link.color};
  cursor: pointer;
  text-decoration: ${(props: any) =>
    props.theme.typography.link.textDecoration};
  display: inline-block;
  outline: none;
  &:hover,
  &:focus {
    color: ${(props: any) => props.theme.typography.link.hover.color};
    text-decoration: ${(props: any) =>
      props.theme.typography.link.hover.textDecoration};
  }
  &:visited {
    color: ${(props: any) => props.theme.typography.link.visited.color};
    text-decoration: ${(props: any) =>
      props.theme.typography.link.visited.textDecoration};
  }
  &.disabled {
    color: ${(props: any) =>
      props.theme.typography.link.disabled.color} !important;
    cursor: not-allowed !important;
  }
`;

const defaultProps = {
  href: 'javascript:void(0)',
  disabled: false,
} satisfies Partial<LinkProps>;

export const Link: React.FunctionComponent<LinkProps> = (props: LinkProps) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const dataProps: any = getDataProps(propsWithDefaults);
  const {
    id,
    disabled,
    className,
    children,
    onClick,
    onMouseEnter,
    href,
    target,
  } = propsWithDefaults;
  return (
    <>
      {disabled ? (
        <SLink
          {...dataProps}
          id={id}
          className={clsx([className, 'disabled'])}
          onClick={(e) => e.preventDefault()}
        >
          {children}
        </SLink>
      ) : (
        <SLink
          {...dataProps}
          id={id}
          className={className}
          onClick={onClick}
          onMouseEnter={onMouseEnter}
          href={href}
          target={target}
        >
          {children}
        </SLink>
      )}
    </>
  );
};
