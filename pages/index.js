import Layout from "@/components/layout/Layout";
import Head from "next/head";
import Banner from "@/components/Banner";
import Arena from "@/components/Arena";
import Market from "@/components/Market";
import Map from "@/components/Map";
import Token from '@/components/Token';
import Roadmap from '@/components/Roadmap';
import Join from '@/components/Join';

export default function Home() {
  return (
    <>
      <Head>
        <title>PonPonSnake Demo</title>
      </Head>

      <Layout>
        <Banner />
        <Arena />
        <Market />
        <Map />
        <Token />
        <Roadmap />
        <div className="bottom-area">
          <Join />
        </div>
      </Layout>
    </>
  );
}

