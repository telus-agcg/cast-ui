import React from 'react';

export interface Props {
  children?: React.ReactNode;
  fontSize?: string;
  fontWeight?: string | number;
}

export const TextDisplay: React.FC<Props> = ({
  fontSize,
  fontWeight,
  children,
}) => {
  return <span style={{ fontSize, fontWeight }}>{children}</span>;
};

TextDisplay.defaultProps = {
  fontSize: '16px',
  fontWeight: 'bold',
};
