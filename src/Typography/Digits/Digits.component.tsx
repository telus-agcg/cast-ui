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

const SDigits = styled.p`
  font-weight: ${(props: Props) => props.theme.typography.digits.fontWeight};
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.typography.digits.fontSize};
  color: ${(props: Props) => props.theme.colors.primary}
  line-height: ${(props: Props) => props.theme.typography.digits.lineHeight};
`;

export const Digits: React.FunctionComponent<Props> = ({
  children,
  ...props
}) => <SDigits {...props}>{children}</SDigits>;
Digits.defaultProps = { theme: Themes.defaultTheme };
