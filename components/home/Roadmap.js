export default function Roadmap() {
    return (
        <section className="roadmap-area" >



            <div className="main-content" id="main-content-roadmap">



                <div className="index-title-block">
                    <div className="index-main-title">Roadmap</div>
                </div>

                <div className="roadmap-snake">
                    <img src={`${process.env.BASE_PATH}/images/roadmap/roadmap-snake.png`} alt="" />
                </div>


            </div>

         

            <div className="spaceship-block">

                <img className="spaceship" id="spaceship-01" src={`${process.env.BASE_PATH}/images/roadmap/spaceship-01.png`} alt="" />
                <img className="spaceship" id="spaceship-02" src={`${process.env.BASE_PATH}/images/roadmap/spaceship-02.png`} alt="" />
                <img className="spaceship" id="spaceship-03" src={`${process.env.BASE_PATH}/images/roadmap/spaceship-03.png`} alt="" />
                <img className="spaceship" id="spaceship-04" src={`${process.env.BASE_PATH}/images/roadmap/spaceship-04.png`} alt="" />

            </div>

            <div className="roadmap-wave">
            <img className="wave" id="wave-01" src={`${process.env.BASE_PATH}/images/roadmap/wave-01.png`} alt="" />
            <img className="wave" id="wave-02" src={`${process.env.BASE_PATH}/images/roadmap/wave-02.png`} alt="" />
            </div>

        </section>

    )
}