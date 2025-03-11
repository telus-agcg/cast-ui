import { SVGProps } from "react";
import styled from "styled-components";
import { getPropsWithDefaults } from "@utils";

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Specify if the button is outline
   *
   * @default false
   **/
  outline?: boolean;
  /**
   * This dictates what the button will do
   *
   * @default void
   * */
  onClick?(e: React.MouseEvent<HTMLElement>): void;
  /**
   * Set Button Style
   *
   * @default 'primary'
   **/
  btnStyle?: "primary" | "secondary" | "success" | "warning" | "danger";
  /**
   * Select Button Size
   *
   * @default 'md'
   **/
  btnSize?: "sm" | "md" | "lg";
  /**
   * Specify if the button is disabled
   *
   * @default false
   **/
  disabled?: boolean;
  /**
   * The display type: regular button or menu
   *
   * @default false
   **/
  displayType?: "button" | "menu";
  /**
   * Specify if the button is selected
   *
   * @default false
   **/
  selected?: boolean;
  /**
   * The value of the button
   *
   * @default null
   **/
  value?: any;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
}

const ExpandMore = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="currentColor"
        d="M16.59 8.59L12 13.17L7.41 8.59L6 10l6 6l6-6z"
      ></path>
    </svg>
  );
};

const computeColor: Function = (
  btnState: string,
  selected: Boolean,
  outline: Boolean,
  btnStyle: string,
  theme: any
) => {
  switch (true) {
    case selected === true:
      switch (btnState) {
        case "hover":
          return {
            background: theme.styles[btnStyle].hoverFlood,
            color: theme.styles[btnStyle].reverseText,
            borderColor: theme.styles[btnStyle].hoverFlood,
          };
        case "disabled":
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
        case "hover":
          return {
            background: theme.styles[btnStyle].selectedFlood,
            color: theme.styles[btnStyle].reverseText,
            borderColor: theme.styles[btnStyle].selectedFlood,
          };
        case "disabled":
          return {
            background: theme.styles[btnStyle].disabledFlood,
            color: theme.styles[btnStyle].reverseText,
            borderColor: theme.styles[btnStyle].disabledFlood,
          };
        default:
          return {
            background: theme.button.outlineBackgroundColor,
            color: theme.styles[btnStyle].flood,
            borderColor: theme.styles[btnStyle].borderColor,
          };
      }
    default:
      switch (btnState) {
        case "hover":
          return {
            background: theme.styles[btnStyle].hoverFlood,
            color: theme.styles[btnStyle].reverseText,
            borderColor: theme.styles[btnStyle].hoverFlood,
          };
        case "disabled":
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

const SButton = styled.button<Props>`
  min-width: 96px;
  box-sizing: border-box;
  transition: all 0.3s;
  border-radius: ${(props: Props) =>
    props.theme.button[props.btnSize!].borderRadius};
  background: ${(props: Props) =>
    computeColor(
      "normal",
      props.selected,
      props.outline,
      props.btnStyle,
      props.theme
    ).background};
  border: 1px solid
    ${(props: Props) =>
      computeColor(
        "normal",
        props.selected,
        props.outline,
        props.btnStyle,
        props.theme
      ).borderColor};
  padding: ${(props: Props) => props.theme.button[props.btnSize!].padding};
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.button[props.btnSize!].fontSize};
  font-weight: 600;
  line-height: ${(props: Props) =>
    props.theme.button[props.btnSize!].lineHeight};
  color: ${(props: Props) =>
    computeColor(
      "normal",
      props.selected,
      props.outline,
      props.btnStyle,
      props.theme
    ).color};

  outline: none !important;
  &:focus {
    outline: none !important;
    border-color: ${(props: Props) =>
      props.theme.colors[props.btnStyle || "primary"]};
    box-shadow: 0 0 3px
      ${(props: Props) => props.theme.colors[props.btnStyle || "primary"]};
  }
  &:hover,
  &:active {
    background: ${(props: Props) =>
      computeColor(
        "hover",
        props.selected,
        props.outline,
        props.btnStyle,
        props.theme
      ).background};
    color: ${(props: Props) =>
      computeColor(
        "hover",
        props.selected,
        props.outline,
        props.btnStyle,
        props.theme
      ).color};
    border: 1px solid
      ${(props: Props) =>
        computeColor(
          "hover",
          props.selected,
          props.outline,
          props.btnStyle,
          props.theme
        ).borderColor};
    cursor: pointer;
  }
  &:disabled {
    background: ${(props: Props) =>
      computeColor(
        "disabled",
        props.selected,
        props.outline,
        props.btnStyle,
        props.theme
      ).background};
    color: ${(props: Props) =>
      computeColor(
        "disabled",
        props.selected,
        props.outline,
        props.btnStyle,
        props.theme
      ).color};
    border: 1px solid
      ${(props: Props) =>
        computeColor(
          "disabled",
          props.selected,
          props.outline,
          props.btnStyle,
          props.theme
        ).borderColor};
    cursor: not-allowed;
  }
`;

const SMenuButton = styled(SButton)`
  display: flex;
  align-items: center;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
`;

const SIcon = styled(ExpandMore)`
  border-left: 1px solid ${(props: any) => props.theme.colors.lt800};
  margin: ${(props: any) => props.theme.button[props.btnSize!].padding};
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  padding: 3px;
`;

const noop = () => {}; // tslint:disable-line

const defaultProps = {
  btnStyle: "primary",
  btnSize: "md",
  displayType: "button",
} satisfies Partial<Props>;

export const Button = (props: Props) => {
  const propsWithDefaults = getPropsWithDefaults(defaultProps, props);
  const { displayType, disabled, onClick, children } = propsWithDefaults;
  const ButtonType = displayType === "menu" ? SMenuButton : SButton;

  const iconProps = props as SVGProps<SVGSVGElement>;
  return (
    <ButtonType
      disabled={disabled}
      onClick={!disabled ? onClick : noop}
      {...propsWithDefaults}
    >
      {children}
      {displayType === "menu" ? (
        <SIcon height={24} width={24} {...iconProps} />
      ) : null}
    </ButtonType>
  );
};
