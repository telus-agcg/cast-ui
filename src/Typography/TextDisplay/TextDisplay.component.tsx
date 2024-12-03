import React from 'react';

export interface Props {
  children?: React.ReactNode;
  fontSize?: string;
  fontWeight?: string | number;
}

export const TextDisplay = ({
  fontSize = '16px',
  fontWeight = 'bold',
  children,
}: Props) => {
  return <span style={{ fontSize, fontWeight }}>{children}</span>;
};
