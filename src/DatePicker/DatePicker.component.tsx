import * as React from 'react';
import uuid from 'uuid';
import styled, { ThemeProvider } from 'styled-components';
import { SingleDatePicker, SingleDatePickerShape } from 'react-dates';
// import DayPickerInput from 'react-day-picker/DayPickerInput';
// import 'react-day-picker/lib/style.css';

// import { DatePickerContext } from './context';
// import { Props as DatePickerProps } from './props';
// import { InputForDatePicker } from './InputForDatePicker';
import { Moment } from 'moment';
import { Themes } from '../themes';

type momentDate = Moment | null;
type pickerSize = 'sm' | 'md' | 'lg';
type pickerStyle =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger';
type focusInput = boolean | null;
type focused = { focused: focusInput };

export interface Props extends SingleDatePickerShape {
  /**
   * Set className
   *
   * @default ''
   **/
  className: string;
  /**
   * The ID of the control
   *
   * @default null
   **/
  wrapperId?: string;
  /**
   * Select DatePicker Size
   *
   * @default 'md'
   **/
  datePickerSize?: pickerSize;
  /**
   * Select DatePicker style.
   *
   * @default 'primary'
   **/
  datePickerStyle?: pickerStyle;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
}

type State = {
  focused: focusInput;
  date: momentDate;
};

const SWrapperComponent = styled.div<any>``;

export class DatePicker extends React.PureComponent<Props> {
  static defaultProps = {
    className: '',
    id: uuid.v4(),
    wrapperId: uuid.v4(),
    datePickerSize: 'md',
    datePickerStyle: 'primary',
    date: null,
    focused: null,
    onDateChange: null,
    onFocusChange: null,
    theme: Themes.defaultTheme,
  };

  state: State = {
    focused: null,
    date: null,
  };

  onDateChange = (event: momentDate) =>
    this.props.onDateChange instanceof Function
      ? this.props.onDateChange(event)
      : this.setState(
          {
            date: event,
          },
          () => console.log(event),
        );

  onFocusChange = (input: focused) =>
    this.props.onFocusChange instanceof Function
      ? this.props.onFocusChange(input)
      : this.setState(
          {
            focused: input.focused,
          },
          () => console.log(input),
        );

  render() {
    const {
      theme,
      className,
      id,
      wrapperId,
      datePickerSize,
      datePickerStyle,

      date,
      focused,
      onDateChange,
      onFocusChange,
      ...props
    } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <SWrapperComponent
          id={wrapperId!}
          className={className}
          datePickerSize={datePickerSize}
          datePickerStyle={datePickerStyle}
        >
          <SingleDatePicker
            // The next properties have to be overrided by the instance's functions
            id={id!}
            date={date || this.state.date}
            focused={!!focused || !!this.state.focused}
            onFocusChange={this.onFocusChange}
            onDateChange={this.onDateChange}
            {...props}
          />
        </SWrapperComponent>
      </ThemeProvider>
    );
  }
}

// export type Props = Partial<DatePickerProps>;

