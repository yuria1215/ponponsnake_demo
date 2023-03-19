export default function Token() {
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

                        <div className="token-chart">
                        <img src={`${process.env.BASE_PATH}/images/token/chart.png`} alt="" />
                            {/* <div class="Pie-Chart" id="Pie-Chart">
                                
                            </div> */}
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