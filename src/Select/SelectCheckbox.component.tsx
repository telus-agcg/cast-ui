import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Checkbox from '../Checkbox';
import _ from 'lodash';
import { components, ValueContainerProps } from 'react-select';

interface Props {
  options: any[];
  isMulti?: boolean;
  selectedOptions?: any;
  updateSelectedOptions: (any) => void;
  id?: string;
  clearText?: any;
}

interface TruncatedValuesProps {
  selectedOptions: any;
  maxWidth: number;
}

const SCheckbox = styled(Checkbox)`
  padding-bottom: 0px;
`;

const SFlex = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
`;

const TruncatedValues = ({
  selectedOptions,
  maxWidth,
}: TruncatedValuesProps) => {
  const [displayedValue, setDisplayedValue] = useState('');

  useEffect(() => {
    if (selectedOptions) {
      let itemsToShow: string[] = [];
      let restCount = 0;

      const measureWidth = () => {
        requestAnimationFrame(() => {
          itemsToShow = [];
          let currentTextWidth = 0;

          // Create a temporary element to measure the width of the ellipsis text
          const createTempElement = text => {
            const tempSpan = document.createElement('span');
            tempSpan.style.visibility = 'hidden';
            tempSpan.style.position = 'absolute';
            tempSpan.innerText = text;
            document.body.appendChild(tempSpan);
            return tempSpan;
          };

          // Measure the width of the ellipsis with remaining items count
          const ellipsisElement = createTempElement(
            `... (+${selectedOptions.length})..`,
          );

          const ellipsisWidth = ellipsisElement.scrollWidth;
          document.body.removeChild(ellipsisElement);

          for (let i = 0; i < selectedOptions.length; i += 1) {
            const label = selectedOptions[i].label;
            const currentText = [...itemsToShow, label].join(', ');

            const tempTextElement = createTempElement(currentText);
            currentTextWidth = tempTextElement.scrollWidth;

            if (currentTextWidth + ellipsisWidth < maxWidth) {
              itemsToShow.push(label);
            } else {
              restCount = selectedOptions.length - i;

              // Truncate the current label to fit remaining space with ellipsis
              const remainingWidth =
                maxWidth -
                (currentTextWidth - tempTextElement.scrollWidth) -
                ellipsisWidth;
              let truncatedLabel = label;

              while (remainingWidth > 0 && truncatedLabel.length > 0) {
                const tempTruncateElement = createTempElement(truncatedLabel);
                truncatedLabel = truncatedLabel.slice(0, -1);
                tempTruncateElement.innerText = [
                  ...itemsToShow,
                  truncatedLabel,
                ].join(', ');
                document.body.appendChild(tempTruncateElement);

                const truncateWidth = tempTruncateElement.scrollWidth;
                document.body.removeChild(tempTruncateElement);
                if (
                  truncateWidth + ellipsisWidth < maxWidth &&
                  truncatedLabel
                ) {
                  const item =
                    selectedOptions.length === 1
                      ? `${truncatedLabel}...`
                      : truncatedLabel;
                  itemsToShow.push(item);
                  restCount = selectedOptions.length === 1 ? 0 : restCount;
                  break;
                }
              }
              document.body.removeChild(tempTextElement);

              break;
            }
          }
          const displayedOptions = itemsToShow.join(', ');
          const remainingText = restCount > 0 ? `... (+${restCount}) ` : '';

          const newDisplayedText = `${displayedOptions}${remainingText}`;
          if (newDisplayedText !== displayedValue) {
            setDisplayedValue(newDisplayedText);
          }
        });
      };

      measureWidth();
    }
  }, [selectedOptions, maxWidth, displayedValue]);

  return <div>{displayedValue}</div>;
};

const ValueContainer = ({
  children,
  ...props
}: ValueContainerProps<any, true>) => {
  const [values, input] = children as [any[], JSX.Element];
  const [maxWidth, setMaxWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasSelectedOptions = props.hasValue && values.length > 0;

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      if (containerRef.current) {
        setMaxWidth(containerRef.current.offsetWidth);
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
    };
  }, [containerRef]);

  return (
    <components.ValueContainer {...props}>
      <SFlex ref={containerRef}>
        {!hasSelectedOptions ? (
          <span className="react-select__placeholder">
            {props.selectProps.placeholder}
          </span>
        ) : (
          <TruncatedValues
            selectedOptions={props.getValue()}
            maxWidth={maxWidth}
          />
        )}

        {input}
      </SFlex>
    </components.ValueContainer>
  );
};

export const SelectCheckboxProps = ({
  selectedOptions,
  options,
  updateSelectedOptions,
  isMulti,
  id,
  clearText,
}: Props) => {
  const selectMulti = (val, updateSelectedOptions) => {
    const isSelectedOption = selectedOptions.find(o => o.value === val);
    let res: any[] = [];
    if (isSelectedOption) {
      res = selectedOptions.filter(option => option.value !== val);
    } else {
      res = [...selectedOptions, options.find(o => o.value === val)];
    }
    updateSelectedOptions(res);
  };

  const selectSingle = (val, updateSelectedOptions) => {
    const res: any[] = selectedOptions.filter(option => option.value !== val);
    updateSelectedOptions(res[0]);
  };

  const handleCheck = val => {
    if (isMulti) {
      selectMulti(val, updateSelectedOptions);
    } else {
      selectSingle(val, updateSelectedOptions);
    }
  };

  const components = {
    ValueContainer,
    Option: (props: any) => {
      return (
        <div
          data-testid={`select-option-${_.snakeCase(props.data.label)}`}
          className={'react-select__option'}
          ref={props.innerRef}
          {...props.innerProps}
          id={`${id}-Select-${_.snakeCase(props.data.label)}`}
        >
          <SCheckbox
            id={props.value}
            defaultChecked={props.isSelected}
            checked={props.isSelected}
            disabled={props.isDisabled}
            value={props.value}
            onChange={() => handleCheck(props.value)}
          >
            <span>{props.data.label}</span>
          </SCheckbox>
        </div>
      );
    },
    ClearIndicator: props => {
      const {
        innerProps: { ref, ...restInnerProps },
      } = props;
      return (
        <div id={`${id}-Select-clear`} {...restInnerProps} ref={ref}>
          {clearText}
        </div>
      );
    },
  };
  return { components };
};
