import * as React from 'react';

export const DraggableContext = React.createContext({
  parentProps: {},
});

export const useMergeWithParentProps: React.FunctionComponent<any> = (
  localProps: any,
  { propsToMerge, parentProps }: any,
) => {
  const mergedProps = { ...localProps };
  propsToMerge.map((p: any) => {
    mergedProps[p.key] =
      localProps[p.key] || parentProps[p.key] || p.defaultVal;
  });
  return mergedProps;
};

export default DraggableContext;
