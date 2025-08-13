import React from 'react';
import styled, { css } from 'styled-components';

// Type definitions for responsive values
type ResponsiveValue<T> = T | T[];

// Space scale type
type SpaceValue = number | string;

// Common layout props
interface SpaceProps {
  m?: ResponsiveValue<SpaceValue>;
  mt?: ResponsiveValue<SpaceValue>;
  mr?: ResponsiveValue<SpaceValue>;
  mb?: ResponsiveValue<SpaceValue>;
  ml?: ResponsiveValue<SpaceValue>;
  mx?: ResponsiveValue<SpaceValue>;
  my?: ResponsiveValue<SpaceValue>;
  p?: ResponsiveValue<SpaceValue>;
  pt?: ResponsiveValue<SpaceValue>;
  pr?: ResponsiveValue<SpaceValue>;
  pb?: ResponsiveValue<SpaceValue>;
  pl?: ResponsiveValue<SpaceValue>;
  px?: ResponsiveValue<SpaceValue>;
  py?: ResponsiveValue<SpaceValue>;
}

interface LayoutProps {
  width?: ResponsiveValue<string | number>;
  height?: ResponsiveValue<string | number>;
  minWidth?: ResponsiveValue<string | number>;
  maxWidth?: ResponsiveValue<string | number>;
  minHeight?: ResponsiveValue<string | number>;
  maxHeight?: ResponsiveValue<string | number>;
  display?: ResponsiveValue<string>;
  overflow?: ResponsiveValue<string>;
  overflowX?: ResponsiveValue<string>;
  overflowY?: ResponsiveValue<string>;
}

interface FlexboxProps {
  alignItems?: ResponsiveValue<string>;
  alignContent?: ResponsiveValue<string>;
  justifyItems?: ResponsiveValue<string>;
  justifyContent?: ResponsiveValue<string>;
  flexWrap?: ResponsiveValue<string>;
  flexDirection?: ResponsiveValue<string>;
  flex?: ResponsiveValue<string | number>;
  flexGrow?: ResponsiveValue<number>;
  flexShrink?: ResponsiveValue<number>;
  flexBasis?: ResponsiveValue<string | number>;
  justifySelf?: ResponsiveValue<string>;
  alignSelf?: ResponsiveValue<string>;
  order?: ResponsiveValue<number>;
}

export interface BoxProps extends SpaceProps, LayoutProps {
  sx?: object;
  style?: React.CSSProperties;
}

export interface FlexProps extends BoxProps, FlexboxProps {}

// Helper function to get space value
const getSpace = (value: SpaceValue, theme?: any): string => {
  if (typeof value === 'number') {
    const scale = theme?.space || [0, 4, 8, 16, 32, 64, 128, 256, 512];
    return `${scale[value] || value}px`;
  }
  return String(value);
};

// Helper function to handle responsive values
const getResponsiveValue = (value: any, theme?: any): string => {
  if (Array.isArray(value)) {
    // For arrays, use the first value as default
    // In a real implementation, you'd handle breakpoints here
    return getSpace(value[0], theme);
  }
  return typeof value === 'number' &&
    !String(value).includes('%') &&
    !String(value).includes('px')
    ? getSpace(value, theme)
    : String(value);
};

// CSS helper for space props
const spaceStyles = css<SpaceProps>`
  ${(props) =>
    props.m !== undefined &&
    css`
      margin: ${getResponsiveValue(props.m, props.theme)};
    `}
  ${(props) =>
    props.mt !== undefined &&
    css`
      margin-top: ${getResponsiveValue(props.mt, props.theme)};
    `}
  ${(props) =>
    props.mr !== undefined &&
    css`
      margin-right: ${getResponsiveValue(props.mr, props.theme)};
    `}
  ${(props) =>
    props.mb !== undefined &&
    css`
      margin-bottom: ${getResponsiveValue(props.mb, props.theme)};
    `}
  ${(props) =>
    props.ml !== undefined &&
    css`
      margin-left: ${getResponsiveValue(props.ml, props.theme)};
    `}
  ${(props) =>
    props.mx !== undefined &&
    css`
      margin-left: ${getResponsiveValue(props.mx, props.theme)};
      margin-right: ${getResponsiveValue(props.mx, props.theme)};
    `}
  ${(props) =>
    props.my !== undefined &&
    css`
      margin-top: ${getResponsiveValue(props.my, props.theme)};
      margin-bottom: ${getResponsiveValue(props.my, props.theme)};
    `}
  ${(props) =>
    props.p !== undefined &&
    css`
      padding: ${getResponsiveValue(props.p, props.theme)};
    `}
  ${(props) =>
    props.pt !== undefined &&
    css`
      padding-top: ${getResponsiveValue(props.pt, props.theme)};
    `}
  ${(props) =>
    props.pr !== undefined &&
    css`
      padding-right: ${getResponsiveValue(props.pr, props.theme)};
    `}
  ${(props) =>
    props.pb !== undefined &&
    css`
      padding-bottom: ${getResponsiveValue(props.pb, props.theme)};
    `}
  ${(props) =>
    props.pl !== undefined &&
    css`
      padding-left: ${getResponsiveValue(props.pl, props.theme)};
    `}
  ${(props) =>
    props.px !== undefined &&
    css`
      padding-left: ${getResponsiveValue(props.px, props.theme)};
      padding-right: ${getResponsiveValue(props.px, props.theme)};
    `}
  ${(props) =>
    props.py !== undefined &&
    css`
      padding-top: ${getResponsiveValue(props.py, props.theme)};
      padding-bottom: ${getResponsiveValue(props.py, props.theme)};
    `}
`;

