import { ComponentMeta, ComponentStory } from "@storybook/react";

import { LoginForm } from "./LoginForm";

export default {
  title: "Auth/Login Form",
  component: LoginForm,
  argTypes: {
    onSubmit: {
      action: "Form submitted!",
    },
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => (
  <LoginForm {...args} />
);

export const Default = Template.bind({});

Default.args = {
  isLoading: false,
  isInvalidCredentialsError: false,
};
