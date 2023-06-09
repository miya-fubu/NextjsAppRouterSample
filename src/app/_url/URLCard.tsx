import URLCardText from "./URLCardText";
import Card from "components/molecules/Card";
import { Suspense } from "react";

interface Props {}

export default function URLCard({}: Props) {
  return (
    <Card>
      <Suspense>
        <URLCardText />
      </Suspense>
    </Card>
  );
}
