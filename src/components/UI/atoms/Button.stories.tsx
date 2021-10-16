import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Button } from "./Button";

export default {
  title: "Atoms/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "PRIMARY",
  label: "PRIMARY",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "SECONDARY",
  label: "SECONDARY",
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: "OUTLINED",
  label: "OUTLINED",
};
