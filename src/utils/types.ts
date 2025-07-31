export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export enum SIZE_OPTION {
  SMALL = 'sm',
  MEDIUM = 'md',
  LARGE = 'lg',
}

export enum STYLE_OPTION {
  SUCCESS = 'success',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  DANGER = 'danger',
  WARNING = 'warning',
}
