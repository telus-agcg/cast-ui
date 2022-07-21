import { defaultColors } from './default';

export { ThemeProvider } from 'styled-components';

export const azureColors = {
  white: '#ffffff',
  black: '#000000',
  highlight400: '#E1F0FF',
  highlight200: '#F3F9FF',
  drk800: '#303E47',
  drk600: '#54585A',
  drk400: '#898D8D',
  drk200: '#B2B4B4',
  lt800: '#C8C9C9',
  lt600: '#D7D8D8',
  lt400: '#EFEFEF',
  lt200: '#F8F8F8',
  primary: '#146AB4',
  primaryHover: '#194C8A',
  primaryFaded: '#8BC1F7',
  primaryBackground: '#E2F0FD',
  success: '#7FB541',
  successHover: '#5D8E24',
  successFaded: '#CCEDA7',
  successBackground: '#F3FAEA',
  danger: '#FA320E',
  dangerHover: '#DD2301',
  dangerFaded: '#FD9380',
  dangerBackground: '#FFDFD9',
  warning: '#FD8236',
  warningHover: '#E65900',
  warningFaded: '#FFB07F',
  warningBackground: '#FFDFCB',
  secondary: '#898D8D',
  secondaryHover: '#54585A',
  secondaryFaded: '#C8C9C9',
  secondaryBackground: '#F8F8F8',
};

