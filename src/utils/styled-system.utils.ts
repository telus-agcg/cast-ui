import { css, DefaultTheme } from 'styled-components';
import { ResponsiveValue } from 'styled-system';

// Utility function to get responsive values
export const getResponsiveValue = (
  property: string,
  value: ResponsiveValue<any>,
  theme: DefaultTheme,
): string => {
  if (value === null || value === undefined) {
    return '';
  }

  // If it's not an array, return simple CSS
  if (!Array.isArray(value)) {
    return `${property}: ${value};`;
  }

  // Handle responsive array values
  let styles = '';
  const breakpoints = theme.breakpoints || [];

  // Base value (mobile-first)
  if (value[0] !== undefined && value[0] !== null) {
    styles += `${property}: ${value[0]};`;
  }

  // Responsive values
  value.forEach((val, index) => {
    if (
      index > 0 &&
      val !== undefined &&
      val !== null &&
      breakpoints[index - 1]
    ) {
      styles += `
        @media screen and (min-width: ${breakpoints[index - 1]}) {
          ${property}: ${val};
        }
      `;
    }
  });

  return styles;
};

// Get spacing value from theme
export const getSpace = (
  value: number | string,
  theme: DefaultTheme,
): string => {
  if (typeof value === 'string') {
    return value;
  }

  const space = theme.space || [];
  return space[value] || `${value}px`;
};

// Get color value from theme
export const getColor = (value: string, theme: DefaultTheme): string => {
  const colors = theme.colors || {};
  return colors[value] || value;
};

// Get font size from theme
export const getFontSize = (
  value: number | string,
  theme: DefaultTheme,
): string => {
  if (typeof value === 'string') {
    return value;
  }

  const fontSizes = theme.fontSizes || [];
  return fontSizes[value] || `${value}px`;
};

// Spacing utilities
export const margin = (
  value: ResponsiveValue<number | string>,
  theme: DefaultTheme,
) => {
  if (Array.isArray(value)) {
    return getResponsiveValue(
      'margin',
      value.map((v) =>
        v !== null && v !== undefined
          ? getSpace(v as string | number, theme)
          : v,
      ),
      theme,
    );
  }
  return value !== null && value !== undefined
    ? `margin: ${getSpace(value as string | number, theme)};`
    : '';
};

export const marginTop = (
  value: ResponsiveValue<number | string>,
  theme: DefaultTheme,
) => {
  if (Array.isArray(value)) {
    return getResponsiveValue(
      'margin-top',
      value.map((v) =>
        v !== null && v !== undefined
          ? getSpace(v as string | number, theme)
          : v,
      ),
      theme,
    );
  }
  return value !== null && value !== undefined
    ? `margin-top: ${getSpace(value as string | number, theme)};`
    : '';
};

export const marginRight = (
  value: ResponsiveValue<number | string>,
  theme: DefaultTheme,
) => {
  if (Array.isArray(value)) {
    return getResponsiveValue(
      'margin-right',
      value.map((v) =>
        v !== null && v !== undefined
          ? getSpace(v as string | number, theme)
          : v,
      ),
      theme,
    );
  }
  return value !== null && value !== undefined
    ? `margin-right: ${getSpace(value as string | number, theme)};`
    : '';
};

export const marginBottom = (
  value: ResponsiveValue<number | string>,
  theme: DefaultTheme,
) => {
  if (Array.isArray(value)) {
    return getResponsiveValue(
      'margin-bottom',
      value.map((v) =>
        v !== null && v !== undefined
          ? getSpace(v as string | number, theme)
          : v,
      ),
      theme,
    );
  }
  return value !== null && value !== undefined
    ? `margin-bottom: ${getSpace(value as string | number, theme)};`
    : '';
};

export const marginLeft = (
  value: ResponsiveValue<number | string>,
  theme: DefaultTheme,
) => {
  if (Array.isArray(value)) {
    return getResponsiveValue(
      'margin-left',
      value.map((v) =>
        v !== null && v !== undefined
          ? getSpace(v as string | number, theme)
          : v,
      ),
      theme,
    );
  }
  return value !== null && value !== undefined
    ? `margin-left: ${getSpace(value as string | number, theme)};`
    : '';
};

export const padding = (
  value: ResponsiveValue<number | string>,
  theme: DefaultTheme,
) => {
  if (Array.isArray(value)) {
    return getResponsiveValue(
      'padding',
      value.map((v) =>
        v !== null && v !== undefined
          ? getSpace(v as string | number, theme)
          : v,
      ),
      theme,
    );
  }
  return value !== null && value !== undefined
    ? `padding: ${getSpace(value as string | number, theme)};`
    : '';
};

