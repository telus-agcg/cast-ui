import React from 'react';

export type TextDisplayProps = React.PropsWithChildren<{
  fontSize?: string;
  fontWeight?: string | number;
}>;

const defaultProps = {
  fontSize: '16px',
  fontWeight: 'bold',
} satisfies Partial<TextDisplayProps>;

export const TextDisplay = (props: TextDisplayProps) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { fontSize, fontWeight, children } = propsWithDefaults;
  return (
    <span style={{ fontSize, fontWeight }} {...propsWithDefaults}>
      {children}
    </span>
  );
};
