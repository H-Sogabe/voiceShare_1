import Head from "next/head";
import LinkList from "../components/linkList";
import { readJson } from "@/modules/readJson";

export default function Home({ titles }) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <h2 className="title">声素材一覧</h2>
      <LinkList titles={titles} />
    </>
  );
}

export const getStaticProps = async () => {
  const titles = await readJson("data/titles.json");
  return { props: { titles } };
};
