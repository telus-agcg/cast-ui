import { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header.component";

const meta: Meta<typeof Header> = {
  title: "Components/Typography/Header",
  component: Header,
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    size: 10,
    children: "Reminder: Sales meeting at Rm 223 in 10 minutes",
  },
};
