import { defaultColors } from './default';

export { ThemeProvider } from 'styled-components';

export const windfallColors = {
  white: '#ffffff',
  black: '#000000',
  highlight400: '#CFEBF7',
  highlight200: '#E4F1F7',
  drk800: '#000000',
  drk600: '#80878B',
  drk400: '#A7ADB1',
  drk200: '#C6CACC',
  lt800: '#DADCDE',
  lt600: '#E6E8EA',
  lt400: '#F0F2F4',
  lt200: '#F5F7F8',
  primary: '#1D7091',
  primaryHover: '#0B3F54',
  primaryFaded: '#79B4CC',
  primaryBackground: '#CFEBF7',
  success: '#6FC8C0',
  successHover: '#178076',
  successFaded: '#B9F0EB',
  successBackground: '#E4FAF8',
  danger: '#FC8F8B',
  dangerHover: '#BF403B',
  dangerFaded: '#FAB9B7',
  dangerBackground: '#FFEAEA',
  warning: '#F8C460',
  warningHover: '#FFA700',
  warningFaded: '#FDE5B6',
  warningBackground: '#FFF6E5',
  secondary: '#A2A4A5',
  secondaryHover: '#80878B',
  secondaryFaded: '#DADCDE',
  secondaryBackground: '#F5F7F8',
};

