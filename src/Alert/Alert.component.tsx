import * as React from 'react';
import styled from 'styled-components';

type Props = {
  /**
   * Select Alert Style
   *
   * @default 'default'
   **/
  alertStyle: string;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

const SAlert = styled.div`
  background: ${(props: Props) => props.theme.styles[props.alertStyle].alertBackground};
  border-radius: ${(props: Props) => props.theme.alert.borderRadius};
  color: ${(props: Props) => props.theme.styles[props.alertStyle].alertColor};
  display: inline-block;
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.styles[props.alertStyle].fontSize};
  padding: ${(props: Props) => props.theme.styles[props.alertStyle].padding};
`;

export const Alert: React.FunctionComponent<Props> = ({
  children,
  alertStyle = 'primary',
  theme,
}) => (
  <SAlert
    alertStyle={alertStyle}
    theme={theme}
  >
    {children}
  </SAlert>
);
