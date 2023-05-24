import { useState } from "react";
import cardDataRider from '@/pages/data/cardDataRider.json';
import cardDataItem from '@/pages/data/cardDataItem.json';
import cardDataLand from '@/pages/data/cardDataLand.json';


export default function CardList({ selectedCardData }) {

    const basePath = process.env.BASE_PATH || '';

    return (
        <section className="card-list">

            {/* 根據篩選後的卡片資料渲染卡片 */}
            {selectedCardData.map((card, index) => (

                <div className={`card ${card.type}`} key={index}>

                    <div className="card-label">
                        <img className="card-label-icon" src={`${basePath}/images/marketplace/card/ElementsIcon-${card.labelIcon}.png`} alt="" />
                        {/* img className="card-label-icon" src={`${process.env.BASE_PATH}/images/marketplace/card/ElementsIcon-Water.png`} alt="" /> */}
                        <div className="card-label-rarity">{card.rarity}</div>
                    </div>

                    <div className="card-favorite">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13.5" height="12.179" viewBox="0 0 13.5 12.179">
                            <path id="heart-solid" d="M15.082,5.285a3.437,3.437,0,0,0-4.089-1.557,4.165,4.165,0,0,0-2.24,1.591,4.165,4.165,0,0,0-2.24-1.591A3.445,3.445,0,0,0,2.423,5.285c-.793,1.624-.464,3.451.979,5.43A25.646,25.646,0,0,0,8.5,15.657a.422.422,0,0,0,.519,0,25.188,25.188,0,0,0,5.093-4.941c1.439-1.979,1.768-3.806.975-5.43Z" transform="translate(-2.003 -3.567)" fill="#eceeff" />
                        </svg>
                    </div>

                    <div className="card-image">
                        <img src={`${basePath}/images/marketplace/card/${card.image}.png`} alt="" />

                        {/* <img src={`${process.env.BASE_PATH}/images/marketplace/card/rider/rider_001.png`} alt="" /> */}
                    </div>
                    <div className="card-time">{card.time}</div>

                    <div className={`card-content ${card.rarity}`}>

                        <div className="card-name">{card.name}</div>

                        <div className="card-info">
                            <div className="card-number">#{card.number}</div>

                            <div className="card-price">
                                <img className="card-price-icon" src={`${process.env.BASE_PATH}/images/marketplace/card/SRC.png`} alt="" />
                                <span>{card.priceSRC}</span>
                            </div>
                        </div>

                        <div className="card-USD">${card.priceUSD} USD</div>

                    </div>
                </div>

            ))}
            {/* 補足card數量，使最後一列整體置中card又靠左 */}
            <i></i>
            <i></i>
            <i></i>

        </section>
    )
}