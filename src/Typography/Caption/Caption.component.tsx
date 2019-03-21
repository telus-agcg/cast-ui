import * as React from 'react';
import styled from 'styled-components';

export type Props = {
  /**
   * Set a className for the Caption
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

const SCaption = styled.p`
  font-weight: ${(props: Props) => props.theme.typography.caption.fontWeight};
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.typography.caption.fontSize};
  color: ${(props: Props) => props.theme.colors.primary}
  line-height: ${(props: Props) => props.theme.typography.caption.lineHeight};
`;

export const Caption: React.FunctionComponent<Props> = ({
  className,
  children,
  theme,
  ...props
}) => (
    <SCaption
      {...props}
      >
      {children}
    </SCaption>
  );
