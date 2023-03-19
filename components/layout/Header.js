import { useState, useEffect } from "react";

export default function Header() {
  const [hamShow, setHamShow] = useState(false);
  const [headerHide, setHeaderHide] = useState(false);

  const hamHandler = () => setHamShow(!hamShow);
  let lastScrollTop = 0;

  useEffect(() => {
    function headerShow() {
      const scrollY = window?.scrollY;
      if (lastScrollTop > scrollY) {
        setHeaderHide(false);
      } else {
        if (scrollY > 300) setHeaderHide(true);
      }
      lastScrollTop = scrollY;
    }
    window.addEventListener("scroll", headerShow);
    return () => window.removeEventListener("scroll", headerShow);
  }, []);

  return (
    <header className={`top aic d-flex ${headerHide ? "hide" : ""}`}>
      <div className="logo">
        <img
          className="img-fluid"
          src={`${process.env.BASE_PATH}/images/nav/logo.png`}
          alt="header logo"
        />
      </div>

      <div className="ham cursor-pointer" onClick={() => hamHandler()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 16 16"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5"
          />
        </svg>
      </div>

      <nav className={`${hamShow ? "show" : ""}`}>
        <div className="mobile-wrap d-flex">
          <div className="logo">
            <img
              className="img-fluid"
              src={`${process.env.BASE_PATH}/images/nav/logo.png`}
              alt="header logo"
            />
          </div>

          <div className="close cursor-pointer" onClick={() => hamHandler()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6Z"
              />
            </svg>
          </div>
        </div>

        <ul className="nav-list">
          <li className="nav-item current">Home</li>
          <li className="nav-item">Market</li>
          <li className="nav-item">Arena</li>
          <li className="nav-item">News</li>
          <li className="nav-item">More</li>
        </ul>

        <div className="top-end">
          <div className="coin-warp">
            <div className="flex-center src">
              <img src={`${process.env.BASE_PATH}/images/nav/SRC.png`} alt="src icon" />
              0.00
            </div>

            <div className="flex-center jem">
              <img src={`${process.env.BASE_PATH}/images/nav/GEM.png`} alt="gem icon" />
              0.00
            </div>
          </div>

          <div className="locales">English</div>

          <div className="sign flex-center">
            <button className="index-button cursor-pointer">Sign in</button>
          </div>
        </div>
      </nav>
    </header>
  );
}
