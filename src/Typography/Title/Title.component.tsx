import * as React from 'react';
import styled from 'styled-components';
import 'typeface-roboto';

export type Props = {
  /**
   * Set a className for the Title
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

const STitle = styled.h1`
  font-weight: ${(props: Props) => props.theme.typography.title.fontWeight};
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.typography.title.fontSize};
  color: ${(props: Props) => props.theme.colors.primary}
`;

export const Title: React.FunctionComponent<Props> = ({
  className,
  children,
  theme,
}) => (
    <STitle className={className}>
      {children}
    </STitle>
  );
