"use client"

import { VariantProps, tv } from "tailwind-variants";
import NavigationButton, {
  type NavigationButtonProps,
} from "./NavigationButton";
import { Suspense } from "react";
import { usePathname } from "next/navigation";

const navigationButtonList = tv({
  base: "flex gap-2",
  variants: {},
  defaultVariants: {},
});

type NavigationButtonListVariant = VariantProps<typeof navigationButtonList>;

interface Props extends NavigationButtonListVariant {}

export default function NavigationButtonList({}: Props) {
  const currentPath = usePathname();
  const linkList: NavigationButtonProps[] = [
    { path: "/", name: "Home" },
    { path: "/saved", name: "Saved" },
    { path: "/lost", name: "Lost" },
    { path: "/books", name: "Books", disable: true },
  ];
  return (
    <nav className={navigationButtonList()}>
      <Suspense>
        {linkList.map((navigation) => {
          const isPrimary = navigation.path === currentPath;
          return (
            <NavigationButton
              key={navigation.path}
              navigation={navigation}
              primary={isPrimary}
            />
          );
        })}
      </Suspense>
    </nav>
  );
}
