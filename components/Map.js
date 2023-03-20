import { useEffect } from "react";
import telescopicSightMove from './jquery/map.jq'

export default function Map() {
    useEffect(() => {
        const hasJQuery = Boolean(window.jQuery)
        if (hasJQuery) {
            telescopicSightMove()
        }
    }, []);

    return (
        <section className="map-area" >

            <div className="main-content" id="main-content-badge">

                <div className="index-title-block">
                    <div className="index-main-title">Explore PonPonSnake Metaverse</div>
                    <div className="index-subtitle">CQI Games has a skilled team working on merging PonPonSnake  with blockchain using Unity 3D, NFTs, and NFTs expertise.</div>
                    <a href="" className="index-button">
                        WHITEPAPER
                    </a>
                </div>


                {/* 地區徽章 */}

                <div className="RegionalBadge-block">
                    <div className="RegionalBadge-icon-block">
                        <img className="RegionalBadge-icon" id="RegionalBadge-01"
                            src={`${process.env.BASE_PATH}/images/map/RegionalBadge-01.png`} alt="" />
                        <div className="RegionalBadge-name">Della</div>
                    </div>
                    <div className="RegionalBadge-icon-block">
                        <img className="RegionalBadge-icon" id="RegionalBadge-02"
                            src={`${process.env.BASE_PATH}/images/map/RegionalBadge-02.png`} alt="" />
                        <div className="RegionalBadge-name">Potronis</div>
                    </div>
                    <div className="RegionalBadge-icon-block">
                        <img className="RegionalBadge-icon" id="RegionalBadge-03"
                            src={`${process.env.BASE_PATH}/images/map/RegionalBadge-03.png`} alt="" />
                        <div className="RegionalBadge-name">Nord</div>
                    </div>

                    <div className="RegionalBadge-icon-block">
                        <img className="RegionalBadge-icon" id="RegionalBadge-04"
                            src={`${process.env.BASE_PATH}/images/map/RegionalBadge-04.png`} alt="" />
                        <div className="RegionalBadge-name">Chaoyang</div>
                    </div>

                    <div className="RegionalBadge-icon-block">
                        <img className="RegionalBadge-icon" id="RegionalBadge-05"
                            src={`${process.env.BASE_PATH}/images/map/RegionalBadge-05.png`} alt="" />
                        <div className="RegionalBadge-name">Faline</div>
                    </div>
                    <div className="RegionalBadge-icon-block">

                        <img className="RegionalBadge-icon" id="RegionalBadge-06"
                            src={`${process.env.BASE_PATH}/images/map/RegionalBadge-06.png`} alt="" />
                        <div className="RegionalBadge-name">Ruins</div>
                    </div>

                    <div className="Circle-Click-Icon">
                        <img src={`${process.env.BASE_PATH}/images/market/click-icon.png`} alt="" />
                    </div>
                </div>
            </div>



            {/* 地圖 */}
            <div className="map-area">

                <div className="map ">
                    <div className="map-mask"></div>
                    <img className="" src={`${process.env.BASE_PATH}/images/map/Travel_map_long.png`} alt="" />
                </div>

                <div className="map-pick-block">

                    <div className="map-pick" id="map-pick-01">

                        <div className="pick">
                            <img className="" src={`${process.env.BASE_PATH}/images/map/landmark-01.png`} alt="" />

                        </div>
                        <div className="pick-button">
                            <img src={`${process.env.BASE_PATH}/images/map/MapPick-button.png`} alt="" />
                            <span>Della</span>

                        </div>
                    </div>

                    <div className="map-pick" id="map-pick-02">

                        <div className="pick">
                            <img className="" src={`${process.env.BASE_PATH}/images/map/landmark-02.png`} alt="" />

                        </div>
                        <div className="pick-button">
                            <img src={`${process.env.BASE_PATH}/images/map/MapPick-button.png`} alt="" />
                            <span>Potronis</span>

                        </div>
                    </div>

                    <div className="map-pick" id="map-pick-03">

                        <div className="pick">
                            <img className="" src={`${process.env.BASE_PATH}/images/map/landmark-03.png`} alt="" />

                        </div>
                        <div className="pick-button">
                            <img src={`${process.env.BASE_PATH}/images/map/MapPick-button.png`} alt="" />
                            <span>Potronis</span>

                        </div>
                    </div>

                    <div className="map-pick" id="map-pick-04">

                        <div className="pick">
                            <img className="" src={`${process.env.BASE_PATH}/images/map/landmark-04.png`} alt="" />

                        </div>
                        <div className="pick-button">
                            <img src={`${process.env.BASE_PATH}/images/map/MapPick-button.png`} alt="" />
                            <span>ChaoYang</span>

                        </div>
                    </div>



                    <div className="map-pick" id="map-pick-05">

                        <div className="pick">
                            <img className="" src={`${process.env.BASE_PATH}/images/map/landmark-05.png`} alt="" />

                        </div>
                        <div className="pick-button">
                            <img src={`${process.env.BASE_PATH}/images/map/MapPick-button.png`} alt="" />
                            <span>Faline</span>

                        </div>
                    </div>
                    <div className="map-pick" id="map-pick-06">

                        <div className="pick">
                            <img className="" src={`${process.env.BASE_PATH}/images/map/landmark-06.png`} alt="" />

                        </div>
                        <div className="pick-button">
                            <img src={`${process.env.BASE_PATH}/images/map/MapPick-button.png`} alt="" />
                            <span>Ruins</span>

                        </div>
                    </div>

                </div>



                {/* @* 區域內容顯示 *@ */}
                <div className="Area-display-block ">
                    {/* @* 探照鏡 *@ */}
                    <div className="TelescopicSight TelescopicSight-move " id="TelescopicSight">
                        <div className="TravelMap-circle">
                            {/* @* <svg className="TravelMap-circle-line" xmlns="http://www.w3.org/2000/svg" width="285" height="285" *@ */}
                            <svg className="TravelMap-circle-line" xmlns="http://www.w3.org/2000/svg" width="285" height="285"

                                viewBox="0 0 285 285">
                                <g id="" data-name="" fill="none" stroke="#dcbd71" strokeWidth="2.5">
                                    <circle cx="142.5" cy="142.5" r="142.5" stroke="none" />
                                    <circle cx="142.5" cy="142.5" r="141.25" fill="none" />
                                </g>
                            </svg>


                            <svg className="TravelMap-circle-ball" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 35 35">
                                <circle id="" data-name="" cx="17.5" cy="17.5" r="17.5" fill="#dcbd71" />
                            </svg>
                        </div>
                        {/* @* 地標 *@ */}
                        <div className="TravelMap-landmark">
                            <img className="TravelMap-landmark-icon" src={`${process.env.BASE_PATH}/images/map/landmark-01.png`} alt="" />
                        </div>
                    </div>

                    {/* @* 地域旗幟 *@ */}
                    <div className="RegionalFlag-block">
                        <div className="RegionalFlag">
                            <div className="RegionalFlag-BG"></div>
                            <div className="RegionalFlag-icon-block">
                                <img className="RegionalFlag-icon" src={`${process.env.BASE_PATH}/images/map/knight_icon_01.png`} alt="" />
                            </div>
                        </div>
                        <div className="RegionalFlag-name">
                            {/* <p>Della</p> */}

                            {/* <img src={`${process.env.BASE_PATH}/images/map/RegionalFlag-title-BG.png" alt=""/> */}
                        </div>
                        <div className="RegionalFlag-info"></div>

                    </div>


                </div>
            </div>

        </section >


    )
}