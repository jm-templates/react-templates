import { expect, fn, userEvent, within } from "storybook/internal/test";
import { BasicButton } from "./BasicButton";
import { Meta, StoryObj } from "@storybook/react-vite";

/*
 Storybook 메타데이터 (필수)
 - title: 스토리북 사이드바에서 보여질 이름/경로
 - component: 문서화할 실제 컴포넌트
 - tags: autodocs를 활성화하면 자동 문서화됨
 - argTypes: 컨트롤러(Controls 패널)에서 조정 가능한 props 정의
 - args: 모든 스토리에서 공통적으로 적용할 기본 prop 값
 */
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
Primary.play = async ({ canvasElement, args }) => {
  const c = within(canvasElement);
  const btn = await c.findByRole("button", {
    name: /button|play with controls|action/i,
  });
  await userEvent.click(btn);
  expect(args.onClick).toHaveBeenCalledTimes(1);
};

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
