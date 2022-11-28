import { ComponentMeta, ComponentStory } from "@storybook/react";

import { RegisterForm } from "./RegisterForm";

export default {
  title: "Auth/Register Form",
  component: RegisterForm,
  argTypes: {
    onSubmit: {
      action: "Form submitted!",
    },
  },
} as ComponentMeta<typeof RegisterForm>;

const Template: ComponentStory<typeof RegisterForm> = (args) => (
  <RegisterForm {...args} />
);

export const Default = Template.bind({});

Default.args = {
  isLoading: false,
  isUserExistsError: false,
};
