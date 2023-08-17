import React, { useState } from "react";
import styled from "styled-components";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Select } from "../components";
import CaretDown from "../assets/icons/CaretDown";

export default {
  title: "Form/Select",
  component: Select,
  argTypes: {},
} as ComponentMeta<typeof Select>;

const SelectWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 20px;
`;

const OPTIONS = [
  {
    id: 'option1',
    value: 'option1',
  },
  {
    id: 'option2',
    value: 'option2',
  },
  {
    id: 'option3',
    value: 'option3',
  },
]

const Template: ComponentStory<typeof Select> = (args) => {
  return (
    <SelectWrapper>
      <Select {...args} />
    </SelectWrapper>
  );
};

export const Default = Template.bind({});
Default.args = {
  options: OPTIONS,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  isFormGroup: true,
  required: true,
  label: "Search for user name",
  options: OPTIONS,
};

export const WithErrorMessage = Template.bind({});
WithErrorMessage.args = {
  isFormGroup: true,
  required: true,
  label: "Search for user name",
  hasError: true,
  message: "This is not proper name search",
  options: OPTIONS,
};
