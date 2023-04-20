export const buildTheme = colors => ({
  colors,
  borders: {
    radius: '1px',
    radiusSm: '3.2px',
    radiusLg: '4.8px',
    width: '1px',
  },
  styles: {
    primary: {
      borderColor: colors.primary,
      flood: colors.primary,
      disabledFlood: colors.drk400,
      lightFlood: colors.primaryFaded,
      hoverlightFlood: colors.primaryFaded,
      text: colors.primary,
      reverseText: colors.white,
      hoverFlood: colors.primaryHover,
      selectedFlood: colors.primaryHover,
      badgeBackground: colors.primaryFaded,
      badgeColor: colors.white,
      alertColor: colors.white,
      alertBackground: colors.primary,
      notificationColor: colors.white,
      notificationBackground: colors.primary,
      light: {
        alertColor: colors.drk800,
        alertBackground: colors.primaryBackground,
        notificationColor: colors.drk800,
        notificationBackground: colors.primaryBackground,
        badgeBackground: colors.primaryBackground,
        badgeColor: colors.primary,
      },
      cardTopBorderColor: colors.primary,
    },
    secondary: {
      borderColor: colors.secondary,
      flood: colors.secondary,
      disabledFlood: colors.drk400,
      lightFlood: colors.secondaryFaded,
      hoverlightFlood: colors.secondaryFaded,
      text: colors.primary,
      reverseText: colors.white,
      hoverFlood: colors.secondaryHover,
      selectedFlood: colors.secondaryHover,
      badgeBackground: colors.drk400,
      badgeColor: colors.white,
      alertColor: colors.white,
      alertBackground: colors.drk400,
      notificationColor: colors.drk800,
      notificationBackground: colors.secondary,
      light: {
        alertColor: colors.drk800,
        alertBackground: colors.secondaryBackground,
        notificationColor: colors.drk800,
        notificationBackground: colors.secondaryBackground,
        badgeBackground: colors.secondaryBackground,
        badgeColor: colors.drk800,
      },
      cardTopBorderColor: colors.secondary,
    },
    danger: {
      borderColor: colors.danger,
      flood: colors.danger,
      disabledFlood: colors.drk400,
      lightFlood: colors.dangerFaded,
      hoverlightFlood: colors.dangerFaded,
      text: colors.danger,
      reverseText: colors.white,
      hoverFlood: colors.dangerHover,
      selectedFlood: colors.dangerHover,
      badgeBackground: colors.dangerFaded,
      badgeColor: colors.white,
      alertColor: colors.white,
      alertBackground: colors.danger,
      notificationColor: colors.white,
      notificationBackground: colors.danger,
      light: {
        alertColor: colors.drk800,
        alertBackground: colors.dangerBackground,
        notificationColor: colors.drk800,
        notificationBackground: colors.dangerBackground,
        badgeBackground: colors.dangerBackground,
        badgeColor: colors.danger,
      },
      cardTopBorderColor: colors.danger,
    },
    warning: {
      borderColor: colors.warning,
      flood: colors.warning,
      disabledFlood: colors.drk400,
      lightFlood: colors.warningFaded,
      hoverlightFlood: colors.warningFaded,
      text: colors.warning,
      reverseText: colors.white,
      hoverFlood: colors.warningHover,
      selectedFlood: colors.warningHover,
      badgeBackground: colors.warningFaded,
      badgeColor: colors.white,
      alertColor: colors.white,
      alertBackground: colors.warning,
      notificationColor: colors.white,
      notificationBackground: colors.warning,
      light: {
        alertColor: colors.drk800,
        alertBackground: colors.warningBackground,
        notificationColor: colors.drk800,
        notificationBackground: colors.warningBackground,
        badgeBackground: colors.warningBackground,
        badgeColor: colors.warningHover,
      },
      cardTopBorderColor: colors.warning,
    },
    success: {
      borderColor: colors.success,
      flood: colors.success,
      disabledFlood: colors.drk400,
      lightFlood: colors.successFaded,
      hoverlightFlood: colors.successFaded,
      text: colors.success,
      reverseText: colors.white,
      hoverFlood: colors.successHover,
      selectedFlood: colors.successHover,
      badgeBackground: colors.successFaded,
      badgeColor: colors.white,
      alertColor: colors.white,
      alertBackground: colors.success,
      notificationColor: colors.white,
      notificationBackground: colors.success,
      light: {
        alertColor: colors.drk800,
        alertBackground: colors.successBackground,
        notificationColor: colors.drk800,
        notificationBackground: colors.successBackground,
        badgeBackground: colors.successBackground,
        badgeColor: colors.success,
      },
      cardTopBorderColor: colors.success,
    },
  },
  pagination: {
    text: colors.drk800,
    fontWeight: 'normal',
    padding: '0',
    background: colors.white,

    activeText: colors.primary,
    activeFontWeight: 'bold',
    activeBackground: colors.white,
    disabledText: colors.drk400,
    disabledBackground: colors.white,
    hoverTextColor: colors.primaryHover,
    hoverBackground: colors.white,
    hoverFontWeight: 'bold',

    button: {
      width: '24px',
      height: '24px',
      fontWeight: 'normal',
      padding: '3px 3px 4px',
      borderColor: colors.white,
      activeBorderColor: colors.primary,
      disabledBorderColor: colors.white,
      disabledText: colors.drk400,
      hoverBorderColor: colors.white,
      hoverBackground: colors.lt400,
    },
  },

  body: {
    fontFamily: 'Roboto, Helvetica, arial, sans-serif',
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '18px',
    color: colors.drk800,
    backgroundColor: colors.white,
  },
  button: {
    borderRadius: '20px',
    outlineBackgroundColor: colors.white,
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
    color: colors.drk800,
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
      background: colors.lt400,
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
      },
      20: {
        fontFamily: 'Roboto, Helvetica, arial, sans-serif',
        fontWeight: '400',
        fontSize: '27px',
        lineHeight: '120%',
      },
    },
    header: {
      10: {
        fontFamily: 'Roboto, Helvetica, arial, sans-serif',
        fontWeight: '700',
        fontSize: '13px',
        lineHeight: '160%',
      },
      20: {
        fontFamily: 'Roboto, Helvetica, arial, sans-serif',
        fontWeight: '700',
        fontSize: '14px',
        lineHeight: '175%',
      },
    },
    link: {
      fontWeight: '500',
      fontSize: '14px',
      color: colors.primary,
      textDecoration: 'none',
      disabled: {
        color: colors.drk400,
      },
      visited: {
        color: colors.primary,
        textDecoration: 'none',
      },
      hover: {
        color: colors.primary,
        textDecoration: 'underline',
      },
    },
    pre: {
      background: colors.lt400,
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
      },
      20: {
        fontFamily: 'Roboto, Helvetica, arial, sans-serif',
        fontWeight: '700',
        fontSize: '18px',
        lineHeight: '135%',
      },
    },
  },
  input: {
    background: colors.white,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: colors.drk400,
    color: colors.drk800,
    fontSize: '14px',
    placeholderColor: colors.drk400,
    disabled: {
      background: colors.lt800,
      border: `1px solid ${colors.lt800}`,
      addonTextColor: colors.drk400,
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
      color: colors.drk800,
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
    borderColor: colors.primary,
    disabledRadio: colors.drk400,
    disabledText: colors.drk800,
    unselectedColor: colors.white,
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
    borderColor: colors.primary,
    disabledCheck: colors.lt800,
    disabledText: colors.drk800,
    unselectedColor: colors.white,
    selectedColor: colors.primary,
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
      inactiveColor: colors.lt800,
      inactiveBorderColor: colors.lt800,
      activeColor: colors.lt800,
      activeBorderColor: colors.lt800,
      disabled: colors.lt400,
      disabledBorderColor: colors.lt400,
    },
    inactiveColor: colors.drk800,
    inactiveBorderColor: colors.drk800,
    activeColor: colors.primary,
    activeBorderColor: colors.primary,
    activeDisabledColor: colors.drk400,
    activeDisabledBorderColor: colors.drk400,
    inactiveDisabledColor: colors.drk400,
    inactiveDisabledBorderColor: colors.drk400,
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
        color: colors.drk800,
        backgroundColor: colors.white,
        chevronColor: colors.primary,
      },
      dark: {
        color: colors.drk800,
        backgroundColor: colors.highlight200,
        chevronColor: colors.primary,
      },
    },
  },
  modal: {
    borderRadius: '4px',
    header: {
      minHeight: '0',
      backgroundColor: colors.white,
      borderColor: colors.lt800,
      padding: '15px',
      fontSize: '16px',
      color: colors.drk800,
    },
    body: {
      minHeight: '0',
      backgroundColor: colors.white,
      borderBottom: colors.lt800,
      padding: '15px',
      color: colors.drk800,
    },
    footer: {
      minHeight: '0',
      backgroundColor: colors.white,
      borderColor: colors.lt800,
      padding: '15px',
    },
    button: {
      disabledText: colors.drk400,
      hoverBorderColor: colors.white,
      hoverBackground: colors.lt400,
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
    background: colors.white,
    backgroundDisabled: colors.secondaryBackground,
    borderColor: colors.drk400,
    hoverBorderColor: colors.drk800,
    color: colors.drk800,
    padding: '6px 12px',
    placeholderColor: colors.drk400,
    disabled: {
      background: colors.lt800,
      borderColor: colors.secondaryFaded,
    },
  },
  panel: {
    header: {
      padding: '14px 16px',
    },
    body: {
      padding: '24px 24px',
    },
    borderWidth: 'thin',
    headerBorderColor: colors.drk400,
    bodyBackgroundColor: colors.white,
    bodyBorderColor: colors.drk400,
    headerColor: colors.primary,
    headerBackgroundColor: colors.white,
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
    borderRadius: '4px',
    fontSize: '14px',
    padding: '8px 16px',
    fontWeight: 'bold',
    lightFontWeight: '400',
    lineHeight: '18px',
  },
  notification: {
    borderRadius: '4px',
    fontSize: '14px',
    padding: '8px 16px',
    fontWeight: 'bold',
    lineHeight: '18px',
  },
  card: {
    borderRadius: '4px',
    borderColor: colors.drk400,
    fontSize: '14px',
    padding: '8px 16px',
    background: colors.white,
    boxShadow: '0 2px 4px rgba(0,0,0,.075) !important;',
    highlightAllBorderWidth: '1px',
    highlightedBorderWidth: '5px',
  },
  popover: {
    withArrowDistance: 10,
    withoutArrowDistance: 9,
    background: colors.white,
    color: colors.drk800,
    borderRadius: '4px',
    borderColor: colors.lt800,
    boxShadow: `0 0 5px ${colors.lt800}`,
  },
  tooltip: {
    background: colors.drk800,
    borderRadius: '4px',
  },
  common: {
    borderRadius: '4px',
    sm: {
      borderRadius: '4px',
      fontSize: '11px',
      padding: '4px 8px',
      tableCellPadding: '5px 0',
      inputIconSize: '14px',
    },
    md: {
      borderRadius: '4px',
      fontSize: '14px',
      padding: '8px 16px',
      tableCellPadding: '9px 0',
      inputIconSize: '20px',
    },
    lg: {
      borderRadius: '4px',
      fontSize: '16px',
      padding: '10px 16px',
      tableCellPadding: '11px 0',
      inputIconSize: '24px',
    },
  },
  validation: {
    borderColor: colors.danger,
    color: colors.drk800,
    fontSize: '12px',
    fontStyle: 'italic',
    lineHeight: '13px',
    errorMessageBottomPosition: '-14px',
  },
  table: {
    fontSize: '14px',
    border: `1px solid ${colors.drk400}`,
    header: {
      backgroundColor: colors.white,
      borderBottomColor: colors.drk800,
      color: colors.drk800,
      fontWeight: 'bold',
      fontSize: '16px',
    },
    row: {
      borderBottomColor: colors.lt800,
      highlightColor: colors.highlight200,
      hoverColor: colors.lt400,
      readonlyColor: colors.lt400,
      groupedHeader: {
        fontSize: '15px',
        fontWeight: 'bold',
      },
    },
    column: {
      highlightColor: colors.highlight200,
      readonlyColor: colors.lt400,
    },
  },
  datepicker: {
    zIndex: 99,
  },
  tabs: {
    borderColor: colors.primary,
    hoverColor: colors.primaryFaded,
    borderRadius: '20px',
    bottomBorderWidth: '4px',
    tab: {
      color: colors.drk800,
      backgroundColor: colors.white,
    },
    activetab: {
      color: colors.white,
      backgroundColor: colors.primary,
    },
    fontSize: '14px',
    padding: '2px 10px',
    margin: '16px 16px 0 16px',
  },
  copyToClipboard: {
    fontFamily: 'monospace',
    fontSize: '14px',
    color: colors.drk800,
    background: colors.lt400,
    copiedColor: colors.drk400,
    padding: '16px',
    button: {
      textTransform: 'uppercase',
      height: '20px',
      fontWeight: 600,
      primaryColor: colors.primary,
      successColor: colors.success,
      margin: '0 4px',
    },
  },
  navbar: {
    height: '64px',
    background: colors.white,
    padding: '0 45px ',
    borderTop: '',
    borderBottom: '',
    color: colors.drk800,
  },
  tabnav: {
    background: colors.highlight200,
    padding: '0 32px',
    borderTop: 'none',
    borderBottom: `1px solid ${colors.lt800}`,
    color: colors.drk800,
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
      iconColor: colors.drk800,
    },
    activetab: {
      color: colors.white,
      fontWeight: 500,
      cursor: 'pointer',
      background: colors.primary,
      opacity: '1',
      bottomBorderWidth: '4px',
      bottomBorderColor: colors.primary,
      iconColor: colors.white,
    },
  },
  sidenav: {
    fontSize: '14px',
    color: colors.primary,
    height: '',
    width: '48px',
    openWidth: '200px',
    background: colors.lt200,
    padding: '0 8px',
    margin: '',
    zIndex: 100,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 'auto',
    borderLeft: '',
    borderRight: `1px solid ${colors.lt800}`,
    transition: 'min-width 0.15s',
    label: {
      color: colors.drk800,
    },

    secondaryNavbar: {
      width: '0px',
      openWidth: '170px',
      background: colors.white,
      color: `${colors.drk800}`,
      padding: '30px 8px 16px',
      margin: '',
      zIndex: 100,
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 'auto',
      borderLeft: '',
      borderRight: `1px solid ${colors.lt800}`,
      transition: 'left 0.15s',
    },
    secondaryNavbarLabel: {
      color: `${colors.drk800}`,
    },
    nav: {
      padding: '',
      margin: '',
    },
    toggle: {
      height: '80px',
      cursor: 'pointer',
      padding: '0 12px',
      borderBottom: `1px solid ${colors.lt800}`,
      display: 'grid',
    },
    navItem: {
      color: `${colors.drk800}`,
      fontWeight: 300,
      cursor: 'pointer',
      background: 'transparent',
      opacity: '1',
      leftBorderWidth: '0',
      leftBorderColor: 'transparent',
      topNavBorderBottom: `1px solid ${colors.lt800}`,
      bottonNavBorderBottom: '',
      transition: 'all 0.3s 0s ease-in-out',
    },
    activenavItem: {
      color: colors.primary,
      fontWeight: 500,
      cursor: 'pointer',
      background: `border-box ${colors.primaryBackground}`,
      opacity: '1',
      leftBorderWidth: '4px',
      leftBorderColor: colors.primary,
      topNavBorderBottom: `1px solid ${colors.lt800}`,
      bottonNavBorderBottom: '',
    },
    activeSecnavItem: {
      color: colors.primary,
      fontWeight: 700,
      background: colors.lt200,
    },
    itemToggle: {
      position: 'absolute',
      right: '0',
      background: colors.lt200,
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
    backgroundColor: colors.lt800,
    borderColor: colors.primary,
  },
  itemContainer: {
    borderColor: colors.lt800,
  },
  select: {
    color: colors.drk800,
    dropdownColor: colors.drk800,
    optionBackgroundColor: colors.white,
    highlightOptionBackgroundColor: colors.lt400,
    highlightOptionColor: colors.primary,
    selectedOptionColor: colors.primary,
    selectedOptionBackgroundColor: colors.white,
    borderColor: colors.drk400,
    placeholderColor: colors.drk400,
    width: '100%',
    disabled: {
      color: colors.drk800,
      dropdownColor: colors.drk400,
      borderColor: colors.lt800,
      backgroundColor: colors.lt800,
      placeholderColor: colors.drk400,
    },
    sm: {
      height: '28px',
      padding: '2px 10px',
    },
    md: {
      height: '32px',
      padding: '0px 10px',
    },
    lg: {
      height: '40px',
      padding: '6px 13px',
    },
    multiSelect: {
      badge: {
        backgroundColor: colors.lt800,
        borderRadius: '10px',
        disabled: {
          backgroundColor: colors.drk400,
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
      color: colors.secondaryHover,
      border: `1px dashed ${colors.lt800}`,
      draggingBorder: `1px dashed ${colors.drk400}`,
      borderRadius: '4px',
      textAlign: 'center',
      padding: '16px',
      margin: '0 0 16px',
      ctaColor: colors.primary,
      background: colors.white,
      draggingBackground: colors.lt400,
    },
    file: {
      defaultColor: colors.drk800,
      primaryColor: colors.primary,
      dangerColor: colors.danger,
      background: colors.lt400,
      borderRadius: '4px',
      textAlign: 'left',
      padding: '16px',
      margin: '3px 0',
    },
  },
  progressBar: {
    height: '8px',
    borderRadius: '4px',
    background: colors.lt800,
    progressBackground: colors.primary,
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
});
