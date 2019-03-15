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
export function findObjects(
  obj: any,
  targetProp: any,
  targetValue: any,
  finalResults: any,
) {
  function getObject(theObject: any) {
    // let result = null;
    if (theObject instanceof Array) {
      for (let i = 0; i < theObject.length; i++) {
        getObject(theObject[i]);
      }
    } else {
      for (let prop in theObject) {
        if (theObject.hasOwnProperty(prop)) {
          if (prop === targetProp) {
            if (theObject[prop] === targetValue) {
              console.log('----found porop', prop, ', ', theObject);
              finalResults.push(theObject);
            }
          }
          if (
            theObject[prop] instanceof Object ||
            theObject[prop] instanceof Array
          ) {
            getObject(theObject[prop]);
          }
        }
      }
    }
  }

  getObject(obj);
}

export default {
  SideNavContext,
  SecondarySideNavContext,
  useMergeWithBaseProps,
};
