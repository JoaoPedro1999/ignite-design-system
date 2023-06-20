import { ElementType, ComponentProps } from "react";
import { styled } from "../styles";

export const Box = styled("div", {
  padding: "$6",
  borderRadius: "$md",
  backgroundColor: "$gray800",
  border: "1px solid $grey600",
});

Box.displayName = "Box";

export interface BoxProps extends ComponentProps<typeof Box> {
  as?: ElementType;
}
