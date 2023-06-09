"use client";

import { MouseEventHandler } from "react";
import { Button } from "components/atom/Button";
import { useRouter } from "next/navigation";
import { VariantProps, tv } from "tailwind-variants";

export type NavigationButtonProps = {
  path: string;
  name: string;
  disable?: boolean;
};

const navigationButton = tv({
  variants: {},
  defaultVariants: {},
});

type NavigationButtonVariant = VariantProps<typeof navigationButton>;

interface Props extends NavigationButtonVariant {
  navigation: NavigationButtonProps;
  primary: boolean;
  disable?: boolean;
}

export default function NavigationButton({ navigation, primary }: Props) {
  const router = useRouter();
  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    router.push(navigation.path);
  };
  const color = primary ? "primary" : "secondary";
  return (
    <Button text={navigation.name} onClick={handleClick} color={color} disable={navigation.disable}></Button>
  );
}
