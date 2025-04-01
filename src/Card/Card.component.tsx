import { getPropsWithDefaults } from '@utils';
import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

export type CardProps = React.PropsWithChildren<{
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
}>;

const SCard = styled.div<CardProps>`
  border-radius: ${(props) => props.theme.card.borderRadius};
  color: ${(props) => props.theme.styles[props.cardStyle!].cardColor};
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-size: ${(props) => props.theme.card.fontSize};
  padding: ${(props) => props.theme.card.padding};
  background: ${(props) => props.theme.card.background};
  box-shadow: ${(props) => props.theme.card.boxShadow};
  border-style: solid;
  border-color: ${(props) => props.theme.card.borderColor};
  border-top-color: ${(props) =>
    props.theme.styles[props.cardStyle!].cardTopBorderColor};
  border-width: ${(props) => props.theme.card.highlightAllBorderWidth};
  border-top-width: ${(props) => props.theme.card.highlightedBorderWidth};
  width: 100%;
  box-sizing: border-box;
  display: inline-block;
`;

const defaultProps = {
  cardStyle: 'primary',
} satisfies Partial<CardProps>;

export const Card: React.FunctionComponent<CardProps> = (props) => {
  const propsWithDefaults = getPropsWithDefaults(defaultProps, props);
  const { theme, children, ...rest } = propsWithDefaults;
  return (
    <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
      <SCard {...rest}>{children}</SCard>
    </ThemeProvider>
  );
};
