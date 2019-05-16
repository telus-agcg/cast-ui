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
   * Select which color will be the background color
   *
   * @default '#FFFFFF'
   **/
  bgColor?: string;
  /**
   * Select which border of the Card is colored
   *
   * @default 'top'
   **/
  highlightBorder?: 'top' | 'left' | 'right' | 'bottom' | 'all';
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
}

const highlighBorderRules: Function = (
  highlightBorder: string,
  cardStyle: string,
  theme: any,
) => {
  switch (highlightBorder) {
    case 'all':
      return {
        'border-color': theme.styles[cardStyle].cardTopBorderColor,
        'border-width': theme.card.highlightAllBorderWidth,
      };
    case 'left':
      return {
        'border-color': theme.card.borderColor,
        'border-left-color': theme.styles[cardStyle].cardTopBorderColor,
        'border-width': theme.card.highlightAllBorderWidth,
        'border-left-width': theme.card.highlightedBorderWidth,
      };
    case 'right':
      return {
        'border-color': theme.card.borderColor,
        'border-right-color': theme.styles[cardStyle].cardTopBorderColor,
        'border-width': theme.card.highlightAllBorderWidth,
        'border-right-width': theme.card.highlightedBorderWidth,
      };
    case 'bottom':
      return {
        'border-color': theme.card.borderColor,
        'border-bottom-color': theme.styles[cardStyle].cardTopBorderColor,
        'border-width': theme.card.highlightAllBorderWidth,
        'border-bottom-width': theme.card.highlightedBorderWidth,
      };
    case 'top':
    default:
      return {
        'border-color': theme.card.borderColor,
        'border-top-color': theme.styles[cardStyle].cardTopBorderColor,
        'border-width': theme.card.highlightAllBorderWidth,
        'border-top-width': theme.card.highlightedBorderWidth,
      };
  }
};

const SCard = styled.div`
  border-radius: ${(props: Props) => props.theme.card.borderRadius};
  color: ${(props: Props) => props.theme.styles[props.cardStyle!].cardColor};
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.card.fontSize};
  padding: ${(props: Props) => props.theme.card.padding};
  background: ${(props: Props) => props.bgColor || props.theme.card.background};
  box-shadow: ${(props: Props) => props.theme.card.boxShadow};
  border-style: solid;
  width: 100%;
  box-sizing: border-box;

  ${(props: Props) =>
    highlighBorderRules(props.highlightBorder, props.cardStyle, props.theme)}

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
  theme: Themes.defaultTheme,
};
