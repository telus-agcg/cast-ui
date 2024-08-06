import { defaultColors } from './default';
export { ThemeProvider } from 'styled-components';

export const cobaltColors = {
  white: '#ffffff',
  highlight200: '#F1F6FF',
  drk800: '#2C363E',
  drk400: '#9EA3A7',
  lt800: '#D5D7D9',
  lt400: '#EEF0F2',
  lt200: '#F5F7F8',
  primary: '#0D70F4',
  primaryHover: '#053FBF',
  primaryFaded: '#599DE3',
  primaryBackground: '#D1E7FD',
  secondary: '#BFC3C5',
  secondaryHover: '#687279',
  secondaryFaded: '#DADCDE',
  secondaryBackground: '#F5F7F8',
  success: '#00C43F',
  successHover: '#147D2C',
  successFaded: '#66D19D',
  successBackground: '#DAF5E3',
  warning: '#FF720B',
  warningHover: '#AD4511',
  warningFaded: '#E28E56',
  warningBackground: '#FADBC6',
  danger: '#F53611',
  dangerHover: '#9C230A',
  dangerFaded: '#DD7057',
  dangerBackground: '#FADCD5',
};

export const cobaltTheme = {
  name: 'Cobalt',
  colors: cobaltColors,
  borders: {
    radius: '1px',
    radiusSm: '3.2px',
    radiusLg: '4.8px',
    width: '1px',
  },
  styles: {
    primary: {
      borderColor: cobaltColors.primary,
      flood: cobaltColors.primary,
      disabledFlood: cobaltColors.drk400,
      text: cobaltColors.primary,
      reverseText: cobaltColors.white,
      hoverFlood: cobaltColors.primaryHover,
      selectedFlood: cobaltColors.primaryHover,
      badgeBackground: cobaltColors.primaryFaded,
      badgeBorder: 'none',
      badgeColor: cobaltColors.white,
      alertColor: cobaltColors.white,
      alertBackground: cobaltColors.primary,
      notificationColor: cobaltColors.white,
      notificationBackground: cobaltColors.primary,
      light: {
        alertColor: cobaltColors.drk800,
        alertBackground: cobaltColors.primaryBackground,
        notificationColor: cobaltColors.drk800,
        notificationBackground: cobaltColors.primaryBackground,
        badgeBackground: cobaltColors.primaryBackground,
        badgeBorder: 'none',
        badgeColor: cobaltColors.primary,
      },
      cardTopBorderColor: cobaltColors.primary,
    },
    secondary: {
      borderColor: cobaltColors.secondary,
      flood: cobaltColors.secondary,
      disabledFlood: cobaltColors.drk400,
      text: cobaltColors.primary,
      reverseText: cobaltColors.white,
      hoverFlood: cobaltColors.secondaryHover,
      selectedFlood: cobaltColors.secondaryHover,
      badgeBackground: cobaltColors.drk400,
      badgeBorder: 'none',
      badgeColor: cobaltColors.white,
      alertColor: cobaltColors.white,
      alertBackground: cobaltColors.drk400,
      notificationColor: cobaltColors.drk800,
      notificationBackground: cobaltColors.secondary,
      light: {
        alertColor: cobaltColors.drk800,
        alertBackground: cobaltColors.secondaryBackground,
        notificationColor: cobaltColors.drk800,
        notificationBackground: cobaltColors.secondaryBackground,
        badgeBackground: cobaltColors.secondaryBackground,
        badgeBorder: 'none',
        badgeColor: cobaltColors.drk800,
      },
      cardTopBorderColor: cobaltColors.secondary,
    },
    danger: {
      borderColor: cobaltColors.danger,
      flood: cobaltColors.danger,
      disabledFlood: cobaltColors.drk400,
      text: cobaltColors.danger,
      reverseText: cobaltColors.white,
      hoverFlood: cobaltColors.dangerHover,
      selectedFlood: cobaltColors.dangerHover,
      badgeBackground: cobaltColors.dangerFaded,
      badgeBorder: 'none',
      badgeColor: cobaltColors.white,
      alertColor: cobaltColors.white,
      alertBackground: cobaltColors.danger,
      notificationColor: cobaltColors.white,
      notificationBackground: cobaltColors.danger,
      light: {
        alertColor: cobaltColors.drk800,
        alertBackground: cobaltColors.dangerBackground,
        notificationColor: cobaltColors.drk800,
        notificationBackground: cobaltColors.dangerBackground,
        badgeBackground: cobaltColors.dangerBackground,
        badgeBorder: 'none',
        badgeColor: cobaltColors.danger,
      },
      cardTopBorderColor: cobaltColors.danger,
    },
    warning: {
      borderColor: cobaltColors.warning,
      flood: cobaltColors.warning,
      disabledFlood: cobaltColors.drk400,
      text: cobaltColors.warning,
      reverseText: cobaltColors.white,
      hoverFlood: cobaltColors.warningHover,
      selectedFlood: cobaltColors.warningHover,
      badgeBackground: cobaltColors.warningFaded,
      badgeBorder: 'none',
      badgeColor: cobaltColors.white,
      alertColor: cobaltColors.white,
      alertBackground: cobaltColors.warning,
      notificationColor: cobaltColors.white,
      notificationBackground: cobaltColors.warning,
      light: {
        alertColor: cobaltColors.drk800,
        alertBackground: cobaltColors.warningBackground,
        notificationColor: cobaltColors.drk800,
        notificationBackground: cobaltColors.warningBackground,
        badgeBackground: cobaltColors.warningBackground,
        badgeBorder: 'none',
        badgeColor: cobaltColors.warningHover,
      },
      cardTopBorderColor: cobaltColors.warning,
    },
    success: {
      borderColor: cobaltColors.success,
      flood: cobaltColors.success,
      disabledFlood: cobaltColors.drk400,
      text: cobaltColors.success,
      reverseText: cobaltColors.white,
      hoverFlood: cobaltColors.successHover,
      selectedFlood: cobaltColors.successHover,
      badgeBackground: cobaltColors.successFaded,
      badgeBorder: 'none',
      badgeColor: cobaltColors.white,
      alertColor: cobaltColors.white,
      alertBackground: cobaltColors.success,
      notificationColor: cobaltColors.white,
      notificationBackground: cobaltColors.success,
      light: {
        alertColor: cobaltColors.drk800,
        alertBackground: cobaltColors.successBackground,
        notificationColor: cobaltColors.drk800,
        notificationBackground: cobaltColors.successBackground,
        badgeBackground: cobaltColors.successBackground,
        badgeBorder: 'none',
        badgeColor: cobaltColors.success,
      },
      cardTopBorderColor: cobaltColors.success,
    },
  },
  pagination: {
    text: cobaltColors.drk800,
    fontWeight: 'normal',
    padding: '0',
    background: cobaltColors.white,

    activeText: cobaltColors.primary,
    activeFontWeight: 'bold',
    activeBackground: cobaltColors.white,
    disabledText: cobaltColors.drk400,
    disabledBackground: cobaltColors.white,
    hoverTextColor: cobaltColors.primary,
    hoverBackground: cobaltColors.white,
    hoverFontWeight: 'bold',

    button: {
      width: '24px',
      height: '24px',
      fontWeight: 'normal',
      padding: '3px 3px 4px',
      borderColor: cobaltColors.white,
      borderRadius: '0px',
      activeBorderColor: cobaltColors.primary,
      disabledBorderColor: cobaltColors.white,
      disabledText: cobaltColors.drk400,
      hoverBorderColor: cobaltColors.white,
      hoverBackground: cobaltColors.lt400,
    },
  },

  body: {
    fontFamily: 'Roboto, Helvetica, arial, sans-serif',
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '18px',
    color: cobaltColors.drk800,
    backgroundColor: cobaltColors.white,
  },
  button: {
    outlineBackgroundColor: cobaltColors.white,
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
    brandFont: '"Gilroy-Regular", "Open Sans", arial, sans-serif',
    fontFamily: 'Roboto, Helvetica, arial, sans-serif',
    secondaryFontFamily: '',
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '160%',
    color: cobaltColors.drk800,
    fontMedium: {
      fontFamily: 'Roboto, Helvetica, arial, sans-serif',
    },
    fontBold: {
      fontFamily: 'Roboto, Helvetica, arial, sans-serif',
    },
    caption: {
      10: {
        fontFamily: 'Roboto, Helvetica, arial, sans-serif',
        fontWeight: '400',
        fontSize: '10px',
        lineHeight: '100%',
      },
      20: {
        fontFamily: 'Roboto, Helvetica, arial, sans-serif',
        fontWeight: '400',
        fontSize: '12px',
        lineHeight: '100%',
      },
    },
    code: {
      background: cobaltColors.lt400,
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
        fontFamily: 'Roboto, Helvetica, arial, sans-serif',
        fontWeight: '400',
        fontSize: '22px',
        lineHeight: '125%',
        margin: '0.67em 0px',
      },
      20: {
        fontFamily: 'Roboto, Helvetica, arial, sans-serif',
        fontWeight: '400',
        fontSize: '27px',
        lineHeight: '120%',
        margin: '0.67em 0px',
      },
    },
    header: {
      10: {
        fontFamily: 'Roboto, Helvetica, arial, sans-serif',
        fontWeight: '700',
        fontSize: '13px',
        lineHeight: '160%',
        margin: '0.83em 0px',
      },
      20: {
        fontFamily: 'Roboto, Helvetica, arial, sans-serif',
        fontWeight: '700',
        fontSize: '14px',
        lineHeight: '175%',
        margin: '0.83em 0px',
      },
    },
    link: {
      fontWeight: '500',
      fontSize: '14px',
      color: cobaltColors.primary,
      textDecoration: 'none',
      disabled: {
        color: cobaltColors.drk400,
      },
      visited: {
        color: cobaltColors.primary,
        textDecoration: 'none',
      },
      hover: {
        color: cobaltColors.primary,
        textDecoration: 'none',
      },
    },
    pre: {
      background: cobaltColors.lt400,
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
        fontFamily: 'Roboto, Helvetica, arial, sans-serif',
        fontWeight: '700',
        fontSize: '16px',
        lineHeight: '130%',
        margin: '0.67em 0px',
      },
      20: {
        fontFamily: 'Roboto, Helvetica, arial, sans-serif',
        fontWeight: '700',
        fontSize: '18px',
        lineHeight: '135%',
        margin: '0.67em 0px',
      },
    },
  },
  input: {
    background: cobaltColors.white,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: cobaltColors.drk400,
    color: cobaltColors.drk800,
    fontSize: '14px',
    placeholderColor: cobaltColors.drk400,
    disabled: {
      background: cobaltColors.lt800,
      border: `1px solid ${cobaltColors.lt800}`,
      addonTextColor: cobaltColors.drk400,
    },
    sm: {
      borderRadius: '1px',
      height: '26px',
      padding: '4px 7px',
      iconTop: '6px',
    },
    md: {
      borderRadius: '1px',
      height: '30px',
      padding: '8px 10px',
      iconTop: '7px',
    },
    lg: {
      borderRadius: '1px',
      height: '38px',
      padding: '11px 16px 13px',
      iconTop: '9px',
    },
  },
  inputGroup: {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      color: cobaltColors.drk800,
      horizontalMargin: '12px 0',
    },
    label: {
      fontWeight: 500,
      horizontalWidth: '300px',
    },
  },
  radioButton: {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: cobaltColors.primary,
    disabledRadio: cobaltColors.drk400,
    disabledText: cobaltColors.drk400,
    unselectedColor: cobaltColors.white,
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
    borderColor: cobaltColors.primary,
    disabledCheck: cobaltColors.drk400,
    disabledText: cobaltColors.drk400,
    unselectedColor: cobaltColors.white,
    selectedColor: cobaltColors.primary,
    inlineSpacing: '20px',
    sm: {
      squareSize: '6px',
      marginLeft: '4px',
    },
    md: {
      squareSize: '10px',
      marginLeft: '6px',
    },
    lg: {
      squareSize: '14px',
      marginLeft: '6.5px',
    },
  },
  toggle: {
    background: {
      inactiveColor: cobaltColors.lt800,
      inactiveBorderColor: cobaltColors.lt800,
      activeColor: cobaltColors.lt800,
      activeBorderColor: cobaltColors.lt800,
      disabled: cobaltColors.lt400,
      disabledBorderColor: cobaltColors.lt400,
    },
    inactiveColor: cobaltColors.drk800,
    inactiveBorderColor: cobaltColors.drk800,
    activeColor: cobaltColors.primary,
    activeBorderColor: cobaltColors.primary,
    activeDisabledColor: cobaltColors.drk400,
    activeDisabledBorderColor: cobaltColors.drk400,
    inactiveDisabledColor: cobaltColors.drk400,
    inactiveDisabledBorderColor: cobaltColors.drk400,
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
        color: cobaltColors.drk800,
        backgroundColor: cobaltColors.white,
        chevronColor: defaultColors.primary,
      },
      dark: {
        color: cobaltColors.drk800,
        backgroundColor: cobaltColors.highlight200,
        chevronColor: defaultColors.primary,
      },
    },
  },
  modal: {
    borderRadius: '5px',
    header: {
      minHeight: '0',
      backgroundColor: cobaltColors.white,
      borderColor: cobaltColors.lt800,
      padding: '15px',
      fontSize: '16px',
      color: cobaltColors.drk800,
    },
    body: {
      minHeight: '0',
      backgroundColor: cobaltColors.white,
      borderBottom: cobaltColors.lt800,
      padding: '15px',
      color: cobaltColors.drk800,
    },
    footer: {
      minHeight: '0',
      backgroundColor: cobaltColors.white,
      borderColor: cobaltColors.lt800,
      padding: '15px',
    },
    closeButton: {
      disabledText: cobaltColors.drk400,
      hoverBorderColor: cobaltColors.white,
      hoverBackground: cobaltColors.lt400,
    },
    overlay: {
      zIndex: '999999',
    },
    sm: {
      width: '300px',
      header: {
        fontSize: '16px',
      },
    },
    md: {
      width: '745px',
      header: {
        fontSize: '16px',
      },
    },
    lg: {
      width: '1220px',
      header: {
        fontSize: '16px',
      },
    },
  },
  textarea: {
    background: cobaltColors.white,
    backgroundDisabled: cobaltColors.secondaryBackground,
    borderColor: cobaltColors.drk400,
    hoverBorderColor: cobaltColors.drk800,
    color: cobaltColors.drk800,
    padding: '6px 12px',
    placeholderColor: cobaltColors.drk400,
    disabled: {
      background: cobaltColors.lt800,
      borderColor: cobaltColors.lt400,
    },
    sm: {
      borderRadius: '1px',
    },
    md: {
      borderRadius: '1px',
    },
    lg: {
      borderRadius: '1px',
    },
  },
  panel: {
    header: {
      padding: '14px 16px',
      borderWidth: 'thin',
    },
    body: {
      padding: '24px 24px',
      borderRadius: '1px',
      borderWidth: 'thin',
    },
    headerBorderColor: cobaltColors.drk400,
    bodyBackgroundColor: cobaltColors.lt400,
    bodyBorderColor: cobaltColors.drk400,
    headerColor: cobaltColors.primary,
    headerBackgroundColor: cobaltColors.white,
    boxShadow: 'none',
  },
  badge: {
    borderRadius: '4px',
    fontSize: '15px',
    fontWeight: 'bold',
    sm: {
      borderRadius: '4px',
      fontSize: '12px',
      padding: '4px 8px',
    },
    md: {
      borderRadius: '4px',
      fontSize: '15px',
      padding: '4px 8px',
    },
    lg: {
      borderRadius: '4px',
      fontSize: '18px',
      padding: '4px 8px',
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
    borderColor: cobaltColors.drk400,
    fontSize: '14px',
    padding: '8px 16px',
    background: cobaltColors.white,
    boxShadow: '0 2px 4px rgba(0,0,0,.075) !important;',
    highlightAllBorderWidth: '1px',
    highlightedBorderWidth: '5px',
  },
  popover: {
    withArrowDistance: 10,
    withoutArrowDistance: 9,
    background: cobaltColors.white,
    color: cobaltColors.drk800,
    borderRadius: '1px',
    borderColor: cobaltColors.lt800,
    boxShadow: `0 0 5px ${cobaltColors.lt800}`,
  },
  tooltip: {
    background: cobaltColors.drk800,
    borderRadius: '1px',
  },
  common: {
    sm: {
      fontSize: '11px',
      padding: '4px 8px',
      tableCellPadding: '5px 0',
      inputIconSize: '14px',
    },
    md: {
      fontSize: '14px',
      padding: '8px 16px',
      tableCellPadding: '9px 0',
      inputIconSize: '20px',
    },
    lg: {
      fontSize: '16px',
      padding: '10px 16px',
      tableCellPadding: '11px 0',
      inputIconSize: '24px',
    },
  },
  validation: {
    borderColor: cobaltColors.danger,
    color: cobaltColors.drk800,
    fontSize: '12px',
    fontStyle: 'italic',
    lineHeight: '13px',
    errorMessageBottomPosition: '-14px',
  },
  table: {
    fontSize: '14px',
    border: `1px solid ${cobaltColors.drk400}`,
    header: {
      backgroundColor: cobaltColors.white,
      borderBottomColor: cobaltColors.drk800,
      color: cobaltColors.drk800,
      fontWeight: 'bold',
      fontSize: '16px',
    },
    row: {
      borderBottomColor: cobaltColors.lt800,
      highlightColor: cobaltColors.highlight200,
      hoverColor: cobaltColors.lt400,
      readonlyColor: cobaltColors.lt400,
      groupedHeader: {
        fontSize: '15px',
        fontWeight: 'bold',
      },
    },
    column: {
      highlightColor: cobaltColors.highlight200,
      readonlyColor: cobaltColors.lt400,
    },
  },
  datepicker: {
    zIndex: 99,
  },
  tabs: {
    borderColor: cobaltColors.secondary,
    hoverColor: cobaltColors.primaryFaded,
    borderRadius: '20px',
    bottomBorderWidth: '3px',
    tab: {
      color: cobaltColors.drk800,
      backgroundColor: cobaltColors.white,
    },
    activetab: {
      color: cobaltColors.primary,
      backgroundColor: cobaltColors.white,
      borderColor: cobaltColors.primary,
    },
    disabledtab: {
      backgroundColor: cobaltColors.lt200,
    },
    fontSize: '14px',
    padding: '14px',
    margin: '16px 16px 0 16px',
  },
  copyToClipboard: {
    fontFamily: 'monospace',
    fontSize: '14px',
    color: cobaltColors.drk800,
    background: cobaltColors.lt400,
    copiedColor: cobaltColors.drk400,
    padding: '16px',
    button: {
      textTransform: 'uppercase',
      height: '20px',
      fontWeight: 600,
      primaryColor: cobaltColors.primary,
      successColor: cobaltColors.success,
      margin: '0 4px',
    },
  },
  navbar: {
    height: '64px',
    background: cobaltColors.white,
    padding: '0 45px ',
    borderTop: '',
    borderBottom: '',
    color: cobaltColors.drk800,
  },
  tabnav: {
    background: cobaltColors.primaryBackground,
    padding: '0 32px',
    borderTop: 'none',
    borderBottom: `1px solid ${cobaltColors.lt800}`,
    color: cobaltColors.drk800,
    tab: {
      padding: '2px 10px',
      margin: '0 40px 0 0',
      color: 'inherit',
      fontWeight: 'inherit',
      cursor: 'pointer',
      background: 'transparent',
      opacity: '1',
      bottomBorderWidth: '0',
      bottomBorderColor: 'transparent',
      transition: 'opacity 0.15s',
      iconColor: cobaltColors.drk800,
    },
    activetab: {
      color: cobaltColors.white,
      fontWeight: 500,
      cursor: 'pointer',
      background: cobaltColors.primary,
      opacity: '1',
      bottomBorderWidth: '4px',
      bottomBorderColor: cobaltColors.primary,
      iconColor: cobaltColors.white,
    },
  },
  sidenav: {
    fontSize: '14px',
    color: cobaltColors.primary,
    height: '',
    width: '48px',
    openWidth: '200px',
    background: cobaltColors.lt200,
    padding: '0 8px',
    margin: '',
    zIndex: 100,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 'auto',
    borderLeft: '',
    borderRight: `1px solid ${cobaltColors.lt800}`,
    transition: 'min-width 0.15s',
    label: {
      color: cobaltColors.drk800,
    },
    secondaryNavbar: {
      width: '0px',
      openWidth: '170px',
      background: cobaltColors.white,
      color: `${cobaltColors.drk800}`,
      padding: '30px 8px 16px',
      margin: '',
      zIndex: 100,
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 'auto',
      borderLeft: '',
      borderRight: `1px solid ${cobaltColors.lt800}`,
      transition: 'left 0.15s',
    },
    secondaryNavbarLabel: {
      color: `${cobaltColors.drk800}`,
    },
    nav: {
      padding: '',
      margin: '',
    },
    toggle: {
      height: '80px',
      cursor: 'pointer',
      padding: '0 12px',
      borderBottom: `1px solid ${cobaltColors.lt800}`,
      display: 'grid',
    },
    navItem: {
      color: `${cobaltColors.drk800}`,
      fontWeight: 300,
      cursor: 'pointer',
      background: 'transparent',
      opacity: '1',
      leftBorderWidth: '0',
      leftBorderColor: 'transparent',
      topNavBorderBottom: `1px solid ${cobaltColors.lt800}`,
      transition: 'all 0.3s 0s ease-in-out',
    },
    activenavItem: {
      color: cobaltColors.primary,
      fontWeight: 500,
      cursor: 'pointer',
      background: `border-box ${cobaltColors.primaryBackground}`,
      hoverBorder: '',
      opacity: '1',
      leftBorderWidth: '4px',
      leftBorderColor: cobaltColors.primary,
      topNavBorderBottom: `1px solid ${cobaltColors.lt800}`,
    },
    activeSecnavItem: {
      color: cobaltColors.primary,
      fontWeight: 700,
      background: cobaltColors.lt200,
    },
    itemToggle: {
      position: 'absolute',
      right: '0',
      background: cobaltColors.lt200,
      height: '100%',
      width: '30px',
      display: 'flex',
    },
    navIcon: {
      padding: '14px 0 8px 0px',
    },
    subnavIcon: {
      padding: '8px 0 8px 12px',
    },
    navLabel: {
      padding: '6px 10px',
    },
    navText: {
      padding: '8px',
    },
  },
  spinner: {
    backgroundColor: cobaltColors.lt800,
    borderColor: cobaltColors.primary,
  },
  itemContainer: {
    borderColor: cobaltColors.lt800,
  },
  select: {
    color: cobaltColors.drk800,
    dropdownColor: cobaltColors.drk800,
    optionBackgroundColor: cobaltColors.white,
    highlightOptionBackgroundColor: cobaltColors.lt400,
    highlightOptionColor: cobaltColors.primary,
    selectedOptionColor: cobaltColors.primary,
    selectedOptionBackgroundColor: cobaltColors.white,
    borderColor: cobaltColors.drk400,
    placeholderColor: cobaltColors.drk400,
    width: '100%',
    disabled: {
      color: cobaltColors.drk800,
      dropdownColor: cobaltColors.drk400,
      borderColor: cobaltColors.lt800,
      backgroundColor: cobaltColors.lt800,
      placeholderColor: cobaltColors.drk400,
    },
    sm: {
      borderRadius: '1px',
      height: '28px',
      padding: '2px 10px',
    },
    md: {
      borderRadius: '1px',
      height: '32px',
      padding: '0px 10px',
    },
    lg: {
      borderRadius: '1px',
      height: '40px',
      padding: '6px 13px',
    },
    multiSelect: {
      badge: {
        backgroundColor: cobaltColors.lt800,
        borderRadius: '10px',
        disabled: {
          backgroundColor: cobaltColors.drk400,
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
      color: cobaltColors.secondaryHover,
      border: `1px dashed ${cobaltColors.lt800}`,
      draggingBorder: `1px dashed ${cobaltColors.drk400}`,
      borderRadius: '1px',
      textAlign: 'center',
      padding: '16px',
      margin: '0 0 16px',
      ctaColor: cobaltColors.primary,
      background: cobaltColors.white,
      draggingBackground: cobaltColors.lt400,
    },
    file: {
      defaultColor: cobaltColors.drk800,
      primaryColor: cobaltColors.primary,
      dangerColor: cobaltColors.danger,
      background: cobaltColors.lt400,
      borderRadius: '1px',
      textAlign: 'left',
      padding: '16px',
      margin: '3px 0',
    },
  },
  progressBar: {
    height: '8px',
    borderRadius: '6px',
    background: cobaltColors.lt800,
    progressBackground: cobaltColors.primary,
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
