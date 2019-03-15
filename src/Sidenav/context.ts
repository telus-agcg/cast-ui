import * as React from 'react';

export const SideNavContext = React.createContext({
  baseProps: {
    primaryToggle: false,
    isOpen: false,
    secondaryToggle: false,
    isSecondaryNavbarOpen: false,
    setPrimaryToggle: (val: any) => {},
    setSecondaryToggle: (val: any) => {},
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
        if (theObject.hasOwnProperty(prop)) {
          if (prop === targetProp) {
            if (theObject[prop] === targetValue) {
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
  };

  getObject(obj);
};

export default {
  SideNavContext,
  propsDeepSearch,
};
