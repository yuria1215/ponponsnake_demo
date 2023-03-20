import { useEffect } from "react";
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';


export default function Token() {

    // const rect = $('#token-chart')[0].getBoundingClientRect()
    //     //控制圓餅出現頁面高度 ex: (...) - 100
    //     position = (rect.top - rect.height) - 200

    const option = {

        series: [
            {
                name: 'Access From',
                type: 'pie',
                // selectedMode: 'single',
                // radius: '90%',
                radius: ['45%', '70%'],

                // label: {
                //     show: true,
                //     position: 'inner',
                //     position: 'center',
                //     fontSize: 30,
                //     color: "#1F3240",
                // },

                // emphasis: {
                //     label: {
                //       show: true,
                //       fontSize: '40',
                //       fontWeight: 'bold'
                //     },
                //   },

                label: {
                    fontSize: 13,
                    lineHeight: 18,
                    color: '#ffffff',
                    // overflow: "break"

                },

                labelLine: {
                    show: true,
                    // length: 10,
                    normal: {
                        lineStyle: {
                            color: '#ffffff',
                            width: 2,
                        },
                        // smooth: 0.2,
                        length: 30,
                    },


                },
                animationDelay: function (idx) {
                    return idx + 600;
                },

                itemStyle: {
                    color: '#00000000',
                },

                data: [
                    // DAO Treasury
                    { value: 45, name: "DAO Treasury" },
                    // CQI Team
                    { value: 16, name: "CQI Team" },
                    // Event
                    { value: 2, name: "Event" },
                    // Develop
                    { value: 8, name: "Develop" },
                    // Advisor
                    { value: 4, name: "Advisor" },
                    // Public Sale
                    { value: 4, name: "Public Sale" },
                    // Private Placement 
                    { value: 12, name: "Private Placement " },
                    // Seed(0.06USD)
                    { value: 6, name: "Seed(0.06USD)" },
                    // Charity
                    { value: 3, name: "Charity" }
                ],

            },

            {
                name: 'Access From',
                type: 'pie',
                // selectedMode: 'single',
                // radius: '90%',
                radius: ['45%', '70%'],

                label: {
                    show: false,
                    // position: 'inner',
                    position: 'center',
                    fontSize: 30,
                    color: '#ffffff'
                },
                itemStyle: {
                    borderRadius: 5,
                    borderColor: '#152837',
                    borderWidth: 0.5,
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '30',
                        fontWeight: 'bold'
                    },
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },

                labelLine: {
                    show: true,
                    length: 10,
                    normal: {
                        lineStyle: {
                            color: '#69ADA2',
                            width: 2,
                        },
                    },
                },
                color: [
                    '#EAC2FE',
                    '#F8B0E5',
                    '#F8B0F6',
                    '#EAB0F8',
                    '#DEB0F8',
                    '#C5B0F8',
                    '#B0B3F8',
                    '#B0C3F8',
                    '#B7D1FF'
                  ],


                // color: [

                //     // // DAO Treasury 45%
                //     new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                //         offset: 0,
                //         color: '#745858'
                //     }, {
                //         offset: 1,
                //         color: '#B7836F'
                //     }]),

                //     // CQI Team 16%
                //     new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                //         offset: 0,
                //         color: '#A1ADC4'
                //     }, {
                //         offset: 1,
                //         color: '#E2EBFE'
                //     }]),

                //     // Event 2%
                //     new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                //         offset: 0,
                //         color: '#CCC1DC'
                //     }, {
                //         offset: 1,
                //         color: '#F4ECFF'
                //     }]),

                //     // Develop 8%
                //     new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                //         offset: 0,
                //         color: '#99C5D4'
                //     }, {
                //         offset: 1,
                //         color: '#AEDCEC'
                //     }]),

                //     // Advisor 4%
                //     new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                //         offset: 0,
                //         color: '#DCB59A'
                //     }, {
                //         offset: 1,
                //         color: '#FCD4B9'
                //     }]),

                //     // Public Sale 4%
                //     new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                //         offset: 0,
                //         color: '#EFE4BE'
                //     }, {
                //         offset: 1,
                //         color: '#F1E7C5'
                //     }]),

                //     // Private Placement 12%
                //     new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                //         offset: 0,
                //         color: '#D0E8C9'
                //     }, {
                //         offset: 1,
                //         color: '#ECFFE6'
                //     }]),

                //     // Seed(0.06USD) 6%
                //     new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                //         offset: 0,
                //         color: '#EFEFEF'
                //     }, {
                //         offset: 1,
                //         color: '#ffffff'
                //     }]),

                //     // Charity 3%
                //     new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                //         offset: 0,
                //         color: '#A9D2EF'
                //     }, {
                //         offset: 1,
                //         color: '#CBE9FF'
                //     }])
                // ],


                data: [
                    { value: 45, name: '45%' },
                    // CQI Team
                    { value: 16, name: '16%' },
                    // Event
                    { value: 2, name: '2%' },
                    // Develop
                    { value: 8, name: '8%' },
                    // Advisor
                    { value: 4, name: '4% ' },
                    // Public Sale
                    { value: 4, name: '4%' },
                    // Private Placement 
                    { value: 12, name: '12%' },
                    // Seed(0.06USD)
                    { value: 6, name: '6%' },
                    // Charity
                    { value: 3, name: '3%' }
                ],

            }
        ]
    };
    // useEffect(() => {
    //     const hasJQuery = Boolean(window.jQuery)
    //     if (hasJQuery) {
    //         chartInit()
    //     }
    // }, []);
    return (
        <section className="token-area">

            <div className="main-content" id="main-content-token">

                <div className="token-top">
                    <div className="index-title-block">
                        <div className="index-main-title">Snake Token</div>
                        <div className="index-subtitle">PonPonSnake 2022, will release fungible tokens used for trading in the Game-Fi system.</div>

                        <p className="token-subtitle">Total 270,000,000 ERNC</p>
                        <a href="" className="index-button">
                            LEARN MORE
                        </a>
                    </div>

                    <div className="token-right">
                        <img id="ernc-people" src={`${process.env.BASE_PATH}/images/token/ernc-people.png`} alt="" />

                        <div className="token-chart" id="token-chart">

                            {/* <img src={`${process.env.BASE_PATH}/images/token/chart.png`} alt="" /> */}
                            <div className="Pie-Chart" id="Pie-Chart">
                                <ReactEcharts
                                    echarts={echarts}
                                    option={option}
                                    style={{ height: '400px', width: '100%' }}
                                />
                            </div>
                        </div>
                    </div>



                </div>

                <div className="token-info-block">



                    <div className="token-info">

                        <div className="token-info-BG">
                            <img src={`${process.env.BASE_PATH}/images/token/token-info-BG.png`} alt="" />
                        </div>

                        <div className="token-content">

                            <img className="token-icon" src={`${process.env.BASE_PATH}/images/token/ERNC.png`} alt="" />

                            <div className="token-name">
                                <img src={`${process.env.BASE_PATH}/images/token/sword-left.png`} alt="" />
                                <span>ERNC</span>
                                <img src={`${process.env.BASE_PATH}/images/token/sword-right.png`} alt="" />
                            </div>


                            <div className="token-text">ERNC is the primary market token for PonPonSnake MetaVerse. It is an ERC20 token that allows its holders to take part in game rewards decisions. ERNC can be obtained through staking, trading, competitions, and more.</div>
                        </div>

                    </div>

                    <div className="token-info">

                        <div className="token-info-BG">
                            <img src={`${process.env.BASE_PATH}/images/token/token-info-BG.png`} alt="" />
                        </div>

                        <div className="token-content">

                            <img className="token-icon" src={`${process.env.BASE_PATH}/images/token/SRC.png`} alt="" />

                            <div className="token-name">
                                <img src={`${process.env.BASE_PATH}/images/token/sword-left.png`} alt="" />
                                <span>SRC</span>
                                <img src={`${process.env.BASE_PATH}/images/token/sword-right.png`} alt="" />
                            </div>


                            <div className="token-text">SRC (Snake Rider Coin) will not be a crypto token and can be only used in the game. PPSR owner can earn SRC as payment from renting your rider to other players. You can exchange SRC to your wallet for cryptocurrency.</div>
                        </div>

                    </div>

                    <div className="token-info">

                        <div className="token-info-BG">
                            <img src={`${process.env.BASE_PATH}/images/token/token-info-BG.png`} alt="" />
                        </div>

                        <div className="token-content">

                            <img className="token-icon" id="token-GEM" src={`${process.env.BASE_PATH}/images/token/GEM.png`} alt="" />

                            <div className="token-name">
                                <img src={`${process.env.BASE_PATH}/images/token/sword-left.png`} alt="" />
                                <span>GEM</span>
                                <img src={`${process.env.BASE_PATH}/images/token/sword-right.png`} alt="" />
                            </div>


                            <div className="token-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}