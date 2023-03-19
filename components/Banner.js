export default function Banner() {
    return (

        < section className="banner-area" >

            <div className="banner-video-block">
                <video src={`${process.env.BASE_PATH}/images/banner/banner-file.mp4`} className="banner-video" autoPlay muted loop></video>
            </div>

            <div className="banner-mask"></div>
            <div className="banner-center">
                <div className="banner-logo">
                    <img className="" src={`${process.env.BASE_PATH}/images/banner/logo.png`} alt="" />
                    <img className="banner-logo-element" id="logo-ponpon" src={`${process.env.BASE_PATH}/images/banner/logo-ponpon.png`} alt="" />
                    <img className="banner-logo-element" id="logo-snake" src={`${process.env.BASE_PATH}/images/banner/logo-snake.png`} alt="" />
                    <img className="banner-logo-element" id="logo-icon" src={`${process.env.BASE_PATH}/images/banner/logo-icon.png`} alt="" />
                </div>

                <a href="" className="video-play">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="62" height="62"
                        viewBox="0 0 62 62">
                        <defs>
                            <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                                <stop offset="0" stopColor="#ffec8f" />
                                <stop offset="1" stopColor="#ffefce" />
                            </linearGradient>
                            <linearGradient id="linear-gradient-2" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                                <stop offset="0" stopColor="#ffec8f" />
                                <stop offset="1" stopColor="#fa0" />
                            </linearGradient>
                            <filter id="Ellipse_1" x="0" y="0" width="62" height="62" filterUnits="userSpaceOnUse">
                                <feOffset input="SourceAlpha" />
                                <feGaussianBlur stdDeviation="3" result="blur" />
                                <feFlood floodColor="#7e5d1c" floodOpacity="0.722" />
                                <feComposite operator="in" in2="blur" />
                                <feComposite in="SourceGraphic" />
                            </filter>
                        </defs>
                        <g id="Group_21" data-name="Group 21" transform="translate(-1225 -465)">
                            <circle id="Ellipse_2" data-name="Ellipse 2" cx="29" cy="29" r="29" transform="translate(1227 467)"
                                opacity="0.85" fill="url(#linear-gradient)" />
                            <g transform="matrix(1, 0, 0, 1, 1225, 465)" filter="url(#Ellipse_1)">
                                <circle id="Ellipse_1-2" data-name="Ellipse 1" cx="22" cy="22" r="22" transform="translate(9 9)"
                                    fill="url(#linear-gradient-2)" />
                            </g>
                            <path id="play"
                                d="M9,9.083a1.7,1.7,0,0,1,.181-.768A1.382,1.382,0,0,1,11.146,7.7L28.538,18.268a1.509,1.509,0,0,1,.561.616,1.664,1.664,0,0,1-.561,2.151L11.146,31.6a1.348,1.348,0,0,1-.7.2A1.521,1.521,0,0,1,9,30.22Z"
                                transform="translate(1239.183 476.348)" fill="#fff" />
                        </g>
                    </svg>
                </a>

                <div className="banner-title">Enter a new dimension of blockchain gaming!</div>

                <div className="banner-button-block">

                    <a href="" className="index-button">
                        PLAY NOW
                    </a>

                    <a href="" className="learn-more-block">

                        <svg className="sword" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 77.865 32.737">
                            <defs>
                                <filter id="Path_106" x="0" y="0" width="77.865" height="32.737" filterUnits="userSpaceOnUse">
                                    <feOffset dy="3" input="SourceAlpha" />
                                    <feGaussianBlur stdDeviation="3" result="blur" />
                                    <feFlood floodOpacity="0.349" />
                                    <feComposite operator="in" in2="blur" />
                                    <feComposite in="SourceGraphic" />
                                </filter>
                            </defs>
                            <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Path_106)">
                                <path id="Path_106-2" data-name="Path 106"
                                    d="M1660.251-1217.977a17.258,17.258,0,0,1,6.255-1.519c12.06-.257,24.119.027,36.177.141,4.157.039,4.153.2,4.593-3.948a11.519,11.519,0,0,1,.258-1.5c.172-.707.768-.523,1.253-.531.534-.009.69.342.692.8.007,1.323.043,2.647,0,3.969-.027.8.191,1.245,1.068,1.277q2.59.093,5.177.272c.634.043,1.011-.372,1.5-.626a1.8,1.8,0,0,1,2.354.365,1.8,1.8,0,0,1,.176,2.379,1.62,1.62,0,0,1-2.262.66c-1.541-1.117-3.155-.572-4.719-.5-3.283.16-3.28.232-3.28,3.507,0,.509-.02,1.019.005,1.526.03.621-.018,1.081-.852,1.086-.729.005-1.146-.17-1.236-.957-.138-1.211-.419-2.41-.487-3.623-.063-1.1-.486-1.446-1.6-1.428q-10.3.17-20.608.215c-5.753.032-11.505.014-17.258,0A18.551,18.551,0,0,1,1660.251-1217.977Z"
                                    transform="translate(1729.12 -1204.61) rotate(180)" fill="#f2f2f4" />
                            </g>
                        </svg>

                        <div className="learn-more">LEARN MORE</div>


                    </a>

                </div>

            </div>
        </section >

    )
}