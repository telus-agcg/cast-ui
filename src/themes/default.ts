import { lighten, darken } from '../utils/colorUtils';

export { ThemeProvider } from 'styled-components';

export const defaultColors = {
  white: '#ffffff',
  black: '#000000',
  highlight400: '#E8EEFD',
  highlight200: '#F1F6FF',
  drk800: '#303E47',
  drk600: '#687279',
  drk400: '#A7ADB1',
  drk200: '#C6CACC',
  lt800: '#DADCDE',
  lt600: '#E6E8EA',
  lt400: '#F0F2F4',
  lt200: '#F5F7F8',
  primary: '#167BE0',
  primaryHover: darken('#167BE0', 25),
  primaryFaded: lighten('#167BE0', 25),
  primaryBackground: lighten('#167BE0', 50),
  success: '#59C067',
  successHover: darken('#59C067', 25),
  successFaded: lighten('#59C067', 25),
  successBackground: lighten('#59C067', 50),
  danger: '#D93945',
  dangerHover: darken('#D93945', 25),
  dangerFaded: lighten('#D93945', 25),
  dangerBackground: lighten('#D93945', 50),
  warning: '#FD984E',
  warningHover: darken('#FD984E', 25),
  warningFaded: lighten('#FD984E', 25),
  warningBackground: lighten('#FD984E', 50),
  secondary: '#727A80',
  secondaryHover: darken('#727A80', 25),
  secondaryFaded: lighten('#727A80', 25),
  secondaryBackground: lighten('#727A80', 50),
};

