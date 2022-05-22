import React from "react";
import styled from "styled-components";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "../components";
import { Trash, Book } from "../assets/icons";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "select",
      defaultValue: "fill",
      options: ["fill", "text", "outline"],
      table: {
        defaultValue: { summary: "fill" },
      },
      description: "base variant of button styling",
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "error", "success", "default"],
      table: {
        defaultValue: { summary: "default" },
      },
      description: "colors available on fill variant",
    },
    size: {
      control: "select",
      defaultValue: "medium",
      options: ["small", "medium", "large"],
      table: {
        defaultValue: { summary: "medium" },
      },
      description: "sizes of the button and font",
    },
    isRounded: {
      control: "boolean",
      description: "styles button with rounded corners",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      defaultValue: false,
    },
    isLoading: {
      control: "boolean",
      description: "indicates loading state and disable clicks",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      defaultValue: false,
    },
    disabled: {
      control: "boolean",
      description: "applying disabled styles and attribute",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof Button>;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Template: ComponentStory<typeof Button> = (args) => (
  <ButtonWrapper>
    <Button {...args}> button </Button>
  </ButtonWrapper>
);

export const Default = Template.bind({});
Default.args = {};

export const TextVariant = Template.bind({});
TextVariant.args = {
  variant: "text",
};

export const OutlineVariant = Template.bind({});
OutlineVariant.args = {
  variant: "outline",
};

export const Rounded = Template.bind({});
Rounded.args = {
  isRounded: true,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  isFullWidth: true,
};

export const SmallSize = Template.bind({});
SmallSize.args = {
  size: "small",
};

export const LargeSize = Template.bind({});
LargeSize.args = {
  size: "large",
};

export const PrimaryColor = Template.bind({});
PrimaryColor.args = {
  color: "primary",
};

export const SecondaryColor = Template.bind({});
SecondaryColor.args = {
  color: "secondary",
};

export const SuccessColor = Template.bind({});
SuccessColor.args = {
  color: "success",
};

export const ErrorColor = Template.bind({});
ErrorColor.args = {
  color: "error",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const PrefixIcon = Template.bind({});
PrefixIcon.args = {
  prefixIcon: <Book />,
};

export const SuffixIcon = Template.bind({});
SuffixIcon.args = {
  suffixIcon: <Trash />,
};

export const IconButton = Template.bind({});
IconButton.args = {
  iconButton: <Trash size={24} />,
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