// CSS helper for layout props
const layoutStyles = css<LayoutProps>`
  ${(props) =>
    props.width !== undefined &&
    css`
      width: ${getResponsiveValue(props.width)};
    `}
  ${(props) =>
    props.height !== undefined &&
    css`
      height: ${getResponsiveValue(props.height)};
    `}
  ${(props) =>
    props.minWidth !== undefined &&
    css`
      min-width: ${getResponsiveValue(props.minWidth)};
    `}
  ${(props) =>
    props.maxWidth !== undefined &&
    css`
      max-width: ${getResponsiveValue(props.maxWidth)};
    `}
  ${(props) =>
    props.minHeight !== undefined &&
    css`
      min-height: ${getResponsiveValue(props.minHeight)};
    `}
  ${(props) =>
    props.maxHeight !== undefined &&
    css`
      max-height: ${getResponsiveValue(props.maxHeight)};
    `}
  ${(props) =>
    props.display !== undefined &&
    css`
      display: ${props.display};
    `}
  ${(props) =>
    props.overflow !== undefined &&
    css`
      overflow: ${props.overflow};
    `}
  ${(props) =>
    props.overflowX !== undefined &&
    css`
      overflow-x: ${props.overflowX};
    `}
  ${(props) =>
    props.overflowY !== undefined &&
    css`
      overflow-y: ${props.overflowY};
    `}
`;

// CSS helper for flexbox props
const flexboxStyles = css<FlexboxProps>`
  ${(props) =>
    props.alignItems !== undefined &&
    css`
      align-items: ${props.alignItems};
    `}
  ${(props) =>
    props.alignContent !== undefined &&
    css`
      align-content: ${props.alignContent};
    `}
  ${(props) =>
    props.justifyItems !== undefined &&
    css`
      justify-items: ${props.justifyItems};
    `}
  ${(props) =>
    props.justifyContent !== undefined &&
    css`
      justify-content: ${props.justifyContent};
    `}
  ${(props) =>
    props.flexWrap !== undefined &&
    css`
      flex-wrap: ${props.flexWrap};
    `}
  ${(props) =>
    props.flexDirection !== undefined &&
    css`
      flex-direction: ${props.flexDirection};
    `}
  ${(props) =>
    props.flex !== undefined &&
    css`
      flex: ${props.flex};
    `}
  ${(props) =>
    props.flexGrow !== undefined &&
    css`
      flex-grow: ${props.flexGrow};
    `}
  ${(props) =>
    props.flexShrink !== undefined &&
    css`
      flex-shrink: ${props.flexShrink};
    `}
  ${(props) =>
    props.flexBasis !== undefined &&
    css`
      flex-basis: ${getResponsiveValue(props.flexBasis)};
    `}
  ${(props) =>
    props.justifySelf !== undefined &&
    css`
      justify-self: ${props.justifySelf};
    `}
  ${(props) =>
    props.alignSelf !== undefined &&
    css`
      align-self: ${props.alignSelf};
    `}
  ${(props) =>
    props.order !== undefined &&
    css`
      order: ${props.order};
    `}
`;

// Box component
export const Box = styled.div<BoxProps>`
  box-sizing: border-box;
  ${spaceStyles}
  ${layoutStyles}
  
  ${(props) => props.sx && css(props.sx as any)}
`;

// Flex component
export const Flex = styled(Box)<FlexProps>`
  display: flex;
  ${flexboxStyles}
`;
