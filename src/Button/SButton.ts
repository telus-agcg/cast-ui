import styled from 'styled-components';

type Props = {
  /**
   * Specify if the button is outline
   *
   * @default false
   **/
  outline?: boolean;
  /** this dictates what the button will do  */
  onClick(e: React.MouseEvent<HTMLElement>): void;
  /**
   * Select Button Style
   *
   * @default 'default'
   **/
  btnStyle: string;
  /**
   * Select Button Size
   *
   * @default 'md'
   **/
  btnSize: string;
  /**
   * Specify if the button is disabled
   *
   * @default false
   **/
  disabled?: boolean;
  /**
   * Specify if the button is selected
   *
   * @default false
   **/
  selected?: boolean;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

const computeColor: Function = (
  btnState: string,
  selected: Boolean,
  outline: Boolean,
  btnStyle: string,
  theme: any,
) => {
  console.log(
    'Here props ',
    btnState,
    selected,
    outline,
    btnStyle,
    theme.styles[btnStyle].flood,
    theme.styles[btnStyle].reverseText,
    theme.styles[btnStyle].borderColor,
  );
  switch (true) {
    case selected === true:
      switch (btnState) {
        case 'hover':
          return {
            background: theme.styles[btnStyle].hoverFlood,
            color: theme.styles[btnStyle].reverseText,
            borderColor: theme.styles[btnStyle].hoverFlood,
          };
        case 'disabled':
          return {
            background: theme.colors.disabledText,
            color: theme.colors.white,
            borderColor: theme.styles[btnStyle].disabledText,
          };
        default:
          return {
            background: theme.styles[btnStyle].selectedFlood,
            color: theme.styles[btnStyle].reverseText,
            borderColor: theme.styles[btnStyle].borderColor,
          };
      }
    case outline === true:
      switch (btnState) {
        case 'hover':
          return {
            background: theme.styles[btnStyle].lightFlood,
            color: theme.styles[btnStyle].hoverFlood,
            borderColor: theme.styles[btnStyle].hoverFlood,
          };
        case 'disabled':
          return {
            background: theme.colors.white,
            color: theme.colors.disabledText,
            borderColor: theme.styles[btnStyle].disabledText,
          };
        default:
          return {
            background: theme.styles[btnStyle].reverseText,
            color: theme.styles[btnStyle].flood,
            borderColor: theme.styles[btnStyle].borderColor,
          };
      }
    default:
      switch (btnState) {
        case 'hover':
          return {
            background: theme.styles[btnStyle].hoverFlood,
            color: theme.styles[btnStyle].reverseText,
            borderColor: theme.styles[btnStyle].hoverFlood,
          };
        case 'disabled':
          return {
            background: theme.colors.disabledText,
            color: theme.colors.white,
            borderColor: theme.styles[btnStyle].disabledText,
          };
        default:
          return {
            background: theme.styles[btnStyle].flood,
            color: theme.styles[btnStyle].reverseText,
            borderColor: theme.styles[btnStyle].borderColor,
          };
      }
  }
};

const SButton = styled.button`
  min-width: 75px;
  border-radius: ${(props: Props) =>
    props.theme.common[props.btnSize].borderRadius};
  background: ${(props: Props) =>
    computeColor(
      'normal',
      props.selected,
      props.outline,
      props.btnStyle,
      props.theme,
    ).background}
  border: 1px solid ${(props: Props) =>
    computeColor(
      'normal',
      props.selected,
      props.outline,
      props.btnStyle,
      props.theme,
    ).borderColor}
  padding: ${(props: Props) => props.theme.common[props.btnSize].padding}
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.common[props.btnSize].fontSize}
  font-weight: 600;
  color: ${(props: Props) =>
    computeColor(
      'normal',
      props.selected,
      props.outline,
      props.btnStyle,
      props.theme,
    ).color}
  &:hover,&:active {
    background: ${(props: Props) =>
      computeColor(
        'hover',
        props.selected,
        props.outline,
        props.btnStyle,
        props.theme,
      ).background};
    color: ${(props: Props) =>
      computeColor(
        'hover',
        props.selected,
        props.outline,
        props.btnStyle,
        props.theme,
      ).color};
    border: 1px solid ${(props: Props) =>
      computeColor(
        'hover',
        props.selected,
        props.outline,
        props.btnStyle,
        props.theme,
      ).borderColor}
    cursor: pointer;
  }
  &:disabled {
    background: ${(props: Props) =>
      computeColor(
        'disabled',
        props.selected,
        props.outline,
        props.btnStyle,
        props.theme,
      ).background}
    color: ${(props: Props) =>
      computeColor(
        'disabled',
        props.selected,
        props.outline,
        props.btnStyle,
        props.theme,
      ).color}
    border: 1px solid ${(props: Props) =>
      computeColor(
        'disabled',
        props.selected,
        props.outline,
        props.btnStyle,
        props.theme,
      ).borderColor}
    cursor: not-allowed;
  }
`;

export default SButton;
