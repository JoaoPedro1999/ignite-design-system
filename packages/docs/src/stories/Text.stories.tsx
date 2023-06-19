import type { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from "@ignite-ui/react";

export default {
  title: "Typography/Text",
  component: Text,
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: [
        "xxs",
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
        "2xl",
        "4xl",
        "5xl",
        "6xl",
        "7xl",
        "8xl",
        "9xl",
      ],
      control: {
        type: "inline-radio",
      },
    },
  },
  args: {
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, optio cumque libero dolores quibusdam ab autem vel voluptas totam aliquam repudiandae itaque quae veritatis, laboriosam, dolor minima? Quam, commodi suscipit.",
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: "Strong Text",
    as: "strong",
  },
};
