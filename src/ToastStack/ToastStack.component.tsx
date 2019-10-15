import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Toast, Props as ToastProps } from '../Toast/Toast.component';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
    items: ToastProps[],
    theme?: any,
}

const StackComponent = styled.div<Partial<Props>>`
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    width: 225px;
    display: flex;
    flex-direction: column;
`

const ToastComponent = styled(Toast)<Partial<Props>>`
    position: relative;
    margin: 10px 0;
`

export class ToastStack extends React.PureComponent<Props> {
    static defaultProps = {
        items: [],
    }

    render() {
        const {
            items,
            theme,
        } = this.props;

        return (
            <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
                <StackComponent>
                    {items.map((item, index) => <ToastComponent active {...item} />)}
                </StackComponent>
            </ThemeProvider>
        )
    }
}