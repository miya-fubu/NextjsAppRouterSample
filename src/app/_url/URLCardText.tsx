"use client";

import { useContext } from "react";
import { VariantProps, tv } from "tailwind-variants";
import { URLContext } from "./URLProvider";

const urlCardText = tv({
  base: "text-sm",
  variants: {},
  defaultVariants: {},
});

type URLCardTextVariant = VariantProps<typeof urlCardText>;

interface Props extends URLCardTextVariant {}

export default function URLCardText({}: Props) {
  const { url } = useContext(URLContext);
  return <p className={urlCardText()}>{`sample.com${url || ""}`}</p>;
}
