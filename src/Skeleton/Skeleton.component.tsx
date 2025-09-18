import * as React from 'react';
import styled, { ThemeProvider, keyframes, css } from 'styled-components';
import { getPropsWithDefaults } from '@utils';
import { Themes } from '@themes';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The variant of the skeleton
   *
   * @default 'rectangular'
   */
  variant?: 'text' | 'circular' | 'rectangular' | 'custom';

  /**
   * Width of the skeleton
   *
   * @default undefined
   */
  width?: string | number;

  /**
   * Height of the skeleton
   *
   * @default undefined
   */
  height?: string | number;

  /**
   * Animation type
   *
   * @default 'pulse'
   */
  animation?: 'pulse' | 'shimmer' | 'none';

  /**
   * Number of text lines (only for text variant)
   *
   * @default 1
   */
  lines?: number;

  /**
   * Border radius
   *
   * @default undefined
   */
  borderRadius?: string | number;

  /**
   * From theme provider
   *
   * @default canopyTheme
   */
  theme?: any;
}

// Animation keyframes
const pulseAnimation = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
`;

const shimmerAnimation = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

const getSkeletonDimensions = (
  variant: string,
  width?: string | number,
  height?: string | number,
) => {
  switch (variant) {
    case 'text':
      return {
        width: width || '100%',
        height: height || '1em',
      };
    case 'circular': {
      const size = width || height || '40px';
      return {
        width: size,
        height: size,
      };
    }
    case 'rectangular':
      return {
        width: width || '100%',
        height: height || '140px',
      };
    default: // custom
      return {
        width: width || '100%',
        height: height || '20px',
      };
  }
};

const getBorderRadius = (
  variant: string,
  borderRadius?: string | number,
  theme?: any,
) => {
  if (borderRadius !== undefined) {
    return typeof borderRadius === 'number'
      ? `${borderRadius}px`
      : borderRadius;
  }

  switch (variant) {
    case 'text':
      return theme?.skeleton?.textBorderRadius || '4px';
    case 'circular':
      return '50%';
    case 'rectangular':
      return theme?.skeleton?.rectangularBorderRadius || '8px';
    default:
      return theme?.skeleton?.defaultBorderRadius || '4px';
  }
};

const SSkeleton = styled.div<SkeletonProps>`
  display: block;
  background-color: ${(props) =>
    props.theme.skeleton?.backgroundColor || props.theme.colors.lt400};
  width: ${(props) => {
    const dimensions = getSkeletonDimensions(
      props.variant!,
      props.width,
      props.height,
    );
    return typeof dimensions.width === 'number'
      ? `${dimensions.width}px`
      : dimensions.width;
  }};
  height: ${(props) => {
    const dimensions = getSkeletonDimensions(
      props.variant!,
      props.width,
      props.height,
    );
    return typeof dimensions.height === 'number'
      ? `${dimensions.height}px`
      : dimensions.height;
  }};
  border-radius: ${(props) =>
    getBorderRadius(props.variant!, props.borderRadius, props.theme)};

  ${(props) => {
    switch (props.animation) {
      case 'pulse':
        return css`
          animation: ${pulseAnimation} 1.5s ease-in-out infinite;
        `;
      case 'shimmer':
        return css`
          background: linear-gradient(
            90deg,
            ${props.theme.skeleton?.backgroundColor || props.theme.colors.lt400}
              25%,
            ${props.theme.skeleton?.shimmerColor || props.theme.colors.lt200}
              50%,
            ${props.theme.skeleton?.backgroundColor || props.theme.colors.lt400}
              75%
          );
          background-size: 200px 100%;
          animation: ${shimmerAnimation} 1.2s ease-in-out infinite;
        `;
      case 'none':
      default:
        return '';
    }
  }}
`;

const STextSkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const STextSkeletonLine = styled(SSkeleton)<
  SkeletonProps & { isLastLine?: boolean }
>`
  width: ${(props) => (props.isLastLine ? '75%' : '100%')};
`;

const defaultProps = {
  variant: 'rectangular',
  animation: 'pulse',
  lines: 1,
  theme: Themes.canopyTheme,
} satisfies Partial<SkeletonProps>;

export const Skeleton = (props: SkeletonProps) => {
  const propsWithDefaults = getPropsWithDefaults(defaultProps, props);
  const {
    variant,
    width,
    height,
    animation,
    lines,
    borderRadius,
    theme,
    ...rest
  } = propsWithDefaults;

  if (variant === 'text' && lines! > 1) {
    return (
      <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
        <STextSkeletonContainer {...rest}>
          {Array.from({ length: lines! }, (_, index) => (
            <STextSkeletonLine
              key={index}
              variant={variant}
              width={width}
              height={height}
              animation={animation}
              borderRadius={borderRadius}
              theme={theme}
              isLastLine={index === lines! - 1}
            />
          ))}
        </STextSkeletonContainer>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
      <SSkeleton
        variant={variant}
        width={width}
        height={height}
        animation={animation}
        borderRadius={borderRadius}
        theme={theme}
        {...rest}
      />
    </ThemeProvider>
  );
};
