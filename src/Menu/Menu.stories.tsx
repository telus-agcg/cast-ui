import * as React from 'react';
import styled from 'styled-components';

import { Button, Link, Menu } from '..';

const description = `
A Menu is a specialized Popover wrapper that displays items to select when triggered via click, typically with a Link or Button (with displayType="menu").
`;

const CustomItem = styled.div`
  padding: 8px 16px;
  border-top: ${(props: any) => `1px solid ${props.theme.colors.drk800}`};
  :hover {
    color: ${(props: any) => props.theme.select.highlightOptionColor};
    background: ${(props: any) =>
      props.theme.select.highlightOptionBackgroundColor};
  }
`;

export default {
  title: 'Components/Interactions/Menu',
  component: Menu,
  argTypes: {
    onItemClick: { action: 'onItemClick' },
    theme: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
};

const menuData = [
  {
    label: 'Vanilla',
    id: 'vanilla',
    disabled: true,
  },
  { label: 'Chocolate', id: 'chocolate' },
];

const menuDataWithCustomComponent = [
  {
    label: 'Vanilla',
    id: 'vanilla',
    disabled: true,
  },
  { label: 'Chocolate', id: 'chocolate' },
  {
    id: 'something',
    component: <CustomItem>Hello world</CustomItem>,
  },
];

export const _MenuFromLink = args => (
  <Menu
    triggerComponent={<Link>Show options</Link>}
    data-testid="submit"
    {...args}
  />
);

_MenuFromLink.args = {
  items: menuData,
};

export const _MenuFromButton = args => (
  <Menu
    triggerComponent={<Button displayType="menu">Submit Menu</Button>}
    data-testid="submit"
    {...args}
  />
);

_MenuFromButton.args = {
  items: menuData,
};

export const _MenuWithCustomComponent = args => (
  <Menu
    triggerComponent={<Link>Show options</Link>}
    data-testid="submit"
    {...args}
  />
);

_MenuWithCustomComponent.args = {
  items: menuDataWithCustomComponent,
};
