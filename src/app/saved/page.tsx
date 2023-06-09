import PageTemplate from "app/_template/PageTemplate";

interface Props {}

export default function Home({}: Props) {
  return (
    <PageTemplate h1="saved">
      <p className="text-sm">ぼうけんのしょ に ほぞん しました</p>
    </PageTemplate>
  );
}
