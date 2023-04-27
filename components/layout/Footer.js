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
              </a>
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
