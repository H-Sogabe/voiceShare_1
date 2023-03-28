import Head from "next/head";
import AudioList from "../../components/audioList";
import { readJson } from "@/modules/readJson";

export default function Page({ playList, title_ja }) {
  if (!playList) {
    return <div>データがありません</div>;
  }
  return (
    <>
      <Head>
        <title>{title_ja}</title>
      </Head>
      <h2 className="title">{title_ja}</h2>
      <AudioList list={playList} />
    </>
  );
}

export async function getStaticPaths() {
  const titles = await readJson("data/titles.json");
  const paths = titles.map((item) => {
    return { params: { title: item.title_en } };
  });
  return {
    paths: paths, //  [{ params: { title: "delivery" } }, { params: { title: "visitor" } }, { params: { title: "others" } }]
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context; // { title: "delivery" }
  // 音声取得
  const playList = await readJson(`data/${params.title}.json`)
  // 日本語のタイトル取得
  const titles = await readJson("data/titles.json");
  const title = titles.filter((item) => item.title_en === params.title)[0];
  const title_ja = title.title_ja;
  
  return { props: { playList, title_ja } };
}
