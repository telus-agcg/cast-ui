import React, { useEffect, useState } from 'react';
import { useCollapse } from 'react-collapsed';
import { getPropsWithDefaults } from '@utils';
import { ThemeProvider } from 'styled-components';

export type CollapseProps = React.PropsWithChildren<{
  isOpen?: boolean;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
}>;

const defaultProps = {} satisfies Partial<CollapseProps>;

export const Collapse = (props: CollapseProps) => {
  const propsWithDefaults = getPropsWithDefaults(defaultProps, props);
  const { theme, isOpen, children } = propsWithDefaults;
  const [isExpanded, setExpanded] = useState(isOpen);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  useEffect(() => setExpanded(isOpen), [isOpen]);

  return (
    <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
      <div>
        <section {...getCollapseProps()}>{children}</section>
      </div>
    </ThemeProvider>
  );
};
