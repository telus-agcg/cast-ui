import * as React from 'react';
import styled from 'styled-components';
import 'typeface-roboto';

export type Props = {
  /**
   * Set a className for the SubHeading
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

const SSubHeading = styled.h2`
  font-weight: ${(props: Props) => props.theme.typography.subHeading.fontWeight};
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.typography.subHeading.fontSize};
  color: ${(props: Props) => props.theme.colors.primary}
  line-height: ${(props: Props) => props.theme.typography.subHeading.lineHeight};
`;

export const SubHeading: React.FunctionComponent<Props> = ({
  className,
  children,
  theme,
}) => (
    <SSubHeading className={className}>
      {children}
    </SSubHeading>
  );
