import { TextDisplay } from "./TextDisplay.component";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TextDisplay> = {
  title: "Components/Typography/TextDisplay",
  component: TextDisplay,
};

export default meta;

type Story = StoryObj<typeof TextDisplay>;

export const _TextDisplay: Story = {
  args: {
    fontSize: "16px",
    fontWeight: "bold",
    children: "Text",
  },
};
