import * as React from 'react';

export const SideNavContext = React.createContext({
  baseProps: {},
});

export const SecondarySideNavContext = React.createContext({
  secondaryNavChildren: [],
});

export const useMergeWithBaseProps: React.FunctionComponent<any> = (
  localProps: any,
  { propsToMerge, baseProps }: any,
) => {
  const mergedProps = { ...localProps };
  propsToMerge.map((p: any) => {
    mergedProps[p.key] = localProps[p.key] || baseProps[p.key] || p.defaultVal;
  });
  return mergedProps;
};

export default {
  SideNavContext,
  SecondarySideNavContext,
  useMergeWithBaseProps,
};
