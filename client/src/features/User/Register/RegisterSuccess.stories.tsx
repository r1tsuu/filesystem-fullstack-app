import { ComponentMeta, ComponentStory } from "@storybook/react";

import { RegisterSuccess } from "./RegisterSuccess";

export default {
  title: "Auth/Register Success",
  component: RegisterSuccess,
} as ComponentMeta<typeof RegisterSuccess>;

const Template: ComponentStory<typeof RegisterSuccess> = (args) => (
  <RegisterSuccess {...args} />
);

export const Default = Template.bind({});

Default.args = {
  userLogin: "TestLogin",
};
