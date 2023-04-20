import { useEffect } from "react";
import MarketJquery from '../jquery/market.jq.js'

export default function Market() {
    useEffect(() => {
        const hasJQuery = Boolean(window.jQuery)
        if (hasJQuery) {
            MarketJquery()
        }
    }, []);
      
    return (

        <section className="market-area">
            <div className="market-mask"></div>
            <img id="shine" src={`${process.env.BASE_PATH}/images/market/shine.png`} alt="" />

            <div className="main-content" id="main-content-collect">

                <div className="collect-left">
                    <img id="collect-title" src={`${process.env.BASE_PATH}/images/market/collect-title.png`} alt="" />

                    <div className="Create_Gallery_Block">
                        <img id="galleryCard" src={`${process.env.BASE_PATH}/images/market/GalleryCard.png`} alt="" />

                        <div className="Buyer_Block">
                            <div className="Buyer" id="Buyer-01">
                                <img className="Buyer-img" src={`${process.env.BASE_PATH}/images/market/Buyer-01.png`} alt="" />

                            </div>
                            <div className="Buyer" id="Buyer-02">
                                <img className="Buyer-img" src={`${process.env.BASE_PATH}/images/market/Buyer-02.png`} alt="" />

                            </div>
                            <div className="Buyer" id="Buyer-03">
                                <img className="Buyer-img" src={`${process.env.BASE_PATH}/images/market/Buyer-03.png`} alt="" />

                            </div>
                        </div>
                    </div>
                </div>

                <div className="collect-right">
                    <div className="PPSR-Rider-block">


                        <div className="PPSR-Rider">

                            <div className="PPSR-Rider-Block not-Rider-Knight not-Rider-Weapon not-Rider-Pet Rider-first"
                                id="Rider-Snake">
                                <img src={`${process.env.BASE_PATH}/images/market/just_Snake.png`} alt="" />
                            </div>


                            <div className="PPSR-Rider-Block not-Rider-Snake not-Rider-Weapon not-Rider-Pet Rider-first"
                                id="Rider-Knight">
                                <img src={`${process.env.BASE_PATH}/images/market/just_Knight.png`}
                                    alt="" />
                            </div>


                            <div className="PPSR-Rider-Block not-Rider-Snake not-Rider-Knight not-Rider-Pet Rider-first"
                                id="Rider-Weapon">
                                <img src={`${process.env.BASE_PATH}/images/market/just_Weapon.png`}
                                    alt="" />
                            </div>

                            <div className="PPSR-Rider-Block not-Rider-Snake not-Rider-Knight not-Rider-Weapon" id="Rider-Pet">
                                <img src={`${process.env.BASE_PATH}/images/market/just_pet.png`} alt="" />
                            </div>


                            <svg className="line-Rider" id="line-Rider-Snake" xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 204.797 57.001">
                                <defs>
                                    <filter id="パス_61" x="0" y="0" width="204.797" height="57.001"
                                        filterUnits="userSpaceOnUse">
                                        <feOffset input="SourceAlpha" />
                                        <feGaussianBlur stdDeviation="3" result="blur" />
                                        <feFlood floodColor="#98ecff" />
                                        <feComposite operator="in" in2="blur" />
                                        <feComposite in="SourceGraphic" />
                                    </filter>
                                </defs>
                                <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#パス_61)">
                                    <path id="パス_61-2" data-name="パス 61" d="M13108.136,3875v38h185.8"
                                        transform="translate(-13098.14 -3866)" fill="none" stroke="#fff" strokeWidth="2" />
                                </g>
                            </svg>
                            <div className="Info-Rider" id="Info-Rider-Snake">Snake</div>


                            <svg className="line-Rider" id="line-Rider-Knight" xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 81.393 135.899">
                                <defs>
                                    <filter id="パス_56" x="0" y="0" width="81.393" height="135.899"
                                        filterUnits="userSpaceOnUse">
                                        <feOffset input="SourceAlpha" />
                                        <feGaussianBlur stdDeviation="3" result="blur" />
                                        <feFlood floodColor="#98ecff" />
                                        <feComposite operator="in" in2="blur" />
                                        <feComposite in="SourceGraphic" />
                                    </filter>
                                </defs>
                                <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#パス_56)">
                                    <path id="" data-name="パス 56" d="M13311.843,4033v116.9h-62.393"
                                        transform="translate(-13240.45 -4024)" fill="none" stroke="#fff" strokeWidth="2" />
                                </g>
                            </svg>
                            <div className="Info-Rider" id="Info-Rider-Knight">Rider</div>


                            <svg className="line-Rider" id="line-Rider-Weapon" xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 51.077 172.991">
                                <defs>
                                    <filter id="パス_62" x="0" y="0" width="51.077" height="172.991"
                                        filterUnits="userSpaceOnUse">
                                        <feOffset input="SourceAlpha" />
                                        <feGaussianBlur stdDeviation="3" result="blur" />
                                        <feFlood floodColor="#98ecff" />
                                        <feComposite operator="in" in2="blur" />
                                        <feComposite in="SourceGraphic" />
                                    </filter>
                                </defs>
                                <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#パス_62)">
                                    <path id="パス_62-2" data-name="パス 62" d="M12330.813,3367.521h32.077V3213.53"
                                        transform="translate(-12321.81 -3204.53)" fill="none" stroke="#fff"
                                        strokeWidth="2" />
                                </g>
                            </svg>
                            <div className="Info-Rider" id="Info-Rider-Weapon">Weapon</div>


                            <svg className="line-Rider" id="line-Rider-Pet" xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 67.296 170.842">
                                <defs>
                                    <filter id="パス_54" x="0" y="0" width="67.296" height="170.842"
                                        filterUnits="userSpaceOnUse">
                                        <feOffset input="SourceAlpha" />
                                        <feGaussianBlur stdDeviation="3" result="blur" />
                                        <feFlood floodColor="#98ecff" />
                                        <feComposite operator="in" in2="blur" />
                                        <feComposite in="SourceGraphic" />
                                    </filter>
                                </defs>
                                <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#パス_54)">
                                    <path id="パス_54-2" data-name="パス 54" d="M-67.5,183.982V60.754h47.3V31.14"
                                        transform="translate(77.5 -22.14)" fill="none" stroke="#fff" strokeWidth="2" />
                                </g>
                            </svg>
                            <div className="Info-Rider" id="Info-Rider-Pet">Pet</div>

                            <div className="PPSR-Click-Icon">
                                <img src={`${process.env.BASE_PATH}/images/market/click-icon.png`} alt="" />
                            </div>
                        </div>

                    </div>

                    <div className="index-button">MARKET</div>
                </div>

            </div>

            <div className="main-content" id="main-content-market">

                <div className="index-title-block">
                    <div className="index-main-title">NFTs Market</div>
                    <div className="index-subtitle">These NFTs are unique, with special attributes and value, and you can freely trade and use them in the community. </div>

                </div>

                <div className="NFT-card-block">

                    <div className="NFT-card">
                        <div className="product" >
                            <img className="product-mask" src={`${process.env.BASE_PATH}/images/market/product-purple.png`} alt="" />
                            <div className="product-content">

                                <div className="attributes">
                                    <img src={`${process.env.BASE_PATH}/images/market/ElementsIcon-Water.png`} alt="" />
                                    <span>Epic</span>
                                </div>
                                <img className="product-icon" id="product-icon-01" src={`${process.env.BASE_PATH}/images/market/product-01.png`} alt="" />

                                <div className="product-info">
                                    <div className="product-number">#75</div>
                                    <div className="product-name">Celica</div>
                                    <div className="product-text">she dedicated all her time to training and becoming
                                        the rising star of the Honor Kingdom.
                                    </div>
                                    <div className="product-detail">
                                        <div className="detail">
                                            <img className="detail-icon" src={`${process.env.BASE_PATH}/images/market/SRC.png`} alt="" />
                                            <span>10.000 SRC</span>
                                        </div>

                                        <div className="detail-heart">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="11.658" height="10.518" viewBox="0 0 11.658 10.518">
                                                <path id="heart-solid" d="M13.3,5.051A2.968,2.968,0,0,0,9.767,3.706,3.6,3.6,0,0,0,7.832,5.08,3.6,3.6,0,0,0,5.9,3.706,2.975,2.975,0,0,0,2.366,5.051c-.685,1.4-.4,2.981.845,4.69a22.147,22.147,0,0,0,4.4,4.267.364.364,0,0,0,.448,0,21.752,21.752,0,0,0,4.4-4.267c1.243-1.709,1.527-3.287.842-4.69Z" transform="translate(-2.003 -3.567)" fill="#eceeff" />
                                            </svg>
                                        </div>

                                        <div className="detail">
                                            <img className="detail-icon" src={`${process.env.BASE_PATH}/images/market/GEM.png`} alt="" />
                                            <span>0.000 GEM</span>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="index-button">PURCHASE</div>
                    </div>



                    <div className="NFT-card" id="NFT-card-red">
                        <div className="product" >
                            <img className="product-mask" src={`${process.env.BASE_PATH}/images/market/product-red.png`} alt="" />
                            <div className="product-content">

                                <div className="attributes" id="attributes-fire">
                                    <img src={`${process.env.BASE_PATH}/images/market/ElementsIcon-Fire.png`} alt="" />
                                    <span>Excellent</span>
                                </div>
                                <img className="product-icon" id="product-icon-02" src={`${process.env.BASE_PATH}/images/market/product-02.png`} alt="" />

                                <div className="product-info">
                                    <div className="product-number">#61</div>
                                    <div className="product-name">Bone Dragon</div>
                                    <div className="product-text">It is powerful, can attack your opponents swiftly, and can also destruct the surroundings.
                                    </div>
                                    <div className="product-detail">
                                        <div className="detail">
                                            <img className="detail-icon" src={`${process.env.BASE_PATH}/images/market/SRC.png`} alt="" />
                                            <span>10.000 SRC</span>
                                        </div>

                                        <div className="detail-heart">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="11.658" height="10.518" viewBox="0 0 11.658 10.518">
                                                <path id="heart-solid" d="M13.3,5.051A2.968,2.968,0,0,0,9.767,3.706,3.6,3.6,0,0,0,7.832,5.08,3.6,3.6,0,0,0,5.9,3.706,2.975,2.975,0,0,0,2.366,5.051c-.685,1.4-.4,2.981.845,4.69a22.147,22.147,0,0,0,4.4,4.267.364.364,0,0,0,.448,0,21.752,21.752,0,0,0,4.4-4.267c1.243-1.709,1.527-3.287.842-4.69Z" transform="translate(-2.003 -3.567)" fill="#eceeff" />
                                            </svg>
                                        </div>

                                        <div className="detail">
                                            <img className="detail-icon" src={`${process.env.BASE_PATH}/images/market/GEM.png`} alt="" />
                                            <span>0.000 GEM</span>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="index-button">PURCHASE</div>
                    </div>


                    <div className="NFT-card">
                        <div className="product" >
                            <img className="product-mask" src={`${process.env.BASE_PATH}/images/market/product-purple.png`} alt="" />
                            <div className="product-content">

                                <div className="attributes">
                                    <img src={`${process.env.BASE_PATH}/images/market/ElementsIcon-Earth.png`} alt="" />
                                    <span>Epic</span>
                                </div>
                                <img className="product-icon" id="product-icon-03" src={`${process.env.BASE_PATH}/images/market/product-03.png`} alt="" />

                                <div className="product-info">
                                    <div className="product-number">#74</div>
                                    <div className="product-name">Pirate Felice</div>
                                    <div className="product-text">No one dares to disturb the peace in the seashore region she supervises.
                                    </div>
                                    <div className="product-detail">
                                        <div className="detail">
                                            <img className="detail-icon" src={`${process.env.BASE_PATH}/images/market/SRC.png`} alt="" />
                                            <span>10.000 SRC</span>
                                        </div>

                                        <div className="detail-heart">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="11.658" height="10.518" viewBox="0 0 11.658 10.518">
                                                <path id="heart-solid" d="M13.3,5.051A2.968,2.968,0,0,0,9.767,3.706,3.6,3.6,0,0,0,7.832,5.08,3.6,3.6,0,0,0,5.9,3.706,2.975,2.975,0,0,0,2.366,5.051c-.685,1.4-.4,2.981.845,4.69a22.147,22.147,0,0,0,4.4,4.267.364.364,0,0,0,.448,0,21.752,21.752,0,0,0,4.4-4.267c1.243-1.709,1.527-3.287.842-4.69Z" transform="translate(-2.003 -3.567)" fill="#eceeff" />
                                            </svg>
                                        </div>

                                        <div className="detail">
                                            <img className="detail-icon" src={`${process.env.BASE_PATH}/images/market/GEM.png`} alt="" />
                                            <span>0.000 GEM</span>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="index-button">PURCHASE</div>
                    </div>

                </div>


            </div>
        </section >

    )
}