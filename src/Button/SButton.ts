import styled from 'styled-components';

type Props = {
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
   * Disables onclick
   *
   * @default false
   **/
  disabled?: boolean;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

const SButton = styled.button`
  background: ${(props: Props) => props.theme.styles[props.btnStyle].flood}
  border: 1px solid ${(props: Props) =>
    props.theme.styles[props.btnStyle].borderColor};
  padding: ${(props: Props) => props.theme.common[props.btnSize].padding}
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.common[props.btnSize].fontSize}
  font-weight: bold;
  color: ${(props: Props) => props.theme.styles[props.btnStyle].reverseText};
  &:hover {
    background: ${props => props.theme.styles[props.btnStyle].hoverFlood};
    border: 1px solid ${(props: Props) =>
      props.theme.styles[props.btnStyle].hoverFlood};
    cursor: pointer;
  }
  &:disabled {
    background: ${props => props.theme.styles[props.btnStyle].hoverFlood}
    border: 1px solid ${props => props.theme.styles[props.btnStyle].hoverFlood}
    cursor: not-allowed;
  }
`;

export default SButton;
