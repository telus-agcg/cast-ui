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
  gridTemplateColumns,
  gridTemplateRows,
  spacing,
  gridAutoColumns,
  gridAutoRows,
  gridAutoFlow,
} from '@utils';
import { Themes } from '@themes';

export interface GridProps
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
   * Grid template columns
   */
  templateColumns?: ResponsiveValue<string>;

  /**
   * Grid template rows
   */
  templateRows?: ResponsiveValue<string>;

  /**
   * Grid gap (shorthand for gridGap)
   */
  gap?: ResponsiveValue<string | number>;

  /**
   * Grid column gap
   */
  columnGap?: ResponsiveValue<string | number>;

  /**
   * Grid row gap
   */
  rowGap?: ResponsiveValue<string | number>;

  /**
   * Grid auto columns
   */
  autoColumns?: ResponsiveValue<string>;

  /**
   * Grid auto rows
   */
  autoRows?: ResponsiveValue<string>;

  /**
   * Grid auto flow
   */
  autoFlow?: ResponsiveValue<
    'row' | 'column' | 'dense' | 'row dense' | 'column dense'
  >;

  /**
   * Theme provider
   * @default canopyTheme
   */
  theme?: any;

  children?: React.ReactNode;
}

const StyledGrid = styled.div.withConfig({
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
      'templateColumns',
      'templateRows',
      'gap',
      'columnGap',
      'rowGap',
      'autoColumns',
      'autoRows',
      'autoFlow',
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
})<GridProps>`
  display: grid;
  ${space}
  ${layout}
  ${color}
  ${border}
  ${flexbox}
  ${position}
  ${shadow}
  ${typography}
  
  /* Custom grid props */
  ${(props) =>
    props.templateColumns &&
    gridTemplateColumns(props.templateColumns, props.theme)}
  ${(props) =>
    props.templateRows && gridTemplateRows(props.templateRows, props.theme)}
  ${(props) => props.gap && spacing('gap', props.gap, props.theme)}
  ${(props) =>
    props.columnGap && spacing('column-gap', props.columnGap, props.theme)}
  ${(props) => props.rowGap && spacing('row-gap', props.rowGap, props.theme)}
  ${(props) =>
    props.autoColumns && gridAutoColumns(props.autoColumns, props.theme)}
  ${(props) => props.autoRows && gridAutoRows(props.autoRows, props.theme)}
  ${(props) => props.autoFlow && gridAutoFlow(props.autoFlow, props.theme)}
`;

const defaultProps = {
  theme: Themes.canopyTheme,
} satisfies Partial<GridProps>;

/**
 * Grid is a layout component that provides CSS Grid layout capabilities.
 * It extends Box with convenient grid-specific props and sets display: grid by default.
 *
 * Grid supports responsive design through arrays:
 * - `templateColumns={['1fr', '1fr 1fr', '1fr 1fr 1fr']}` for responsive columns
 * - `gap={[2, 3, 4]}` will use spacing scale values: 8px, 12px, 16px
 *
 * Common patterns:
 * - Equal columns: `templateColumns="repeat(3, 1fr)"`
 * - Auto-fit columns: `templateColumns="repeat(auto-fit, minmax(200px, 1fr))"`
 * - Named grid areas: `templateColumns="[sidebar] 200px [content] 1fr"`
 */
export const Grid: React.FunctionComponent<GridProps> = (props) => {
  const propsWithDefaults = getPropsWithDefaults(defaultProps, props);
  const { theme, ...rest } = propsWithDefaults;

  return (
    <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
      <StyledGrid {...rest} />
    </ThemeProvider>
  );
};
