import * as React from 'react';
import styled from 'styled-components';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { DayPickerInputProps } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import { Input } from '../';

type Props = Partial<DayPickerInputProps> & {
  /**
   * Set className
   *
   * @default ''
   **/
  className?: string;
  /**
   * The ID of the control
   *
   * @default null
   **/
  id: string;
  /**
   * Type of input (text, number, email, etc)
   *
   * @default 'text'
   **/
  type?: string;
  /**
   * Select DatePicker Size
   *
   * @default 'md'
   **/
  datepickersize?: string;
  /**
   * Select DatePicker style.
   *
   * @default 'primary'
   **/
  datepickerstyle?: string;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

/* tslint:disable:max-line-length */
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
    margin-top: .3em;
  }
  .DayPicker-Caption > div, .DayPicker-Weekday {
    color: ${(props: Props) => props.theme.colors.primary};
    font-weight: bold;
    font-size: ${(props: Props) =>
      props.theme.common[props.datepickersize!].fontSize}
  }
  .DayPicker-Month {
    margin-left: 1.5em;
    margin-right: 1.5em;
  }
  .DayPicker-Day {
    opacity: .8;
    padding: .7em;
    font-size: ${(props: Props) =>
      props.theme.common[props.datepickersize!].fontSize};
  }
  .DayPicker-Day--saturdays, .DayPicker-Day--sundays {
    color: ${(props: Props) => props.theme.styles[props.datepickerstyle!].text};
  }
  .DayPicker-Day--today, .DayPicker-Day--selected {
    background-color: ${(props: Props) =>
      props.theme.styles[props.datepickerstyle!].lightFlood};
  }
`;

const SInput = styled(Input)`
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAADRUlEQVRoge2ZzWvUUBTFf3copZShSJEiXRTFUoqI4Af6J7gvFFyVioioCDoplImLkM0UKelGXFf3XbhXXBfdShFBBRciXYkMpUiZ6yIvM5mXTCbTqWmFnMV85J1733knNy8zN6Io/yMqxy3gsBgZNMBx/VPAvMIo0BTYCRre/oA5xhQuijKO8Af4FDS8X4PkkLyl4rh+FVhVeCxQVUDCoR8oHsLLoOEd9MkxgrKs4CNMSzSg/EZYBzaChreXR88gpXJLlRWBqnV8GuEZcK1fAoXrhjttDU2oUkdZyCsml/Ca648Dd4ExYB94K8oWyrbCATAJ3OuXR0LOpAgHwDawBbwD9gXGgfuO648emXCBCZSqCCj8BG4Ha94iQl2gaWi2i0loyFFooqwGDW+R0JBdc7xK8oweXrgqFQRUQeAAbYvdU2iZz/0vdDHzKS2Rdo4m4VmL9OTSlDpZzfWnBBaAcwoVU9dTIkludEhhtub66xJ+Jk5VBXO2ZlNSxHEG8B3X3yM05IvC642Gt9tXuFP3Z0R5gzAHINGmIx0BcbRFKjMIK4lBTExKrA0RTqM8iFZtwp84rn8zaHjf49zkaRGWI9G2iCzH286r5Xb00kd0m5wIZh5Ysqlp9XQ5NalxPG2u+LspiXhY+JLndmHzOou4alPz7+Nxx6UTN4TjFTNU6SInHU9F/lt+p8angKdO3f8G3MBsX7bjXQuyr1ihqvDIcf0PAucVpnrwjkB4x/EJoKbSnTea076AFXOBdzs5irCEqV3pImMFp8vJXyo9ajw+BxyuxttDvWs8gcPVeAqG2VUyHe+BrFLZBx4ifERT5lboKhdJKRdJ15swILZvxwy4hPCc8PfRQMJbKDvBmvc+g/PPYH4Ct3ToGj8GZG39J1p41s32RAsvHS8apeNFo3S8aJSOF43S8aJROl40SseLRul40SgdLxpZjmf9y68gXKnV/fFhBYjVTIraE3aDKc4T5QIZxqYJ/2zex4AX8b5JvL2W1ryP91YkInXCO/2TiBv7nug1xqFtTW0kVqTKKzXPZKzgY+lkSahlMxGT9pzTcf05Ve6IcJZoccM15y2FPeK6eS2FrwKbQcNLOJ77Ae1Jw4neVbLwF8LWG3ol4LqzAAAAAElFTkSuQmCC');
  background-repeat: no-repeat;
  background-size: ${(props: Props) =>
    props.theme.common[props.datepickersize!].inputIconSize}
  background-position: 96% center;
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

export const DatePicker: React.FunctionComponent<Props> = ({ ...props }) => {
  const modifiers = {
    sundays: { daysOfWeek: [0] },
    saturdays: { daysOfWeek: [6] },
  };
  return (
    <DayPickerInput
      format={props.format || 'YYYY/MM/DD'}
      component={(inputProps: Props) => (
        <SInput {...inputProps} {...props} inputSize={props.datepickersize!} />
      )}
      overlayComponent={(overlayProps: any) => (
        <OverlayComponent {...props} {...overlayProps} />
      )}
      dayPickerProps={{
        modifiers,
        // localeUtils: { ...LocaleUtils, formatMonthTitle },
      }}
      {...props}
    />
  );
};

DatePicker.defaultProps = {
  datepickerstyle: 'primary',
  datepickersize: 'md',
};
