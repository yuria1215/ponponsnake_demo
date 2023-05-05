import Head from "next/head";
import Layout from "@/components/layout/Layout";

export default function Home() {
  const basePath = process.env.BASE_PATH

  return (
    <>
      <Head>
        <title>PonPonSnake | Market</title>
      </Head>

      <Layout>
        {/* <h1>Market test</h1> */}
      </Layout>
    </>
  );
}
