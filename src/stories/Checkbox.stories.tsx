import React, { useState } from "react";
import styled from "styled-components";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Checkbox, Input } from "../components";

export default {
  title: "Form/Checkbox",
  component: Checkbox,
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "secondary", "error", "success", "default"],
      table: {
        defaultValue: { summary: "default" },
      },
      description: "colors to fill the checkbox",
    },
    isFormGroup: {
      control: "boolean",
      description: "enables some form group control options",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      defaultValue: false,
    },
    label: {
      control: "text",
      description: "label of the form control if form group is enabled",
      table: {
        type: { summary: "text" },
      },
    },
  },
} as ComponentMeta<typeof Checkbox>;

const CheckboxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Template: ComponentStory<typeof Checkbox> = (args) => {
  const [checked, setChecked] = useState(args.checked ?? true);

  return (
    <CheckboxWrapper>
      <Checkbox {...args} checked={checked} onChange={(e) => setChecked(e.target.checked)} />
    </CheckboxWrapper>
  );
};

export const Default = Template.bind({});
Default.args = {
  color: "default",
};

export const Disabled = Template.bind({});
Disabled.args = {
  color: "primary",
  disabled: true,
  checked: true,
};

export const PrimaryColor = Template.bind({});
PrimaryColor.args = {
  color: "primary",
};

export const SecondaryColor = Template.bind({});
SecondaryColor.args = {
  color: "secondary",
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  isFormGroup: true,
  color: "primary",
  label: "Are you sure?",
};

export const WithLabelRight = Template.bind({});
WithLabelRight.args = {
  isFormGroup: true,
  color: "primary",
  label: "Are you sure?",
  labelPlacement: "right",
};
