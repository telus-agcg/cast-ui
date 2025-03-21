import React, { useEffect, useState } from 'react';
import { useCollapse } from 'react-collapsed';
import { getPropsWithDefaults } from '@utils';

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
  const { isOpen, children } = propsWithDefaults;
  const [isExpanded, setExpanded] = useState(isOpen);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  useEffect(() => setExpanded(isOpen), [isOpen]);

  return (
    <div>
      <section {...getCollapseProps()}>{children}</section>
    </div>
  );
};
