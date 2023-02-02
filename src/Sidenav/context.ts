import * as React from 'react';
interface BaseProps {
  isOpen?: boolean;
}

export const SideNavContext = React.createContext({
  baseProps: <BaseProps>{
    isOpen: false,
  },
});

export const propsDeepSearch = (
  obj: any,
  targetProp: any,
  targetValue: any,
  finalResults: any,
) => {
  const getObject = (theObject: any) => {
    if (theObject instanceof Array) {
      for (let i = 0; i < theObject.length; i += 1) {
        getObject(theObject[i]);
      }
    } else {
      for (const prop in theObject) {
        const acceptablePropTypes = [
          '$$typeof',
          'children',
          'props',
          targetProp,
        ];
        if (
          acceptablePropTypes.includes(prop) &&
          theObject.hasOwnProperty(prop)
        ) {
          if (prop === targetProp && theObject[prop] === targetValue) {
            finalResults.push(theObject);
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
  };

  getObject(obj);
};

export default {
  SideNavContext,
  propsDeepSearch,
};
