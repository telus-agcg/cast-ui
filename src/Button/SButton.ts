import styled from 'styled-components';

type Props = {
  /**
   * Specify if the button is outline
   *
   * @default false
   **/
  outline?: boolean;
  /** this dictates what the button will do  */
  onClick?(e: React.MouseEvent<HTMLElement>): void;
  /**
   * Select Button Style
   *
   * @default 'default'
   **/
  btnStyle?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger';
  /**
   * Select Button Size
   *
   * @default 'md'
   **/
  btnSize?: 'sm' | 'md' | 'lg';
  /**
   * Override default background color
   *
   * @default ''
   **/
  backgroundColor?: string;
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
  backgroundColor: string,
  theme: any,
) => {
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
            color: theme.styles[btnStyle].reverseText,
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
            background: theme.styles[btnStyle].selectedFlood,
            color: theme.styles[btnStyle].reverseText,
            borderColor: theme.styles[btnStyle].borderColor,
          };
        case 'disabled':
          return {
            background: 'none',
            color: theme.styles[btnStyle].disabledFlood,
            borderColor: theme.styles[btnStyle].disabledFlood,
          };
        default:
          return {
            background: backgroundColor || theme.button.outlineBackgroundColor,
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
            background: theme.styles[btnStyle].disabledFlood,
            color: theme.styles[btnStyle].reverseText,
            borderColor: theme.styles[btnStyle].disabledFlood,
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
  min-width: 96px;
  box-sizing: border-box;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.1s;
  border-radius: ${(props: Props) =>
    props.theme.common[props.btnSize!].borderRadius};
  background: ${(props: Props) =>
    props.backgroundColor ||
    computeColor(
      'normal',
      props.selected,
      props.outline,
      props.btnStyle,
      props.backgroundColor,
      props.theme,
    ).background};
  border: 1px solid
    ${(props: Props) =>
      computeColor(
        'normal',
        props.selected,
        props.outline,
        props.btnStyle,
        props.backgroundColor,
        props.theme,
      ).borderColor};
  padding: ${(props: Props) => props.theme.common[props.btnSize!].padding};
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.common[props.btnSize!].fontSize};
  font-weight: 600;
  color: ${(props: Props) =>
    computeColor(
      'normal',
      props.selected,
      props.outline,
      props.btnStyle,
      props.backgroundColor,
      props.theme,
    ).color};
  &:hover,
  &:active {
    background: ${(props: Props) =>
      computeColor(
        'hover',
        props.selected,
        props.outline,
        props.btnStyle,
        props.backgroundColor,
        props.theme,
      ).background};
    color: ${(props: Props) =>
      computeColor(
        'hover',
        props.selected,
        props.outline,
        props.btnStyle,
        props.backgroundColor,
        props.theme,
      ).color};
    border: 1px solid
      ${(props: Props) =>
        computeColor(
          'hover',
          props.selected,
          props.outline,
          props.btnStyle,
          props.backgroundColor,
          props.theme,
        ).borderColor};
    cursor: pointer;
  }
  &:disabled {
    background: ${(props: Props) =>
      computeColor(
        'disabled',
        props.selected,
        props.outline,
        props.btnStyle,
        props.backgroundColor,
        props.theme,
      ).background};
    color: ${(props: Props) =>
      computeColor(
        'disabled',
        props.selected,
        props.outline,
        props.btnStyle,
        props.backgroundColor,
        props.theme,
      ).color};
    border: 1px solid
      ${(props: Props) =>
        computeColor(
          'disabled',
          props.selected,
          props.outline,
          props.btnStyle,
          props.backgroundColor,
          props.theme,
        ).borderColor};
    cursor: not-allowed;
  }
`;
export default SButton;
