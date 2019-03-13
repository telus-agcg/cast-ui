import * as React from 'react';
import styled from 'styled-components';
import 'typeface-roboto';

export type Props = {
  /**
   * Set a className for the SectionHeader
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

const SSectionHeader = styled.h1`
  font-weight: ${(props: Props) => props.theme.typography.sectionHeader.fontWeight};
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.typography.sectionHeader.fontSize};
  color: ${(props: Props) => props.theme.typography.sectionHeader.color}
  line-height: ${(props: Props) => props.theme.typography.sectionHeader.lineHeight}
  border-bottom: 2px solid ${(props: Props) => props.theme.typography.sectionHeader.color};
  padding-bottom: 1em;
`;

export const SectionHeader: React.FunctionComponent<Props> = ({
  className,
  children,
  theme,
}) => (
    <SSectionHeader className={className}>
      {children}
    </SSectionHeader>
  );
