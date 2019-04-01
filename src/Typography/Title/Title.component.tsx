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

const STitle = styled.h1`
  font-weight: ${(props: Props) => props.theme.typography.title.fontWeight};
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.typography.title.fontSize};
  color: ${(props: Props) => props.theme.colors.primary}
  line-height: ${(props: Props) => props.theme.typography.title.lineHeight};
`;

export const Title: React.FunctionComponent<Props> = ({
  children,
  ...props
}) => <STitle {...props}>{children}</STitle>;
Title.defaultProps = {
  theme: Themes.defaultTheme,
};
