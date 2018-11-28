import * as color from 'tinycolor2';

export const defaultColors = {
  blue: '#0985E3',
  green: '#00B52D',
  red: '#FE4A49',
  yellow: '#FEC934',
  white: 'white',
  gray: '#DEE9E0',
  lightGray: '#E7EFE8',
  darkGray: '#515C61',
  black: '#0A1521',
};

export const defaultTheme = {
  styles: {
    primary: {
      borderColor: defaultColors.blue,
      flood: defaultColors.blue,
      text: defaultColors.blue,
      reverseText: defaultColors.white,
      hoverFlood: color(defaultColors.blue)
        .darken(5)
        .toString(),
    },
    danger: {
      borderColor: defaultColors.red,
      flood: defaultColors.red,
      text: defaultColors.red,
      reverseText: defaultColors.white,
      hoverFlood: color(defaultColors.red)
        .darken(5)
        .toString(),
    },
    warning: {
      borderColor: defaultColors.yellow,
      flood: defaultColors.yellow,
      text: defaultColors.yellow,
      reverseText: defaultColors.white,
      hoverFlood: color(defaultColors.yellow)
        .darken(5)
        .toString(),
    },
    success: {
      borderColor: defaultColors.green,
      flood: defaultColors.green,
      text: defaultColors.green,
      reverseText: defaultColors.white,
      hoverFlood: color(defaultColors.green)
        .darken(5)
        .toString(),
    },
    default: {
      borderColor: defaultColors.gray,
      flood: defaultColors.white,
      text: defaultColors.black,
      hoverFlood: color(defaultColors.white)
        .darken(5)
        .toString(),
    },
  },
  button: {
    sm: {
      fontSize: '10px',
      padding: '5px',
    },
    md: {
      fontSize: '12px',
      padding: '8px',
    },
    lg: {
      fontSize: '14px',
      padding: '10px',
    },
  },
};
