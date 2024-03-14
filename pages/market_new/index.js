import React, { useState } from 'react';
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import MarketNavigation from '@/components/market_new/MarketNavigation';
import CardList from '@/components/market_new/CardList';
import importData from '@/data/cardData/cardData.js';

export default function MarketplaceNew() {

  const [cardData, setCardData] = useState({
    data: importData,
    type: 'all', // 目前分類
    rarities: [], // 過濾 rarity 條件清單
    talents: [], // 過濾 labelIcon 條件清單
    isSort: false, // 是否排序
  })

  const onMarketNavigationChange = ({type, rarities, talents, isSort}) => {
    setCardData(preState => ({
      ...preState,
      type: type || preState.type,
      rarities: rarities || preState.rarities,
      talents: talents || preState.talents,
      isSort: isSort === undefined ? preState.isSort : isSort,
    }))
  }


  return (
    <>
      <Head>
        <title>PonPonSnake | Market</title>
      </Head>

      <Layout>
        <div className="market_background">
          <div className="market-title">NFTs Market</div>

          {/* 顯示篩選器並設定onSelectChange回調函數 */}
          <MarketNavigation cardData={cardData}  onChange={onMarketNavigationChange} />

          {/* 顯示卡片清單，傳遞篩選後的卡片資料 */}
          <CardList cardData={cardData}/>
        </div>
      </Layout>
    </>
  );
}
