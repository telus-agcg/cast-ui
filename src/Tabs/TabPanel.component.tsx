import { v4 as uuidv4 } from 'uuid';
// tslint:disable-next-line:max-line-length
import { TabPanel as ReactTabPanel, TabPanelProps } from 'react-tabs';
import { getPropsWithDefaults, Omit } from '@utils';

export interface Props extends Omit<TabPanelProps, 'ref'> {
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
}

const defaultProps = {} satisfies Partial<Props>;

export const TabPanel = (props: Props) => {
  const propsWithDefaults = getPropsWithDefaults<Props>(defaultProps, props);
  const { children, ...rest } = propsWithDefaults;
  return (
    <ReactTabPanel {...rest} id={uuidv4()}>
      {children}
    </ReactTabPanel>
  );
};
