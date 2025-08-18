export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export enum SIZE_OPTION {
  SMALL = 'sm',
  MEDIUM = 'md',
  LARGE = 'lg',
}

export enum STYLE_OPTION {
  SUCCESS = 'success',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  DANGER = 'danger',
  WARNING = 'warning',
}

export type ResponsiveValue<T> = T | T[];

export type SpaceValue = number | string;

export interface SpaceProps {
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

export interface LayoutProps {
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

export interface FlexboxProps {
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
