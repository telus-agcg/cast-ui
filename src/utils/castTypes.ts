export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type Weaken<T, K extends keyof T> = {
  [P in keyof T]: P extends K ? any : T[P]
};
