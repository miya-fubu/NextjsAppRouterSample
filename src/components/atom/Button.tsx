"use client";

import { MouseEventHandler } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const button = tv({
  base: "px-3 py-1 rounded-lg text-sm transition-colors",
  variants: {
    color: {
      primary: "bg-red-default hover:bg-red-750 text-white",
      secondary:
        "border border-red-750 text-red-750 hover:border-red-[#FF6A6B] hover:text-red-[#FF6A6B] bg-white",
    },
    disable: {
      true: "border-none bg-gray-250 text-gray-750",
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

type ButtonVariants = VariantProps<typeof button>;

interface Props extends ButtonVariants {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export function Button({ text, onClick = () => {}, color, disable }: Props) {
  const handler = disable ? () => {} : onClick
  return (
    <button
      className={button({ color, disable })}
      onClick={handler}
    >
      {text}
    </button>
  );
}
