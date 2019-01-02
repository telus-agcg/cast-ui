import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs/react';

import { Tab } from './Tab.component';
import { TabList } from './TabList.component';
import { TabPanel } from './TabPanel.component';
import { Tabs } from './Tabs.component';
import { wInfo } from '../storybook-utils';

storiesOf('Tabs', module).add(
  'Tabs',
  wInfo(`

  ### Notes

  This is a Tab Set

  ### Usage
  ~~~js
  <Tabs>
    <TabList>
      <Tab title='Tab Page 01'></Tab>
      <Tab title='Tab Page 02' disabled={true}></Tab>
      <Tab title='Tab Page 03'></Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 3</h2>
    </TabPanel>
  </Tabs>
  ~~~`)(() => (
  <Tabs>
    <TabList>
      <Tab title={text('title (tab 1)', 'Tab Page 01')}></Tab>
      <Tab title={text('title (tab 2)', 'Tab Page 02')}
        disabled={boolean('disabled (tab 2)', true)}></Tab>
      <Tab title={text('title (tab 3)', 'Tab Page 03')}></Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
      laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
      architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
      sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
      voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
      consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
      dolore magnam aliquam quaerat voluptatem.
    </TabPanel>
    <TabPanel>
      <h2>Any content 3</h2>
      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
      voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
      cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est
      laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero
      tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
      placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
    </TabPanel>
  </Tabs>
  )),
);
