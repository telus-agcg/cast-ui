import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import {
  space,
  layout,
  color,
  border,
  flexbox,
  position,
  shadow,
  typography,
  SpaceProps,
  LayoutProps,
  ColorProps,
  BorderProps,
  FlexboxProps,
  PositionProps,
  ShadowProps,
  TypographyProps,
} from 'styled-system';
import { getPropsWithDefaults } from '@utils';
import { Themes } from '@themes';

export interface BoxProps
  extends SpaceProps,
    LayoutProps,
    ColorProps,
    BorderProps,
    FlexboxProps,
    PositionProps,
    ShadowProps,
    TypographyProps,
    Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> {
  /**
   * The HTML element to render
   * @default 'div'
   */
  as?: React.ElementType;

  /**
   * Theme provider
   * @default canopyTheme
   */
  theme?: any;

  children?: React.ReactNode;
}

const StyledBox = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    ![
      'm',
      'mt',
      'mr',
      'mb',
      'ml',
      'mx',
      'my',
      'p',
      'pt',
      'pr',
      'pb',
      'pl',
      'px',
      'py',
      'width',
      'height',
      'minWidth',
      'maxWidth',
      'minHeight',
      'maxHeight',
      'size',
      'display',
      'verticalAlign',
      'overflow',
      'overflowX',
      'overflowY',
      'color',
      'bg',
      'backgroundColor',
      'opacity',
      'border',
      'borderWidth',
      'borderStyle',
      'borderColor',
      'borderRadius',
      'borderTop',
      'borderRight',
      'borderBottom',
      'borderLeft',
      'borderTopWidth',
      'borderRightWidth',
      'borderBottomWidth',
      'borderLeftWidth',
      'alignItems',
      'alignContent',
      'justifyItems',
      'justifyContent',
      'flexWrap',
      'flexDirection',
      'flex',
      'flexGrow',
      'flexShrink',
      'flexBasis',
      'justifySelf',
      'alignSelf',
      'order',
      'position',
      'zIndex',
      'top',
      'right',
      'bottom',
      'left',
      'boxShadow',
      'textShadow',
      'fontFamily',
      'fontSize',
      'fontWeight',
      'lineHeight',
      'letterSpacing',
      'textAlign',
      'fontStyle',
    ].includes(prop),
})<BoxProps>`
  ${space}
  ${layout}
  ${color}
  ${border}
  ${flexbox}
  ${position}
  ${shadow}
  ${typography}
`;

const defaultProps = {
  theme: Themes.canopyTheme,
} satisfies Partial<BoxProps>;

/**
 * Box is the most fundamental layout component. It renders a div element by default
 * and provides access to all styled-system props for spacing, layout, colors, etc.
 *
 * Box supports responsive design through arrays:
 * - `width={['100%', '50%', '25%']}` will be 100% on mobile, 50% on tablet, 25% on desktop
 * - Spacing values use the theme.space scale: `m={[2, 3, 4]}` = 8px, 12px, 16px
 */
export const Box: React.FunctionComponent<BoxProps> = (props) => {
  const propsWithDefaults = getPropsWithDefaults(defaultProps, props);
  const { theme, ...rest } = propsWithDefaults;

  return (
    <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
      <StyledBox {...rest} />
    </ThemeProvider>
  );
};
