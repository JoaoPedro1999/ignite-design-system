import { FiUser } from "react-icons/fi";
import { ComponentProps } from "react";
import { AvatarContainer, AvatarImage, AvatarFallback } from "./styles";

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {}

export function Avatar(props: AvatarProps) {
  return (
    <AvatarContainer>
      <AvatarImage {...props} />

      <AvatarFallback delayMs={600}>
        <FiUser />
      </AvatarFallback>
    </AvatarContainer>
  );
}

Avatar.displayName = "Avatar";
