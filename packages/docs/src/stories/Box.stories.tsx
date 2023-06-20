import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Box, BoxProps, Text } from "@buma-ui/react-components";

export default {
  title: "Surfaces/Box",
  component: Box,
  tags: ["autodocs"],
  args: {
    children: <Text>Example Text</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {};
