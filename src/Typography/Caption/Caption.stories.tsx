import { Meta, StoryObj } from "@storybook/react-vite";
import { Caption } from "./Caption.component";

const meta: Meta<typeof Caption> = {
  title: "Components/Typography/Caption",
  component: Caption,
};

export default meta;

type Story = StoryObj<typeof Caption>;

export const Default: Story = {
  args: {
    size: 10,
    children: "Hello world",
  },
};
