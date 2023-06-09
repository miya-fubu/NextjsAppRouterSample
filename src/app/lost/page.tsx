import PageTemplate from "app/_template/PageTemplate";

interface Props {}

export default function Home({}: Props) {
  return (
    <PageTemplate h1="lost">
      <p className="text-sm">
        おきのどくですが ぼうけんのしょは きえてしまいました
      </p>
    </PageTemplate>
  );
}
