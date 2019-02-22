import { lighten, darken } from '../utils/colorUtils';

export { ThemeProvider } from 'styled-components';

export const defaultColors = {
  blue: '#167BE0',
  green: '#00B52D',
  red: '#FE4A49',
  yellow: '#FEC934',
  white: 'white',
  gray: '#8D9599',
  lightGray: '#BCC0C3',
  mediumGray: '#C9CDCE',
  darkGray: '#515C61',
  primary: '#303E47',
  black: '#0A1521',
  placeholderGray: '#727A80',
  disabledBackground: '#ECEFF2',
  disabledBorder: '#A3AAAD',
  disabledText: '#A3AAAD',
  panelBackground: '#F5F7F8',
};

export const defaultTheme = {
  colors: defaultColors,
  borders: {
    radius: '1px',
    radiusSm: '.2rem',
    radiusLg: '.3rem',
    width: '1px',
  },
  styles: {
    primary: {
      borderColor: defaultColors.blue,
      flood: defaultColors.blue,
      lightFlood: lighten(defaultColors.blue, 50),
      hoverlightFlood: lighten(defaultColors.blue, 100),
      text: defaultColors.blue,
      reverseText: defaultColors.white,
      hoverFlood: darken(defaultColors.blue, 5),
      selectedFlood: darken(defaultColors.blue, 25),
      badgeBackground: defaultColors.blue,
      badgeColor: defaultColors.white,
      alertColor: defaultColors.white,
      alertBackground: defaultColors.blue,
      light:{
        alertBackground: lighten(defaultColors.blue, 50),
        alertColor: defaultColors.black,
      },
    },
    secondary: {
      borderColor: defaultColors.gray,
      flood: defaultColors.gray,
      lightFlood: lighten(defaultColors.gray, 50),
      hoverlightFlood: lighten(defaultColors.gray, 80),
      text: defaultColors.white,
      reverseText: defaultColors.black,
      hoverFlood: darken(defaultColors.gray, 5),
      selectedFlood: darken(defaultColors.blue, 25),
      alertColor: defaultColors.white,
      alertBackground: defaultColors.gray,
      light: {
        alertBackground: lighten(defaultColors.gray, 50),
        alertColor: defaultColors.black,
      },
    },
    danger: {
      borderColor: defaultColors.red,
      flood: defaultColors.red,
      lightFlood: lighten(defaultColors.red, 50),
      hoverlightFlood: lighten(defaultColors.red, 80),
      text: defaultColors.red,
      reverseText: defaultColors.white,
      hoverFlood: darken(defaultColors.red, 5),
      selectedFlood: darken(defaultColors.blue, 25),
      badgeBackground: defaultColors.red,
      badgeColor: defaultColors.white,
      alertColor: defaultColors.white,
      alertBackground: defaultColors.red,
      light: {
        alertBackground: lighten(defaultColors.red, 50),
        alertColor: defaultColors.black,
      },
    },
    warning: {
      borderColor: defaultColors.yellow,
      flood: defaultColors.yellow,
      lightFlood: lighten(defaultColors.yellow, 50),
      hoverlightFlood: lighten(defaultColors.yellow, 80),
      text: defaultColors.yellow,
      reverseText: defaultColors.white,
      hoverFlood: darken(defaultColors.yellow, 5),
      selectedFlood: darken(defaultColors.blue, 25),
      badgeBackground: defaultColors.yellow,
      badgeColor: defaultColors.white,
      alertColor: defaultColors.white,
      alertBackground: defaultColors.yellow,
      light: {
        alertBackground: lighten(defaultColors.yellow, 50),
        alertColor: defaultColors.black,
      },
    },
    success: {
      borderColor: defaultColors.green,
      flood: defaultColors.green,
      lightFlood: lighten(defaultColors.green, 50),
      hoverlightFlood: lighten(defaultColors.green, 80),
      text: defaultColors.green,
      reverseText: defaultColors.white,
      hoverFlood: darken(defaultColors.green, 5),
      selectedFlood: darken(defaultColors.blue, 25),
      badgeBackground: defaultColors.green,
      badgeColor: defaultColors.white,
      alertColor: defaultColors.green,
      alertBackground: defaultColors.white,
      light: {
        alertBackground: lighten(defaultColors.green, 50),
        alertColor: defaultColors.black,
      },
    },
    default: {
      borderColor: defaultColors.gray,
      flood: defaultColors.gray,
      lightFlood: lighten(defaultColors.gray, 50),
      hoverlightFlood: lighten(defaultColors.gray, 80),
      text: defaultColors.primary,
      reverseText: defaultColors.white,
      hoverFlood: darken(defaultColors.gray, 5),
      selectedFlood: darken(defaultColors.blue, 25),
      badgeBackground: defaultColors.gray,
      badgeColor: defaultColors.black,
      alertColor: defaultColors.black,
      alertBackground: defaultColors.gray,
    },
  },
  pagination: {
    text: defaultColors.black,
    fontWeight: 'normal',
    background: defaultColors.white,
    borderColor: defaultColors.white,
    activeText: defaultColors.blue,
    activeFontWeight: 'bold',
    activeBackground: defaultColors.white,
    activeBorderColor: defaultColors.blue,
    disabledText: defaultColors.gray,
    disabledBackground: defaultColors.white,
    disabledBorderColor: defaultColors.white,
    hoverBackground: defaultColors.white,
    hoverBorderColor: defaultColors.white,
    borderRadius: '1px',
    button: {
      disabledText: defaultColors.disabledText,
      fontWeight: 'normal',
      fontWeightSelected: 'bold',
      padding: {
        sm: '3px 6px',
        md: '4px 8px',
        lg: '5px 10px',
      },
      nextPrevious: {
        fontWeight: 'bold',
      },
    },
  },
  typography: {
    fontFamily: 'Roboto, "Open Sans", arial, sans-serif',
    color: defaultColors.black,
  },
  input: {
    background: defaultColors.white,
    borderColor: defaultColors.gray,
    color: defaultColors.darkGray,
    padding: '.375rem .75rem',
    placeholderColor: defaultColors.placeholderGray,
    disabled: {
      background: defaultColors.disabledBackground,
      borderColor: defaultColors.disabledBorder,
    },
  },
  inputGroup: {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
  },
  radioButton: {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: defaultColors.gray,
    disabledText: defaultColors.disabledText,
    unselectedColor: defaultColors.white,
    sm: {
      size: '6px',
    },
    md: {
      size: '10px',
    },
    lg: {
      size: '14px',
    },
  },
  checkbox: {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: defaultColors.gray,
    disabledText: defaultColors.disabledText,
    unselectedColor: defaultColors.white,
    sm: {
      size: '6px',
    },
    md: {
      size: '10px',
    },
    lg: {
      size: '14px',
    },
  },
  label: {
    padding: '9px 8px',
  },
  modal: {
    header: {
      minHeight: '0',
      backgroundColor: defaultColors.white,
      borderBottom: defaultColors.lightGray,
      padding: '8px 15px',
    },
    body: {
      minHeight: '0',
      backgroundColor: defaultColors.white,
      borderBottom: defaultColors.lightGray,
      padding: '8px 15px',
    },
    footer: {
      minHeight: '0',
      backgroundColor: defaultColors.white,
      borderBottom: defaultColors.lightGray,
      padding: '8px 15px',
    },
  },
  textarea: {
    background: defaultColors.white,
    backgroundDisabled: defaultColors.lightGray,
    borderColor: defaultColors.gray,
    color: defaultColors.darkGray,
    padding: '.375rem .75rem',
    placeholderColor: defaultColors.placeholderGray,
    disabled: {
      background: defaultColors.disabledBackground,
      borderColor: defaultColors.disabledBorder,
    },
  },
  panel: {
    body: {
      background: defaultColors.panelBackground,
    },
  },
  badge: {
    borderRadius: '10px',
    fontSize: '10px',
    padding: '4px 10px',
    sm: {
      borderRadius: '10px',
      fontSize: '10px',
      padding: '4px 10px',
    },
    md: {
      borderRadius: '12px',
      fontSize: '12px',
      padding: '4px 10px',
    },
    lg: {
      borderRadius: '14px',
      fontSize: '14px',
      padding: '4px 10px',
    },
  },
  alert: {
    borderRadius: '0px',
    fontSize: '14px',
    padding: '8px 16px',
    fontWeight: 'bold',
    light:{
      fontWeight: 'Medium',
    },
  },
  popover: {
    borderColor: defaultColors.lightGray,
    background: defaultColors.white,
    withArrowDistance: 10,
    withoutArrowDistance: 3,
  },
  common: {
    sm: {
      borderRadius: '1px',
      fontSize: '11px',
      padding: '4px 8px',
      tableCellPadding: '7px',
      inputIconSize: '14px',
    },
    md: {
      borderRadius: '1px',
      fontSize: '14px',
      padding: '8px 14px',
      tableCellPadding: '9px',
      inputIconSize: '20px',
    },
    lg: {
      borderRadius: '1px',
      fontSize: '16px',
      padding: '10px 16px',
      tableCellPadding: '11px',
      inputIconSize: '24px',
    },
  },
  validation: {
    borderColor: 'red',
    errorTextColor: defaultColors.placeholderGray,
    fontSize: '11px',
    padding: '4px',
  },
  table: {
    header: {
      borderBottomColor: defaultColors.darkGray,
      color: defaultColors.blue,
      fontWeight: 'bold',
    },
    row: {
      borderBottomColor: defaultColors.mediumGray,
      hoverColor: defaultColors.mediumGray,
    },
    pagination: {
      padding: '4px 0',
      button: {
        disabledText: defaultColors.disabledText,
        fontWeight: 'normal',
        fontWeightSelected: 'bold',
        padding: {
          sm: '3px 6px',
          md: '4px 8px',
          lg: '5px 10px',
        },
        nextPrevious: {
          fontWeight: 'bold',
        },
      },
    },
  },
  datepicker: {
    sm: {
      margins: {
        dayPickerWraper: '1rem 0',
        dayPickerMonth: '1rem 1rem auto',
        dayPickerCaption: '.3rem auto 2rem',
      },
      btnPrev: {
        left: '2rem',
      },
      btnNext: {
        right: '2.2rem',
      },
    },
    md: {
      margins: {
        dayPickerWraper: '1.5rem 0',
        dayPickerMonth: '1rem 1.5rem auto',
        dayPickerCaption: '.3rem auto 3rem',
      },
      btnPrev: {
        left: '3rem',
      },
      btnNext: {
        right: '3.2rem',
      },
    },
    lg: {
      margins: {
        dayPickerWraper: '1.5rem 0',
        dayPickerMonth: '1rem 1.5rem auto',
        dayPickerCaption: '.3rem auto 3rem',
      },
      btnPrev: {
        left: '3rem',
      },
      btnNext: {
        right: '3.2rem',
      },
    },
  },
  tabs: {
    borderRadius: '0px',
    fontSize: '14px',
  },
};
