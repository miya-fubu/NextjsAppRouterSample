"use client"

import { useContext, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import { VariantProps, tv } from "tailwind-variants";

import { URLContext } from "./URLProvider";

const rewriteURL = tv({
  variants: {},
  defaultVariants: {}
});

type ReWriteURLVariant = VariantProps<typeof rewriteURL>;

interface Props extends ReWriteURLVariant {}

export default function ReWriteURL({}: Props) {
  const { setURL } = useContext(URLContext)
  const pathname = usePathname();
  useLayoutEffect(() => {
    setURL && setURL(pathname)
  })
  return <></>
}