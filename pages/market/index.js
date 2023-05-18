import Head from "next/head";
import Layout from "@/components/layout/Layout";
import MarketFilter from '@/pages/market/components/MarketFilter';
import CardList from '@/pages/market/components/CardList';


export default function Home() {
  const basePath = process.env.BASE_PATH

  return (
    <>
      <Head>
        <title>PonPonSnake | Market</title>
      </Head>

      <Layout>
        <div className="market_background">
          <div className="market-title">NFTs Market</div>
          <MarketFilter />

          <CardList />
        </div>
      </Layout>
    </>
  );
}
