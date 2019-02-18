import * as React from 'react';

export const DraggableContext = React.createContext({
  parentProps: {},
});

export const useMergeWithParentProps: React.FunctionComponent<any> = (
  localProps,
  propsToMerge,
) => {
  const parentProps = React.useContext(DraggableContext).parentProps;
  const [newProps, setNewProps] = React.useState(localProps);
  propsToMerge.map((p: any) => {
    newProps[p.key] = localProps[p.key] || parentProps[p.key] || p.defaultVal;
  });

  function mergeProps() {
    const mergedProps = { ...localProps };
    propsToMerge.map((p: any) => {
      mergedProps[p.key] =
        localProps[p.key] || parentProps[p.key] || p.defaultVal;
    });
    return mergedProps;
  }

  React.useEffect(() => {
    if (
      parentProps !== null &&
      JSON.stringify(localProps) !== JSON.stringify(parentProps)
    ) {
      const mergedProps = mergeProps();
      if (JSON.stringify(newProps) !== JSON.stringify(mergedProps)) {
        setNewProps(mergedProps);
      }
    }
  }, [localProps, parentProps]);
  return newProps;
};

export default DraggableContext;