export const paddingTop = (
  value: ResponsiveValue<number | string>,
  theme: DefaultTheme,
) => {
  if (Array.isArray(value)) {
    return getResponsiveValue(
      'padding-top',
      value.map((v) =>
        v !== null && v !== undefined
          ? getSpace(v as string | number, theme)
          : v,
      ),
      theme,
    );
  }
  return value !== null && value !== undefined
    ? `padding-top: ${getSpace(value as string | number, theme)};`
    : '';
};

export const paddingRight = (
  value: ResponsiveValue<number | string>,
  theme: DefaultTheme,
) => {
  if (Array.isArray(value)) {
    return getResponsiveValue(
      'padding-right',
      value.map((v) =>
        v !== null && v !== undefined
          ? getSpace(v as string | number, theme)
          : v,
      ),
      theme,
    );
  }
  return value !== null && value !== undefined
    ? `padding-right: ${getSpace(value as string | number, theme)};`
    : '';
};

export const paddingBottom = (
  value: ResponsiveValue<number | string>,
  theme: DefaultTheme,
) => {
  if (Array.isArray(value)) {
    return getResponsiveValue(
      'padding-bottom',
      value.map((v) =>
        v !== null && v !== undefined
          ? getSpace(v as string | number, theme)
          : v,
      ),
      theme,
    );
  }
  return value !== null && value !== undefined
    ? `padding-bottom: ${getSpace(value as string | number, theme)};`
    : '';
};

export const paddingLeft = (
  value: ResponsiveValue<number | string>,
  theme: DefaultTheme,
) => {
  if (Array.isArray(value)) {
    return getResponsiveValue(
      'padding-left',
      value.map((v) =>
        v !== null && v !== undefined
          ? getSpace(v as string | number, theme)
          : v,
      ),
      theme,
    );
  }
  return value !== null && value !== undefined
    ? `padding-left: ${getSpace(value as string | number, theme)};`
    : '';
};

// Layout utilities
export const width = (
  value: ResponsiveValue<string | number>,
  theme: DefaultTheme,
) => {
  return getResponsiveValue('width', value, theme);
};

export const height = (
  value: ResponsiveValue<string | number>,
  theme: DefaultTheme,
) => {
  return getResponsiveValue('height', value, theme);
};

export const display = (
  value: ResponsiveValue<string>,
  theme: DefaultTheme,
) => {
  return getResponsiveValue('display', value, theme);
};

// Flexbox utilities
export const flexDirection = (
  value: ResponsiveValue<string>,
  theme: DefaultTheme,
) => {
  return getResponsiveValue('flex-direction', value, theme);
};

export const alignItems = (
  value: ResponsiveValue<string>,
  theme: DefaultTheme,
) => {
  return getResponsiveValue('align-items', value, theme);
};

export const justifyContent = (
  value: ResponsiveValue<string>,
  theme: DefaultTheme,
) => {
  return getResponsiveValue('justify-content', value, theme);
};

export const flexWrap = (
  value: ResponsiveValue<string>,
  theme: DefaultTheme,
) => {
  return getResponsiveValue('flex-wrap', value, theme);
};

// Grid utilities
export const gridTemplateColumns = (
  value: ResponsiveValue<string>,
  theme: DefaultTheme,
) => {
  return getResponsiveValue('grid-template-columns', value, theme);
};

export const gridTemplateRows = (
  value: ResponsiveValue<string>,
  theme: DefaultTheme,
) => {
  return getResponsiveValue('grid-template-rows', value, theme);
};

export const gridAutoColumns = (
  value: ResponsiveValue<string>,
  theme: DefaultTheme,
) => {
  return getResponsiveValue('grid-auto-columns', value, theme);
};

export const gridAutoRows = (
  value: ResponsiveValue<string>,
  theme: DefaultTheme,
) => {
  return getResponsiveValue('grid-auto-rows', value, theme);
};

export const gridAutoFlow = (
  value: ResponsiveValue<string>,
  theme: DefaultTheme,
) => {
  return getResponsiveValue('grid-auto-flow', value, theme);
};

// Spacing utilities for grid (gap, column-gap, row-gap)
export const spacing = (
  property: string,
  value: ResponsiveValue<number | string>,
  theme: DefaultTheme,
) => {
  if (Array.isArray(value)) {
    return getResponsiveValue(
      property,
      value.map((v) =>
        v !== null && v !== undefined
          ? getSpace(v as string | number, theme)
          : v,
      ),
      theme,
    );
  }
  return value !== null && value !== undefined
    ? `${property}: ${getSpace(value as string | number, theme)};`
    : '';
};
