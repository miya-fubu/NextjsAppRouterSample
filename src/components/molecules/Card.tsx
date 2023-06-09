import { ReactNode } from "react";
import { VariantProps, tv } from "tailwind-variants";
import Spacer from "components/atom/Spacer";

const card = tv(
  {
    base: [
      "rounded-lg",
      "p-px",
      "shadow-lg",
      "shadow-black/20",
      "bg-border-gradient",
    ],
    variants: {},
    defaultVariants: {},
  },
  {
    twMerge: false,
  }
);

const cardInner = tv({
  base: ["w-full", "h-full", "rounded-lg"],
  variants: {
    color: {
      slate: "bg-slate-950",
    },
  },
  defaultVariants: {
    color: "slate",
  },
});

type CardVariant = VariantProps<typeof card>;
type CardInner = VariantProps<typeof cardInner>;
type MixVariant = CardVariant & CardInner;

interface Props extends MixVariant {
  children: ReactNode;
}

export default function Card({ children, color }: Props) {
  return (
    <div className={card()}>
      <div className={cardInner({ color })}>
        <Spacer space="card">{children}</Spacer>
      </div>
    </div>
  );
}
