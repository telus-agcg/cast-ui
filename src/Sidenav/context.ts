import * as React from 'react';
interface BaseProps {
  isOpen?: boolean;
  isSecondaryNavbarOpen?: boolean;
  itemToggleOpenContent?: JSX.Element | React.Component | string;
  itemToggleCloseContent?: JSX.Element | React.Component | string;
  afterToggle?(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void;
  onToggle?(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void;
  beforeToggle?(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void;
  onItemSelect?(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    selectItemPath: string,
  ): void;
}

export const SideNavContext = React.createContext({
  baseProps: <BaseProps>{
    isOpen: false,
    secondaryToggle: false,
    isSecondaryNavbarOpen: false,
    setSecondaryToggle: (val: any) => {},
    beforeToggle: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {},
    onToggle: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {},
    afterToggle: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {},
    onItemSelect: (
      event: React.MouseEvent<HTMLDivElement, MouseEvent>,
      selectItemPath: string,
    ) => {},
    itemToggleOpenContent: '',
    itemToggleCloseContent: '',
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
