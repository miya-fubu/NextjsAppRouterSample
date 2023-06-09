import { ReactNode } from "react";
import { VariantProps, tv } from "tailwind-variants";

const spacer = tv({
  base: "w-full h-full",
  variants: {
    space: {
      global: ["max-w-4xl", "mx-auto", "pt-20", "px-2"],
      card: ["p-3"],
      content: ["p-4"]
    },
  },
  defaultVariants: {
    space: "global",
  },
});

type SpacerVariant = VariantProps<typeof spacer>;

interface Props extends SpacerVariant {
  children: ReactNode;
}

export default function Spacer({ children, space }: Props) {
  return <div className={spacer({ space })}>{children}</div>;
}
