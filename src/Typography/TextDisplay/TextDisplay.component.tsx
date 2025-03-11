import React from "react";

export type Props = React.PropsWithChildren<{
  fontSize?: string;
  fontWeight?: string | number;
}>;

const defaultProps = {
  fontSize: "16px",
  fontWeight: "bold",
} satisfies Partial<Props>;

export const TextDisplay = (props: Props) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { fontSize, fontWeight, children } = propsWithDefaults;
  return (
    <span style={{ fontSize, fontWeight }} {...propsWithDefaults}>
      {children}
    </span>
  );
};
