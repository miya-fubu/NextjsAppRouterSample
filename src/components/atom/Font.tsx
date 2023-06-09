import type { ReactNode } from "react";
import { VariantProps, tv } from "tailwind-variants";
import { DotGothic16, Noto_Sans_JP } from "next/font/google";

const dotGothic = DotGothic16({ weight: "400", subsets: ["latin"] });
const notoSansJP = Noto_Sans_JP({ weight: "400", subsets: ["latin"] });

const fontTailwind = tv({
  base: "w-full h-full",
  variants: {},
  defaultVariants: {},
});

type FontVariant = VariantProps<typeof fontTailwind>;

interface Props extends FontVariant {
  children: ReactNode;
  font?: "DotGothic16" | "NotoSansJP";
}

export default function Font({ children, font = "NotoSansJP" }: Props) {
  const fontStyle = font === "NotoSansJP" ? notoSansJP : dotGothic;
  return (
    <div className={`${fontStyle.className} ${fontTailwind()}`}>{children}</div>
  );
}
