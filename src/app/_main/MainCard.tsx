import { ReactNode } from "react";
import { VariantProps, tv } from "tailwind-variants";

import Card from "components/molecules/Card";
import Spacer from "components/atom/Spacer";

import NavigationButtonList from "./navigation/NavigationButtonList";

const mainCard = tv({
  base: "w-full h-full flex flex-col gap-y-8",
  variants: {},
  defaultVariants: {},
});

const section = tv({
  base: "w-full p-px rounded-lg bg-border-gradient",
  variants: {},
  defaultVariants: {},
});

const sectionInner = tv({
  base: "w-full rounded-lg bg-slate-950",
  variants: {},
  defaultVariants: {},
});

type MainCardVariant = VariantProps<typeof mainCard>;
type SectionVariant = VariantProps<typeof section>;
type SectionInnerVariant = VariantProps<typeof sectionInner>;
type MixedVariant = MainCardVariant & SectionVariant & SectionInnerVariant;

interface Props extends MixedVariant {
  children: ReactNode;
}

export default function MainCard({ children }: Props) {
  return (
    <Card>
      <main className={mainCard()}>
        <NavigationButtonList />
        <section className={section()}>
          <div className={sectionInner()}>
            <Spacer space="content">{children}</Spacer>
          </div>
        </section>
      </main>
    </Card>
  );
}