export const azureTheme = {
  name: 'Azure',
  colors: azureColors,
  borders: {
    radius: '1px',
    radiusSm: '3.2px',
    radiusLg: '4.8px',
    width: '1px',
  },
  styles: {
    primary: {
      borderColor: azureColors.primary,
      flood: azureColors.primary,
      disabledFlood: azureColors.drk200,
      lightFlood: azureColors.primaryFaded,
      hoverlightFlood: azureColors.primaryFaded,
      text: azureColors.primary,
      reverseText: azureColors.white,
      hoverFlood: azureColors.primaryHover,
      selectedFlood: azureColors.primaryHover,
      badgeBackground: azureColors.primaryHover,
      badgeColor: azureColors.white,
      alertColor: azureColors.white,
      alertBackground: azureColors.primary,
      notificationColor: azureColors.white,
      notificationBackground: azureColors.primary,
      light: {
        alertColor: azureColors.drk800,
        alertBackground: azureColors.primaryBackground,
        notificationColor: azureColors.drk800,
        notificationBackground: azureColors.primaryBackground,
        badgeBackground: azureColors.primaryBackground,
        badgeColor: azureColors.primary,
      },
      cardTopBorderColor: azureColors.primary,
    },
    secondary: {
      borderColor: azureColors.secondary,
      flood: azureColors.secondary,
      disabledFlood: azureColors.drk200,
      lightFlood: azureColors.secondaryFaded,
      hoverlightFlood: azureColors.secondaryFaded,
      text: azureColors.primary,
      reverseText: azureColors.white,
      hoverFlood: azureColors.secondaryHover,
      selectedFlood: azureColors.secondaryHover,
      badgeBackground: azureColors.drk600,
      badgeColor: azureColors.white,
      alertColor: azureColors.white,
      alertBackground: azureColors.drk600,
      notificationColor: azureColors.white,
      notificationBackground: azureColors.drk600,
      light: {
        alertColor: azureColors.drk800,
        alertBackground: azureColors.secondaryBackground,
        notificationColor: azureColors.drk800,
        notificationBackground: azureColors.secondaryBackground,
        badgeBackground: azureColors.secondaryBackground,
        badgeColor: azureColors.secondary,
      },
      cardTopBorderColor: azureColors.secondary,
    },
    danger: {
      borderColor: azureColors.danger,
      flood: azureColors.danger,
      disabledFlood: azureColors.drk200,
      lightFlood: azureColors.dangerFaded,
      hoverlightFlood: azureColors.dangerFaded,
      text: azureColors.danger,
      reverseText: azureColors.white,
      hoverFlood: azureColors.dangerHover,
      selectedFlood: azureColors.dangerHover,
      badgeBackground: azureColors.danger,
      badgeColor: azureColors.white,
      alertColor: azureColors.white,
      alertBackground: azureColors.danger,
      notificationColor: azureColors.white,
      notificationBackground: azureColors.danger,
      light: {
        alertColor: azureColors.drk800,
        alertBackground: azureColors.dangerBackground,
        notificationColor: azureColors.drk800,
        notificationBackground: azureColors.dangerBackground,
        badgeBackground: azureColors.dangerBackground,
        badgeColor: azureColors.danger,
      },
      cardTopBorderColor: azureColors.danger,
    },
    warning: {
      borderColor: azureColors.warning,
      flood: azureColors.warning,
      disabledFlood: azureColors.drk200,
      lightFlood: azureColors.warningFaded,
      hoverlightFlood: azureColors.warningFaded,
      text: azureColors.warning,
      reverseText: azureColors.white,
      hoverFlood: azureColors.warningHover,
      selectedFlood: azureColors.warningHover,
      badgeBackground: azureColors.warning,
      badgeColor: azureColors.white,
      alertColor: azureColors.white,
      alertBackground: azureColors.warning,
      notificationColor: azureColors.white,
      notificationBackground: azureColors.warning,
      light: {
        alertColor: azureColors.drk800,
        alertBackground: azureColors.warningBackground,
        notificationColor: azureColors.drk800,
        notificationBackground: azureColors.warningBackground,
        badgeBackground: azureColors.warningBackground,
        badgeColor: azureColors.warning,
      },
      cardTopBorderColor: azureColors.warning,
    },
    success: {
      borderColor: azureColors.success,
      flood: azureColors.success,
      disabledFlood: azureColors.drk200,
      lightFlood: azureColors.successFaded,
      hoverlightFlood: azureColors.successFaded,
      text: azureColors.success,
      reverseText: azureColors.white,
      hoverFlood: azureColors.successHover,
      selectedFlood: azureColors.successHover,
      badgeBackground: azureColors.successHover,
      badgeColor: azureColors.white,
      alertColor: azureColors.white,
      alertBackground: azureColors.success,
      notificationColor: azureColors.white,
      notificationBackground: azureColors.success,
      light: {
        alertColor: azureColors.drk800,
        alertBackground: azureColors.successBackground,
        notificationColor: azureColors.drk800,
        notificationBackground: azureColors.successBackground,
        badgeBackground: azureColors.successBackground,
        badgeColor: azureColors.success,
      },
      cardTopBorderColor: azureColors.success,
    },
  },
  pagination: {
    text: azureColors.drk800,
    fontWeight: 'normal',
    padding: '4px 0',
    background: azureColors.white,

    activeText: azureColors.primary,
    activeFontWeight: 'bold',
    activeBackground: azureColors.white,
    disabledText: azureColors.secondaryHover,
    disabledBackground: azureColors.white,
    hoverTextColor: azureColors.primary,
    hoverBackground: azureColors.white,
    hoverFontWeight: 'bold',

    button: {
      width: '24px',
      height: '24px',
      fontWeight: 'normal',
      padding: '3px 3px 4px',
      borderColor: azureColors.white,
      activeBorderColor: azureColors.primary,
      disabledBorderColor: azureColors.white,
      disabledText: azureColors.lt600,
      hoverBorderColor: azureColors.white,
      hoverBackground: azureColors.lt400,
    },
  },

  body: {
    fontFamily: 'arial, sans-serif',
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '18px',
    color: azureColors.drk800,
    backgroundColor: azureColors.white,
  },
  button: {
    outlineBackgroundColor: azureColors.white,
    sm: {
      fontSize: '11px',
      padding: '7px 8px',
      lineHeight: '12px',
    },
    md: {
      fontSize: '14px',
      padding: '8px 14px',
      lineHeight: '14px',
    },
    lg: {
      fontSize: '16px',
      padding: '10px 16px',
      lineHeight: '18px',
    },
  },
  typography: {
    fontFamily: 'arial, sans-serif',
    secondaryFontFamily: '',
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '160%',
    color: azureColors.drk800,
    caption: {
      10: {
        fontFamily: 'arial, sans-serif',
        fontWeight: '400',
        fontSize: '10px',
        lineHeight: '100%',
      },
      20: {
        fontFamily: 'arial, sans-serif',
        fontWeight: '400',
        fontSize: '12px',
        lineHeight: '100%',
      },
    },
    bodyText: {
      10: {
        fontFamily: 'arial, sans-serif',
        fontWeight: '400',
        fontSize: '12px',
        lineHeight: '100%',
      },
      20: {
        fontFamily: 'arial, sans-serif',
        fontWeight: '400',
        fontSize: '14px',
        lineHeight: '160%',
      },
    },
    code: {
      background: azureColors.lt200,
      fontFamily:
        '"Roboto Mono", Consolas, "Andale Mono", "DejaVu Sans Mono", monospace',
      fontSize: '95%',
      lineHeight: '140%',
    },
    digits: {
      fontWeight: '700',
      fontSize: '18px',
    },
    display: {
      10: {
        fontFamily: 'arial, sans-serif',
        fontWeight: '400',
        fontSize: '27px',
        lineHeight: '125%',
      },
      20: {
        fontFamily: 'arial, sans-serif',
        fontWeight: '400',
        fontSize: '37px',
        lineHeight: '120%',
      },
    },
    header: {
      10: {
        fontFamily: 'arial, sans-serif',
        fontWeight: '700',
        fontSize: '14px',
        lineHeight: '175%',
      },
      20: {
        fontFamily: 'arial, sans-serif',
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '175%',
      },
    },
    link: {
      fontWeight: '500',
      fontSize: '14px',
      color: azureColors.primary,
      textDecoration: 'none',
      disabled: {
        color: azureColors.drk400,
      },
      visited: {
        color: azureColors.primary,
        textDecoration: 'underline',
      },
      hover: {
        color: azureColors.primaryHover,
        textDecoration: 'underline',
      },
    },
    pre: {
      background: azureColors.lt200,
      fontFamily: '"Roboto Mono", Courier, monospace',
      fontSize: '100%',
      lineHeight: '100%',
    },
    sectionHeader: {
      fontWeight: '500',
      fontSize: '16px',
      borderWidth: '1px',
      borderColor: '#8D9599',
      borderStyle: 'solid',
    },
    subHeading: {
      fontWeight: '500',
      fontSize: '16px',
    },
    subTitle: {
      fontWeight: '300',
      fontSize: '18px',
      lineHeight: '135%',
    },
    title: {
      10: {
        fontFamily: 'arial, sans-serif',
        fontWeight: '400',
        fontSize: '18px',
        lineHeight: '130%',
      },
      20: {
        fontFamily: 'arial, sans-serif',
        fontWeight: '700',
        fontSize: '20px',
        lineHeight: '135%',
      },
    },
  },
  input: {
    background: azureColors.white,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: azureColors.drk400,
    color: azureColors.drk800,
    fontSize: '14px',
    placeholderColor: azureColors.drk400,
    disabled: {
      background: azureColors.lt600,
      border: `1px solid ${azureColors.lt600}`,
      addonTextColor: azureColors.drk400,
    },
    sm: {
      height: '26px',
      padding: '4px 7px',
      iconTop: '6px',
    },
    md: {
      height: '30px',
      padding: '8px 10px',
      iconTop: '7px',
    },
    lg: {
      height: '38px',
      padding: '11px 16px 13px',
      iconTop: '9px',
    },
  },
  inputGroup: {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      color: azureColors.drk800,
      horizontalMargin: '12px 0',
    },
    label: {
      padding: '8px 16px 4px 0',
      fontWeight: 500,
      horizontalWidth: '300px',
    },
  },
  radioButton: {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: azureColors.primary,
    disabledRadio: azureColors.drk200,
    disabledText: azureColors.drk600,
    unselectedColor: azureColors.white,
    stackedSpacing: '10px',
    inlineSpacing: '20px',
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
    borderColor: azureColors.primary,
    disabledCheck: azureColors.drk200,
    disabledText: azureColors.drk800,
    unselectedColor: azureColors.white,
    selectedColor: azureColors.primary,
    stackedSpacing: '10px',
    inlineSpacing: '20px',
    sm: {
      height: '28px',
      squareSize: '6px',
      squareMargin: '7px 0',
      indeterminateTopPosition: '3px',
      checkedTopPosition: '7px',
      marginLeft: '4px',
    },
    md: {
      height: '32px',
      squareSize: '10px',
      squareMargin: '7px 0',
      indeterminateTopPosition: '5px',
      checkedTopPosition: '9px',
      marginLeft: '6px',
    },
    lg: {
      height: '40px',
      squareSize: '14px',
      squareMargin: '8px 0',
      indeterminateTopPosition: '7px',
      checkedTopPosition: '11px',
      marginLeft: '6.5px',
    },
  },
  toggle: {
    background: {
      inactiveColor: azureColors.lt800,
      inactiveBorderColor: azureColors.lt800,
      activeColor: azureColors.lt800,
      activeBorderColor: azureColors.lt800,
      disabled: azureColors.lt400,
      disabledBorderColor: azureColors.lt400,
    },
    inactiveColor: azureColors.drk600,
    inactiveBorderColor: azureColors.drk600,
    activeColor: azureColors.primary,
    activeBorderColor: azureColors.primary,
    activeDisabledColor: azureColors.drk200,
    activeDisabledBorderColor: azureColors.drk200,
    inactiveDisabledColor: azureColors.drk200,
    inactiveDisabledBorderColor: azureColors.drk200,
    sm: {
      toggleSize: '20px',
      toggleOffsetTop: '-3px',
      toggleOffsetLeft: '0px',
      activeOffset: '0px',
      backgroundHeight: '15px',
      backgroundWidth: '35px',
    },
    md: {
      toggleSize: '25px',
      toggleOffsetTop: '-5px',
      toggleOffsetLeft: '0px',
      activeOffset: '0px',
      backgroundHeight: '15px',
      backgroundWidth: '45px',
    },
    lg: {
      toggleSize: '30px',
      toggleOffsetTop: '-5px',
      toggleOffsetLeft: '0px',
      activeOffset: '0px',
      backgroundHeight: '20px',
      backgroundWidth: '55px',
    },
  },
  label: {
    padding: '9px 8px',
  },
  listGroup: {
    theme: {
      light: {
        color: azureColors.drk800,
        backgroundColor: azureColors.white,
        chevronColor: defaultColors.primary,
      },
      dark: {
        color: azureColors.drk800,
        backgroundColor: azureColors.highlight200,
        chevronColor: defaultColors.primary,
      },
    },
  },
  modal: {
    header: {
      minHeight: '0',
      backgroundColor: azureColors.lt200,
      borderColor: azureColors.lt800,
      padding: '15px',
      fontSize: '16px',
      color: azureColors.drk800,
    },
    body: {
      minHeight: '0',
      backgroundColor: azureColors.white,
      borderBottom: azureColors.lt800,
      padding: '15px',
      color: azureColors.drk800,
    },
    footer: {
      minHeight: '0',
      backgroundColor: azureColors.lt200,
      borderColor: azureColors.lt800,
      padding: '15px',
    },
    overlay: {
      zIndex: '999999',
    },
    sm: {
      width: '300px',
    },
    md: {
      width: '745px',
    },
    lg: {
      width: '1220px',
    },
  },
  textarea: {
    background: azureColors.white,
    backgroundDisabled: azureColors.secondaryBackground,
    borderColor: azureColors.secondary,
    color: azureColors.drk800,
    padding: '6px 12px',
    placeholderColor: azureColors.drk400,
    disabled: {
      background: azureColors.lt600,
      borderColor: azureColors.secondaryFaded,
    },
  },
  panel: {
    header: {
      padding: '14px 16px',
    },
    body: {
      padding: '30px 30px',
    },
    borderWidth: '1px',
    headerBorderColor: azureColors.drk400,
    bodyBackgroundColor: azureColors.lt200,
    bodyBorderColor: azureColors.drk400,
    headerColor: azureColors.primary,
    headerBackgroundColor: azureColors.white,
  },
  badge: {
    borderRadius: '4px',
    fontSize: '15px',
    sm: {
      borderRadius: '4px',
      fontSize: '12px',
      padding: '4px 8px 3px',
    },
    md: {
      borderRadius: '4px',
      fontSize: '15px',
      padding: '4px 8px 3px',
    },
    lg: {
      borderRadius: '4px',
      fontSize: '18px',
      padding: '4px 8px 3px',
    },
  },
  alert: {
    borderRadius: '1px',
    fontSize: '14px',
    padding: '8px 16px',
    fontWeight: 'bold',
    lightFontWeight: '400',
    lineHeight: '18px',
  },
  notification: {
    borderRadius: '1px',
    fontSize: '14px',
    padding: '8px 16px',
    fontWeight: 'bold',
    lineHeight: '18px',
  },
  card: {
    borderRadius: '2px',
    borderColor: azureColors.secondaryHover,
    fontSize: '14px',
    padding: '8px 16px',
    background: azureColors.white,
    boxShadow: '0 2px 4px rgba(0,0,0,.075) !important;',
    highlightAllBorderWidth: '1px',
    highlightedBorderWidth: '5px',
  },
  popover: {
    withArrowDistance: 10,
    withoutArrowDistance: 9,
    background: azureColors.white,
    color: azureColors.drk800,
    borderRadius: '1px',
    borderColor: azureColors.lt800,
    boxShadow: `0 0 5px ${azureColors.lt800}`,
  },
  tooltip: {
    background: azureColors.drk800,
    borderRadius: '1px',
  },
  common: {
    sm: {
      borderRadius: '1px',
      fontSize: '11px',
      padding: '4px 8px',
      tableCellPadding: '5px 0',
      inputIconSize: '14px',
    },
    md: {
      borderRadius: '1px',
      fontSize: '14px',
      padding: '8px 16px',
      tableCellPadding: '9px 0',
      inputIconSize: '20px',
    },
    lg: {
      borderRadius: '1px',
      fontSize: '16px',
      padding: '10px 16px',
      tableCellPadding: '11px 0',
      inputIconSize: '24px',
    },
  },
  validation: {
    borderColor: azureColors.danger,
    color: azureColors.drk800,
    fontSize: '11px',
    fontStyle: 'italic',
    lineHeight: '13px',
    padding: '4px',
  },
  table: {
    fontSize: '14px',
    border: `1px solid ${azureColors.lt800}`,
    header: {
      borderBottomColor: azureColors.drk800,
      color: azureColors.drk800,
      fontWeight: 'bold',
    },
    row: {
      borderBottomColor: azureColors.lt800,
      highlightColor: azureColors.highlight200,
      hoverColor: azureColors.lt200,
      readonlyColor: azureColors.lt200,
    },
    column: {
      highlightColor: azureColors.highlight200,
      readonlyColor: azureColors.lt200,
    },
  },
  datepicker: {
    zIndex: 99,
  },
  tabs: {
    color: azureColors.drk800,
    borderColor: azureColors.primary,
    hoverColor: azureColors.primaryFaded,
    borderRadius: '0px',
    bottomBorderWidth: '4px',

    fontSize: '14px',
    padding: '0 0 4px 0',
    margin: '16px 16px 0 16px',
  },
  copyToClipboard: {
    fontFamily: 'monospace',
    fontSize: '14px',
    color: azureColors.drk800,
    background: azureColors.lt200,
    copiedColor: azureColors.drk400,
    padding: '16px',
    button: {
      textTransform: 'uppercase',
      height: '20px',
      fontWeight: 600,
      primaryColor: azureColors.primary,
      successColor: azureColors.success,
      margin: '0 4px',
    },
  },
  navbar: {
    height: '64px',
    background: azureColors.white,
    padding: '0 45px ',
    borderTop: '',
    borderBottom: '',
    color: azureColors.drk800,
  },
  tabnav: {
    background: azureColors.highlight200,
    padding: '0 32px',
    borderTop: 'none',
    borderBottom: `1px solid ${azureColors.lt800}`,
    color: azureColors.drk800,
    tab: {
      padding: '4px 0 8px',
      margin: '0 56px 0 0',
      color: 'inherit',
      fontWeight: 'inherit',
      cursor: 'pointer',
      background: 'transparent',
      opacity: '1',
      bottomBorderWidth: '0',
      bottomBorderColor: 'transparent',
      transition: 'opacity 0.15s',
      iconColor: azureColors.primary,
    },
    activetab: {
      color: azureColors.drk800,
      fontWeight: 700,
      cursor: 'pointer',
      background: 'transparent',
      opacity: '1',
      bottomBorderWidth: '4px',
      bottomBorderColor: azureColors.primary,
      iconColor: azureColors.primary,
    },
    tabDropdown: {
      color: azureColors.drk800,
      background: azureColors.white,
      padding: '8px 16px',
      hoverColor: azureColors.primary,
      hoverBackground: azureColors.lt200,
    },
  },
  sidenav: {
    fontSize: '14px',
    color: azureColors.primary,
    height: '',
    width: '50px',
    openWidth: '220px',
    background: azureColors.lt200,
    padding: '',
    margin: '',
    zIndex: 5,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 'auto',
    borderLeft: '',
    borderRight: `1px solid ${azureColors.lt800}`,
    transition: 'min-width 0.15s',
    secondaryNavbar: {
      width: '0px',
      openWidth: '170px',
      background: azureColors.white,
      padding: '80px 0 16px',
      margin: '',
      zIndex: 4,
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 'auto',
      borderLeft: '',
      borderRight: `1px solid ${azureColors.lt800}`,
      transition: 'left 0.15s',
    },
    nav: {
      padding: '',
      margin: '',
    },
    toggle: {
      height: '80px',
      cursor: 'pointer',
      padding: '0 12px',
      borderBottom: `1px solid ${azureColors.lt800}`,
      display: 'grid',
    },
    navItem: {
      color: 'inherit',
      fontWeight: 'inherit',
      cursor: 'pointer',
      background: 'transparent',
      opacity: '1',
      leftBorderWidth: '0',
      leftBorderColor: 'transparent',
      topNavBorderBottom: `1px solid ${azureColors.lt800}`,
      bottonNavBorderBottom: '',
      transition: 'opacity 0.15s',
    },
    activenavItem: {
      color: azureColors.primary,
      fontWeight: 700,
      cursor: 'pointer',
      background: azureColors.white,
      opacity: '1',
      leftBorderWidth: '4px',
      leftBorderColor: azureColors.primary,
      topNavBorderBottom: `1px solid ${azureColors.lt800}`,
      bottonNavBorderBottom: '',
    },
    activeSecnavItem: {
      color: azureColors.primary,
      fontWeight: 700,
      background: azureColors.lt200,
    },
    itemToggle: {
      position: 'absolute',
      right: '0',
      background: azureColors.lt200,
      height: '100%',
      width: '30px',
      display: 'flex',
    },
    navIcon: {
      padding: '8px 0 8px 12px',
    },
    navText: {
      padding: '8px 0 8px 12px',
    },
  },
  spinner: {
    backgroundColor: azureColors.lt800,
    borderColor: azureColors.primary,
  },
  itemContainer: {
    borderColor: azureColors.lt800,
  },
  select: {
    color: azureColors.drk800,
    dropdownColor: azureColors.drk800,
    optionBackgroundColor: azureColors.white,
    searchOptionBackgroundColor: azureColors.lt200,
    hoverOptionColor: azureColors.primary,
    selectedOptionColor: azureColors.primary,
    selectedOptionBackgroundColor: azureColors.white,
    borderColor: azureColors.drk400,
    placeholderColor: azureColors.drk400,
    width: '100%',
    disabled: {
      color: azureColors.drk800,
      dropdownColor: azureColors.drk400,
      borderColor: azureColors.lt600,
      backgroundColor: azureColors.lt600,
      placeholderColor: azureColors.drk400,
    },
    sm: {
      height: '28px',
      padding: '2px 10px',
    },
    md: {
      height: '32px',
      padding: '3px 10px 2px',
    },
    lg: {
      height: '40px',
      padding: '6px 13px',
    },
    multiSelect: {
      badge: {
        backgroundColor: azureColors.lt600,
        borderRadius: '10px',
        disabled: {
          backgroundColor: azureColors.drk200,
        },
      },
      sm: {
        height: '26px',
        padding: '0px 10px',
        valueMargin: '2px 8px 2px 0',
        labelHeight: '20px',
        borderRadius: '4px',
        indicatorsPosition: '0px',
      },
      md: {
        height: '28px',
        padding: '2px 10px 0 10px',
        valueMargin: '0 8px 2px 0',
        labelHeight: '24px',
        borderRadius: '4px',
        indicatorsPosition: '0px',
      },
      lg: {
        height: '33px',
        padding: '5px 13px 0 13px',
        valueMargin: '0 8px 5px 0',
        labelHeight: '28px',
        borderRadius: '4px',
        indicatorsPosition: '0px',
      },
    },
  },
  fileUpload: {
    fontSize: '14px',
    dropZone: {
      color: azureColors.secondaryHover,
      border: `1px dashed ${azureColors.lt800}`,
      draggingBorder: `1px dashed ${azureColors.drk400}`,
      borderRadius: '1px',
      textAlign: 'center',
      padding: '16px',
      margin: '0 0 16px',
      ctaColor: azureColors.primary,
      background: azureColors.white,
      draggingBackground: azureColors.lt200,
    },
    file: {
      defaultColor: azureColors.drk800,
      primaryColor: azureColors.primary,
      dangerColor: azureColors.danger,
      background: azureColors.lt200,
      borderRadius: '1px',
      textAlign: 'left',
      padding: '16px',
      margin: '3px 0',
    },
  },
  progressBar: {
    height: '8px',
    borderRadius: '6px',
    background: azureColors.lt800,
    progressBackground: azureColors.primary,
    transition: 'width .2s ease-in',
  },
  toast: {
    position: {
      top: '20px',
      left: '20px',
      right: '20px',
      bottom: '20px',
    },
  },
};
