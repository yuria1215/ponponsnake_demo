import ContactPopup from '@/components/layout/ContactPopup';

export default function Footer() {
  return (
    <footer className="layout">

      <div className="top">

        <ContactPopup />


        <div className="main-content">
          <div className="info-wrap">
            <div className="title">
              PonPonSnake
              <img src={`${process.env.BASE_PATH}/images/footer/icon_snake.png`} />
            </div>

            <div className="socials info-item item">
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="8.905" height="18.322" viewBox="0 0 8.905 18.322">
                  <path id="facebook" d="M2.274,18.322v-8.6H0V6.63H2.274V3.986C2.274,1.908,3.616,0,6.711,0A18.787,18.787,0,0,1,8.889.12L8.817,3.011S7.872,3,6.841,3c-1.116,0-1.295.514-1.295,1.368V6.63H8.905l-.146,3.1H5.546v8.6H2.274" fill="#313154" />
                </svg>
              </a>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="19.009" height="13.285" viewBox="0 0 19.009 13.285">
                  <path id="youtube" d="M18.619,7.476a2.383,2.383,0,0,0-1.654-1.654,57.049,57.049,0,0,0-7.445-.4s-5.948-.008-7.445.4A2.383,2.383,0,0,0,.42,7.476a24.758,24.758,0,0,0-.414,4.6A24.758,24.758,0,0,0,.42,16.657a2.383,2.383,0,0,0,1.654,1.654,56.962,56.962,0,0,0,7.445.4,57.1,57.1,0,0,0,7.445-.4,2.383,2.383,0,0,0,1.654-1.654,24.758,24.758,0,0,0,.4-4.582,24.758,24.758,0,0,0-.4-4.6Zm-11,7.445v-5.7l4.963,2.854Z" transform="translate(-0.007 -5.424)" fill="#313154" />
                </svg>
              </a>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="17.108" height="17.882" viewBox="0 0 17.108 17.882">
                  <path id="twitch" d="M8.641,4.664V9.328H7.083V4.664H8.641Zm4.277,0V9.328H11.36V4.664h1.558Zm0,8.167,2.719-2.73V1.558H2.806V12.831h3.5v2.332l2.332-2.332h4.277ZM17.2,0V10.886L12.531,15.55h-3.5L6.7,17.882H4.364V15.55H.087V3.106L1.258,0Z" transform="translate(-0.087)" fill="#343456" />
                </svg>
              </a>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="19.009" height="13.673" viewBox="0 0 19.009 13.673">
                  <path id="Path_4420" data-name="Path 4420" d="M899.2,505.03a8.053,8.053,0,0,0-4.573-1.709l-.228.26a10.857,10.857,0,0,1,4.053,2.067,13.831,13.831,0,0,0-12.161-.472c-.6.277-.96.472-.96.472a10.988,10.988,0,0,1,4.284-2.136l-.159-.192a8.05,8.05,0,0,0-4.573,1.709,21.785,21.785,0,0,0-2.347,9.488,5.9,5.9,0,0,0,4.964,2.474s.6-.732,1.09-1.351a5.058,5.058,0,0,1-2.848-1.921c.24.167.633.385.667.407a11.86,11.86,0,0,0,10.156.57,9.309,9.309,0,0,0,1.872-.96,5.14,5.14,0,0,1-2.946,1.937c.488.618,1.074,1.318,1.074,1.318a5.95,5.95,0,0,0,4.98-2.474A21.806,21.806,0,0,0,899.2,505.03Zm-10.2,7.977a1.812,1.812,0,0,1,0-3.616h.025a1.724,1.724,0,0,1,1.636,1.807v0A1.734,1.734,0,0,1,888.994,513.006Zm7.6-1.808a1.667,1.667,0,1,1-1.66-1.808,1.736,1.736,0,0,1,1.66,1.806Z" transform="translate(-882.531 -503.321)" fill="#343456" />
                </svg>
              </a>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="19.009" height="15.442" viewBox="0 0 19.009 15.442">
                  <path id="twitter-bird" d="M19.009,1.829a7.9,7.9,0,0,1-1.948,2.014q.012.223.012.5a11.2,11.2,0,0,1-1.849,6.132,11.848,11.848,0,0,1-2.232,2.54,9.952,9.952,0,0,1-3.114,1.764,11.375,11.375,0,0,1-3.9.658A10.855,10.855,0,0,1,0,13.689a8.433,8.433,0,0,0,.93.054,7.646,7.646,0,0,0,4.844-1.671,3.784,3.784,0,0,1-2.265-.778,3.833,3.833,0,0,1-1.377-1.93A3.9,3.9,0,0,0,3.894,9.3,3.8,3.8,0,0,1,1.655,7.955,3.773,3.773,0,0,1,.766,5.477V5.429a3.849,3.849,0,0,0,1.767.488,3.874,3.874,0,0,1-1.267-1.39A3.805,3.805,0,0,1,.8,2.672,3.832,3.832,0,0,1,1.325.713,11.1,11.1,0,0,0,4.88,3.591a10.837,10.837,0,0,0,4.481,1.2,3.814,3.814,0,0,1-.1-.888A3.757,3.757,0,0,1,10.4,1.144a3.9,3.9,0,0,1,5.6.087A7.767,7.767,0,0,0,18.482.284a3.77,3.77,0,0,1-1.713,2.158,7.794,7.794,0,0,0,2.24-.612Z" transform="translate(0)" fill="#343456" />
                </svg>
              </a>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="17.108" height="14.348" viewBox="0 0 17.108 14.348">
                  <path id="Icon_awesome-telegram-plane" data-name="Icon awesome-telegram-plane" d="M17.061,5.834,14.479,18.01c-.195.859-.7,1.073-1.425.668l-3.934-2.9L7.223,17.6a.988.988,0,0,1-.791.386l.283-4.006L14.005,7.4c.317-.283-.069-.439-.493-.157L4.5,12.915.619,11.7c-.844-.264-.859-.844.176-1.249L15.972,4.6C16.675,4.341,17.29,4.761,17.061,5.834Z" transform="translate(-0.001 -4.528)" fill="#343456" />
                </svg>
              </a>
              {/* <a href="#">
                <img src={`${process.env.BASE_PATH}/images/footer/link_1.png`} />
              </a>
              <a href="#">
                <img src={`${process.env.BASE_PATH}/images/footer/link_2.png`} />
              </a>
              <a href="#">
                <img src={`${process.env.BASE_PATH}/images/footer/link_3.png`} />
              </a>
              <a href="#">
                <img src={`${process.env.BASE_PATH}/images/footer/link_4.png`} />
              </a>
              <a href="#">
                <img src={`${process.env.BASE_PATH}/images/footer/link_5.png`} />
              </a>
              <a href="#">
                <img src={`${process.env.BASE_PATH}/images/footer/link_6.png`} />
              </a> */}
            </div>

            <div className="mail info-item item">twchenquan@gmail.com</div>

            <div className="number info-item item">+886 (3) 316-0003</div>
          </div>

          <div className="links-wrap">
            <div className="links-list">
              <div className="title">Navigation</div>
              <div className="links-item item">Home</div>
              <div className="links-item item">Market</div>
              <div className="links-item item">Arena</div>
              <div className="links-item item">News</div>
              <div className="links-item item">Battle</div>
            </div>

            <div className="links-list">
              <div className="title">Invest</div>
              <div className="links-item item">Token</div>
              <div className="links-item item">Getting Started</div>
              <div className="links-item item">Whitepaper</div>
              <div className="links-item item">Cooperation</div>
            </div>

            <div className="links-list">
              <div className="title">CQI Games</div>
              <div className="links-item item">Contact Us</div>
              <div className="links-item item">Join Us</div>
              <div className="links-item item">Our Team</div>
              <div className="links-item item">Terms of Service</div>
              <div className="links-item item">Privacy Policy</div>
            </div>
          </div>

        </div>
      </div>

      <div className="bottom">© 2023 - PonPonSnake All Rights Reserved</div>

    </footer>
  );
}
