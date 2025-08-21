import {
  SpaceProps,
  ColorProps,
  LayoutProps,
  FlexboxProps,
  BorderProps,
  PositionProps,
  ShadowProps,
  TypographyProps,
  ResponsiveValue,
} from 'styled-system';

// Base styled-system props interface
export interface StyledSystemProps
  extends SpaceProps,
    ColorProps,
    LayoutProps,
    FlexboxProps,
    BorderProps,
    PositionProps,
    ShadowProps,
    TypographyProps {}

// Responsive value type for better TypeScript support
export type ResponsiveStyleValue<T> = ResponsiveValue<T>;

// Common layout component props
export interface BoxProps extends StyledSystemProps {
  children?: React.ReactNode;
  className?: string;
}

export interface FlexProps extends BoxProps {
  direction?: ResponsiveStyleValue<
    'row' | 'column' | 'row-reverse' | 'column-reverse'
  >;
  wrap?: ResponsiveStyleValue<'nowrap' | 'wrap' | 'wrap-reverse'>;
  justify?: ResponsiveStyleValue<
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
  >;
  align?: ResponsiveStyleValue<
    'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline'
  >;
}

export interface GridProps extends BoxProps {
  templateColumns?: ResponsiveStyleValue<string>;
  templateRows?: ResponsiveStyleValue<string>;
  gap?: ResponsiveStyleValue<string | number>;
  columnGap?: ResponsiveStyleValue<string | number>;
  rowGap?: ResponsiveStyleValue<string | number>;
  autoColumns?: ResponsiveStyleValue<string>;
  autoRows?: ResponsiveStyleValue<string>;
  autoFlow?: ResponsiveStyleValue<
    'row' | 'column' | 'dense' | 'row dense' | 'column dense'
  >;
}

// Spacing scale type (matches your theme spacing array)
export type SpacingScale = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

// Breakpoint indices (matches your theme breakpoints array)
export type BreakpointIndex = 0 | 1 | 2;
