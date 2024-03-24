import React, { useState } from 'react';
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import MarketNavigation from '@/components/market/MarketNavigation';
import CardList from '@/components/market/CardList';

export default function Marketplace() {

  // 定義選擇後的卡片資料
  const [selectedCardData, setSelectedCardData] = useState([]);

  // 在MarketFilter组件中更新選擇後的卡片資料的回調函數
  const handleSelectChange = (data) => {
    setSelectedCardData(data);
  };


  return (
    <>
      <Head>
        <title>PonPonSnake | Market</title>
      </Head>

      <Layout>
        <div className="market_background">
          <div className="market-title">NFTs Market</div>

          {/* 顯示篩選器並設定onSelectChange回調函數 */}
          <MarketNavigation onSelectChange={handleSelectChange} />

          {/* 顯示卡片清單，傳遞篩選後的卡片資料 */}
          <CardList selectedCardData={selectedCardData} />
        </div>
      </Layout>
    </>
  );
}
