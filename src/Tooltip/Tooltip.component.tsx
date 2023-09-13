import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Tippy, { TippyProps } from '@tippy.js/react';
import { Themes } from '../themes';

export interface Props extends TippyProps {
  theme?: any;
}

// Tippy temporary fix
// CCIBI-360, https://github.com/atomiks/tippy.js-react/issues/106
const TippyProxy = props => {
  const $this = React.useState({})[0];

  React.useLayoutEffect(() => {
    // @ts-ignore
    const { instance } = $this;
    if (instance.state.isVisible && !instance.state.isEnabled) {
      instance.enable();
      instance.hide();
      instance.disable();
    }
  });

  function onCreate(instance) {
    if (props.onCreate) {
      props.onCreate(instance);
    }

    // @ts-ignore
    $this.instance = instance;
  }

  return <Tippy {...props} onCreate={onCreate} />;
};

const STippy = styled(TippyProxy)`
  background: ${(props: Props) => props.theme.tooltip.background};
  border-radius: ${(props: Props) => props.theme.tooltip.borderRadius};
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  &[x-placement^='bottom'] .tippy-arrow,
  &[x-placement^='top'] .tippy-arrow {
    border-color: ${(props: Props) => props.theme.tooltip.background}
      transparent;
  }
  &[x-placement^='left'] .tippy-arrow,
  &[x-placement^='right'] .tippy-arrow {
    border-color: transparent
      ${(props: Props) => props.theme.tooltip.background};
  }
`;

export class Tooltip extends React.Component<Props> {
  static defaultProps = {
    arrow: true,
    theme: Themes.canopyTheme,
  };
  public render() {
    const { theme, children, ...props } = this.props;
    return (
      <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
        <STippy {...props}>{children}</STippy>
      </ThemeProvider>
    );
  }
}

export default Tooltip;
