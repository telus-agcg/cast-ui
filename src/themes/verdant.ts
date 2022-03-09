import { defaultColors } from './default';

export { ThemeProvider } from 'styled-components';

export const verdantColors = {
  white: '#ffffff',
  black: '#000000',
  highlight400: '#E1F2FF',
  highlight200: '#F2F6FF',
  drk800: '#032C3B',
  drk600: '#687279',
  drk400: '#A7ADB1',
  drk200: '#C6CACC',
  lt800: '#DADCDE',
  lt600: '#E6E8EA',
  lt400: '#F0F2F4',
  lt200: '#F5F7F8',
  primary: '#2376A9',
  primaryHover: '#174F72',
  primaryFaded: '#3C9CD7',
  primaryBackground: '#D3EDFD',
  success: '#008457',
  successHover: '#006156',
  successFaded: '#00A380',
  successBackground: '#C9F5DC',
  danger: '#FF3B3F',
  dangerHover: '#D11F22',
  dangerFaded: '#F77B7B',
  dangerBackground: '#FDE8EB',
  warning: '#DB5A00',
  warningHover: '#BC5107',
  warningFaded: '#FFA96C',
  warningBackground: '#FEE8D7',
  secondary: '#C6CACC',
  secondaryHover: '#A7ADB1',
  secondaryFaded: '#DADCDE',
  secondaryBackground: '#F0F2F4',
};

