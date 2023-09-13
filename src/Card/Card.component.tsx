import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Themes } from '../themes';

export interface Props {
  /**
   * Select Card Style
   *
   * @default 'primary'
   **/
  cardStyle?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
}

const SCard = styled.div`
  border-radius: ${(props: Props) => props.theme.card.borderRadius};
  color: ${(props: Props) => props.theme.styles[props.cardStyle!].cardColor};
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.card.fontSize};
  padding: ${(props: Props) => props.theme.card.padding};
  background: ${(props: Props) => props.theme.card.background};
  box-shadow: ${(props: Props) => props.theme.card.boxShadow};
  border-style: solid;
  border-color: ${(props: Props) => props.theme.card.borderColor};
  border-top-color: ${(props: Props) =>
    props.theme.styles[props.cardStyle!].cardTopBorderColor};
  border-width: ${(props: Props) => props.theme.card.highlightAllBorderWidth};
  border-top-width: ${(props: Props) =>
    props.theme.card.highlightedBorderWidth};
  width: 100%;
  box-sizing: border-box;
  display: inline-block;
`;

export const Card: React.FunctionComponent<Props> = ({
  children,
  theme,
  ...props
}) => (
  <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
    <SCard {...props}>{children}</SCard>
  </ThemeProvider>
);
Card.defaultProps = {
  cardStyle: 'primary',
  theme: Themes.canopyTheme,
};
