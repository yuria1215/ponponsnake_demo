import React, { useState } from 'react';
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import MarketFilter from '@/pages/market/components/MarketFilter';
import CardList from '@/pages/market/components/CardList';


export default function Marketplace() {
  // 在MarketFilter组件中更新篩選後的卡片資料的回調函數
  const handleFilterChange = (data) => {
    setFilteredCardData(data);
  };

  // 定義篩選後的卡片資料
  const [filteredCardData, setFilteredCardData] = useState([]);



  return (
    <>
      <Head>
        <title>PonPonSnake | Market</title>
      </Head>

      <Layout>
        <div className="market_background">
          <div className="market-title">NFTs Market</div>
          <MarketFilter onFilterChange={handleFilterChange} />

          <CardList filteredCardData={filteredCardData} />
        </div>
      </Layout>
    </>
  );
}
