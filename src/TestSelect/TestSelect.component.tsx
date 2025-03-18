import React, { useState } from 'react';
// import "./styles.css";
import { default as ReactSelect, components } from 'react-select';
import { Checkbox, CHECKBOX_STATE } from '../Checkbox/Checkbox.component';

const colorOptions: any[] = [
  { value: 'blue', label: 'Blue' },
  { value: 'purple', label: 'Purple' },
  { value: 'red', label: 'Red' },
  { value: 'orange', label: 'Orange' },
  { value: 'white', label: 'White' },
  { value: 'black', label: 'Black' },
];
const Option = (props) => {
  const {
    label,
    isSelected,
    data,
    selectOption,
    innerProps: { ref, options, onClick: innerOnClick, ...restInnerProps },
  } = props;
  // This click handler makes the whole label/option clickable, not just the checkbox.
  const onLabelClick = (
    event: React.MouseEvent<HTMLLabelElement, MouseEvent>,
  ) => {
    selectOption({ ...data });
    event.preventDefault();
  };

  // This click handler prevents the menu from closing when the checkbox is clicked.
  const onCheckboxClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    innerOnClick(event);
    event.stopPropagation();
  };
  return (
    <div>
      <components.Option {...props}>
        <Checkbox
          value={CHECKBOX_STATE.EMPTY}
          label={props.label}
          onChange={() => console.log('changed')}
        />{' '}
      </components.Option>
    </div>
  );
};

// <input
//           type="checkbox"
//           checked={props.isSelected}
//           onChange={() => null}
//         />{' '}

export const TestSelect = () => {
  const [state, setState] = useState({ optionSelected: null });

  const handleChange = (selected) => {
    setState({
      optionSelected: selected,
    });
  };

  return (
    <div>
      <h3>MultiSelect dropdown with Checkbox</h3>
      <ReactSelect
        options={colorOptions}
        isMulti
        closeMenuOnSelect={false}
        hideSelectedOptions={false}
        components={{
          Option,
        }}
        onChange={handleChange}
        value={state.optionSelected}
        // Hide dropdown list  when select any item
        // closeMenuOnSelect={true}

        //Selected Item Remove in dropdown list
        // hideSelectedOptions={true}
      />
    </div>
  );
};
