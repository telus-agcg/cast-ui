import { Link } from "./Link.component";
import { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof Link> = {
  title: "Components/Navigation/Link",
  component: Link,
};

export default meta;

type Story = StoryObj<typeof Link>;

export const Regular: Story = {
  args: {
    href: "https://www.telus.com/agcg",
    target: "_blank",
    disabled: false,
    children: "Read More",
    // dataTestId: 'link-standalone',
  },
};

export const WithinText = () => (
  <p>
    Lorem ipsum dolor sit amet, consectetur{" "}
    <Link
      data-testid="link-within-text"
      href="https://www.telus.com/agcg"
      target="_blank"
    >
      adipiscing
    </Link>{" "}
    elit.
  </p>
);
