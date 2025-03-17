import * as React from 'react';
import styled from 'styled-components';

export interface Props {
  /**
   * The ID of error message
   *
   * @default null
   **/
  id: string;
  /**
   * Message to be displayed
   *
   * @default ''
   */
  message: string;
  /**
   * Text color
   *
   * @default ''
   * @deprecated
   */
  textColor?: string;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
}

export function ErrorIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m1 15h-2v-2h2zm0-4h-2V7h2z"
      ></path>
    </svg>
  );
}

const SErrorDiv = styled.div<Props>`
  color: ${(props: Props) => props.theme.validation.color};
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.validation.fontSize};
  font-style: ${(props: Props) => props.theme.validation.fontStyle};
  line-height: ${(props: Props) => props.theme.validation.lineHeight};
  padding: ${(props: Props) => props.theme.validation.padding};
  margin-top: ${(props: Props) => props.theme.validation.marginTop};
`;

const SErrorIcon = styled(ErrorIcon)`
  color: ${(props: any) => props.theme.colors.danger};
  padding-right: 4px;
`;

const ErrorMessageWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const defaultProps = {} satisfies Partial<Props>;

export const ErrorMessage: React.FunctionComponent<
  React.PropsWithChildren<Props>
> = (props) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { message } = propsWithDefaults;
  return (
    <>
      <SErrorDiv {...propsWithDefaults}>
        <ErrorMessageWrapper>
          <SErrorIcon height={24} width={24} {...propsWithDefaults} />
          {message}
        </ErrorMessageWrapper>
      </SErrorDiv>
    </>
  );
};