export const windfallTheme = {
  name: 'windfall',
  colors: windfallColors,
  borders: {
    radius: '1px',
    radiusSm: '3.2px',
    radiusLg: '4.8px',
    width: '1px',
  },
  styles: {
    primary: {
      borderColor: windfallColors.primary,
      flood: windfallColors.primary,
      disabledFlood: windfallColors.drk200,
      lightFlood: windfallColors.primaryFaded,
      hoverlightFlood: windfallColors.primaryFaded,
      text: windfallColors.primary,
      reverseText: windfallColors.white,
      hoverFlood: windfallColors.primaryHover,
      selectedFlood: windfallColors.primaryHover,
      badgeBackground: windfallColors.primaryFaded,
      badgeColor: windfallColors.primaryHover,
      alertColor: windfallColors.white,
      alertBackground: windfallColors.primary,
      notificationColor: windfallColors.white,
      notificationBackground: windfallColors.primary,
      light: {
        alertColor: windfallColors.drk800,
        alertBackground: windfallColors.primaryBackground,
        notificationColor: windfallColors.drk800,
        notificationBackground: windfallColors.primaryBackground,
        badgeBackground: windfallColors.primaryBackground,
        badgeColor: windfallColors.primary,
      },
      cardTopBorderColor: windfallColors.primary,
    },
    secondary: {
      borderColor: windfallColors.secondary,
      flood: windfallColors.secondary,
      disabledFlood: windfallColors.drk200,
      lightFlood: windfallColors.secondaryFaded,
      hoverlightFlood: windfallColors.secondaryFaded,
      text: windfallColors.primary,
      reverseText: windfallColors.primaryHover,
      hoverFlood: windfallColors.secondaryHover,
      selectedFlood: windfallColors.secondaryHover,
      badgeBackground: windfallColors.secondaryFaded,
      badgeColor: windfallColors.primaryHover,
      alertColor: windfallColors.drk800,
      alertBackground: windfallColors.secondary,
      notificationColor: windfallColors.drk800,
      notificationBackground: windfallColors.secondary,
      light: {
        alertColor: windfallColors.drk800,
        alertBackground: windfallColors.secondaryBackground,
        notificationColor: windfallColors.drk800,
        notificationBackground: windfallColors.secondaryBackground,
        badgeBackground: windfallColors.secondaryBackground,
        badgeColor: windfallColors.secondary,
      },
      cardTopBorderColor: windfallColors.secondary,
    },
    danger: {
      borderColor: windfallColors.danger,
      flood: windfallColors.danger,
      disabledFlood: windfallColors.drk200,
      lightFlood: windfallColors.dangerFaded,
      hoverlightFlood: windfallColors.dangerFaded,
      text: windfallColors.danger,
      reverseText: windfallColors.primaryHover,
      hoverFlood: windfallColors.dangerHover,
      selectedFlood: windfallColors.dangerHover,
      badgeBackground: windfallColors.dangerFaded,
      badgeColor: windfallColors.dangerHover,
      alertColor: windfallColors.drk800,
      alertBackground: windfallColors.danger,
      notificationColor: windfallColors.white,
      notificationBackground: windfallColors.danger,
      light: {
        alertColor: windfallColors.drk800,
        alertBackground: windfallColors.dangerBackground,
        notificationColor: windfallColors.drk800,
        notificationBackground: windfallColors.dangerBackground,
        badgeBackground: windfallColors.dangerBackground,
        badgeColor: windfallColors.danger,
      },
      cardTopBorderColor: windfallColors.danger,
    },
    warning: {
      borderColor: windfallColors.warning,
      flood: windfallColors.warning,
      disabledFlood: windfallColors.drk200,
      lightFlood: windfallColors.warningFaded,
      hoverlightFlood: windfallColors.warningFaded,
      text: windfallColors.warning,
      reverseText: windfallColors.primaryHover,
      hoverFlood: windfallColors.warningHover,
      selectedFlood: windfallColors.warningHover,
      badgeBackground: windfallColors.warningFaded,
      badgeColor: windfallColors.primaryHover,
      alertColor: windfallColors.drk800,
      alertBackground: windfallColors.warning,
      notificationColor: windfallColors.white,
      notificationBackground: windfallColors.warning,
      light: {
        alertColor: windfallColors.drk800,
        alertBackground: windfallColors.warningBackground,
        notificationColor: windfallColors.drk800,
        notificationBackground: windfallColors.warningBackground,
        badgeBackground: windfallColors.warningBackground,
        badgeColor: windfallColors.warning,
      },
      cardTopBorderColor: windfallColors.warning,
    },
    success: {
      borderColor: windfallColors.success,
      flood: windfallColors.success,
      disabledFlood: windfallColors.drk200,
      lightFlood: windfallColors.successFaded,
      hoverlightFlood: windfallColors.successFaded,
      text: windfallColors.success,
      reverseText: windfallColors.primaryHover,
      hoverFlood: windfallColors.successHover,
      selectedFlood: windfallColors.successHover,
      badgeBackground: windfallColors.successFaded,
      badgeColor: windfallColors.successHover,
      alertColor: windfallColors.drk800,
      alertBackground: windfallColors.success,
      notificationColor: windfallColors.white,
      notificationBackground: windfallColors.success,
      light: {
        alertColor: windfallColors.drk800,
        alertBackground: windfallColors.successBackground,
        notificationColor: windfallColors.drk800,
        notificationBackground: windfallColors.successBackground,
        badgeBackground: windfallColors.successBackground,
        badgeColor: windfallColors.success,
      },
      cardTopBorderColor: windfallColors.success,
    },
  },
  pagination: {
    text: windfallColors.drk800,
    fontWeight: 'normal',
    padding: '4px 0',
    background: windfallColors.white,

    activeText: windfallColors.primary,
    activeFontWeight: 'bold',
    activeBackground: windfallColors.white,
    disabledText: windfallColors.secondaryHover,
    disabledBackground: windfallColors.white,
    hoverTextColor: windfallColors.primary,
    hoverBackground: windfallColors.white,
    hoverFontWeight: 'bold',

    button: {
      width: '24px',
      height: '24px',
      fontWeight: 'normal',
      padding: '3px 3px 4px',
      borderColor: windfallColors.white,
      activeBorderColor: windfallColors.primary,
      disabledBorderColor: windfallColors.white,
      disabledText: windfallColors.lt600,
      hoverBorderColor: windfallColors.white,
      hoverBackground: windfallColors.lt400,
    },
  },
  body: {
    fontFamily: '"acumin-pro", sans-serif',
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '18px',
    color: windfallColors.drk800,
    backgroundColor: windfallColors.white,
  },
  button: {
    outlineBackgroundColor: windfallColors.white,
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
    fontFamily: '"acumin-pro", sans-serif',
    secondaryFontFamily: '',
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '160%',
    color: windfallColors.drk800,
    caption: {
      10: {
        fontFamily: '"acumin-pro", sans-serif',
        fontWeight: '400',
        fontSize: '10px',
        lineHeight: '100%',
      },
      20: {
        fontFamily: '"acumin-pro", sans-serif',
        fontWeight: '400',
        fontSize: '12px',
        lineHeight: '100%',
      },
    },
    bodyText: {
      10: {
        fontFamily: '"acumin-pro", sans-serif',
        fontWeight: '400',
        fontSize: '12px',
        lineHeight: '100%',
      },
      20: {
        fontFamily: '"acumin-pro", sans-serif',
        fontWeight: '400',
        fontSize: '14px',
        lineHeight: '160%',
      },
    },
    code: {
      background: windfallColors.lt200,
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
        fontFamily: '"acumin-pro", sans-serif',
        fontWeight: '300',
        fontSize: '27px',
        lineHeight: '125%',
      },
      20: {
        fontFamily: '"acumin-pro", sans-serif',
        fontWeight: '400',
        fontSize: '37px',
        lineHeight: '120%',
      },
    },
    header: {
      10: {
        fontFamily: '"acumin-pro", sans-serif',
        fontWeight: '700',
        fontSize: '14px',
        lineHeight: '160%',
      },
      20: {
        fontFamily: '"acumin-pro", sans-serif',
        fontWeight: '500',
        fontSize: '16px',
        lineHeight: '175%',
      },
    },
    link: {
      fontWeight: '400',
      fontSize: '14px',
      color: windfallColors.primary,
      textDecoration: 'none',
      disabled: {
        color: windfallColors.drk400,
      },
      visited: {
        color: windfallColors.primary,
        textDecoration: 'underline',
      },
      hover: {
        color: windfallColors.primary,
        textDecoration: 'underline',
      },
    },
    pre: {
      background: windfallColors.lt200,
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
        fontFamily: '"acumin-pro", sans-serif',
        fontWeight: '300',
        fontSize: '18px',
        lineHeight: '130%',
      },
      20: {
        fontFamily: '"acumin-pro", sans-serif',
        fontWeight: '500',
        fontSize: '20px',
        lineHeight: '135%',
      },
    },
  },
  input: {
    background: windfallColors.white,
    border: `1px solid ${windfallColors.secondary}`,
    color: windfallColors.drk800,
    fontSize: '14px',
    placeholderColor: windfallColors.drk400,
    disabled: {
      background: windfallColors.lt600,
      border: `1px solid ${windfallColors.lt600}`,
      addonTextColor: windfallColors.drk400,
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
      color: windfallColors.drk800,
      horizontalMargin: '12px 0',
    },
    label: {
      padding: '8px 16px 8px 0',
      fontWeight: 500,
      horizontalWidth: '300px',
    },
  },
  radioButton: {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: windfallColors.primary,
    disabledRadio: windfallColors.drk200,
    disabledText: windfallColors.drk600,
    unselectedColor: windfallColors.white,
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
    borderColor: windfallColors.primary,
    disabledCheck: windfallColors.lt600,
    disabledText: windfallColors.drk800,
    unselectedColor: windfallColors.white,
    selectedColor: windfallColors.primary,
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
      inactiveColor: windfallColors.lt800,
      inactiveBorderColor: windfallColors.lt800,
      activeColor: windfallColors.lt800,
      activeBorderColor: windfallColors.lt800,
      disabled: windfallColors.lt400,
      disabledBorderColor: windfallColors.lt400,
    },
    inactiveColor: windfallColors.drk600,
    inactiveBorderColor: windfallColors.drk600,
    activeColor: windfallColors.primary,
    activeBorderColor: windfallColors.primary,
    activeDisabledColor: windfallColors.drk200,
    activeDisabledBorderColor: windfallColors.drk200,
    inactiveDisabledColor: windfallColors.drk200,
    inactiveDisabledBorderColor: windfallColors.drk200,
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
        color: windfallColors.drk800,
        backgroundColor: windfallColors.white,
        chevronColor: defaultColors.primary,
      },
      dark: {
        color: windfallColors.drk800,
        backgroundColor: windfallColors.highlight200,
        chevronColor: defaultColors.primary,
      },
    },
  },
  modal: {
    header: {
      minHeight: '0',
      backgroundColor: windfallColors.white,
      borderColor: windfallColors.lt800,
      padding: '15px',
      fontSize: '16px',
      color: windfallColors.drk800,
    },
    body: {
      minHeight: '0',
      backgroundColor: windfallColors.white,
      borderBottom: windfallColors.lt800,
      padding: '15px',
      color: windfallColors.drk800,
    },
    footer: {
      minHeight: '0',
      backgroundColor: windfallColors.white,
      borderColor: windfallColors.lt800,
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
    background: windfallColors.white,
    backgroundDisabled: windfallColors.secondaryBackground,
    borderColor: windfallColors.secondary,
    color: windfallColors.drk800,
    padding: '6px 12px',
    placeholderColor: windfallColors.drk400,
    disabled: {
      background: windfallColors.lt600,
      borderColor: windfallColors.secondaryFaded,
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
    headerBorderColor: windfallColors.drk400,
    bodyBackgroundColor: windfallColors.lt200,
    bodyBorderColor: windfallColors.drk400,
    headerColor: windfallColors.primary,
    headerBackgroundColor: windfallColors.white,
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
    fontWeight: '400',
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
    borderColor: windfallColors.secondaryHover,
    fontSize: '14px',
    padding: '8px 16px',
    background: windfallColors.white,
    boxShadow: '0 2px 4px rgba(0,0,0,.075) !important;',
    highlightAllBorderWidth: '1px',
    highlightedBorderWidth: '5px',
  },
  popover: {
    withArrowDistance: 10,
    withoutArrowDistance: 9,
    background: windfallColors.white,
    color: windfallColors.drk800,
    borderRadius: '1px',
    borderColor: windfallColors.lt800,
    boxShadow: `0 0 5px ${windfallColors.lt800}`,
  },
  tooltip: {
    background: windfallColors.drk800,
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
      padding: '8px 14px',
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
    borderColor: windfallColors.danger,
    color: windfallColors.drk800,
    fontSize: '11px',
    fontStyle: 'italic',
    padding: '4px',
  },
  table: {
    fontSize: '14px',
    border: `1px solid ${windfallColors.lt800}`,
    header: {
      borderBottomColor: windfallColors.lt800,
      color: windfallColors.drk800,
      fontWeight: 'bold',
      backgroundColor: windfallColors.highlight200,
      topPadding: '10px',
    },
    row: {
      borderBottomColor: windfallColors.drk400,
      highlightColor: windfallColors.highlight200,
      hoverColor: windfallColors.lt200,
      readonlyColor: windfallColors.lt200,
    },
    column: {
      highlightColor: windfallColors.highlight200,
      readonlyColor: windfallColors.lt200,
    },
  },
  datepicker: {
    zIndex: 99,
  },
  tabs: {
    color: windfallColors.drk800,
    borderColor: windfallColors.primary,
    hoverColor: windfallColors.primaryFaded,
    borderRadius: '0px',
    bottomBorderWidth: '5px',
    fontSize: '14px',
    padding: '12px',
    margin: '0',
  },
  copyToClipboard: {
    fontFamily: 'monospace',
    fontSize: '14px',
    color: windfallColors.drk800,
    background: windfallColors.lt200,
    copiedColor: windfallColors.drk400,
    padding: '16px',
    button: {
      textTransform: 'uppercase',
      height: '20px',
      fontWeight: 600,
      primaryColor: windfallColors.primary,
      successColor: windfallColors.success,
      margin: '0 4px',
    },
  },
  navbar: {
    height: '64px',
    background: windfallColors.white,
    padding: '0 45px ',
    borderTop: '',
    borderBottom: '',
    color: windfallColors.drk800,
  },
  tabnav: {
    background: windfallColors.highlight200,
    padding: '0 32px',
    borderTop: 'none',
    borderBottom: `1px solid ${windfallColors.lt800}`,
    color: windfallColors.drk800,
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
      iconColor: windfallColors.primary,
    },
    activetab: {
      color: windfallColors.drk800,
      fontWeight: 700,
      cursor: 'pointer',
      background: 'transparent',
      opacity: '1',
      bottomBorderWidth: '4px',
      bottomBorderColor: windfallColors.primary,
      iconColor: windfallColors.primary,
    },
    tabDropdown: {
      color: windfallColors.drk800,
      background: windfallColors.white,
      padding: '8px 16px',
      hoverColor: windfallColors.primary,
      hoverBackground: windfallColors.lt200,
    },
  },
  sidenav: {
    fontSize: '14px',
    color: windfallColors.primary,
    height: '',
    width: '50px',
    openWidth: '220px',
    background: windfallColors.lt200,
    padding: '',
    margin: '',
    zIndex: 5,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 'auto',
    borderLeft: '',
    borderRight: `1px solid ${windfallColors.lt800}`,
    transition: 'min-width 0.15s',
    secondaryNavbar: {
      width: '0px',
      openWidth: '170px',
      background: windfallColors.white,
      padding: '80px 0 16px',
      margin: '',
      zIndex: 4,
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 'auto',
      borderLeft: '',
      borderRight: `1px solid ${windfallColors.lt800}`,
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
      borderBottom: `1px solid ${windfallColors.lt800}`,
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
      topNavBorderBottom: `1px solid ${windfallColors.lt800}`,
      bottonNavBorderBottom: '',
      transition: 'opacity 0.15s',
    },
    activenavItem: {
      color: windfallColors.primary,
      fontWeight: 700,
      cursor: 'pointer',
      background: windfallColors.white,
      opacity: '1',
      leftBorderWidth: '4px',
      leftBorderColor: windfallColors.primary,
      topNavBorderBottom: `1px solid ${windfallColors.lt800}`,
      bottonNavBorderBottom: '',
    },
    activeSecnavItem: {
      color: windfallColors.primary,
      fontWeight: 700,
      background: windfallColors.lt200,
    },
    itemToggle: {
      position: 'absolute',
      right: '0',
      background: windfallColors.lt200,
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
    backgroundColor: windfallColors.lt800,
    borderColor: windfallColors.primary,
  },
  itemContainer: {
    borderColor: windfallColors.lt800,
  },
  select: {
    color: windfallColors.drk800,
    dropdownColor: windfallColors.drk800,
    optionBackgroundColor: windfallColors.white,
    hoverOptionBackgroundColor: windfallColors.lt200,
    hoverOptionColor: windfallColors.primary,
    selectedOptionColor: windfallColors.primary,
    selectedOptionBackgroundColor: windfallColors.white,
    borderColor: windfallColors.secondary,
    width: '100%',
    disabled: {
      color: windfallColors.drk800,
      dropdownColor: windfallColors.drk400,
      borderColor: windfallColors.lt600,
      backgroundColor: windfallColors.lt600,
      placeholderColor: windfallColors.drk400,
    },
    sm: {
      height: '28px',
      padding: '2px 10px',
    },
    md: {
      height: '32px',
      padding: '0px 10px 2px',
    },
    lg: {
      height: '40px',
      padding: '4px 13px',
    },
    multiSelect: {
      badgeBackgroundColor: windfallColors.lt600,
      disabled: {
        badgeBackgroundColor: windfallColors.drk200,
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
      color: windfallColors.secondaryHover,
      border: `1px dashed ${windfallColors.lt800}`,
      draggingBorder: `1px dashed ${windfallColors.drk400}`,
      borderRadius: '1px',
      textAlign: 'center',
      padding: '16px',
      margin: '0 0 16px',
      ctaColor: windfallColors.primary,
      background: windfallColors.white,
      draggingBackground: windfallColors.lt200,
    },
    file: {
      defaultColor: windfallColors.drk800,
      primaryColor: windfallColors.primary,
      dangerColor: windfallColors.danger,
      background: windfallColors.lt200,
      borderRadius: '1px',
      textAlign: 'left',
      padding: '16px',
      margin: '3px 0',
    },
  },
  progressBar: {
    height: '8px',
    borderRadius: '6px',
    background: windfallColors.lt800,
    progressBackground: windfallColors.primary,
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
