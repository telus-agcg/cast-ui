import * as React from 'react';

export const useParentProps: React.FunctionComponent<any> = ({ ...props }) => {
  const [parentProps, setParentProps] = React.useState(null);
  React.useEffect(() => {
    if (
      JSON.stringify(props) !== JSON.stringify(parentProps) &&
      (props !== null || props !== undefined)
    ) {
      setTimeout(() => {
        console.log(
          ' we have new props ',
          props,
          parentProps,
          JSON.stringify(props) !== JSON.stringify(parentProps),
        );
        setParentProps(props);
      }, 2000);
    }
  }, [props, parentProps]);
  return parentProps;
};
