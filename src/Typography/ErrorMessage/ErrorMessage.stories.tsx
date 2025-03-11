import { Meta, StoryObj } from "@storybook/react";
import { ErrorMessage } from "./ErrorMessage.component";

const meta: Meta<typeof ErrorMessage> = {
  title: "Components/Typography/ErrorMessage",
  component: ErrorMessage,
};

export default meta;

type Story = StoryObj<typeof ErrorMessage>;

export const _ErrorMessage: Story = {
  args: {
    message: "This is an error message.",
  },
};

// export const _ErrorMessage = args => (
//   <div>
//     <Input id="myInput" type="text" />
//     <ErrorMessage id="some-id-error-msg" {...args} />
//   </div>
// );

// _ErrorMessage.args = {
//   message: 'This is an error message.',
// };
