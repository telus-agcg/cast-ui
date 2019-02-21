import * as React from 'react';
import styled from 'styled-components';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { DayPickerInputProps } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import { Input } from '../';

type Props = Partial<DayPickerInputProps> & {
  /**
   * Select DatePicker Size
   *
   * @default 'md'
   **/
  datepickersize: string;
  /**
   * Select DatePicker color. Must be a color defined in theme colors
   *
   * @default 'lightGray'
   **/
  color: string;
  /**
   * Adjust spinner size in pixels
   *
   * @default 40px
   **/
  size: number;
  /**
   * Adjust animation speed in seconds
   *
   * @default 2s
   **/
  animationSpeed: number;
  /**
   * Select transition type
   *
   * @default 'ease-in-out'
   **/
  transitionType: string;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

const SDatePicker = styled.div`
  position: relative;
`;
const SOverlayComponent = styled.div`
  background: #fff;
  border: 1px solid ${(props: Props) => props.theme.input.borderColor};
`;

function OverlayComponent({ children, ...props }: any) {
  return <SOverlayComponent {...props}>{children}</SOverlayComponent>;
}
export const DatePicker: React.FunctionComponent<Props> = ({ ...props }) => (
  <SDatePicker>
    <DayPickerInput
      format="YYYY/MM/DD"
      component={(props: any) => (
        <Input
          {...props}
          id="datepickerInput"
          type="text"
          inputSize={props.datepickersize}
        />
      )}
      overlayComponent={OverlayComponent}
    />
    {/* <DayPicker /> */}
  </SDatePicker>
);
