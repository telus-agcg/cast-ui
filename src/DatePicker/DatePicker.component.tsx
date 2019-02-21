import * as React from 'react';
import styled from 'styled-components';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import DayPicker, { DayPickerInputProps } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import { Input } from '../';

type Props = Partial<DayPickerInputProps> & {
  /**
   * Select DatePicker Size
   *
   * @default 'md'
   **/
  datepickersize?: string;
  /**
   * Select DatePicker color. Must be a color defined in theme colors
   *
   * @default 'lightGray'
   **/
  color: string;
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
  border-radius: ${(props: Props) =>
    props.theme.common[props.datepickersize!].borderRadius};
  border: 1px solid ${(props: Props) => props.theme.colors.lightGray};
  margin-top: ${(props: Props) =>
    props.theme.common[props.datepickersize!].padding.toString().split(' ')[1]};
  box-shadow: #0000001a 0px 3px 25px;
  .DayPicker-NavButton--prev {
    left: 0.8rem;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABH0lEQVRYhe3YvY3CQBCG4Rd0BVABogUogAQhkZ+oggIoASFCApKji9OxyQVsjFgqQcQkXAAJK87enxnbAV9oaaxH6/Hu2K0bN5qUdt0AP29QWT60btwfTnrAElg5aw6hdS2Npn5g9kAXuADjUJT4I/MwAB1gEVovCnqBgfsKzSsHFWBGzppjpaB/MOdYjAioADOOxWSDpDFZIA0MJG6MJT1zSsVAwgppYqJB2pgoUBWYKBCw8TAAU0kMxIHWwNW7tuoPJx1BTzjIWfMDfHqoAfAriYpqamfNtzYq+rXXRiXt1Jqo5KNDC5V1uGqgsscPaZTIgCaJEhthpVCiQ34BalsLqAC1qw0ET6gzMHPWfIXWqny55qRxPxveoLI0DvQHF7mbWMvAdEsAAAAASUVORK5CYII=');
  }
  .DayPicker-NavButton--next {
    right: 1rem;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABNUlEQVRYhe3YPUrEQBjG8f+KbO0BRMQbpLGMbLUptvMYHmAPYLGIiJ14AcvtZxcsdkoR5gYii7VYi7AWThFikbyZ901S7NPlg/CDyTwzyWjHjiHloG9ANXtQXQ4lN2d5cQrcALfBu1cL0KjpSx0xG+AE+AKmwbsXbZBkyOYRA3AErLK8OO8TtADeS8cmqMag4N0WuLBGiWZZFyjxtLdGteohS1TrYrRCJTV1CfWmhUpeOiJqooVq3NR1yfLimL8mPyudFje62uIavPtAYfhUV/uImgI/FdRTL6AsL8bAPf93EXedgyJmCcwql66Cd4+dgmowD5JnJYM0MckgbUwSyALTGmSFaQWyxIhB1hgRqAuMCARcW2NABnoGvi0xIPvqWAOXwKcVBhT3Q1oZ3M+GPagugwP9Aj3mk1GmPwqDAAAAAElFTkSuQmCC');
  }
  .DayPicker-Caption {
    text-align: center;
  }
`;

const OverlayComponent: React.FunctionComponent<Props> = ({
  children,
  ...props
}: any) => {
  return <SOverlayComponent {...props}>{children}</SOverlayComponent>;
};
export const DatePicker: React.FunctionComponent<Props> = ({ ...props }) => (
  <SDatePicker>
    <DayPickerInput
      format="YYYY/MM/DD"
      component={(props: Props) => (
        <Input
          {...props}
          id="datepickerInput"
          type="text"
          inputSize={props.datepickersize!}
        />
      )}
      overlayComponent={(overlayProps: any) => (
        <OverlayComponent {...props} {...overlayProps} />
      )}
    />
    <DayPicker />
  </SDatePicker>
);

DatePicker.defaultProps = {
  datepickersize: 'md',
};
