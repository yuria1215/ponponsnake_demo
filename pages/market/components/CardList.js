import { useState } from "react";

export default function CardList() {
    return (
        <section className="card-list">

            <div className="card">

                <div className="card-label">
                    <img className="card-label-icon" src={`${process.env.BASE_PATH}/images/marketplace/card/ElementsIcon-Water.png`} alt="" />
                    Epic
                </div>

                <div className="card-favorite">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15.807" height="14.261" viewBox="0 0 15.807 14.261">
                        <path id="heart-solid" d="M17.317,5.579A4.025,4.025,0,0,0,12.53,3.756,4.876,4.876,0,0,0,9.906,5.619,4.876,4.876,0,0,0,7.283,3.756,4.034,4.034,0,0,0,2.5,5.579c-.929,1.9-.543,4.041,1.146,6.358A30.029,30.029,0,0,0,9.6,17.723a.494.494,0,0,0,.608,0,29.493,29.493,0,0,0,5.963-5.785c1.685-2.317,2.07-4.456,1.141-6.359Z" transform="translate(-2.003 -3.567)" fill="#eceeff" />
                    </svg>

                </div>

                <div className="card-image">
                    <img src={`${process.env.BASE_PATH}/images/marketplace/card/NFT/card_001.png`} alt="" />
                </div>
                <div className="card-time">a few seconds ago</div>

                <div className="card-content Epic">
                    <div className="card-name">
                        Celica
                        &nbsp;
                        <span className="card-number">#75</span>
                    </div>

                    <div className="card-price">
                        <img className="card-price-icon" src={`${process.env.BASE_PATH}/images/marketplace/card/SRC.png`} alt="" />
                        <span>10,000 SRC</span>
                    </div>

                    <div className="card-USD">$4.83 USD</div>

                </div>
            </div>

        </section>
    )
}