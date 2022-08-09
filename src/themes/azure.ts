import { defaultTheme } from './default';
export { ThemeProvider } from 'styled-components';
import _ from 'lodash';

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

export const azureThemeOverrides = {
  name: 'Azure',
  colors: azureColors,
  borders: {
    radiusSm: '3.2px',
    radiusLg: '4.8px',
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
      badgeBackground: azureColors.primaryFaded,
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
        badgeColor: azureColors.drk800,
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
      badgeBackground: azureColors.dangerFaded,
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
        badgeColor: azureColors.warningHover,
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
    background: azureColors.white,

    activeText: azureColors.primary,
    activeBackground: azureColors.white,
    disabledText: azureColors.drk200,
    disabledBackground: azureColors.white,
    hoverTextColor: azureColors.primary,
    hoverBackground: azureColors.white,

    button: {
      borderColor: azureColors.white,
      activeBorderColor: azureColors.primary,
      disabledBorderColor: azureColors.white,
      disabledText: azureColors.drk200,
      hoverBorderColor: azureColors.white,
      hoverBackground: azureColors.lt400,
    },
  },

  body: {
    fontFamily: 'Roboto, Helvetica, arial, sans-serif',
    color: azureColors.drk800,
    backgroundColor: azureColors.white,
  },
  button: {
    outlineBackgroundColor: azureColors.white,
  },
  typography: {
    fontFamily: 'Roboto, Helvetica, arial, sans-serif',
    color: azureColors.drk800,
    caption: {
      10: {
        fontFamily: 'Roboto, Helvetica, arial, sans-serif',
      },
      20: {
        fontFamily: 'Roboto, Helvetica, arial, sans-serif',
      },
    },
    bodyText: {
      10: {
        fontFamily: 'Roboto, Helvetica, arial, sans-serif',
      },
      20: {
        fontFamily: 'Roboto, Helvetica, arial, sans-serif',
      },
    },
    code: {
      background: azureColors.lt200,
    },
    display: {
      10: {
        fontFamily: 'Roboto, Helvetica, arial, sans-serif',
      },
      20: {
        fontFamily: 'Roboto, Helvetica, arial, sans-serif',
      },
    },
    header: {
      10: {
        fontFamily: 'Roboto, Helvetica, arial, sans-serif',
        fontSize: '13px',
      },
      20: {
        fontFamily: 'Roboto, Helvetica, arial, sans-serif',
        fontSize: '14px',
      },
    },
    link: {
      color: azureColors.primary,
      disabled: {
        color: azureColors.drk400,
      },
      visited: {
        color: azureColors.primary,
      },
      hover: {
        color: azureColors.primaryHover,
      },
    },
    pre: {
      background: azureColors.lt200,
    },
    title: {
      10: {
        fontFamily: 'Roboto, Helvetica, arial, sans-serif',
      },
      20: {
        fontFamily: 'Roboto, Helvetica, arial, sans-serif',
      },
    },
  },
  input: {
    background: azureColors.white,
    borderColor: azureColors.drk400,
    color: azureColors.drk800,
    placeholderColor: azureColors.drk400,
    disabled: {
      background: azureColors.lt600,
      border: `1px solid ${azureColors.lt600}`,
      addonTextColor: azureColors.drk400,
    },
  },
  inputGroup: {
    root: {
      color: azureColors.drk800,
    },
    label: {
      padding: '8px 16px 4px 0',
    },
  },
  radioButton: {
    borderColor: azureColors.primary,
    disabledRadio: azureColors.drk200,
    disabledText: azureColors.drk600,
    unselectedColor: azureColors.white,
  },
  checkbox: {
    borderColor: azureColors.primary,
    disabledCheck: azureColors.drk200,
    disabledText: azureColors.drk800,
    unselectedColor: azureColors.white,
    selectedColor: azureColors.primary,
    stackedSpacing: '10px',
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
  },
  listGroup: {
    theme: {
      light: {
        color: azureColors.drk800,
        backgroundColor: azureColors.white,
      },
      dark: {
        color: azureColors.drk800,
        backgroundColor: azureColors.highlight200,
      },
    },
  },
  modal: {
    header: {
      minHeight: '0',
      backgroundColor: azureColors.lt200,
      borderColor: azureColors.lt800,
      padding: '15px',
      color: azureColors.drk800,
    },
    body: {
      backgroundColor: azureColors.white,
      borderBottom: azureColors.lt800,
      padding: '15px',
      color: azureColors.drk800,
    },
    footer: {
      backgroundColor: azureColors.lt200,
      borderColor: azureColors.lt800,
      padding: '15px',
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
    lightFontWeight: '400',
  },
  card: {
    borderColor: azureColors.secondaryHover,
    background: azureColors.white,
  },
  popover: {
    background: azureColors.white,
    color: azureColors.drk800,
    borderColor: azureColors.lt800,
    boxShadow: `0 0 5px ${azureColors.lt800}`,
  },
  tooltip: {
    background: azureColors.drk800,
  },
  common: {
    sm: {
      tableCellPadding: '5px 0',
    },
    md: {
      padding: '8px 16px',
    },
  },
  validation: {
    borderColor: azureColors.danger,
    color: azureColors.drk800,
  },
  table: {
    border: `1px solid ${azureColors.lt800}`,
    header: {
      borderBottomColor: azureColors.drk800,
      color: azureColors.drk800,
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

  tabs: {
    color: azureColors.drk800,
    borderColor: azureColors.primary,
    hoverColor: azureColors.primaryFaded,
    bottomBorderWidth: '4px',
    padding: '0 0 4px 0',
    margin: '16px 16px 0 16px',
  },
  copyToClipboard: {
    color: azureColors.drk800,
    background: azureColors.lt200,
    copiedColor: azureColors.drk400,
    button: {
      fontWeight: 600,
      primaryColor: azureColors.primary,
      successColor: azureColors.success,
    },
  },
  navbar: {
    height: '64px',
    background: azureColors.white,
    padding: '0 45px ',
    color: azureColors.drk800,
  },
  tabnav: {
    background: azureColors.highlight200,
    padding: '0 32px',
    borderTop: 'none',
    borderBottom: `1px solid ${azureColors.lt800}`,
    color: azureColors.drk800,
    tab: {
      iconColor: azureColors.primary,
    },
    activetab: {
      color: azureColors.drk800,
      bottomBorderColor: azureColors.primary,
      iconColor: azureColors.primary,
    },
    tabDropdown: {
      color: azureColors.drk800,
      background: azureColors.white,
      hoverColor: azureColors.primary,
      hoverBackground: azureColors.lt200,
    },
  },
  sidenav: {
    color: azureColors.primary,
    background: azureColors.lt200,
    borderRight: `1px solid ${azureColors.lt800}`,
    secondaryNavbar: {
      background: azureColors.white,

      borderRight: `1px solid ${azureColors.lt800}`,
    },
    toggle: {
      borderBottom: `1px solid ${azureColors.lt800}`,
    },
    navItem: {
      topNavBorderBottom: `1px solid ${azureColors.lt800}`,
    },
    activenavItem: {
      color: azureColors.primary,
      background: azureColors.white,

      leftBorderColor: azureColors.primary,
      topNavBorderBottom: `1px solid ${azureColors.lt800}`,
    },
    activeSecnavItem: {
      color: azureColors.primary,
      background: azureColors.lt200,
    },
    itemToggle: {
      background: azureColors.lt200,
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
    highlightOptionBackgroundColor: azureColors.lt200,
    highlightOptionColor: azureColors.primary,
    selectedOptionColor: azureColors.primary,
    selectedOptionBackgroundColor: azureColors.white,
    borderColor: azureColors.drk400,
    placeholderColor: azureColors.drk400,
    disabled: {
      color: azureColors.drk800,
      dropdownColor: azureColors.drk400,
      borderColor: azureColors.lt600,
      backgroundColor: azureColors.lt600,
      placeholderColor: azureColors.drk400,
    },
    multiSelect: {
      badge: {
        backgroundColor: azureColors.lt600,
        disabled: {
          backgroundColor: azureColors.drk200,
        },
      },
    },
  },
  fileUpload: {
    fontSize: '14px',
    dropZone: {
      color: azureColors.secondaryHover,
      border: `1px dashed ${azureColors.lt800}`,
      draggingBorder: `1px dashed ${azureColors.drk400}`,
      ctaColor: azureColors.primary,
      background: azureColors.white,
      draggingBackground: azureColors.lt200,
    },
    file: {
      defaultColor: azureColors.drk800,
      primaryColor: azureColors.primary,
      dangerColor: azureColors.danger,
      background: azureColors.lt200,
    },
  },
  progressBar: {
    background: azureColors.lt800,
    progressBackground: azureColors.primary,
  },
};

export const azureTheme = _.merge(
  _.cloneDeep(defaultTheme),
  azureThemeOverrides,
);
