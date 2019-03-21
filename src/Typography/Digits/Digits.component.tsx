import * as React from 'react';
import styled from 'styled-components';

export type Props = {
  /**
   * Set a className for the Digits
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

const SDigits = styled.p`
  font-weight: ${(props: Props) => props.theme.typography.digits.fontWeight};
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.typography.digits.fontSize};
  color: ${(props: Props) => props.theme.colors.primary}
  line-height: ${(props: Props) => props.theme.typography.digits.lineHeight};
`;

export const Digits: React.FunctionComponent<Props> = ({
  className,
  children,
  theme,
  ...props
}) => (
    <SDigits
      {...props}
      >
      {children}
    </SDigits>
  );
