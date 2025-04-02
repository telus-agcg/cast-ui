import _ from 'lodash';

export const getPropsWithDefaults = <T>(
  defaultProps: Partial<T>,
  props: T,
): Partial<T> => {
  return { ...defaultProps, ...removeUndefinedProperties(props as Partial<T>) };
};

export const getDataProps = (props: any) =>
  _.pickBy(props, (_value, key) => key.startsWith('data-'));

export const removeUndefinedProperties = <T>(obj: Partial<T>): Partial<T> => {
  return _.pickBy(obj, (v) => v !== undefined) as Partial<T>;
};
