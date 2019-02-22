import * as React from 'react';
import styled from 'styled-components';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import DayPicker, { DayPickerInputProps } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import DatePickerContext from './datepickerContext';
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

const SOverlayComponent = styled.div`
  background: #fff;
  border-radius: ${(props: Props) =>
    props.theme.common[props.datepickersize!].borderRadius};
  border: 1px solid ${(props: Props) => props.theme.colors.lightGray};
  margin-top: ${(props: Props) =>
    props.theme.common[props.datepickersize!].padding.toString().split(' ')[1]};
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) =>
    props.theme.common[props.datepickersize!].fontSize}
  color: ${(props: Props) => props.theme.colors.primary};
  box-shadow: #0000001a 0px 3px 25px;
  .DayPicker-wrapper {
    padding-top: 1.5em;
    padding-bottom: 1.5em;
  }
  .DayPicker-NavBar {
    position: relative;
  }
  .DayPicker-NavButton {
    width: 2.25em;
    &:focus {
      outline: none;
    }
  }
  .DayPicker-NavButton--prev {
    left: 3rem;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABH0lEQVRYhe3YvY3CQBCG4Rd0BVABogUogAQhkZ+oggIoASFCApKji9OxyQVsjFgqQcQkXAAJK87enxnbAV9oaaxH6/Hu2K0bN5qUdt0AP29QWT60btwfTnrAElg5aw6hdS2Npn5g9kAXuADjUJT4I/MwAB1gEVovCnqBgfsKzSsHFWBGzppjpaB/MOdYjAioADOOxWSDpDFZIA0MJG6MJT1zSsVAwgppYqJB2pgoUBWYKBCw8TAAU0kMxIHWwNW7tuoPJx1BTzjIWfMDfHqoAfAriYpqamfNtzYq+rXXRiXt1Jqo5KNDC5V1uGqgsscPaZTIgCaJEhthpVCiQ34BalsLqAC1qw0ET6gzMHPWfIXWqny55qRxPxveoLI0DvQHF7mbWMvAdEsAAAAASUVORK5CYII=');
  }
  .DayPicker-NavButton--next {
    right: 3.2rem;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABNUlEQVRYhe3YPUrEQBjG8f+KbO0BRMQbpLGMbLUptvMYHmAPYLGIiJ14AcvtZxcsdkoR5gYii7VYi7AWThFikbyZ901S7NPlg/CDyTwzyWjHjiHloG9ANXtQXQ4lN2d5cQrcALfBu1cL0KjpSx0xG+AE+AKmwbsXbZBkyOYRA3AErLK8OO8TtADeS8cmqMag4N0WuLBGiWZZFyjxtLdGteohS1TrYrRCJTV1CfWmhUpeOiJqooVq3NR1yfLimL8mPyudFje62uIavPtAYfhUV/uImgI/FdRTL6AsL8bAPf93EXedgyJmCcwql66Cd4+dgmowD5JnJYM0MckgbUwSyALTGmSFaQWyxIhB1hgRqAuMCARcW2NABnoGvi0xIPvqWAOXwKcVBhT3Q1oZ3M+GPagugwP9Aj3mk1GmPwqDAAAAAElFTkSuQmCC');
  }
  .DayPicker-Caption {
    text-align: center;
    margin-bottom: 3em;
    margin-top: .2em;
  }
  .DayPicker-Caption > div, .DayPicker-Weekday {
    color: ${(props: Props) => props.theme.colors.primary};
    font-weight: bold;
    font-size: ${(props: Props) =>
      props.theme.common[props.datepickersize!].fontSize}
  }
  .DayPicker-Day {
    opacity: .8;
    padding: .7em;
    font-size: ${(props: Props) =>
      props.theme.common[props.datepickersize!].fontSize}
  }
  .DayPicker-Month {
    margin-left: 1.5em;
    margin-right: 1.5em;
  }
`;

const OverlayComponent: React.FunctionComponent<Props> = ({
  children,
  ...props
}: any) => {
  return <SOverlayComponent {...props}>{children}</SOverlayComponent>;
};

// const formatMonthTitle: Function = (d: any) => {
//   return `${d.getMonth() + 1}/${d.getFullYear()}`;
// };

const modifiers = {
  sundays: { daysOfWeek: [0] },
  saturdays: { daysOfWeek: [6] },
  birthday: new Date(2018, 9, 30),
};
const modifiersStyles = ({ ...props }) => {
  console.log('these are the props ', props);
  return {
    birthday: {
      color: 'white',
      backgroundColor: '#ffc107',
    },
    sundays: {
      color: 'blue',
    },
    saturdays: {
      color: 'blue',
    },
  };
};

export const DatePicker: React.FunctionComponent<Props> = ({ ...props }) => {
  const parentProps = React.useContext(DatePickerContext).parentProps;
  console.log('general props: ', props, parentProps);
  return (
    <DatePickerContext.Provider value={{ parentProps: props }}>
      <DayPickerInput
        format={props.format || 'YYYY/MM/DD'}
        component={(inputProps: Props) => (
          <Input
            {...inputProps}
            id="datepickerInput"
            type="text"
            inputSize={inputProps.datepickersize!}
          />
        )}
        overlayComponent={(overlayProps: any) => (
          <OverlayComponent {...props} {...overlayProps} />
        )}
        dayPickerProps={{
          modifiers,
          modifiersStyles: modifiersStyles(parentProps),
          // localeUtils: { ...LocaleUtils, formatMonthTitle },
        }}
      />
      <DayPicker />
    </DatePickerContext.Provider>
  );
};

DatePicker.defaultProps = {
  datepickersize: 'md',
};
