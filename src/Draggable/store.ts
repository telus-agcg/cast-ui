import * as React from 'react';

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'update_props':
      return { ...action.payload };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

export const useParentProps: React.FunctionComponent<any> = ({ ...props }) => {
  const [state, dispatch] = React.useReducer(reducer, null);
  React.useEffect(() => {
    if (
      JSON.stringify(props) !== JSON.stringify(state) &&
      (props !== null || props !== undefined)
    ) {
      dispatch({ type: 'update_props', payload: props });
    }
  }, [props, state]);
  console.log(
    ' see before they return ',
    props,
    state,
    JSON.stringify(props) !== JSON.stringify(state),
  );
  return state;
};

// export const useParentProps: React.FunctionComponent<any> = ({ ...props }) => {
//   const [parentProps, setParentProps] = React.useState(null);
//   React.useEffect(() => {
//     if (
//       JSON.stringify(props) !== JSON.stringify(parentProps) &&
//       (props !== null || props !== undefined)
//     ) {
//       console.log(
//         ' we have new props ',
//         props,
//         parentProps,
//         JSON.stringify(props) !== JSON.stringify(parentProps),
//       );
//       setParentProps(props);
//     }
//   }, [props, parentProps]);
//   console.log(
//     ' see before they return ',
//     props,
//     parentProps,
//     JSON.stringify(props) !== JSON.stringify(parentProps),
//   );
//   return parentProps;
// };
