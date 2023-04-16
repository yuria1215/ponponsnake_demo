import Head from "next/head";
import Layout from "@/components/layout/Layout";
import Banner from "@/components/home/Banner";
import Arena from "@/components/home/Arena";
import Market from "@/components/home/Market";
import Map from "@/components/home/Map";
import Token from '@/components/home/Token';
import Roadmap from '@/components/home/Roadmap';
import Join from '@/components/home/Join';

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

