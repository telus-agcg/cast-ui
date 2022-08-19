import * as React from 'react';
import styled from 'styled-components';
import { ic_first_page as FirstPageIcon } from 'react-icons-kit/md/ic_first_page';
import { ic_last_page as LastPageIcon } from 'react-icons-kit/md/ic_last_page';
import { ic_navigate_before as PrevPageIcon } from 'react-icons-kit/md/ic_navigate_before';
import { ic_navigate_next as NextPageIcon } from 'react-icons-kit/md/ic_navigate_next';
import Icon from 'react-icons-kit';

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
};

const SIcon = styled(Icon)<Partial<PaginationButtonsProps>>`
  color: ${props =>
    props.disabled
      ? props.theme.pagination.button.disabledText
      : props.theme.pagination.text};
  cursor: pointer;
  border-radius: 50%;
  transition: all 0.3s;
  &:hover {
    background-color: ${props =>
      props.disabled ? 'none' : props.theme.pagination.button.hoverBackground};
    color: ${props =>
      props.disabled
        ? props.theme.pagination.button.disabledText
        : props.theme.pagination.hoverTextColor};
  }
`;

export const PaginationButtonNextPrev = (props: PaginationButtonsProps) => {
  return (
    <div>
      <SIcon
        disabled={props.disabled}
        icon={props.isForwardDirection ? NextPageIcon : PrevPageIcon}
        size={20}
        onClick={props.disabled ? () => {} : props.onClick}
      />
    </div>
  );
};

export const PaginationButtonFirstLast = (props: PaginationButtonsProps) => {
  return (
    <div>
      <SIcon
        disabled={props.disabled}
        icon={props.isForwardDirection ? LastPageIcon : FirstPageIcon}
        size={20}
        onClick={props.disabled ? () => {} : props.onClick}
      />
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

export const PaginationPageButton = styled.button`
  background: ${(props: PaginationPageButtonProps) =>
    props.selected
      ? props.theme.pagination.selectedBackground
      : props.theme.pagination.background};
  border: 1px solid
    ${(props: PaginationPageButtonProps) =>
      props.theme.pagination.button.borderColor};
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
    border: 1px solid
      ${(props: PaginationPageButtonProps) =>
        props.theme.pagination.button.activeBorderColor};

    &:hover {
      border: 1px solid
        ${(props: PaginationPageButtonProps) =>
          props.theme.pagination.hoverTextColor};
      color: ${(props: PaginationPageButtonProps) =>
        props.theme.pagination.hoverTextColor};
    }
  }
`;
