export default function Join() {
    return (
        <section className="join-area" >
            <div className="main-content" id="main-content-join">

                <div className="index-title-block">
                    <div className="index-main-title">Explore PonPonSnake MetaVerse</div>
                    <div className="index-subtitle">Play it, Buy it, Create more FUN!
                        Promote your NFT creations or brands in the PonPonSnake Universe.</div>
                    <a href="" className="index-button">
                        JOIN US
                    </a>
                </div>


                <div className="join-info-block">

                    {/* <img className="join-info" src={`${process.env.BASE_PATH}/images/join/text-01.png`} alt="" />
                    <img className="join-info" src={`${process.env.BASE_PATH}/images/join/text-02.png`} alt="" />
                    <img className="join-info" src={`${process.env.BASE_PATH}/images/join/text-03.png`} alt="" /> */}

                    <div className="join-info-BG">
                        <img className="info-BG" src={`${process.env.BASE_PATH}/images/join/join-info-BG.png`} alt="" />
                        <div className="join-info-inner">
                            <div className="join-info-title">Stabilize</div>
                            <div className="info-title-border"></div>
                            <div className="join-info-text">
                                PonPonSnake is a stable company, we have been in the game industry for many years and have rich experience. We are also one of the few Taiwan companies developing into GameFi.
                            </div>

                        </div>
                    </div>


                    <div className="join-info-BG">
                        <img className="info-BG" src={`${process.env.BASE_PATH}/images/join/join-info-BG.png`} alt="" />
                        <div className="join-info-inner">
                            <div className="join-info-title">Professional</div>
                            <div className="info-title-border"></div>
                            <div className="join-info-text">
                                PonPonSnake has the most professional team, including design, art, planning, and programming, which can transform your brand NFT with the most professional attitude and expertise.
                            </div>

                        </div>
                    </div>

                    <div className="join-info-BG">
                        <img className="info-BG" src={`${process.env.BASE_PATH}/images/join/join-info-BG.png`} alt="" />
                        <div className="join-info-inner">
                            <div className="join-info-title">Variability</div>
                            <div className="info-title-border"></div>
                            <div className="join-info-text">
                                We may offer a range of choices, from characters to lands. As more and more unique NFT universes appear, we will maintain the pace and avoid falling behind.
                            </div>

                        </div>
                    </div>

                </div>

                <div className="rider-group">
                    <img src={`${process.env.BASE_PATH}/images/join/KK.png`} alt="" />
                </div>


                <div className="index-title-block" id="partner-area">
                    <div className="index-main-title">Our Partner </div>
                    <div className="index-subtitle">PonPonSnake has captured the hearts of many.</div>

                </div>
                <div className="partner-block">
                    <img src={`${process.env.BASE_PATH}/images/join/partner.png`} alt="" />
                </div>

            </div>

        </section>

    )
}