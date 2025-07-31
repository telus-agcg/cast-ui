import { Meta, StoryObj } from "@storybook/react-vite";
import { Title } from "./Title.component";

const meta: Meta<typeof Title> = {
  title: "Components/Typography/Title",
  component: Title,
};

export default meta;

type Story = StoryObj<typeof Title>;

export const _Title: Story = {
  args: {
    size: 10,
    children: "This is a title",
  },
};
