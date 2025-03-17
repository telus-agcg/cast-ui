import styled from 'styled-components';
import { Meta, StoryObj } from '@storybook/react';
import { Menu } from './Menu.component';
import { Button } from '../Button/Button.component';
import { Link } from '../Typography/Link/Link.component';

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

const meta: Meta<typeof Menu> = {
  title: 'Components/Interactions/Menu',
  component: Menu,
  parameters: {
    description,
  },
};

export default meta;

type Story = StoryObj<typeof Menu>;

const menuData = [
  {
    label: 'Vanilla',
    id: 'vanilla',
    disabled: true,
  },
  {
    label: 'Chocolate',
    id: 'chocolate',
    // icon: icCasino // TODO
  },
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

export const _MenuFromLink: Story = {
  args: {
    items: menuData,
  },
  render: (args) => {
    return (
      <Menu
        {...args}
        triggerComponent={<Link>Show options</Link>}
        data-testid="submit"
      />
    );
  },
};

export const _MenuFromButton: Story = {
  args: {
    items: menuData,
  },
  render: (args) => {
    return (
      <Menu
        {...args}
        triggerComponent={<Button displayType="menu">Submit Menu</Button>}
        data-testid="submit"
      />
    );
  },
};

export const _MenuWithCustomComponent: Story = {
  args: {
    items: menuDataWithCustomComponent,
  },
  render: (args) => {
    return (
      <Menu
        {...args}
        triggerComponent={<Link>Show options</Link>}
        data-testid="submit"
      />
    );
  },
};
