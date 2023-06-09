import { ReactNode } from "react";
import { VariantProps, tv } from "tailwind-variants";

const gridPaper = tv(
  {
    base: [
      "w-full",
      "h-full",
      "bg-grid-paper",
      "bg-[length:1rem_1rem]",
      "bg-repeat",
      "bg-center",
    ],
    variants: {
      color: {
        slate: "bg-slate-950",
      },
    },
    defaultVariants: {
      color: "slate",
    },
  },
  {
    twMerge: false,
  }
);

type GridPaperVariant = VariantProps<typeof gridPaper>;

interface Props extends GridPaperVariant {
  children: ReactNode;
}

export default function GridPaper({ children, color }: Props) {
  return <div className={gridPaper({ color })}>{children}</div>;
}
