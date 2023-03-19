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

                    <img className="join-info" src={`${process.env.BASE_PATH}/images/join/text-01.png`} alt="" />
                    <img className="join-info" src={`${process.env.BASE_PATH}/images/join/text-02.png`} alt="" />
                    <img className="join-info" src={`${process.env.BASE_PATH}/images/join/text-03.png`} alt="" />

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