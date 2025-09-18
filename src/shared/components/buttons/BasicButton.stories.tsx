import { fn } from "storybook/internal/test";
import { BasicButton } from "./BasicButton";
import { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Shared/Buttons/BasicButton",
  component: BasicButton,
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
    size: {
      control: "select",
      options: ["2xs", "xs", "sm", "md", "lg", "xl", "2xl"],
    },
    variant: {
      control: "select",
      options: ["solid", "outline", "ghost", "link"],
    },
    disabled: { control: "boolean" },
  },
  args: {
    children: "Button",
    size: "md",
    variant: "solid",
    disabled: false,
    onClick: fn(),
  },
} satisfies Meta<typeof BasicButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Outline: Story = {
  args: { variant: "outline" },
};

export const Ghost: Story = {
  args: { variant: "ghost" },
};

export const Link: Story = {
  args: { variant: "link" },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const Playground: Story = {
  args: { children: "Play with controls" },
};
