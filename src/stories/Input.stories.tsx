import React, { useState } from "react";
import styled from "styled-components";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input } from "../components";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    variant: {
      control: "select",
      defaultValue: "outline",
      options: ["clean", "outline"],
      table: {
        defaultValue: { summary: "outline" },
      },
      description: "base variant of input styling",
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
    hasError: {
      control: "boolean",
      description: "indicates input error with error color borders",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      defaultValue: false,
    },
    required: {
        control: "boolean",
        description: "indicates if input control is reqired",
        table: {
          type: { summary: "boolean" },
          defaultValue: { summary: false },
        },
        defaultValue: false,
    },
    isFullWidth: {
      control: "boolean",
      description: "setting input component on full width relative to parent container",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      defaultValue: false,
  },
    label: {
        control: "text",
        description: "label of the form control is form group is enabled",
        table: {
          type: { summary: "text" },
        },
    },
    message: {
      control: "text",
      description: "message displayed, can be error on not",
      table: {
        type: { summary: "text" },
      },
    },
  },
} as ComponentMeta<typeof Input>;

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Template: ComponentStory<typeof Input> = (args) => {
  const [inputValue, setInputValue] = useState(args.value);

  return (
    <InputWrapper>
      <Input {...args} value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
    </InputWrapper>
  );
};

export const Default = Template.bind({});
Default.args = {
  value: "input",
  name: "input",
  placeholder: "placeholder",
};

export const WithLabelRequired = Template.bind({});
WithLabelRequired.args = {
  isFormGroup: true,
  value: "input",
  name: "input",
  label: "Label",
  placeholder: "placeholder",
  required: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  value: "input",
  name: "input",
  disabled: true,
};

export const CleanVariant = Template.bind({});
CleanVariant.args = {
  value: "input",
  name: "input",
  variant: "clean",
};

export const WithError = Template.bind({});
WithError.args = {
  value: "input",
  name: "input",
  hasError: true,
};

export const WithErrorMessage = Template.bind({});
WithErrorMessage.args = {
  value: "input",
  name: "input",
  message: "This password doesn't meet requirements",
  isFormGroup: true,
  hasError: true,
};

export const WithFullWidth = Template.bind({});
WithFullWidth.args = {
  value: "input",
  name: "input",
  isFormGroup: true,
  isFullWidth: true,
  label: 'Label',
};
