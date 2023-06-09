"use client";

import {
  ReactNode,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { VariantProps, tv } from "tailwind-variants";

export const URLContext = createContext(
  {} as {
    url?: string;
    setURL?: Dispatch<SetStateAction<string>>;
  }
);

const urlProvider = tv({
  variants: {},
  defaultVariants: {},
});

type URLProviderVariant = VariantProps<typeof urlProvider>;

interface Props extends URLProviderVariant {
  children: ReactNode;
}

export default function URLProvider({ children }: Props) {
  const [url, setURL] = useState("/");
  return (
    <URLContext.Provider value={{ url, setURL }}>
      {children}
    </URLContext.Provider>
  );
}