export const defaultTheme = {
  name: 'Default',
  colors: defaultColors,
  borders: {
    radius: '1px',
    radiusSm: '.2rem',
    radiusLg: '.3rem',
    width: '1px',
  },
  styles: {
    primary: {
      borderColor: defaultColors.primary,
      flood: defaultColors.primary,
      disabledFlood: defaultColors.primaryFaded,
      lightFlood: defaultColors.primaryFaded,
      hoverlightFlood: defaultColors.primaryFaded,
      text: defaultColors.primary,
      reverseText: defaultColors.white,
      hoverFlood: defaultColors.primaryHover,
      selectedFlood: defaultColors.primaryHover,
      badgeBackground: defaultColors.primaryFaded,
      badgeColor: defaultColors.white,
      alertColor: defaultColors.white,
      alertBackground: defaultColors.primary,
      notificationColor: defaultColors.white,
      notificationBackground: defaultColors.primary,
      listGroupColor: defaultColors.white,
      listGroupBackground: defaultColors.primary,
      light: {
        alertColor: defaultColors.black,
        alertBackground: defaultColors.primaryFaded,
        notificationColor: defaultColors.black,
        notificationBackground: defaultColors.primaryFaded,
        badgeBackground: defaultColors.primaryFaded,
        badgeColor: defaultColors.black,
      },
      cardTopBorderColor: defaultColors.primary,
    },
    secondary: {
      borderColor: defaultColors.secondary,
      flood: defaultColors.secondary,
      disabledFlood: defaultColors.secondaryFaded,
      lightFlood: defaultColors.secondaryFaded,
      hoverlightFlood: defaultColors.secondaryFaded,
      text: defaultColors.primary,
      reverseText: defaultColors.white,
      hoverFlood: defaultColors.secondaryHover,
      selectedFlood: defaultColors.secondaryHover,
      badgeBackground: defaultColors.secondary,
      badgeColor: defaultColors.white,
      alertColor: defaultColors.black,
      alertBackground: defaultColors.secondary,
      notificationColor: defaultColors.black,
      notificationBackground: defaultColors.secondary,
      listGroupColor: defaultColors.black,
      listGroupBackground: defaultColors.secondary,
      light: {
        alertColor: defaultColors.black,
        alertBackground: defaultColors.secondaryFaded,
        notificationColor: defaultColors.black,
        notificationBackground: defaultColors.secondaryFaded,
        badgeBackground: defaultColors.secondaryFaded,
        badgeColor: defaultColors.drk800,
      },
      cardTopBorderColor: defaultColors.secondary,
    },
    danger: {
      borderColor: defaultColors.danger,
      flood: defaultColors.danger,
      disabledFlood: defaultColors.dangerFaded,
      lightFlood: defaultColors.dangerFaded,
      hoverlightFlood: defaultColors.dangerFaded,
      text: defaultColors.danger,
      reverseText: defaultColors.white,
      hoverFlood: defaultColors.dangerHover,
      selectedFlood: defaultColors.dangerHover,
      badgeBackground: defaultColors.danger,
      badgeColor: defaultColors.white,
      alertColor: defaultColors.white,
      alertBackground: defaultColors.danger,
      notificationColor: defaultColors.white,
      notificationBackground: defaultColors.danger,
      listGroupColor: defaultColors.white,
      listGroupBackground: defaultColors.danger,
      light: {
        alertColor: defaultColors.black,
        alertBackground: defaultColors.dangerFaded,
        notificationColor: defaultColors.black,
        notificationBackground: defaultColors.dangerFaded,
        badgeBackground: defaultColors.dangerBackground,
        badgeColor: defaultColors.danger,
      },
      cardTopBorderColor: defaultColors.danger,
    },
    warning: {
      borderColor: defaultColors.warning,
      flood: defaultColors.warning,
      disabledFlood: defaultColors.warningFaded,
      lightFlood: defaultColors.warningFaded,
      hoverlightFlood: defaultColors.warningFaded,
      text: defaultColors.warning,
      reverseText: defaultColors.white,
      hoverFlood: defaultColors.warningHover,
      selectedFlood: defaultColors.warningHover,
      badgeBackground: defaultColors.warning,
      badgeColor: defaultColors.white,
      alertColor: defaultColors.white,
      alertBackground: defaultColors.warning,
      notificationColor: defaultColors.white,
      notificationBackground: defaultColors.warning,
      listGroupColor: defaultColors.white,
      listGroupBackground: defaultColors.warning,
      light: {
        alertColor: defaultColors.black,
        alertBackground: defaultColors.warningFaded,
        notificationColor: defaultColors.black,
        notificationBackground: defaultColors.warningFaded,
        badgeBackground: defaultColors.warningFaded,
        badgeColor: defaultColors.warningHover,
      },
      cardTopBorderColor: defaultColors.warning,
    },
    success: {
      borderColor: defaultColors.success,
      flood: defaultColors.success,
      disabledFlood: defaultColors.successFaded,
      lightFlood: defaultColors.successFaded,
      hoverlightFlood: defaultColors.successFaded,
      text: defaultColors.success,
      reverseText: defaultColors.white,
      hoverFlood: defaultColors.successHover,
      selectedFlood: defaultColors.successHover,
      badgeBackground: defaultColors.success,
      badgeColor: defaultColors.white,
      alertColor: defaultColors.white,
      alertBackground: defaultColors.success,
      notificationColor: defaultColors.white,
      notificationBackground: defaultColors.success,
      listGroupColor: defaultColors.white,
      listGroupBackground: defaultColors.success,
      light: {
        alertColor: defaultColors.black,
        alertBackground: defaultColors.successFaded,
        notificationColor: defaultColors.black,
        notificationBackground: defaultColors.successFaded,
        badgeBackground: defaultColors.successFaded,
        badgeColor: defaultColors.black,
      },
      cardTopBorderColor: defaultColors.success,
    },
  },
  pagination: {
    text: defaultColors.black,
    fontWeight: 'normal',
    padding: '4px 0',
    background: defaultColors.white,

    activeText: defaultColors.primary,
    activeFontWeight: 'bold',
    activeBackground: defaultColors.white,
    disabledText: defaultColors.secondary,
    disabledBackground: defaultColors.white,
    hoverTextColor: defaultColors.primary,
    hoverBackground: defaultColors.white,
    hoverFontWeight: 'bold',

    button: {
      width: '24px',
      height: '24px',
      fontWeight: 'normal',
      padding: '3px 3px 4px',
      borderColor: defaultColors.white,
      activeBorderColor: defaultColors.primary,
      disabledBorderColor: defaultColors.white,
      disabledText: defaultColors.lt600,
      hoverBorderColor: defaultColors.white,
      hoverBackground: defaultColors.lt400,
    },
  },
  body: {
    fontFamily: 'Roboto, "Open Sans", arial, sans-serif',
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '18px',
    color: defaultColors.primary,
    backgroundColor: defaultColors.white,
  },
  button: {
    outlineBackgroundColor: defaultColors.white,
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
    fontFamily: 'Roboto, "Open Sans", arial, sans-serif',
    secondaryFontFamily: '',
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '160%',
    color: defaultColors.drk800,
    caption: {
      10: {
        fontFamily: 'Roboto, "Open Sans", arial, sans-serif',
        fontWeight: '400',
        fontSize: '10px',
        lineHeight: '100%',
      },
      20: {
        fontFamily: 'Roboto, "Open Sans", arial, sans-serif',
        fontWeight: '400',
        fontSize: '12px',
        lineHeight: '100%',
      },
    },
    bodyText: {
      10: {
        fontFamily: 'Roboto, "Open Sans", arial, sans-serif',
        fontWeight: '400',
        fontSize: '12px',
        lineHeight: '100%',
      },
      20: {
        fontFamily: 'Roboto, "Open Sans", arial, sans-serif',
        fontWeight: '400',
        fontSize: '14px',
        lineHeight: '160%',
      },
    },
    code: {
      background: defaultColors.lt200,
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
        fontFamily: 'Roboto, "Open Sans", arial, sans-serif',
        fontWeight: '400',
        fontSize: '22px',
        lineHeight: '125%',
      },
      20: {
        fontFamily: 'Roboto, "Open Sans", arial, sans-serif',
        fontWeight: '400',
        fontSize: '27px',
        lineHeight: '120%',
      },
    },
    header: {
      10: {
        fontFamily: 'Roboto, "Open Sans", arial, sans-serif',
        fontWeight: '700',
        fontSize: '14px',
        lineHeight: '160%',
      },
      20: {
        fontFamily: 'Roboto, "Open Sans", arial, sans-serif',
        fontWeight: '700',
        fontSize: '23px',
        lineHeight: '175%',
      },
    },
    link: {
      fontWeight: '500',
      fontSize: '14px',
      color: defaultColors.primary,
      textDecoration: 'none',
      disabled: {
        color: defaultColors.drk400,
      },
      visited: {
        color: defaultColors.primaryFaded,
        textDecoration: 'underline',
      },
      hover: {
        color: defaultColors.primary,
        textDecoration: 'underline',
      },
    },
    pre: {
      background: defaultColors.lt200,
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
        fontFamily: 'Roboto, "Open Sans", arial, sans-serif',
        fontWeight: '700',
        fontSize: '16px',
        lineHeight: '130%',
      },
      20: {
        fontFamily: 'Roboto, "Open Sans", arial, sans-serif',
        fontWeight: '700',
        fontSize: '18px',
        lineHeight: '135%',
      },
    },
  },
  input: {
    background: defaultColors.white,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: defaultColors.drk400,
    color: defaultColors.drk800,
    fontSize: '14px',
    placeholderColor: defaultColors.drk400,
    disabled: {
      background: defaultColors.lt600,
      border: `1px solid ${defaultColors.lt600}`,
      addonTextColor: defaultColors.drk400,
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
      color: defaultColors.drk800,
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
    borderColor: defaultColors.primary,
    disabledRadio: defaultColors.drk200,
    disabledText: defaultColors.drk600,
    unselectedColor: defaultColors.white,
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
    borderColor: defaultColors.primary,
    disabledCheck: defaultColors.drk200,
    disabledText: defaultColors.lt600,
    unselectedColor: defaultColors.white,
    selectedColor: defaultColors.primary,
    stackedSpacing: '19px',
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
      inactiveColor: defaultColors.lt800,
      inactiveBorderColor: defaultColors.lt800,
      activeColor: defaultColors.lt800,
      activeBorderColor: defaultColors.lt800,
      disabled: defaultColors.lt400,
      disabledBorderColor: defaultColors.lt400,
    },
    inactiveColor: defaultColors.drk600,
    inactiveBorderColor: defaultColors.drk600,
    activeColor: defaultColors.primary,
    activeBorderColor: defaultColors.primary,
    activeDisabledColor: defaultColors.drk200,
    activeDisabledBorderColor: defaultColors.drk200,
    inactiveDisabledColor: defaultColors.drk200,
    inactiveDisabledBorderColor: defaultColors.drk200,
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
        color: defaultColors.drk800,
        backgroundColor: defaultColors.white,
        chevronColor: defaultColors.primary,
      },
      dark: {
        color: defaultColors.drk800,
        backgroundColor: defaultColors.highlight200,
        chevronColor: defaultColors.primary,
      },
    },
  },
  modal: {
    header: {
      minHeight: '0',
      backgroundColor: defaultColors.lt200,
      borderColor: defaultColors.secondaryFaded,
      padding: '16px 16px',
      fontSize: '16px',
      color: defaultColors.drk800,
    },
    body: {
      minHeight: '0',
      backgroundColor: defaultColors.white,
      borderBottom: defaultColors.secondaryFaded,
      padding: '8px 16px',
      color: defaultColors.drk800,
    },
    footer: {
      minHeight: '0',
      backgroundColor: defaultColors.lt200,
      borderColor: defaultColors.secondaryFaded,
      padding: '8px 16px',
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
    background: defaultColors.white,
    backgroundDisabled: defaultColors.secondaryFaded,
    borderColor: defaultColors.secondary,
    color: defaultColors.secondaryHover,
    padding: '.375rem .75rem',
    placeholderColor: defaultColors.drk400,
    disabled: {
      background: defaultColors.lt600,
      borderColor: defaultColors.drk400,
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
    bodyBackgroundColor: defaultColors.lt200,
    bodyBorderColor: defaultColors.secondaryFaded,
    headerColor: defaultColors.primary,
    headerBackgroundColor: defaultColors.white,
    headerBorderColor: defaultColors.secondaryFaded,
  },
  badge: {
    borderRadius: '10px',
    fontSize: '10px',
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
    display: 'block',
    padding: '8px 16px',
    fontWeight: 'bold',
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
    borderColor: defaultColors.lt800,
    fontSize: '14px',
    padding: '8px 16px',
    background: defaultColors.white,
    boxShadow: '0 2px 4px rgba(0,0,0,.075) !important;',
    highlightAllBorderWidth: '1px',
    highlightedBorderWidth: '5px',
  },
  popover: {
    withArrowDistance: 10,
    withoutArrowDistance: 9,
    background: defaultColors.white,
    color: defaultColors.black,
    borderRadius: '1px',
    borderColor: defaultColors.secondaryFaded,
    boxShadow: `0 0 5px ${defaultColors.secondaryFaded}`,
  },
  tooltip: {
    background: defaultColors.primary,
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
    borderColor: defaultColors.danger,
    color: defaultColors.drk800,
    fontSize: '11px',
    fontStyle: 'italic',
    lineHeight: '13px',
    padding: '4px',
  },
  table: {
    fontSize: '14px',
    header: {
      borderBottomColor: defaultColors.drk800,
      color: defaultColors.primary,
      fontWeight: 'bold',
      fontSize: '16px',
    },
    row: {
      borderBottomColor: defaultColors.lt800,
      hoverColor: defaultColors.secondaryFaded,
      highlightColor: defaultColors.highlight200,
      readonlyColor: defaultColors.lt200,
    },
    column: {
      highlightColor: defaultColors.highlight200,
      readonlyColor: defaultColors.lt200,
    },
  },
  datepicker: {
    zIndex: 99,
  },
  tabs: {
    color: defaultColors.drk800,
    borderColor: defaultColors.primary,
    hoverColor: defaultColors.primaryFaded,
    borderRadius: '0px',
    bottomBorderWidth: '5px',
    fontSize: '14px',
    padding: '12px',
    margin: '0',
  },
  copyToClipboard: {
    fontFamily: 'monospace',
    fontSize: '14px',
    color: defaultColors.primary,
    background: defaultColors.lt200,
    copiedColor: defaultColors.drk400,
    padding: '16px',
    button: {
      textTransform: 'uppercase',
      height: '20px',
      fontWeight: '600',
      primaryColor: defaultColors.primary,
      successColor: defaultColors.success,
      margin: '0 4px',
    },
  },
  navbar: {
    height: '60px',
    background: defaultColors.white,
    padding: '0 32px ',
    borderTop: '',
    borderBottom: '',
    color: defaultColors.primary,
  },
  tabnav: {
    background: lighten(defaultColors.primary, 45),
    padding: '0 32px ',
    borderTop: '',
    borderBottom: '',
    color: defaultColors.primary,
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
      iconColor: defaultColors.primary,
    },
    activetab: {
      color: defaultColors.primary,
      fontWeight: 700,
      cursor: 'pointer',
      background: 'transparent',
      opacity: '1',
      bottomBorderWidth: '4px',
      bottomBorderColor: defaultColors.primary,
      iconColor: defaultColors.primary,
    },
    tabDropdown: {
      color: defaultColors.primary,
      background: defaultColors.white,
      padding: '8px 16px',
      hoverColor: defaultColors.primary,
      hoverBackground: defaultColors.lt200,
    },
  },
  sidenav: {
    fontSize: '14px',
    color: defaultColors.primary,
    height: '',
    width: '50px',
    openWidth: '220px',
    background: defaultColors.lt200,
    padding: '',
    margin: '',
    zIndex: 5,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 'auto',
    borderLeft: '',
    borderRight: `1px solid ${defaultColors.lt800}`,
    transition: 'min-width 0.15s',
    secondaryNavbar: {
      width: '0px',
      openWidth: '170px',
      background: defaultColors.white,
      padding: '80px 0 16px',
      margin: '',
      zIndex: 4,
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 'auto',
      borderLeft: '',
      borderRight: `1px solid ${defaultColors.lt800}`,
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
      borderBottom: `1px solid ${defaultColors.lt800}`,
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
      topNavBorderBottom: `1px solid ${defaultColors.lt800}`,
      bottonNavBorderBottom: '',
      transition: 'opacity 0.15s',
    },
    activenavItem: {
      color: defaultColors.primary,
      fontWeight: 700,
      cursor: 'pointer',
      background: defaultColors.white,
      opacity: '1',
      leftBorderWidth: '4px',
      leftBorderColor: defaultColors.primary,
      topNavBorderBottom: `1px solid ${defaultColors.lt800}`,
      bottonNavBorderBottom: '',
    },
    activeSecnavItem: {
      color: defaultColors.primary,
      fontWeight: 700,
      background: defaultColors.lt200,
    },
    itemToggle: {
      position: 'absolute',
      right: '0',
      background: defaultColors.lt200,
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
    backgroundColor: defaultColors.secondaryFaded,
    borderColor: defaultColors.primary,
  },
  itemContainer: {
    borderColor: defaultColors.secondaryFaded,
  },
  draggable: {
    borderColor: defaultColors.secondaryFaded,
  },
  select: {
    color: defaultColors.drk800,
    dropdownColor: defaultColors.drk800,
    optionBackgroundColor: defaultColors.white,
    highlightOptionBackgroundColor: defaultColors.lt200,
    highlightOptionColor: defaultColors.primary,
    selectedOptionColor: defaultColors.primary,
    selectedOptionBackgroundColor: defaultColors.white,
    borderColor: defaultColors.drk400,
    placeholderColor: defaultColors.drk400,
    width: '100%',
    disabled: {
      color: defaultColors.drk800,
      dropdownColor: defaultColors.drk400,
      borderColor: defaultColors.lt600,
      backgroundColor: defaultColors.lt600,
      placeholderColor: defaultColors.drk400,
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
        backgroundColor: defaultColors.lt600,
        borderRadius: '10px',
        disabled: {
          backgroundColor: defaultColors.drk200,
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
    dropZone: {
      color: defaultColors.lt800,
      border: `1px dashed ${defaultColors.lt800}`,
      draggingBorder: `1px dashed ${defaultColors.drk400}`,
      borderRadius: '1px',
      textAlign: 'center',
      padding: '16px',
      margin: '0 0 16px',
      ctaColor: defaultColors.primary,
      background: defaultColors.white,
      draggingBackground: defaultColors.lt200,
    },
    file: {
      defaultColor: defaultColors.drk800,
      primaryColor: defaultColors.primary,
      dangerColor: defaultColors.danger,
      background: defaultColors.lt200,
      borderRadius: '1px',
      textAlign: 'left',
      padding: '16px',
      margin: '3px 0',
    },
  },
  progressBar: {
    height: '8px',
    borderRadius: '6px',
    background: defaultColors.lt800,
    progressBackground: defaultColors.primary,
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
