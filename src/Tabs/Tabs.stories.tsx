import * as React from 'react';

import { Tab, TabList, TabPanel, Tabs } from '../';

export default {
  title: 'Components/Navigation/Tabs',
  component: Tabs,
  subcomponents: {
    Tab,
    TabList,
    TabPanel,
  },
  argTypes: {
    onSelect: {
      action: 'onSelect',
    },
    tabTitle1: {
      control: {
        type: 'text',
      },
    },
    tabTitle2: {
      control: {
        type: 'text',
      },
    },
    tabTitle3: {
      control: {
        type: 'text',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    defaultIndex: {
      control: false,
    },
    theme: {
      table: {
        disable: true,
      },
    },
  },
};

export const _Tabs = ({
  onSelect,
  tabTitle1,
  tabTitle2,
  tabTitle3,
  disabled,
}) => (
  <Tabs onSelect={onSelect} defaultIndex={2}>
    <TabList>
      <Tab title={tabTitle1} />
      <Tab title={tabTitle2} disabled={disabled} />
      <Tab title={tabTitle3} />
    </TabList>
    <TabPanel>
      <h2>Any content 1</h2>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
      Sed ut perspiciatis unde canopys iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
      illo inventore veritatis et quasi architecto beatae vitae dicta sunt
      explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
      odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
      voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
      quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
      eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
      voluptatem.
    </TabPanel>
    <TabPanel>
      <h2>Any content 3</h2>
      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
      praesentium voluptatum deleniti atque corrupti quos dolores et quas
      molestias excepturi sint occaecati cupiditate non provident, similique
      sunt in culpa qui officia deserunt mollitia animi, id est laborum et
      dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
      Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
      impedit quo minus id quod maxime placeat facere possimus, canopys voluptas
      assumenda est, canopys dolor repellendus.
    </TabPanel>
  </Tabs>
);

_Tabs.args = {
  tabTitle1: 'Tab Page 01',
  tabTitle2: 'Tab Page 02',
  tabTitle3: 'Tab Page 03',
  disabled: true,
};
