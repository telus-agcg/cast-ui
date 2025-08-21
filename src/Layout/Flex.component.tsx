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
  ResponsiveValue,
} from 'styled-system';
import {
  getPropsWithDefaults,
  flexDirection,
  alignItems,
  justifyContent,
  flexWrap,
  getResponsiveValue,
} from '@utils';
import { Themes } from '@themes';

export interface FlexProps
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
   * Flex direction shorthand
   * @default 'row'
   */
  direction?: ResponsiveValue<
    'row' | 'column' | 'row-reverse' | 'column-reverse'
  >;

  /**
   * Flex wrap shorthand
   * @default 'nowrap'
   */
  wrap?: ResponsiveValue<'nowrap' | 'wrap' | 'wrap-reverse'>;

  /**
   * Justify content shorthand
   */
  justify?: ResponsiveValue<
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
  >;

  /**
   * Align items shorthand
   */
  align?: ResponsiveValue<
    'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline'
  >;

  /**
   * Gap between flex items
   */
  gap?: ResponsiveValue<string | number>;

  /**
   * Theme provider
   * @default canopyTheme
   */
  theme?: any;

  children?: React.ReactNode;
}

const StyledFlex = styled.div.withConfig({
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
      'direction',
      'wrap',
      'justify',
      'align',
      'gap',
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
})<FlexProps>`
  display: flex;
  ${space}
  ${layout}
  ${color}
  ${border}
  ${flexbox}
  ${position}
  ${shadow}
  ${typography}
  
  /* Custom flex shorthand props with responsive support */
  ${(props) => props.direction && flexDirection(props.direction, props.theme)}
  ${(props) => props.wrap && flexWrap(props.wrap, props.theme)}
  ${(props) => props.justify && justifyContent(props.justify, props.theme)}
  ${(props) => props.align && alignItems(props.align, props.theme)}
  ${(props) =>
    props.gap &&
    getResponsiveValue(
      'gap',
      Array.isArray(props.gap)
        ? props.gap.map((g) =>
            typeof g === 'number' ? props.theme.space[g] || `${g}px` : g,
          )
        : typeof props.gap === 'number'
        ? props.theme.space[props.gap] || `${props.gap}px`
        : props.gap,
      props.theme,
    )}
`;

const defaultProps = {
  theme: Themes.canopyTheme,
  direction: 'row' as const,
  wrap: 'nowrap' as const,
} satisfies Partial<FlexProps>;

/**
 * Flex is a layout component that provides flexible box layout capabilities.
 * It extends Box with convenient flex-specific props and sets display: flex by default.
 *
 * Flex supports responsive design through arrays:
 * - `direction={['column', 'row']}` will be column on mobile, row on tablet+
 * - `gap={[2, 3, 4]}` will use spacing scale values: 8px, 12px, 16px
 *
 * Use shorthand props for common patterns:
 * - `justify="center"` instead of `justifyContent="center"`
 * - `align="center"` instead of `alignItems="center"`
 * - `direction="column"` instead of `flexDirection="column"`
 */
export const Flex: React.FunctionComponent<FlexProps> = (props) => {
  const propsWithDefaults = getPropsWithDefaults(defaultProps, props);
  const { theme, ...rest } = propsWithDefaults;

  return (
    <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
      <StyledFlex {...rest} />
    </ThemeProvider>
  );
};
