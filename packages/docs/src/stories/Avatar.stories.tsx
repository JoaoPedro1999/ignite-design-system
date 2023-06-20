import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarProps } from "@buma-ui/react-components";

export default {
  title: "Data display/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  args: {
    src: "https://github.com/JoaoPedro1999.png",
    alt: "João Pedro Beck Land",
  },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
};
