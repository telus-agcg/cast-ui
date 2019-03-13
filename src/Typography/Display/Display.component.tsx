import * as React from 'react';
import styled from 'styled-components';
import 'typeface-roboto';

export type Props = {
  /**
   * Set a className for the Display
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

const SDisplay = styled.h1`
  font-weight: ${(props: Props) => props.theme.typography.display.fontWeight};
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.typography.display.fontSize};
`;

export const Display: React.FunctionComponent<Props> = ({
  className,
  children,
  theme,
}) => (
    <SDisplay className={className}>
      {children}
    </SDisplay>
  );
