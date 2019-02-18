import * as React from 'react';

const DraggableContext = React.createContext({
  props: {},
  updateProps: () => {},
});

export default DraggableContext;
