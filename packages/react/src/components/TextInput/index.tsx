import { ComponentProps, forwardRef, ElementRef } from "react";
import { Input, Prefix, TextInputContainer } from "./styles";

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string;
  scale?: "sm" | "md";
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ prefix, scale = "md", ...props }: TextInputProps, ref) => {
    return (
      <TextInputContainer scale={scale}>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input ref={ref} {...props} />
      </TextInputContainer>
    );
  }
);

TextInput.displayName = "TextInput";
