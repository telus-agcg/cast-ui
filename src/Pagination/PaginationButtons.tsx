import {
  FirstPageIcon,
  LastPageIcon,
  NavigateBeforeIcon,
  NavigateNextIcon,
} from '@icons';
import * as React from 'react';
import styled, { css } from 'styled-components';

// first, last, prev, next buttons
export type PaginationButtonsProps = {
  /**
   * Specify it the button navigates forward or backward
   */
  isForwardDirection: boolean;
  /** this dictates what the button will do  */
  onClick(e: React.MouseEvent<HTMLElement>): void;
  /**
   * Specify if the button is disabled
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
  /**
   * Test identifier for the button element
   **/
  'data-testid'?: string;
};

const IconStyler = styled.span<Partial<PaginationButtonsProps>>`
  color: ${(props) => props.color};
  & svg {
    color: ${(props) =>
      props.disabled
        ? props.theme.pagination.button.disabledText
        : props.theme.pagination.text};
    cursor: pointer;
    border-radius: 50%;
    transition: all 0.3s;
    &:hover {
      background-color: ${(props) =>
        props.disabled
          ? 'none'
          : props.theme.pagination.button.hoverBackground};
      color: ${(props) =>
        props.disabled
          ? props.theme.pagination.button.disabledText
          : props.theme.pagination.hoverTextColor};
    }
  }
`;

const SIcon = styled.span<Partial<PaginationButtonsProps>>`
  color: ${(props) =>
    props.disabled
      ? props.theme.pagination.button.disabledText
      : props.theme.pagination.text};
  cursor: pointer;
  border-radius: 50%;
  transition: all 0.3s;
  &:hover {
    background-color: ${(props) =>
      props.disabled ? 'none' : props.theme.pagination.button.hoverBackground};
    color: ${(props) =>
      props.disabled
        ? props.theme.pagination.button.disabledText
        : props.theme.pagination.hoverTextColor};
  }
`;

const iconDimensions = { height: 20, width: 20 };

export const PaginationButtonNextPrev = (props: PaginationButtonsProps) => {
  const { isForwardDirection, disabled, onClick } = props;
  const icon = isForwardDirection ? (
    <NavigateNextIcon {...iconDimensions} />
  ) : (
    <NavigateBeforeIcon {...iconDimensions} />
  );
  return (
    <div>
      <IconStyler
        disabled={props.disabled}
        onClick={props.disabled ? () => {} : props.onClick}
        data-testid={props['data-testid']}
      >
        {icon}
      </IconStyler>
    </div>
  );
};

export const PaginationButtonFirstLast = (props: PaginationButtonsProps) => {
  const { disabled, onClick, isForwardDirection } = props;
  const icon = isForwardDirection ? (
    <LastPageIcon {...iconDimensions} />
  ) : (
    <FirstPageIcon {...iconDimensions} />
  );
  return (
    <div>
      <IconStyler
        disabled={props.disabled}
        onClick={props.disabled ? () => {} : props.onClick}
        data-testid={props['data-testid']}
      >
        {icon}
      </IconStyler>
    </div>
  );
};

// page buttons

export type PaginationPageButtonProps = {
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

export const PaginationPageButton = styled.button<PaginationPageButtonProps>`
  background: ${(props: PaginationPageButtonProps) =>
    props.selected
      ? props.theme.pagination.selectedBackground
      : props.theme.pagination.background};
  border: 1px solid
    ${(props: PaginationPageButtonProps) =>
      props.theme.pagination.button.borderColor};
  border-radius: ${(props: PaginationPageButtonProps) =>
    props.theme.pagination.button.borderRadius};
  padding: ${(props: PaginationPageButtonProps) =>
    props.theme.pagination.button.padding[props.btnSize]};
  font-family: ${(props: PaginationPageButtonProps) =>
    props.theme.typography.fontFamily};
  font-size: ${(props: PaginationPageButtonProps) =>
    props.theme.common[props.btnSize].fontSize};
  font-weight: ${(props: PaginationPageButtonProps) =>
    props.theme.pagination.button.fontWeight};
  color: ${(props: PaginationPageButtonProps) => props.theme.pagination.text};
  outline: none;
  min-width: ${(props: PaginationPageButtonProps) =>
    props.theme.pagination.button.width};
  height: ${(props: PaginationPageButtonProps) =>
    props.theme.pagination.button.height};
  transition: all 0.3s;
  &:hover {
    font-weight: ${(props: PaginationPageButtonProps) =>
      props.theme.pagination.hoverFontWeight};
    color: ${(props: PaginationPageButtonProps) =>
      props.theme.pagination.hoverTextColor};
    background: ${(props: PaginationPageButtonProps) =>
      props.theme.pagination.hoverBackground};
    border: 1px solid
      ${(props: PaginationPageButtonProps) =>
        props.theme.pagination.button.hoverBorderColor};
    cursor: pointer;
  }
  &:disabled {
    background: ${(props: PaginationPageButtonProps) =>
      props.theme.pagination.disabledBackground};
    border: 1px solid
      ${(props: PaginationPageButtonProps) =>
        props.theme.pagination.button.disabledBorderColor};
    cursor: not-allowed;
  }
  &[data-selected] {
    font-weight: ${(props: PaginationPageButtonProps) =>
      props.theme.pagination.activeFontWeight};
    color: ${(props: PaginationPageButtonProps) =>
      props.theme.pagination.activeText};
    background: ${(props: any) => props.theme.pagination.activeBackground};

    border: 1px solid
      ${(props: PaginationPageButtonProps) =>
        props.theme.pagination.button.activeBorderColor};

    &:hover {
      border: 1px solid
        ${(props: PaginationPageButtonProps) =>
          props.theme.pagination.hoverTextColor};
    }
  }
`;
