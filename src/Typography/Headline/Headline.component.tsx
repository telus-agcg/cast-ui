import * as React from 'react';

export type Props = {
  /**
   * Set a className for the Headline
   *
   * @default ''
   **/
  className?: string;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

export const Headline: React.FunctionComponent<Props> = ({
  className,
  children,
  theme,
}) => (
  <div className={className}>
    {children}
  </div>
);
