import { defaultColors } from './default';
export { ThemeProvider } from 'styled-components';

export const canopyColors = {
  white: '#ffffff',
  highlight200: '#F1F6FF', // ***try to get rid of***
  drk800: '#2A2B30', // updated
  drk400: '#9EA3A7', // updated
  lt800: '#DADCE0', // updated
  lt400: '#EEF0F2', // updated
  lt200: '#FAFAFA', // updated
  primary: '#65299E', // updated
  primaryHover: '#4B286D', // updated
  primaryFaded: '#D6C4E6', // updated
  primaryBackground: '#F8F0FF', // updated
  secondary: '#BFC3C5',
  secondaryHover: '#687279',
  secondaryFaded: '#DADCDE',
  secondaryBackground: '#F5F7F8',
  success: '#2B8000', // updated
  successHover: '#216300', // updated
  successFaded: '#CFE6C1', // updated
  successBackground: '#F5FFEF', // updated
  warning: '#FF6B00', // updated
  warningHover: '#E0660E', // updated
  warningFaded: '#E28E56',
  warningBackground: '#FADBC6',
  danger: '#F53611', // updated
  dangerHover: '#D73111', // updated
  dangerFaded: '#DD7057',
  dangerBackground: '#FADCD5',
};

export const canopyTheme = {
  name: 'Canopy',
  colors: canopyColors,
  borders: {
    radius: '1px',
    radiusSm: '3.2px',
    radiusLg: '4.8px',
    width: '1px',
  },
  styles: {
    primary: {
      borderColor: canopyColors.primary,
      flood: canopyColors.primary,
      disabledFlood: canopyColors.drk400,
      text: canopyColors.primary,
      reverseText: canopyColors.white,
      hoverFlood: canopyColors.primaryHover,
      selectedFlood: canopyColors.primaryHover,
      badgeBackground: canopyColors.primary,
      badgeBorder: `1px solid ${canopyColors.primary}`,
      badgeColor: canopyColors.white,
      alertColor: canopyColors.white,
      alertBackground: canopyColors.primary,
      notificationColor: canopyColors.white,
      notificationBackground: canopyColors.primary,
      light: {
        alertColor: canopyColors.drk800,
        alertBackground: canopyColors.primaryBackground,
        notificationColor: canopyColors.drk800,
        notificationBackground: canopyColors.primaryBackground,
        badgeBackground: canopyColors.primaryBackground,
        badgeBorder: `1px solid ${canopyColors.primary}`,
        badgeColor: canopyColors.primary,
      },
      cardTopBorderColor: canopyColors.lt800,
    },
    secondary: {
      borderColor: canopyColors.secondary,
      flood: canopyColors.secondary,
      disabledFlood: canopyColors.drk400,
      text: canopyColors.primary,
      reverseText: canopyColors.white,
      hoverFlood: canopyColors.secondaryHover,
      selectedFlood: canopyColors.secondaryHover,
      badgeBackground: canopyColors.drk400,
      badgeBorder: `1px solid ${canopyColors.secondary}`,
      badgeColor: canopyColors.white,
      alertColor: canopyColors.white,
      alertBackground: canopyColors.drk400,
      notificationColor: canopyColors.drk800,
      notificationBackground: canopyColors.secondary,
      light: {
        alertColor: canopyColors.drk800,
        alertBackground: canopyColors.secondaryBackground,
        notificationColor: canopyColors.drk800,
        notificationBackground: canopyColors.secondaryBackground,
        badgeBackground: canopyColors.secondaryBackground,
        badgeBorder: `1px solid ${canopyColors.secondary}`,
        badgeColor: canopyColors.drk800,
      },
      cardTopBorderColor: canopyColors.lt800,
    },
    danger: {
      borderColor: canopyColors.danger,
      flood: canopyColors.danger,
      disabledFlood: canopyColors.drk400,
      text: canopyColors.danger,
      reverseText: canopyColors.white,
      hoverFlood: canopyColors.dangerHover,
      selectedFlood: canopyColors.dangerHover,
      badgeBackground: canopyColors.danger,
      badgeBorder: `1px solid ${canopyColors.danger}`,
      badgeColor: canopyColors.white,
      alertColor: canopyColors.white,
      alertBackground: canopyColors.danger,
      notificationColor: canopyColors.white,
      notificationBackground: canopyColors.danger,
      light: {
        alertColor: canopyColors.drk800,
        alertBackground: canopyColors.dangerBackground,
        notificationColor: canopyColors.drk800,
        notificationBackground: canopyColors.dangerBackground,
        badgeBackground: canopyColors.dangerBackground,
        badgeBorder: `1px solid ${canopyColors.danger}`,
        badgeColor: canopyColors.danger,
      },
      cardTopBorderColor: canopyColors.lt800,
    },
    warning: {
      borderColor: canopyColors.warning,
      flood: canopyColors.warning,
      disabledFlood: canopyColors.drk400,
      text: canopyColors.warning,
      reverseText: canopyColors.white,
      hoverFlood: canopyColors.warningHover,
      selectedFlood: canopyColors.warningHover,
      badgeBackground: canopyColors.warning,
      badgeBorder: `1px solid ${canopyColors.warning}`,
      badgeColor: canopyColors.white,
      alertColor: canopyColors.white,
      alertBackground: canopyColors.warning,
      notificationColor: canopyColors.white,
      notificationBackground: canopyColors.warning,
      light: {
        alertColor: canopyColors.drk800,
        alertBackground: canopyColors.warningBackground,
        notificationColor: canopyColors.drk800,
        notificationBackground: canopyColors.warningBackground,
        badgeBackground: canopyColors.warningBackground,
        badgeBorder: `1px solid ${canopyColors.warning}`,
        badgeColor: canopyColors.warningHover,
      },
      cardTopBorderColor: canopyColors.lt800,
    },
    success: {
      borderColor: canopyColors.success,
      flood: canopyColors.success,
      disabledFlood: canopyColors.drk400,
      text: canopyColors.success,
      reverseText: canopyColors.white,
      hoverFlood: canopyColors.successHover,
      selectedFlood: canopyColors.successHover,
      badgeBackground: canopyColors.success,
      badgeBorder: `1px solid ${canopyColors.success}`,
      badgeColor: canopyColors.white,
      alertColor: canopyColors.white,
      alertBackground: canopyColors.success,
      notificationColor: canopyColors.white,
      notificationBackground: canopyColors.success,
      light: {
        alertColor: canopyColors.drk800,
        alertBackground: canopyColors.successBackground,
        notificationColor: canopyColors.drk800,
        notificationBackground: canopyColors.successBackground,
        badgeBackground: canopyColors.successBackground,
        badgeBorder: `1px solid ${canopyColors.success}`,
        badgeColor: canopyColors.success,
      },
      cardTopBorderColor: canopyColors.lt800,
    },
  },
  pagination: {
    text: canopyColors.drk800,
    fontWeight: 'normal',
    padding: '0',
    background: canopyColors.white,

    activeText: canopyColors.white,
    activeFontWeight: 'bold',
    activeBackground: canopyColors.primary,
    disabledText: canopyColors.drk400,
    disabledBackground: canopyColors.white,
    hoverTextColor: canopyColors.primary,
    hoverBackground: canopyColors.primaryBackground,
    hoverFontWeight: 'bold',

    button: {
      width: '24px',
      height: '24px',
      fontWeight: 'normal',
      padding: '3px 3px 4px',
      borderColor: canopyColors.white,
      borderRadius: '20px',
      activeBorderColor: canopyColors.primary,
      disabledBorderColor: canopyColors.white,
      disabledText: canopyColors.drk400,
      hoverBorderColor: canopyColors.white,
      hoverBackground: canopyColors.primaryBackground,
    },
  },

  body: {
    fontFamily: 'Roboto, Helvetica, arial, sans-serif',
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '18px',
    color: canopyColors.drk800,
    backgroundColor: canopyColors.white,
  },
  button: {
    outlineBackgroundColor: canopyColors.white,
    sm: {
      borderRadius: '20px',
      fontSize: '11px',
      padding: '7px 8px',
      lineHeight: '12px',
    },
    md: {
      borderRadius: '20px',
      fontSize: '14px',
      padding: '8px 14px',
      lineHeight: '14px',
    },
    lg: {
      borderRadius: '20px',
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
    color: canopyColors.drk800,
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
      background: canopyColors.lt400,
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
        margin: '0px 0px 0.67em',
      },
      20: {
        fontFamily: 'Roboto, Helvetica, arial, sans-serif',
        fontWeight: '400',
        fontSize: '27px',
        lineHeight: '120%',
        margin: '0px 0px 0.67em',
      },
    },
    header: {
      10: {
        fontFamily: 'Roboto, Helvetica, arial, sans-serif',
        fontWeight: '700',
        fontSize: '13px',
        lineHeight: '160%',
        margin: '0px 0px 0.83em',
      },
      20: {
        fontFamily: 'Roboto, Helvetica, arial, sans-serif',
        fontWeight: '700',
        fontSize: '14px',
        lineHeight: '175%',
        margin: '0px 0px 0.83em',
      },
    },
    link: {
      fontWeight: '500',
      fontSize: '14px',
      color: canopyColors.primary,
      textDecoration: 'none',
      disabled: {
        color: canopyColors.drk400,
      },
      visited: {
        color: canopyColors.primary,
        textDecoration: 'none',
      },
      hover: {
        color: canopyColors.primary,
        textDecoration: 'underline',
      },
    },
    pre: {
      background: canopyColors.lt400,
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
        margin: '0px 0px 0.67em',
      },
      20: {
        fontFamily: 'Roboto, Helvetica, arial, sans-serif',
        fontWeight: '700',
        fontSize: '18px',
        lineHeight: '135%',
        margin: '0px 0px 0.67em',
      },
    },
  },
  input: {
    background: canopyColors.white,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: canopyColors.lt800,
    color: canopyColors.drk800,
    fontSize: '14px',
    placeholderColor: canopyColors.drk400,
    disabled: {
      background: canopyColors.lt800,
      border: `1px solid ${canopyColors.lt400}`,
      addonTextColor: canopyColors.drk400,
    },
    sm: {
      borderRadius: '4px',
      height: '26px',
      padding: '4px 7px',
      iconTop: '6px',
    },
    md: {
      borderRadius: '4px',
      height: '30px',
      padding: '8px 10px',
      iconTop: '7px',
    },
    lg: {
      borderRadius: '4px',
      height: '38px',
      padding: '11px 16px 13px',
      iconTop: '9px',
    },
  },
  inputGroup: {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      color: canopyColors.drk800,
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
    borderColor: canopyColors.primary,
    disabledRadio: canopyColors.drk400,
    disabledText: canopyColors.drk400,
    unselectedColor: canopyColors.white,
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
    borderColor: canopyColors.primary,
    disabledCheck: canopyColors.drk400,
    disabledText: canopyColors.drk400,
    unselectedColor: canopyColors.white,
    selectedColor: canopyColors.primary,
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
      inactiveColor: canopyColors.lt800,
      inactiveBorderColor: canopyColors.lt800,
      activeColor: canopyColors.lt800,
      activeBorderColor: canopyColors.lt800,
      disabled: canopyColors.lt400,
      disabledBorderColor: canopyColors.lt400,
    },
    inactiveColor: canopyColors.drk800,
    inactiveBorderColor: canopyColors.drk800,
    activeColor: canopyColors.primary,
    activeBorderColor: canopyColors.primary,
    activeDisabledColor: canopyColors.drk400,
    activeDisabledBorderColor: canopyColors.drk400,
    inactiveDisabledColor: canopyColors.drk400,
    inactiveDisabledBorderColor: canopyColors.drk400,
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
        color: canopyColors.drk800,
        backgroundColor: canopyColors.white,
        chevronColor: defaultColors.primary,
      },
      dark: {
        color: canopyColors.drk800,
        backgroundColor: canopyColors.highlight200,
        chevronColor: defaultColors.primary,
      },
    },
  },
  modal: {
    borderRadius: '5px',
    header: {
      minHeight: '0',
      backgroundColor: canopyColors.white,
      borderColor: canopyColors.lt800,
      padding: '24px',
      fontSize: '16px',
      color: canopyColors.drk800,
    },
    body: {
      minHeight: '0',
      backgroundColor: canopyColors.white,
      borderBottom: canopyColors.lt800,
      padding: '24px',
      color: canopyColors.drk800,
    },
    footer: {
      minHeight: '0',
      backgroundColor: canopyColors.white,
      borderColor: canopyColors.lt800,
      padding: '24px',
    },
    closeButton: {
      disabledText: canopyColors.drk400,
      hoverBorderColor: canopyColors.white,
      hoverBackground: canopyColors.primaryBackground,
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
    background: canopyColors.white,
    backgroundDisabled: canopyColors.secondaryBackground,
    borderColor: canopyColors.lt800,
    hoverBorderColor: canopyColors.drk800,
    color: canopyColors.drk800,
    padding: '6px 12px',
    placeholderColor: canopyColors.drk400,
    disabled: {
      background: canopyColors.lt800,
      borderColor: canopyColors.lt400,
    },
    sm: {
      borderRadius: '4px',
    },
    md: {
      borderRadius: '4px',
    },
    lg: {
      borderRadius: '4px',
    },
  },
  panel: {
    header: {
      padding: '8px 0px',
      borderWidth: '0px',
    },
    body: {
      padding: '24px 24px',
      borderRadius: '10px',
      borderWidth: 'thin',
    },
    headerBorderColor: canopyColors.lt800,
    bodyBackgroundColor: canopyColors.lt400,
    bodyBorderColor: canopyColors.lt800,
    headerColor: canopyColors.primary,
    headerBackgroundColor: canopyColors.white,
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 1px 1px;',
  },
  badge: {
    borderRadius: '20px',
    fontSize: '14px',
    sm: {
      borderRadius: '20px',
      fontSize: '12px',
      padding: '4px 8px',
    },
    md: {
      borderRadius: '20px',
      fontSize: '14px',
      padding: '4px 8px',
    },
    lg: {
      borderRadius: '20px',
      fontSize: '18px',
      padding: '4px 8px',
    },
  },
  alert: {
    borderRadius: '7px',
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
    borderRadius: '10px',
    borderColor: canopyColors.lt800,
    fontSize: '14px',
    padding: '16px',
    background: canopyColors.white,
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 1px 1px;',
    highlightAllBorderWidth: '1px',
    highlightedBorderWidth: '1px',
  },
  popover: {
    withArrowDistance: 10,
    withoutArrowDistance: 9,
    background: canopyColors.white,
    color: canopyColors.drk800,
    borderRadius: '8px',
    boxShadow: `0 0 5px ${canopyColors.lt800}`,
    borderColor: canopyColors.primary,
  },
  tooltip: {
    background: canopyColors.drk800,
    borderRadius: '10px',
  },
  common: {
    sm: {
      borderRadius: '20px', // updated
      fontSize: '11px',
      padding: '4px 8px',
      tableCellPadding: '5px 0',
      inputIconSize: '14px',
    },
    md: {
      borderRadius: '20px', // updated
      fontSize: '14px',
      padding: '8px 16px',
      tableCellPadding: '9px 0',
      inputIconSize: '20px',
    },
    lg: {
      borderRadius: '20px', // updated
      fontSize: '16px',
      padding: '10px 16px',
      tableCellPadding: '11px 0',
      inputIconSize: '24px',
    },
  },
  validation: {
    borderColor: canopyColors.danger,
    color: canopyColors.drk800,
    fontSize: '12px',
    fontStyle: 'italic',
    lineHeight: '13px',
    errorMessageBottomPosition: '-14px',
  },
  table: {
    fontSize: '14px',
    border: `1px solid ${canopyColors.lt800}`,
    header: {
      backgroundColor: canopyColors.white,
      borderBottomColor: canopyColors.drk800,
      color: canopyColors.drk800,
      fontWeight: 'bold',
      fontSize: '16px',
    },
    row: {
      borderBottomColor: canopyColors.lt800,
      highlightColor: canopyColors.highlight200,
      hoverColor: canopyColors.lt400,
      readonlyColor: canopyColors.lt400,
      groupedHeader: {
        fontSize: '15px',
        fontWeight: 'bold',
      },
    },
    column: {
      highlightColor: canopyColors.highlight200,
      readonlyColor: canopyColors.lt400,
    },
  },
  datepicker: {
    zIndex: 99,
  },
  tabs: {
    borderColor: canopyColors.primary,
    hoverColor: canopyColors.primaryFaded,
    borderRadius: '20px',
    bottomBorderWidth: '4px',
    tab: {
      color: canopyColors.drk800,
      backgroundColor: canopyColors.white,
    },
    activetab: {
      color: canopyColors.white,
      backgroundColor: canopyColors.primary,
    },
    fontSize: '14px',
    padding: '2px 10px',
    margin: '16px 16px 0 16px',
  },
  copyToClipboard: {
    fontFamily: 'monospace',
    fontSize: '14px',
    color: canopyColors.drk800,
    background: canopyColors.lt400,
    copiedColor: canopyColors.drk400,
    padding: '16px',
    button: {
      textTransform: 'uppercase',
      height: '20px',
      fontWeight: 600,
      primaryColor: canopyColors.primary,
      successColor: canopyColors.success,
      margin: '0 4px',
    },
  },
  navbar: {
    height: '64px',
    background: canopyColors.white,
    padding: '0 45px ',
    borderTop: '',
    borderBottom: '',
    color: canopyColors.drk800,
  },
  tabnav: {
    background: canopyColors.primaryBackground,
    padding: '0 32px',
    borderTop: 'none',
    borderBottom: `1px solid ${canopyColors.lt800}`,
    color: canopyColors.drk800,
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
      iconColor: canopyColors.drk800,
    },
    activetab: {
      color: canopyColors.white,
      fontWeight: 500,
      cursor: 'pointer',
      background: canopyColors.primary,
      opacity: '1',
      bottomBorderWidth: '4px',
      bottomBorderColor: canopyColors.primary,
      iconColor: canopyColors.white,
    },
  },
  sidenav: {
    fontSize: '14px',
    color: canopyColors.primary,
    height: '',
    width: '48px',
    openWidth: '200px',
    background: canopyColors.lt200,
    padding: '0 8px',
    margin: '',
    zIndex: 100,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 'auto',
    borderLeft: '',
    borderRight: `1px solid ${canopyColors.lt800}`,
    transition: 'min-width 0.15s',
    label: {
      color: canopyColors.drk800,
    },
    secondaryNavbar: {
      width: '0px',
      openWidth: '170px',
      background: canopyColors.white,
      color: `${canopyColors.drk800}`,
      padding: '30px 8px 16px',
      margin: '',
      zIndex: 100,
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 'auto',
      borderLeft: '',
      borderRight: `1px solid ${canopyColors.lt800}`,
      transition: 'left 0.15s',
    },
    secondaryNavbarLabel: {
      color: `${canopyColors.drk800}`,
    },
    nav: {
      padding: '',
      margin: '',
    },
    toggle: {
      height: '80px',
      cursor: 'pointer',
      padding: '0 12px',
      borderBottom: `1px solid ${canopyColors.lt800}`,
      display: 'grid',
    },
    navItem: {
      color: `${canopyColors.drk800}`,
      fontWeight: 300,
      cursor: 'pointer',
      background: 'transparent',
      opacity: '1',
      leftBorderWidth: '0',
      leftBorderColor: 'transparent',
      topNavBorderBottom: `1px solid ${canopyColors.lt800}`,
      transition: 'all 0.3s 0s ease-in-out',
    },
    activenavItem: {
      color: canopyColors.primary,
      fontWeight: 500,
      cursor: 'pointer',
      background: `border-box ${canopyColors.primaryBackground}`,
      hoverBorder: `2px solid ${canopyColors.primary}`,
      opacity: '1',
      leftBorderWidth: '4px',
      leftBorderColor: canopyColors.primary,
      topNavBorderBottom: `1px solid ${canopyColors.lt800}`,
    },
    activeSecnavItem: {
      color: canopyColors.primary,
      fontWeight: 700,
      background: canopyColors.lt200,
    },
    itemToggle: {
      position: 'absolute',
      right: '0',
      background: canopyColors.lt200,
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
    backgroundColor: canopyColors.lt800,
    borderColor: canopyColors.primary,
  },
  itemContainer: {
    borderColor: canopyColors.lt800,
  },
  select: {
    color: canopyColors.drk800,
    dropdownColor: canopyColors.drk800,
    optionBackgroundColor: canopyColors.white,
    highlightOptionBackgroundColor: canopyColors.lt400,
    highlightOptionColor: canopyColors.primary,
    selectedOptionColor: canopyColors.primary,
    selectedOptionBackgroundColor: canopyColors.white,
    borderColor: canopyColors.lt800,
    placeholderColor: canopyColors.drk400,
    width: '100%',
    disabled: {
      color: canopyColors.drk800,
      dropdownColor: canopyColors.drk400,
      borderColor: canopyColors.lt400,
      backgroundColor: canopyColors.lt800,
      placeholderColor: canopyColors.drk400,
    },
    sm: {
      borderRadius: '4px',
      height: '28px',
      padding: '2px 10px',
    },
    md: {
      borderRadius: '4px',
      height: '32px',
      padding: '0px 10px',
    },
    lg: {
      borderRadius: '4px',
      height: '40px',
      padding: '6px 13px',
    },
    multiSelect: {
      badge: {
        backgroundColor: canopyColors.lt800,
        borderRadius: '10px',
        disabled: {
          backgroundColor: canopyColors.drk400,
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
      color: canopyColors.secondaryHover,
      border: `1px dashed ${canopyColors.lt800}`,
      draggingBorder: `1px dashed ${canopyColors.drk400}`,
      borderRadius: '1px',
      textAlign: 'center',
      padding: '16px',
      margin: '0 0 16px',
      ctaColor: canopyColors.primary,
      background: canopyColors.white,
      draggingBackground: canopyColors.lt400,
    },
    file: {
      defaultColor: canopyColors.drk800,
      primaryColor: canopyColors.primary,
      dangerColor: canopyColors.danger,
      background: canopyColors.lt400,
      borderRadius: '1px',
      textAlign: 'left',
      padding: '16px',
      margin: '3px 0',
    },
  },
  progressBar: {
    height: '8px',
    borderRadius: '6px',
    background: canopyColors.lt800,
    progressBackground: canopyColors.primary,
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