export const verdantTheme = {
  name: 'Verdant',
  colors: verdantColors,
  borders: {
    radius: '1px',
    radiusSm: '3.2px',
    radiusLg: '4.8px',
    width: '1px',
  },
  styles: {
    primary: {
      borderColor: verdantColors.primary,
      flood: verdantColors.primary,
      disabledFlood: verdantColors.drk200,
      lightFlood: verdantColors.primaryFaded,
      hoverlightFlood: verdantColors.primaryFaded,
      text: verdantColors.primary,
      reverseText: verdantColors.white,
      hoverFlood: verdantColors.primaryHover,
      selectedFlood: verdantColors.primaryHover,
      badgeBackground: verdantColors.primaryFaded,
      badgeColor: verdantColors.white,
      alertColor: verdantColors.white,
      alertBackground: verdantColors.primary,
      notificationColor: verdantColors.white,
      notificationBackground: verdantColors.primary,
      light: {
        alertColor: verdantColors.drk800,
        alertBackground: verdantColors.primaryBackground,
        notificationColor: verdantColors.drk800,
        notificationBackground: verdantColors.primaryBackground,
        badgeBackground: verdantColors.primaryBackground,
        badgeColor: verdantColors.primary,
      },
      cardTopBorderColor: verdantColors.primary,
    },
    secondary: {
      borderColor: verdantColors.secondary,
      flood: verdantColors.secondary,
      disabledFlood: verdantColors.drk200,
      lightFlood: verdantColors.secondaryFaded,
      hoverlightFlood: verdantColors.secondaryFaded,
      text: verdantColors.primary,
      reverseText: verdantColors.white,
      hoverFlood: verdantColors.secondaryHover,
      selectedFlood: verdantColors.secondaryHover,
      badgeBackground: verdantColors.secondaryFaded,
      badgeColor: verdantColors.drk800,
      alertColor: verdantColors.drk800,
      alertBackground: verdantColors.secondary,
      notificationColor: verdantColors.drk800,
      notificationBackground: verdantColors.secondary,
      light: {
        alertColor: verdantColors.drk800,
        alertBackground: verdantColors.secondaryBackground,
        notificationColor: verdantColors.drk800,
        notificationBackground: verdantColors.secondaryBackground,
        badgeBackground: verdantColors.secondaryBackground,
        badgeColor: verdantColors.secondary,
      },
      cardTopBorderColor: verdantColors.secondary,
    },
    danger: {
      borderColor: verdantColors.danger,
      flood: verdantColors.danger,
      disabledFlood: verdantColors.drk200,
      lightFlood: verdantColors.dangerFaded,
      hoverlightFlood: verdantColors.dangerFaded,
      text: verdantColors.danger,
      reverseText: verdantColors.white,
      hoverFlood: verdantColors.dangerHover,
      selectedFlood: verdantColors.dangerHover,
      badgeBackground: verdantColors.dangerFaded,
      badgeColor: verdantColors.white,
      alertColor: verdantColors.white,
      alertBackground: verdantColors.danger,
      notificationColor: verdantColors.white,
      notificationBackground: verdantColors.danger,
      light: {
        alertColor: verdantColors.drk800,
        alertBackground: verdantColors.dangerBackground,
        notificationColor: verdantColors.drk800,
        notificationBackground: verdantColors.dangerBackground,
        badgeBackground: verdantColors.dangerBackground,
        badgeColor: verdantColors.danger,
      },
      cardTopBorderColor: verdantColors.danger,
    },
    warning: {
      borderColor: verdantColors.warning,
      flood: verdantColors.warning,
      disabledFlood: verdantColors.drk200,
      lightFlood: verdantColors.warningFaded,
      hoverlightFlood: verdantColors.warningFaded,
      text: verdantColors.warning,
      reverseText: verdantColors.white,
      hoverFlood: verdantColors.warningHover,
      selectedFlood: verdantColors.warningHover,
      badgeBackground: verdantColors.warningFaded,
      badgeColor: verdantColors.white,
      alertColor: verdantColors.white,
      alertBackground: verdantColors.warning,
      notificationColor: verdantColors.white,
      notificationBackground: verdantColors.warning,
      light: {
        alertColor: verdantColors.drk800,
        alertBackground: verdantColors.warningBackground,
        notificationColor: verdantColors.drk800,
        notificationBackground: verdantColors.warningBackground,
        badgeBackground: verdantColors.warningBackground,
        badgeColor: verdantColors.warning,
      },
      cardTopBorderColor: verdantColors.warning,
    },
    success: {
      borderColor: verdantColors.success,
      flood: verdantColors.success,
      disabledFlood: verdantColors.drk200,
      lightFlood: verdantColors.successFaded,
      hoverlightFlood: verdantColors.successFaded,
      text: verdantColors.success,
      reverseText: verdantColors.white,
      hoverFlood: verdantColors.successHover,
      selectedFlood: verdantColors.successHover,
      badgeBackground: verdantColors.successFaded,
      badgeColor: verdantColors.white,
      alertColor: verdantColors.white,
      alertBackground: verdantColors.success,
      notificationColor: verdantColors.white,
      notificationBackground: verdantColors.success,
      light: {
        alertColor: verdantColors.drk800,
        alertBackground: verdantColors.successBackground,
        notificationColor: verdantColors.drk800,
        notificationBackground: verdantColors.successBackground,
        badgeBackground: verdantColors.successBackground,
        badgeColor: verdantColors.success,
      },
      cardTopBorderColor: verdantColors.success,
    },
  },
  pagination: {
    text: verdantColors.drk800,
    fontWeight: 'normal',
    padding: '4px 0',
    background: verdantColors.white,

    activeText: verdantColors.primary,
    activeFontWeight: 'bold',
    activeBackground: verdantColors.white,
    disabledText: verdantColors.secondaryHover,
    disabledBackground: verdantColors.white,
    hoverTextColor: verdantColors.primary,
    hoverBackground: verdantColors.white,
    hoverFontWeight: 'bold',

    button: {
      width: '24px',
      height: '24px',
      fontWeight: 'normal',
      padding: '3px 3px 4px',
      borderColor: verdantColors.white,
      activeBorderColor: verdantColors.primary,
      disabledBorderColor: verdantColors.white,
      disabledText: verdantColors.lt600,
      hoverBorderColor: verdantColors.white,
      hoverBackground: verdantColors.lt400,
    },
  },
  body: {
    fontFamily: '"IBM Plex Sans", sans-serif',
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '18px',
    color: verdantColors.drk800,
    backgroundColor: verdantColors.white,
  },
  button: {
    outlineBackgroundColor: verdantColors.white,
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
    fontFamily: '"IBM Plex Sans", sans-serif',
    secondaryFontFamily: '',
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '160%',
    color: verdantColors.drk800,
    caption: {
      10: {
        fontFamily: '"IBM Plex Sans", sans-serif',
        fontWeight: '400',
        fontSize: '10px',
        lineHeight: '100%',
      },
      20: {
        fontFamily: '"IBM Plex Sans", sans-serif',
        fontWeight: '400',
        fontSize: '12px',
        lineHeight: '100%',
      },
    },
    bodyText: {
      10: {
        fontFamily: '"IBM Plex Sans", sans-serif',
        fontWeight: '400',
        fontSize: '12px',
        lineHeight: '100%',
      },
      20: {
        fontFamily: '"IBM Plex Sans", sans-serif',
        fontWeight: '400',
        fontSize: '14px',
        lineHeight: '160%',
      },
    },
    code: {
      background: verdantColors.lt200,
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
        fontFamily: '"IBM Plex Sans", sans-serif',
        fontWeight: '300',
        fontSize: '27px',
        lineHeight: '125%',
      },
      20: {
        fontFamily: '"IBM Plex Sans", sans-serif',
        fontWeight: '400',
        fontSize: '37px',
        lineHeight: '120%',
      },
    },
    header: {
      10: {
        fontFamily: '"IBM Plex Sans", sans-serif',
        fontWeight: '700',
        fontSize: '14px',
        lineHeight: '160%',
      },
      20: {
        fontFamily: '"IBM Plex Sans", sans-serif',
        fontWeight: '500',
        fontSize: '16px',
        lineHeight: '175%',
      },
    },
    link: {
      fontWeight: '400',
      fontSize: '14px',
      color: verdantColors.primary,
      textDecoration: 'none',
      disabled: {
        color: verdantColors.drk400,
      },
      visited: {
        color: verdantColors.primary,
        textDecoration: 'underline',
      },
      hover: {
        color: verdantColors.primary,
        textDecoration: 'underline',
      },
    },
    pre: {
      background: verdantColors.lt200,
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
        fontFamily: '"IBM Plex Sans", sans-serif',
        fontWeight: '300',
        fontSize: '18px',
        lineHeight: '130%',
      },
      20: {
        fontFamily: '"IBM Plex Sans", sans-serif',
        fontWeight: '500',
        fontSize: '20px',
        lineHeight: '135%',
      },
    },
  },
  input: {
    background: verdantColors.white,
    border: `1px solid ${verdantColors.secondary}`,
    color: verdantColors.drk600,
    fontSize: '14px',
    placeholderColor: verdantColors.drk400,
    disabled: {
      background: verdantColors.lt600,
      border: `1px solid ${verdantColors.lt600}`,
      addonTextColor: verdantColors.drk400,
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
      color: verdantColors.drk800,
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
    borderColor: verdantColors.primary,
    disabledRadio: verdantColors.drk200,
    disabledText: verdantColors.drk600,
    unselectedColor: verdantColors.white,
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
    borderColor: verdantColors.primary,
    disabledCheck: verdantColors.drk200,
    disabledText: verdantColors.lt600,
    unselectedColor: verdantColors.white,
    selectedColor: verdantColors.primary,
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
      inactiveColor: verdantColors.lt800,
      inactiveBorderColor: verdantColors.lt800,
      activeColor: verdantColors.lt800,
      activeBorderColor: verdantColors.lt800,
      disabled: verdantColors.lt400,
      disabledBorderColor: verdantColors.lt400,
    },
    inactiveColor: verdantColors.drk600,
    inactiveBorderColor: verdantColors.drk600,
    activeColor: verdantColors.primary,
    activeBorderColor: verdantColors.primary,
    activeDisabledColor: verdantColors.drk200,
    activeDisabledBorderColor: verdantColors.drk200,
    inactiveDisabledColor: verdantColors.drk200,
    inactiveDisabledBorderColor: verdantColors.drk200,
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
        color: verdantColors.drk800,
        backgroundColor: verdantColors.white,
        chevronColor: defaultColors.primary,
      },
      dark: {
        color: verdantColors.drk800,
        backgroundColor: verdantColors.highlight200,
        chevronColor: defaultColors.primary,
      },
    },
  },
  modal: {
    header: {
      minHeight: '0',
      backgroundColor: verdantColors.white,
      borderColor: verdantColors.lt800,
      padding: '15px',
      fontSize: '16px',
      color: verdantColors.drk800,
    },
    body: {
      minHeight: '0',
      backgroundColor: verdantColors.white,
      borderBottom: verdantColors.lt800,
      padding: '15px',
      color: verdantColors.drk800,
    },
    footer: {
      minHeight: '0',
      backgroundColor: verdantColors.white,
      borderColor: verdantColors.lt800,
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
    background: verdantColors.white,
    backgroundDisabled: verdantColors.secondaryBackground,
    borderColor: verdantColors.secondary,
    color: verdantColors.drk800,
    padding: '6px 12px',
    placeholderColor: verdantColors.drk400,
    disabled: {
      background: verdantColors.lt600,
      borderColor: verdantColors.secondaryFaded,
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
    headerBorderColor: verdantColors.drk400,
    bodyBackgroundColor: verdantColors.lt200,
    bodyBorderColor: verdantColors.drk400,
    headerColor: verdantColors.primary,
    headerBackgroundColor: verdantColors.white,
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
    borderColor: verdantColors.secondaryHover,
    fontSize: '14px',
    padding: '8px 16px',
    background: verdantColors.white,
    boxShadow: '0 2px 4px rgba(0,0,0,.075) !important;',
    highlightAllBorderWidth: '1px',
    highlightedBorderWidth: '5px',
  },
  popover: {
    withArrowDistance: 10,
    withoutArrowDistance: 9,
    background: verdantColors.white,
    color: verdantColors.drk800,
    borderRadius: '1px',
    borderColor: verdantColors.lt800,
    boxShadow: `0 0 5px ${verdantColors.lt800}`,
  },
  tooltip: {
    background: verdantColors.drk800,
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
    borderColor: verdantColors.danger,
    color: verdantColors.drk800,
    fontSize: '11px',
    fontStyle: 'italic',
    padding: '4px',
  },
  table: {
    fontSize: '14px',
    border: `1px solid ${verdantColors.lt800}`,
    header: {
      borderBottomColor: verdantColors.lt800,
      color: verdantColors.drk800,
      fontWeight: 'bold',
      backgroundColor: verdantColors.lt200,
      topPadding: '10px',
    },
    row: {
      borderBottomColor: verdantColors.drk400,
      highlightColor: verdantColors.highlight200,
      hoverColor: verdantColors.lt200,
      readonlyColor: verdantColors.lt200,
    },
    column: {
      highlightColor: verdantColors.highlight200,
      readonlyColor: verdantColors.lt200,
    },
  },
  datepicker: {
    zIndex: 99,
  },
  tabs: {
    color: verdantColors.drk800,
    borderColor: verdantColors.primary,
    hoverColor: verdantColors.primaryFaded,
    borderRadius: '0px',
    bottomBorderWidth: '5px',
    fontSize: '14px',
    padding: '12px',
    margin: '0',
  },
  copyToClipboard: {
    fontFamily: 'monospace',
    fontSize: '14px',
    color: verdantColors.drk800,
    background: verdantColors.lt200,
    copiedColor: verdantColors.drk400,
    padding: '16px',
    button: {
      textTransform: 'uppercase',
      height: '20px',
      fontWeight: 600,
      primaryColor: verdantColors.primary,
      successColor: verdantColors.success,
      margin: '0 4px',
    },
  },
  navbar: {
    height: '64px',
    background: verdantColors.white,
    padding: '0 45px ',
    borderTop: '',
    borderBottom: '',
    color: verdantColors.drk800,
  },
  tabnav: {
    background: verdantColors.highlight200,
    padding: '0 32px',
    borderTop: 'none',
    borderBottom: `1px solid ${verdantColors.lt800}`,
    color: verdantColors.drk800,
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
      iconColor: verdantColors.primary,
    },
    activetab: {
      color: verdantColors.drk800,
      fontWeight: 700,
      cursor: 'pointer',
      background: 'transparent',
      opacity: '1',
      bottomBorderWidth: '4px',
      bottomBorderColor: verdantColors.primary,
      iconColor: verdantColors.primary,
    },
    tabDropdown: {
      color: verdantColors.drk800,
      background: verdantColors.white,
      padding: '8px 16px',
      hoverColor: verdantColors.primary,
      hoverBackground: verdantColors.lt200,
    },
  },
  sidenav: {
    fontSize: '14px',
    color: verdantColors.primary,
    height: '',
    width: '50px',
    openWidth: '220px',
    background: verdantColors.lt200,
    padding: '',
    margin: '',
    zIndex: 5,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 'auto',
    borderLeft: '',
    borderRight: `1px solid ${verdantColors.lt800}`,
    transition: 'min-width 0.15s',
    secondaryNavbar: {
      width: '0px',
      openWidth: '170px',
      background: verdantColors.white,
      padding: '80px 0 16px',
      margin: '',
      zIndex: 4,
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 'auto',
      borderLeft: '',
      borderRight: `1px solid ${verdantColors.lt800}`,
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
      borderBottom: `1px solid ${verdantColors.lt800}`,
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
      topNavBorderBottom: `1px solid ${verdantColors.lt800}`,
      bottonNavBorderBottom: '',
      transition: 'opacity 0.15s',
    },
    activenavItem: {
      color: verdantColors.primary,
      fontWeight: 700,
      cursor: 'pointer',
      background: verdantColors.white,
      opacity: '1',
      leftBorderWidth: '4px',
      leftBorderColor: verdantColors.primary,
      topNavBorderBottom: `1px solid ${verdantColors.lt800}`,
      bottonNavBorderBottom: '',
    },
    activeSecnavItem: {
      color: verdantColors.primary,
      fontWeight: 700,
      background: verdantColors.lt200,
    },
    itemToggle: {
      position: 'absolute',
      right: '0',
      background: verdantColors.lt200,
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
    backgroundColor: verdantColors.lt800,
    borderColor: verdantColors.primary,
  },
  itemContainer: {
    borderColor: verdantColors.lt800,
  },
  select: {
    color: verdantColors.drk800,
    dropdownColor: verdantColors.drk800,
    optionBackgroundColor: verdantColors.white,
    hoverOptionBackgroundColor: verdantColors.lt200,
    hoverOptionColor: verdantColors.primary,
    selectedOptionColor: verdantColors.primary,
    selectedOptionBackgroundColor: verdantColors.white,
    borderColor: verdantColors.secondary,
    width: '100%',
    disabled: {
      color: verdantColors.drk800,
      dropdownColor: verdantColors.drk400,
      borderColor: verdantColors.lt600,
      backgroundColor: verdantColors.lt600,
      placeholderColor: verdantColors.drk400,
    },
    sm: {
      height: '28px',
      padding: '2px 10px',
    },
    md: {
      height: '32px',
      padding: '2px 10px 2px',
    },
    lg: {
      height: '40px',
      padding: '5px 13px',
    },
    multiSelect: {
      badgeBackgroundColor: verdantColors.lt600,
      disabled: {
        badgeBackgroundColor: verdantColors.drk200,
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
      color: verdantColors.secondaryHover,
      border: `1px dashed ${verdantColors.lt800}`,
      draggingBorder: `1px dashed ${verdantColors.drk400}`,
      borderRadius: '1px',
      textAlign: 'center',
      padding: '16px',
      margin: '0 0 16px',
      ctaColor: verdantColors.primary,
      background: verdantColors.white,
      draggingBackground: verdantColors.lt200,
    },
    file: {
      defaultColor: verdantColors.drk800,
      primaryColor: verdantColors.primary,
      dangerColor: verdantColors.danger,
      background: verdantColors.lt200,
      borderRadius: '1px',
      textAlign: 'left',
      padding: '16px',
      margin: '3px 0',
    },
  },
  progressBar: {
    height: '8px',
    borderRadius: '6px',
    background: verdantColors.lt800,
    progressBackground: verdantColors.primary,
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
