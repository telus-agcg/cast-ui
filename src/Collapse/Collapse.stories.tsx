import * as React from 'react';
import { Collapse } from '../';

export default {
  title: 'Components/Data Display/Collapse',
  component: Collapse,
  argTypes: {
    isOpen: {
      control: {
        type: 'boolean',
      },
    },
    onInit: {
      control: false,
    },
    className: {
      control: false,
    },
    theme: {
      table: {
        disable: true,
      },
    },
    onChange: {
      action: false,
    },
  },
};

export const _Collapse = args => (
  <Collapse data-testid="lorem-collapse" {...args}>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
  </Collapse>
);

_Collapse.args = {
  isOpen: true,
};

export const _CollapseWithExpandableData = args => {
  const elem = (index: number) => (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
      <a onClick={() => removeElem(index)}>Delete</a>
    </p>
  );

  const [elems, setElems] = React.useState([elem(0)]);

  const addElem = () => {
    setElems([...elems, elem(elems.length)]);
  };

  const removeElem = (index: number) => {
    setElems(elems.splice(index, 1));
  };
  console.log(elems);
  return (
    <div>
      <a onClick={() => addElem()}>Add</a>
      <Collapse
        style={{ border: '1px solid black' }}
        data-testid="lorem-collapse"
        {...args}
      >
        {elems.map((elem, i) => {
          return elem;
        })}
      </Collapse>
    </div>
  );
};

_CollapseWithExpandableData.args = {
  isOpen: true,
};