// /* tslint:disable:max-line-length */
// const SOverlayComponent = styled.div`
//   background: ${props => props.theme.colors.white};
//   border-radius: ${(props: Props) =>
//     props.theme.common[props.datePickerSize!].borderRadius};
//   border: 1px solid ${(props: Props) => props.theme.colors.lightGray};
//   margin-top: ${(props: Props) =>
//     props.theme.common[props.datePickerSize!].padding.toString().split(' ')[1]};
//   font-family: ${(props: Props) => props.theme.typography.fontFamily};
//   font-size: ${(props: Props) =>
//     props.theme.common[props.datePickerSize!].fontSize}
//   color: ${(props: Props) => props.theme.colors.primary};
//   box-shadow: #0000001a 0px 3px 25px;
//   position: ${(props: Props) => props.theme.datepicker.position};
//   z-index: ${(props: Props) => props.theme.datepicker.zIndex};
//   .DayPicker-wrapper {
//     padding: ${(props: Props) =>
//       props.theme.datepicker[props.datePickerSize!].margins.dayPickerWraper}
//   }
//   .DayPicker-NavBar {
//     position: relative;
//   }
//   .DayPicker-NavButton {
//     width: 2.25em;
//     &:focus {
//       outline: none;
//     }
//   }
//   .DayPicker-NavButton--prev {
//     left: ${(props: Props) =>
//       props.theme.datepicker[props.datePickerSize!].btnPrev.left};
//     background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABH0lEQVRYhe3YvY3CQBCG4Rd0BVABogUogAQhkZ+oggIoASFCApKji9OxyQVsjFgqQcQkXAAJK87enxnbAV9oaaxH6/Hu2K0bN5qUdt0AP29QWT60btwfTnrAElg5aw6hdS2Npn5g9kAXuADjUJT4I/MwAB1gEVovCnqBgfsKzSsHFWBGzppjpaB/MOdYjAioADOOxWSDpDFZIA0MJG6MJT1zSsVAwgppYqJB2pgoUBWYKBCw8TAAU0kMxIHWwNW7tuoPJx1BTzjIWfMDfHqoAfAriYpqamfNtzYq+rXXRiXt1Jqo5KNDC5V1uGqgsscPaZTIgCaJEhthpVCiQ34BalsLqAC1qw0ET6gzMHPWfIXWqny55qRxPxveoLI0DvQHF7mbWMvAdEsAAAAASUVORK5CYII=');
//   }
//   .DayPicker-NavButton--next {
//     right: ${(props: Props) =>
//       props.theme.datepicker[props.datePickerSize!].btnNext.right}
//     background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABNUlEQVRYhe3YPUrEQBjG8f+KbO0BRMQbpLGMbLUptvMYHmAPYLGIiJ14AcvtZxcsdkoR5gYii7VYi7AWThFikbyZ901S7NPlg/CDyTwzyWjHjiHloG9ANXtQXQ4lN2d5cQrcALfBu1cL0KjpSx0xG+AE+AKmwbsXbZBkyOYRA3AErLK8OO8TtADeS8cmqMag4N0WuLBGiWZZFyjxtLdGteohS1TrYrRCJTV1CfWmhUpeOiJqooVq3NR1yfLimL8mPyudFje62uIavPtAYfhUV/uImgI/FdRTL6AsL8bAPf93EXedgyJmCcwql66Cd4+dgmowD5JnJYM0MckgbUwSyALTGmSFaQWyxIhB1hgRqAuMCARcW2NABnoGvi0xIPvqWAOXwKcVBhT3Q1oZ3M+GPagugwP9Aj3mk1GmPwqDAAAAAElFTkSuQmCC');
//   }
//   .DayPicker-Caption {
//     text-align: center;
//     margin: ${(props: Props) =>
//       props.theme.datepicker[props.datePickerSize!].margins.dayPickerCaption}
//   }
//   .DayPicker-Caption > div, .DayPicker-Weekday {
//     color: ${(props: Props) => props.theme.colors.primary};
//     font-weight: bold;
//     font-size: ${(props: Props) =>
//       props.theme.common[props.datePickerSize!].fontSize}
//   }
//   .DayPicker-Month {
//     margin: ${(props: Props) =>
//       props.theme.datepicker[props.datePickerSize!].margins.dayPickerMonth}
//   }
//   .DayPicker-Day {
//     opacity: .99;
//     padding: .7em;
//     font-size: ${(props: Props) =>
//       props.theme.common[props.datePickerSize!].fontSize};
//   }
//   .DayPicker-Day--saturdays, .DayPicker-Day--sundays {
//     color: ${(props: Props) => props.theme.styles[props.datePickerStyle!].text};
//   }
//   .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside),
//   .DayPicker-Day--today:not(.DayPicker-Day--outside)  {
//     position: relative;
//     color: ${(props: Props) =>
//       props.theme.styles[props.datePickerStyle!].reverseText};
//     background-color: transparent;
//     &:after {
//       content: '';
//       width: 100%;
//       height: 100%;
//       background-color: ${(props: Props) =>
//         props.theme.styles[props.datePickerStyle!].flood};
//       opacity: 0.5;
//       position: absolute;
//       top: 0;
//       left: 0;
//       z-index: -1;
//       border-radius: 50%;
//     }
//     &:hover {
//       background-color: ${(props: Props) =>
//         props.theme.styles[props.datePickerStyle!].hoverFlood};
//     }
//   }

//   .Selectable .DayPicker-Day--selected:not(.DayPicker-Day--from):not(.DayPicker-Day--to):not(.DayPicker-Day--outside) {
//     &:after {
//       border-radius: 0 !important;
//     }
//   }
//   .Selectable .DayPicker-Day--from {
//      &:after {
//       border-top-right-radius: 0% !important;
//       border-bottom-right-radius: 0% !important;
//     }
//   }
//   .Selectable .DayPicker-Day--to {
//      &:after {
//       border-top-left-radius: 0% !important;
//       border-bottom-left-radius: 0% !important;
//     }
//   }
//   .DayPicker.without-picker {
//     display: none;
//   }
// `;

// const OverlayComponent: React.FunctionComponent<Props> = ({
//   children,
//   ...props
// }: any) => {
//   return <SOverlayComponent {...props}>{children}</SOverlayComponent>;
// };

// export const DatePicker: React.FunctionComponent<Props> = ({
//   theme,
//   withoutPicker,
//   ...props
// }) => {
//   const selectedDays = (props.dayPickerProps || {}).selectedDays;
//   const modifiers = {
//     sundays: { daysOfWeek: [0] },
//     saturdays: { daysOfWeek: [6] },
//     ...(selectedDays || [])[1],
//   };
//   return (
//     <DatePickerContext.Provider value={{ baseProps: props }}>
//       <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
//         <DayPickerInput
//           format={props.format || 'YYYY/MM/DD'}
//           component={InputForDatePicker}
//           overlayComponent={(overlayProps: any) => (
//             <OverlayComponent {...props} {...overlayProps} />
//           )}
//           {...props}
//           dayPickerProps={{
//             weekdaysShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
//             ...props.dayPickerProps,
//             modifiers: {
//               ...modifiers,
//               ...(props.dayPickerProps || {}).modifiers,
//             },
//             className: [
//               // Trying to get classNames from dayPickerProps
//               (props.dayPickerProps || {}).className || '',
//               // if from exists, then add Selectable class
//               !!((selectedDays || [])[1] || {}).from ? 'Selectable' : '',
//               // If withoutPicker available then hide picker with 'without-picker' class
//               withoutPicker ? 'without-picker' : '',
//             ].join(', '),
//           }}
//         />
//       </ThemeProvider>
//     </DatePickerContext.Provider>
//   );
// };

// DatePicker.defaultProps = {
//   datePickerStyle: 'primary',
//   datePickerSize: 'md',
//   theme: Themes.defaultTheme,
// };
