import { Meta, StoryObj } from "@storybook/react";
import { Pagination } from "./Pagination.component";

const meta: Meta<typeof Pagination> = {
  title: "Components/Navigation/Pagination",
  component: Pagination,
  argTypes: {
    theme: {
      table: {
        disable: true,
      },
    },
    onPageChange: {
      action: {
        type: "onPageChange",
      },
    },
    onPageSizeChange: {
      action: {
        type: "onPageSizeChange",
      },
    },
    pages: {
      control: {
        type: "number",
      },
    },
    page: {
      control: {
        type: "number",
      },
    },
    pageSize: {
      options: [10, 20, 50, 100],
      control: {
        type: "select",
      },
    },
    showPageSizeOptions: {
      control: {
        type: "boolean",
      },
    },
    rowsText: {
      control: {
        type: "text",
      },
    },
    PageButtonComponent: {
      control: false,
    },
    PageButtonNextPrevComponent: {
      control: false,
    },
    PageButtonFirstLastComponent: {
      control: false,
    },
    children: {
      control: false,
    },
    pageSizeOptions: {
      control: false,
    },
    rowsSelectorText: {
      control: false,
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "This is a custom pagination control intended for use with various components (such as Table).",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const _Pagination: Story = {
  args: {
    pages: 10,
    page: 3,
    pageSize: 20,
    showPageSizeOptions: true,
  },
};
