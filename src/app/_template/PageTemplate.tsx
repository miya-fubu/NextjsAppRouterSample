import { ReactNode } from "react";
import { tv } from "tailwind-variants";

import Font from "components/atom/Font";
import RewriteURL from "app/_url/RewriteURL";

const home = tv({
  base: "flex flex-col gap-y-4",
  variants: {},
});

const head = tv({
  variants: {
    class: {
      h1: "text-lg",
    },
  },
  defaultVariants: {},
});

interface Props {
  h1: string;
  children: ReactNode;
}

export default function PageTemplate({ h1, children}: Props) {
  return (
    <div className={home()}>
      <h1 className={head({ class: "h1" })}>{h1}</h1>
      <Font font="DotGothic16">
        {children}
      </Font>
      <RewriteURL />
    </div>
  );
}
