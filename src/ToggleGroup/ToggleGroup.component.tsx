import * as React from 'react';
import uuid from 'uuid';
import styled, { ThemeProvider } from 'styled-components';
import { Themes } from '../themes';

export interface Props extends React.HTMLAttributes<HTMLElement> {
  /** the label of the toggle group  */
  label: string;
  /**
   * Set Input Size
   *
   * @default 'md'
   **/
  labelSize?: 'sm' | 'md' | 'lg';
  /**
   * Set orientation of inputGroup as vertical
   *
   * @default false
   **/
  vertical?: boolean;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
}

const ToggleGroupWrapper = styled.div`
  border-radius: ${(props: Props) => props.theme.borders.radius};
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  color: ${(props: Props) => props.theme.inputGroup.root.color};
  display: ${(props: Props) => props.theme.inputGroup.root.display};
  flex-wrap: ${(props: Props) => props.theme.inputGroup.root.flexWrap};
  flex-direction: ${(props: Props) => (props.vertical ? 'column' : 'row')};
  align-items: ${(props: Props) => (props.vertical ? 'flex-start' : 'center')};
  > *:not(:first-child) {
    flex-grow: 1;
  }
`;

const SLabel = styled.label`
  background: inherit;
  height: auto;
  padding: ${(props: Props) =>
    props.label ? props.theme.inputGroup.label.padding : '0'};
  font-weight: ${(props: Props) => props.theme.inputGroup.label.fontWeight};
  font-size: ${(props: Props) => props.theme.common[props.labelSize!].fontSize};
  color: ${(props: Props) => props.theme.body.color};

  &:hover {
    cursor: pointer;
  }
`;

export class ToggleGroup extends React.Component<Props> {
  static defaultProps = {
    labelSize: 'md',
    vertical: false,
    theme: Themes.defaultTheme,
  };

  render() {
    const {
      label,
      labelSize,
      vertical,
      theme,
      children,

      ...props
    } = this.props;

    const id =
      (React.Children.only(children) as React.ReactElement).props.id ||
      uuid.v4();
    const clonedChildren = !!children
      ? React.cloneElement(
          React.Children.only((children as React.ReactElement)!),
        )
      : null;

    return (
      <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
        <ToggleGroupWrapper vertical={vertical} label={label} {...props}>
          <SLabel label={label} labelSize={labelSize} htmlFor={id}>
            {label}
          </SLabel>
          {clonedChildren && clonedChildren}
        </ToggleGroupWrapper>
      </ThemeProvider>
    );
  }
}

export default ToggleGroup;
