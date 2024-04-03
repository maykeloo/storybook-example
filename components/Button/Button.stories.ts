import {Button} from './Button'
import {Meta, StoryObj} from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
}

export default meta

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    backgroundColor: "red",
    label: "Primary",
  }
};


export const Warning: Story = {
  args: {
    backgroundColor: "yellow",
    label: "Primary",
  }
};