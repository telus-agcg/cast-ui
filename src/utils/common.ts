import _ from "lodash";

export const getPropsWithDefaults = <T>(
  defaultProps: Partial<T>,
  props: T
): T => {
  return { ...defaultProps, ...props };
};

export const getDataProps = (props: any) =>
  _.pickBy(props, (_value, key) => key.startsWith("data-"));
