import PageTemplate from "app/_template/PageTemplate";

interface Props {}

export default function Home({}: Props) {
  return (
    <PageTemplate h1="Home">
      <p className="text-sm">サンプルテキスト</p>
    </PageTemplate>
  );
}
