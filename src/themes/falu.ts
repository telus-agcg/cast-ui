export { ThemeProvider } from 'styled-components';

export const faluColors = {
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
  primary: '#265CBF',
  primaryHover: '#2F4C82',
  primaryFaded: '#85ABF2',
  primaryBackground: '#E8F0FF',
  success: '#308462',
  successHover: '#326952',
  successFaded: '#8BCCB1',
  successBackground: '#EBFFF7',
  danger: '#EF3E33',
  dangerHover: '#CC342C',
  dangerFaded: '#F77E77',
  dangerBackground: '#FADDDC',
  warning: '#FA7B1A',
  warningHover: '#E66300',
  warningFaded: '#FFB780',
  warningBackground: '#FEE8D7',
  secondary: '#A7ADB1',
  secondaryHover: '#687279',
  secondaryFaded: '#DADCDE',
  secondaryBackground: '#F5F7F8',
};

export const faluTheme = {
  name: 'Falu',
  colors: faluColors,
  borders: {
    radius: '1px',
    radiusSm: '.2rem',
    radiusLg: '.3rem',
    width: '1px',
  },
  styles: {
    primary: {
      borderColor: faluColors.primary,
      flood: faluColors.primary,
      disabledFlood: faluColors.drk200,
      lightFlood: faluColors.primaryFaded,
      hoverlightFlood: faluColors.primaryFaded,
      text: faluColors.primary,
      reverseText: faluColors.white,
      hoverFlood: faluColors.primaryHover,
      selectedFlood: faluColors.primaryHover,
      badgeBackground: faluColors.primaryFaded,
      badgeColor: faluColors.drk800,
      alertColor: faluColors.white,
      alertBackground: faluColors.primary,
      notificationColor: faluColors.white,
      notificationBackground: faluColors.primary,
      listGroupColor: faluColors.white,
      listGroupBackground: faluColors.primary,
      light: {
        alertColor: faluColors.drk800,
        alertBackground: faluColors.primaryBackground,
        notificationColor: faluColors.drk800,
        notificationBackground: faluColors.primaryFaded,
        badgeBackground: faluColors.primaryFaded,
        badgeColor: faluColors.drk800,
      },
      cardTopBorderColor: faluColors.primary,
    },
    secondary: {
      borderColor: faluColors.secondary,
      flood: faluColors.secondary,
      disabledFlood: faluColors.drk200,
      lightFlood: faluColors.secondaryFaded,
      hoverlightFlood: faluColors.secondaryFaded,
      text: faluColors.primary,
      reverseText: faluColors.white,
      hoverFlood: faluColors.secondaryHover,
      selectedFlood: faluColors.secondaryHover,
      badgeBackground: faluColors.secondaryHover,
      badgeColor: faluColors.white,
      alertColor: faluColors.white,
      alertBackground: faluColors.secondaryHover,
      notificationColor: faluColors.drk800,
      notificationBackground: faluColors.secondary,
      listGroupColor: faluColors.drk800,
      listGroupBackground: faluColors.secondary,
      light: {
        alertColor: faluColors.drk800,
        alertBackground: faluColors.secondaryBackground,
        notificationColor: faluColors.drk800,
        notificationBackground: faluColors.secondaryBackground,
        badgeBackground: faluColors.secondaryHover,
        badgeColor: faluColors.drk800,
      },
      cardTopBorderColor: faluColors.secondary,
    },
    danger: {
      borderColor: faluColors.danger,
      flood: faluColors.danger,
      disabledFlood: faluColors.drk200,
      lightFlood: faluColors.dangerFaded,
      hoverlightFlood: faluColors.dangerFaded,
      text: faluColors.danger,
      reverseText: faluColors.white,
      hoverFlood: faluColors.dangerHover,
      selectedFlood: faluColors.dangerHover,
      badgeBackground: faluColors.dangerFaded,
      badgeColor: faluColors.drk800,
      alertColor: faluColors.white,
      alertBackground: faluColors.danger,
      notificationColor: faluColors.white,
      notificationBackground: faluColors.danger,
      listGroupColor: faluColors.white,
      listGroupBackground: faluColors.danger,
      light: {
        alertColor: faluColors.drk800,
        alertBackground: faluColors.dangerBackground,
        notificationColor: faluColors.drk800,
        notificationBackground: faluColors.dangerBackground,
        badgeBackground: faluColors.dangerFaded,
        badgeColor: faluColors.drk800,
      },
      cardTopBorderColor: faluColors.danger,
    },
    warning: {
      borderColor: faluColors.warning,
      flood: faluColors.warning,
      disabledFlood: faluColors.drk200,
      lightFlood: faluColors.warningFaded,
      hoverlightFlood: faluColors.warningFaded,
      text: faluColors.warning,
      reverseText: faluColors.white,
      hoverFlood: faluColors.warningHover,
      selectedFlood: faluColors.warningHover,
      badgeBackground: faluColors.warningFaded,
      badgeColor: faluColors.drk800,
      alertColor: faluColors.white,
      alertBackground: faluColors.warningHover,
      notificationColor: faluColors.white,
      notificationBackground: faluColors.warning,
      listGroupColor: faluColors.white,
      listGroupBackground: faluColors.warning,
      light: {
        alertColor: faluColors.drk800,
        alertBackground: faluColors.warningBackground,
        notificationColor: faluColors.drk800,
        notificationBackground: faluColors.warningBackground,
        badgeBackground: faluColors.warningFaded,
        badgeColor: faluColors.drk800,
      },
      cardTopBorderColor: faluColors.warning,
    },
    success: {
      borderColor: faluColors.success,
      flood: faluColors.success,
      disabledFlood: faluColors.drk200,
      lightFlood: faluColors.successFaded,
      hoverlightFlood: faluColors.successFaded,
      text: faluColors.success,
      reverseText: faluColors.white,
      hoverFlood: faluColors.successHover,
      selectedFlood: faluColors.successHover,
      badgeBackground: faluColors.successFaded,
      badgeColor: faluColors.drk800,
      alertColor: faluColors.white,
      alertBackground: faluColors.success,
      notificationColor: faluColors.white,
      notificationBackground: faluColors.success,
      listGroupColor: faluColors.white,
      listGroupBackground: faluColors.success,
      light: {
        alertColor: faluColors.drk800,
        alertBackground: faluColors.successBackground,
        notificationColor: faluColors.drk800,
        notificationBackground: faluColors.successBackground,
        badgeBackground: faluColors.successFaded,
        badgeColor: faluColors.drk800,
      },
      cardTopBorderColor: faluColors.success,
    },
  },
  pagination: {
    text: faluColors.black,
    fontWeight: 'normal',
    padding: '4px 0',
    background: faluColors.white,

    activeText: faluColors.primary,
    activeFontWeight: 'bold',
    activeBackground: faluColors.white,
    disabledText: faluColors.secondary,
    disabledBackground: faluColors.white,
    hoverTextColor: faluColors.primary,
    hoverBackground: faluColors.white,
    hoverFontWeight: 'bold',

    button: {
      width: '24px',
      height: '24px',
      fontWeight: 'normal',
      padding: '3px 3px 4px',
      borderColor: faluColors.white,
      activeBorderColor: faluColors.primary,
      disabledBorderColor: faluColors.white,
      disabledText: faluColors.lt600,
      hoverBorderColor: faluColors.white,
      hoverBackground: faluColors.lt400,
    },
  },
  body: {
    fontFamily: 'Roboto, "Open Sans", arial, sans-serif',
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '18px',
    color: faluColors.drk800,
    backgroundColor: faluColors.white,
  },
  button: {
    outlineBackgroundColor: faluColors.white,
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
    brandFont: 'Roboto, "Open Sans", arial, sans-serif',
    fontFamily: 'Roboto, "Open Sans", arial, sans-serif',
    secondaryFontFamily: '',
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '160%',
    color: faluColors.drk800,
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
      background: faluColors.lt200,
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
        fontSize: '27px',
        lineHeight: '125%',
      },
      20: {
        fontFamily: 'Roboto, "Open Sans", arial, sans-serif',
        fontWeight: '400',
        fontSize: '37px',
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
        fontWeight: '500',
        fontSize: '16px',
        lineHeight: '175%',
      },
    },
    link: {
      fontWeight: '400',
      fontSize: '14px',
      color: faluColors.primary,
      textDecoration: 'none',
      disabled: {
        color: faluColors.drk400,
      },
      visited: {
        color: faluColors.primary,
        textDecoration: 'none',
      },
      hover: {
        color: faluColors.primaryHover,
        textDecoration: 'underline',
      },
    },
    pre: {
      background: faluColors.lt200,
      fontFamily: '"Roboto Mono", Courier, monospace',
      fontSize: '100%',
      lineHeight: '100%',
    },
    sectionHeader: {
      fontWeight: '500',
      fontSize: '16px',
      borderWidth: '1px',
      borderColor: faluColors.drk400,
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
        fontSize: '18px',
        lineHeight: '130%',
      },
      20: {
        fontFamily: 'Roboto, "Open Sans", arial, sans-serif',
        fontWeight: '700',
        fontSize: '20px',
        lineHeight: '135%',
      },
    },
  },
  input: {
    background: faluColors.white,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: faluColors.drk400,
    color: faluColors.drk800,
    fontSize: '14px',
    placeholderColor: faluColors.drk400,
    disabled: {
      background: faluColors.lt600,
      border: `1px solid ${faluColors.lt600}`,
      addonTextColor: faluColors.drk400,
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
      color: faluColors.drk800,
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
    borderColor: faluColors.primary,
    disabledRadio: faluColors.drk200,
    disabledText: faluColors.drk600,
    unselectedColor: faluColors.white,
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
    borderColor: faluColors.primary,
    disabledCheck: faluColors.drk200,
    disabledText: faluColors.drk800,
    unselectedColor: faluColors.white,
    selectedColor: faluColors.primary,
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
      inactiveColor: faluColors.lt800,
      inactiveBorderColor: faluColors.lt800,
      activeColor: faluColors.lt800,
      activeBorderColor: faluColors.lt800,
      disabled: faluColors.lt400,
      disabledBorderColor: faluColors.lt400,
    },
    inactiveColor: faluColors.drk600,
    inactiveBorderColor: faluColors.drk600,
    activeColor: faluColors.primary,
    activeBorderColor: faluColors.primary,
    activeDisabledColor: faluColors.drk200,
    activeDisabledBorderColor: faluColors.drk200,
    inactiveDisabledColor: faluColors.drk200,
    inactiveDisabledBorderColor: faluColors.drk200,
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
        color: faluColors.drk800,
        backgroundColor: faluColors.white,
        chevronColor: faluColors.primary,
      },
      dark: {
        color: faluColors.drk800,
        backgroundColor: faluColors.highlight200,
        chevronColor: faluColors.primary,
      },
    },
  },
  modal: {
    header: {
      minHeight: '0',
      backgroundColor: faluColors.lt200,
      borderColor: faluColors.secondaryFaded,
      padding: '16px 16px',
      fontSize: '16px',
      color: faluColors.drk800,
    },
    body: {
      minHeight: '0',
      backgroundColor: faluColors.white,
      borderBottom: faluColors.secondaryFaded,
      padding: '8px 16px',
      color: faluColors.drk800,
    },
    footer: {
      minHeight: '0',
      backgroundColor: faluColors.lt200,
      borderColor: faluColors.secondaryFaded,
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
    background: faluColors.white,
    backgroundDisabled: faluColors.secondaryFaded,
    borderColor: faluColors.secondary,
    color: faluColors.secondaryHover,
    padding: '.375rem .75rem',
    placeholderColor: faluColors.drk400,
    disabled: {
      background: faluColors.lt600,
      borderColor: faluColors.drk400,
    },
  },
  panel: {
    header: {
      padding: '14px 16px',
    },
    body: {
      padding: '14px 16px',
    },
    borderWidth: '1px',
    bodyBackgroundColor: faluColors.lt200,
    bodyBorderColor: faluColors.secondaryFaded,
    headerColor: faluColors.drk800,
    headerBackgroundColor: faluColors.white,
    headerBorderColor: faluColors.secondaryFaded,
  },
  badge: {
    borderRadius: '4px',
    fontSize: '10px',
    sm: {
      borderRadius: '4px',
      fontSize: '10px',
      padding: '4px 6px',
    },
    md: {
      borderRadius: '4px',
      fontSize: '12px',
      padding: '4px 6px',
    },
    lg: {
      borderRadius: '4px',
      fontSize: '14px',
      padding: '4px 6px',
    },
  },
  alert: {
    borderRadius: '0px',
    fontSize: '14px',
    display: 'block',
    padding: '8px 16px',
    fontWeight: 'bold',
    lineHeight: '18px',
    lightFontWeight: '500',
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
    borderColor: faluColors.lt800,
    fontSize: '14px',
    padding: '8px 16px',
    background: faluColors.white,
    boxShadow: '0 2px 4px rgba(0,0,0,.075) !important;',
    highlightAllBorderWidth: '1px',
    highlightedBorderWidth: '5px',
  },
  popover: {
    withArrowDistance: 10,
    withoutArrowDistance: 9,
    background: faluColors.white,
    color: faluColors.black,
    borderRadius: '1px',
    borderColor: faluColors.secondaryFaded,
    boxShadow: `0 0 5px ${faluColors.secondaryFaded}`,
  },
  tooltip: {
    background: faluColors.drk800,
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
    borderColor: faluColors.danger,
    color: faluColors.drk800,
    fontSize: '11px',
    fontStyle: 'italic',
    lineHeight: '13px',
    padding: '4px',
  },
  table: {
    fontSize: '14px',
    border: `1px solid ${faluColors.lt800}`,
    header: {
      borderBottomColor: faluColors.drk800,
      color: faluColors.drk800,
      fontWeight: 'bold',
      fontSize: '16px',
    },
    row: {
      borderBottomColor: faluColors.lt800,
      hoverColor: faluColors.lt200,
      highlightColor: faluColors.highlight200,
      readonlyColor: faluColors.lt200,
    },
    column: {
      highlightColor: faluColors.highlight200,
      readonlyColor: faluColors.lt200,
    },
  },
  datepicker: {
    zIndex: 99,
  },
  tabs: {
    color: faluColors.drk800,
    borderColor: faluColors.primary,
    hoverColor: faluColors.primaryFaded,
    borderRadius: '0px',
    bottomBorderWidth: '5px',
    fontSize: '14px',
    padding: '12px',
    margin: '0',
  },
  copyToClipboard: {
    fontFamily: 'monospace',
    fontSize: '14px',
    color: faluColors.primary,
    background: faluColors.lt200,
    copiedColor: faluColors.drk400,
    padding: '16px',
    button: {
      textTransform: 'uppercase',
      height: '20px',
      fontWeight: '600',
      primaryColor: faluColors.primary,
      successColor: faluColors.success,
      margin: '0 4px',
    },
  },
  navbar: {
    height: '60px',
    background: faluColors.white,
    padding: '0 32px ',
    borderTop: '',
    borderBottom: '',
    color: faluColors.primary,
  },
  tabnav: {
    background: faluColors.lt200,
    padding: '0 32px ',
    borderTop: '',
    borderBottom: '',
    color: faluColors.drk800,
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
      iconColor: faluColors.primary,
    },
    activetab: {
      color: faluColors.drk800,
      fontWeight: 500,
      cursor: 'pointer',
      background: 'transparent',
      opacity: '1',
      bottomBorderWidth: '4px',
      bottomBorderColor: faluColors.primary,
      iconColor: faluColors.primary,
    },
    tabDropdown: {
      color: faluColors.primary,
      background: faluColors.white,
      padding: '8px 16px',
      hoverColor: faluColors.primary,
      hoverBackground: faluColors.lt200,
    },
  },
  sidenav: {
    fontSize: '14px',
    color: faluColors.drk800,
    height: '',
    width: '50px',
    openWidth: '220px',
    background: faluColors.lt200,
    padding: '',
    margin: '',
    zIndex: 5,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 'auto',
    borderLeft: '',
    borderRight: `1px solid ${faluColors.lt800}`,
    transition: 'min-width 0.15s',
    secondaryNavbar: {
      width: '0px',
      openWidth: '170px',
      background: faluColors.white,
      padding: '80px 0 16px',
      margin: '',
      zIndex: 4,
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 'auto',
      borderLeft: '',
      borderRight: `1px solid ${faluColors.lt800}`,
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
      borderBottom: `1px solid ${faluColors.lt800}`,
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
      topNavBorderBottom: `1px solid ${faluColors.lt800}`,
      bottonNavBorderBottom: '',
      transition: 'opacity 0.15s',
    },
    activenavItem: {
      color: faluColors.danger,
      fontWeight: 700,
      cursor: 'pointer',
      background: faluColors.white,
      opacity: '1',
      leftBorderWidth: '4px',
      leftBorderColor: faluColors.danger,
      topNavBorderBottom: `1px solid ${faluColors.lt800}`,
      bottonNavBorderBottom: '',
    },
    activeSecnavItem: {
      color: faluColors.primary,
      fontWeight: 700,
      background: faluColors.lt200,
    },
    itemToggle: {
      position: 'absolute',
      right: '0',
      background: faluColors.lt200,
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
    backgroundColor: faluColors.secondaryFaded,
    borderColor: faluColors.primary,
  },
  itemContainer: {
    borderColor: faluColors.secondaryFaded,
  },
  draggable: {
    borderColor: faluColors.secondaryFaded,
  },
  select: {
    color: faluColors.drk800,
    dropdownColor: faluColors.drk800,
    optionBackgroundColor: faluColors.white,
    highlightOptionBackgroundColor: faluColors.lt200,
    highlightOptionColor: faluColors.primary,
    selectedOptionColor: faluColors.primary,
    selectedOptionBackgroundColor: faluColors.white,
    borderColor: faluColors.drk400,
    placeholderColor: faluColors.drk400,
    width: '100%',
    disabled: {
      color: faluColors.drk800,
      dropdownColor: faluColors.drk400,
      borderColor: faluColors.lt600,
      backgroundColor: faluColors.lt600,
      placeholderColor: faluColors.drk400,
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
        backgroundColor: faluColors.lt600,
        borderRadius: '10px',
        disabled: {
          backgroundColor: faluColors.drk200,
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
      color: faluColors.lt800,
      border: `1px dashed ${faluColors.lt800}`,
      draggingBorder: `1px dashed ${faluColors.drk400}`,
      borderRadius: '1px',
      textAlign: 'center',
      padding: '16px',
      margin: '0 0 16px',
      ctaColor: faluColors.primary,
      background: faluColors.white,
      draggingBackground: faluColors.lt200,
    },
    file: {
      defaultColor: faluColors.drk800,
      primaryColor: faluColors.drk600,
      dangerColor: faluColors.danger,
      background: faluColors.lt200,
      borderRadius: '1px',
      textAlign: 'left',
      padding: '16px',
      margin: '3px 0',
    },
  },
  progressBar: {
    height: '8px',
    borderRadius: '6px',
    background: faluColors.lt800,
    progressBackground: faluColors.primary,
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
