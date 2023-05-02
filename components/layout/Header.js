import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from 'next/router'
import Dropdown from "@/components/common/Dropdown"


export default function Header() {
  const router = useRouter()
  const [hamShow, setHamShow] = useState(false);
  const [headerHide, setHeaderHide] = useState(false);
  const moreRef = useRef(0)
  const localesRef = useRef(0)

  const hamHandler = () => {
    setHamShow(!hamShow);
    setDropdownShow([false, false]);
    moreRef.current.close()
    localesRef.current.close()
  }
  const [dropdownShow, setDropdownShow] = useState([false, false]);


  const toggleDropdown = (index) => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 850) {
      // setDropdownShow(!dropdownShow);
      setDropdownShow((prevState) => {
        // console.log(prevState)
        let newState = [...prevState];
        newState.map((e, i) => {
          if (i != index) {
            newState[i] = false
          }
        })
        newState[index] = !newState[index];
        return [...newState];
      })

    }
  }

  const localeList = [
    {
      text: 'English'
    },
    {
      text: '中文',
      href: '/market'
    },
  ]

  const moreList = [
    {
      text: 'Battle',
      href: '/market'
    },
    {
      text: 'Token',
      href: '/'
    },
    {
      text: 'Getting Starteen',
      href: '/'
    },
    {
      text: 'Whitepaper',
      href: '/'
    },
    {
      text: 'Cooperation',
      href: '/'
    },
  ]




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

    function handleResize() {
      // 在這裡改變dropdownShow的狀態為false
      const screenWidth = window.innerWidth;
      if (screenWidth > 850) {
        setDropdownShow([false, false]);
      }
    }

    window.addEventListener("scroll", headerShow);
    window.addEventListener("resize", handleResize); // 加入resize事件監聽

    return () => {
      window.removeEventListener("scroll", headerShow);
      window.removeEventListener("resize", handleResize); // 移除resize事件監聽
    }

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
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5"
          />
        </svg>
      </div>

      <nav className={`mobileNav ${hamShow ? "show" : ""}`}>
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
          <li className={`nav-item ${router.pathname === '/' ? 'current' : ''}`}>
            <Link href="/">Home</Link>
          </li>
          <li className={`nav-item ${router.pathname === '/market' ? 'current' : ''}`}>
            <Link href="/market">Market</Link>
          </li>
          <li className="nav-item">
            <Link href="#">Arena</Link>
          </li>
          <li className="nav-item">
            <Link href="#">News</Link>
          </li>
          <li className="nav-item">
            <Link href="#" onClick={() => toggleDropdown(0)}>
              <div className="  " style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                More
                <svg className="nav-arrow" style={{ marginLeft: '5px', alignItems: 'center' }} xmlns="http://www.w3.org/2000/svg" width="6.626" height="4.142" viewBox="0 0 6.626 4.142">
                  <path id="arrow-down" d="M547.084,44.916l2.484,2.485,2.485-2.485.828.828-3.313,3.314-3.313-3.314Z" transform="translate(-546.255 -44.916)" fillRule="evenodd" />
                </svg>
              </div>
            </Link>

            {/* {dropdownShow && ( */}
            <div className={`dropdown ${dropdownShow[0] ? "dropdownShow" : ""}`}>
              <div className="dropdown-link">
                <Link href="#">Battle</Link>
              </div>
              <div className="dropdown-link">
                <Link href="#">Token</Link>
              </div>
              <div className="dropdown-link">
                <Link href="#">Getting Started</Link>
              </div>
              <div className="dropdown-link">
                <Link href="#">Whitepaper</Link>
              </div>
              <div className="dropdown-link">
                <Link href="#">Cooperation</Link>
              </div>
            </div>
            {/* )} */}


          </li>

          <li className="nav-item">
            <Dropdown ref={moreRef} list={moreList}>
              <Link href="#">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  More
                  <svg className="nav-arrow" style={{ marginLeft: '5px', alignItems: 'center' }} xmlns="http://www.w3.org/2000/svg" width="6.626" height="4.142" viewBox="0 0 6.626 4.142">
                    <path id="arrow-down" d="M547.084,44.916l2.484,2.485,2.485-2.485.828.828-3.313,3.314-3.313-3.314Z" transform="translate(-546.255 -44.916)" fillRule="evenodd" />
                  </svg>
                </div>
              </Link>
            </Dropdown>
          </li>
        </ul>

        <div className="top-end">
          <div className="coin-warp">
            <div className="flex-center src">
              <img
                src={`${process.env.BASE_PATH}/images/nav/SRC.png`}
                alt="src icon"
              />
              0.00
            </div>

            <div className="flex-center jem">
              <img
                src={`${process.env.BASE_PATH}/images/nav/GEM.png`}
                alt="gem icon"
              />
              0.00
            </div>
          </div>

          <div className="nav-item  locales" onClick={() => toggleDropdown(1)}>
            {/* English flex-center*/}
            <svg
              xmlns="http://www.w3.org/2000/svg" width="32.689" height="22" viewBox="0 0 32.689 22">
              <g id="Group_2797" data-name="Group 2797" transform="translate(-1741 -50)">
                <path id="Path_4433" data-name="Path 4433" d="M-812.569,414.46a11,11,0,0,1,11.038-10.991,11.014,11.014,0,0,1,10.958,10.68,11.016,11.016,0,0,1-11.1,11.319A11,11,0,0,1-812.569,414.46Zm13.419-2.575a.2.2,0,0,0-.054-.019q-2.367,0-4.734,0c-.116,0-.149.048-.155.154-.012.217-.031.432-.053.648a23.832,23.832,0,0,0-.021,3.749c.013.214.041.427.062.637h4.955Zm1.613,5.184h.236c.593,0,1.186,0,1.78,0l2.691-.007c.093,0,.192.019.209-.122a22.852,22.852,0,0,0,.278-2.491,21.47,21.47,0,0,0-.258-2.34c-.023-.224-.12-.256-.318-.255-1.005.009-2.011,0-3.017,0h-1.643A25.715,25.715,0,0,1-797.537,417.068Zm-8.067-5.2h-.243q-1.388,0-2.779,0c-.571,0-1.143,0-1.714.013a.226.226,0,0,0-.174.124,10.646,10.646,0,0,0-.3,2.64c.049.739.192,1.472.277,2.209.021.194.1.229.272.228,1.375-.006,2.75,0,4.124,0h.574A25.8,25.8,0,0,1-805.6,411.867Zm6.17,6.756h-4.456c.022.139.039.258.061.376a18.416,18.416,0,0,0,.867,3.3,3.676,3.676,0,0,0,.7,1.24.655.655,0,0,0,1.07.028,4.72,4.72,0,0,0,.655-.959,9.983,9.983,0,0,0,.829-2.408C-799.6,419.69-799.53,419.169-799.435,418.623Zm-.056-8.312c0-.053,0-.082,0-.11a11.2,11.2,0,0,0-1.132-4.034,3.551,3.551,0,0,0-.625-.848.558.558,0,0,0-.918.043,3.3,3.3,0,0,0-.44.69,13.892,13.892,0,0,0-.918,2.809c-.116.474-.213.952-.323,1.451Zm1.746,8.309a22.283,22.283,0,0,1-1.418,4.881c.1-.028.155-.041.208-.057A9.994,9.994,0,0,0-795.5,421.5a7.363,7.363,0,0,0,1.818-2.107c.127-.236.218-.492.34-.77ZM-804,405.479c-.025-.022-.032-.032-.036-.031-.049.013-.1.026-.146.041a10,10,0,0,0-3.466,1.956,7.332,7.332,0,0,0-1.815,2.107c-.127.235-.218.49-.337.763h4.4A22.041,22.041,0,0,1-804,405.479Zm.016,18.022a19.934,19.934,0,0,1-1.34-4.866h-4.441a3.927,3.927,0,0,0,.715,1.4,9.98,9.98,0,0,0,2.951,2.553A8.388,8.388,0,0,0-803.984,423.5Zm4.821-18.077a20.008,20.008,0,0,1,1.342,4.88h4.444c-.038-.118-.061-.214-.1-.3a5.852,5.852,0,0,0-1.508-2.1A10.326,10.326,0,0,0-799.162,405.424Z" transform="translate(2553.569 -353.468)" fill="#c5cbfe" />
                <path id="arrow-down" d="M547.084,44.916l2.484,2.485,2.485-2.485.828.828-3.313,3.314-3.313-3.314Z" transform="translate(1220.808 14.084)" fill="#c5cbfe" fillRule="evenodd" />
              </g>
            </svg>

            <div className={`dropdown ${dropdownShow[1] ? "dropdownShow" : ""}`}>
              <div className="dropdown-link">
                English
              </div>
              <div className="dropdown-link">
                中文
              </div>
            </div>

          </div>

          <div className="nav-item  locales">
            {/* English flex-center*/}
            <Dropdown ref={localesRef} list={[{ text: 'English', href: '/'  }, { text: '中文', href: '/' }]}>
              <svg
                xmlns="http://www.w3.org/2000/svg" width="32.689" height="22" viewBox="0 0 32.689 22">
                <g id="Group_2797" data-name="Group 2797" transform="translate(-1741 -50)">
                  <path id="Path_4433" data-name="Path 4433" d="M-812.569,414.46a11,11,0,0,1,11.038-10.991,11.014,11.014,0,0,1,10.958,10.68,11.016,11.016,0,0,1-11.1,11.319A11,11,0,0,1-812.569,414.46Zm13.419-2.575a.2.2,0,0,0-.054-.019q-2.367,0-4.734,0c-.116,0-.149.048-.155.154-.012.217-.031.432-.053.648a23.832,23.832,0,0,0-.021,3.749c.013.214.041.427.062.637h4.955Zm1.613,5.184h.236c.593,0,1.186,0,1.78,0l2.691-.007c.093,0,.192.019.209-.122a22.852,22.852,0,0,0,.278-2.491,21.47,21.47,0,0,0-.258-2.34c-.023-.224-.12-.256-.318-.255-1.005.009-2.011,0-3.017,0h-1.643A25.715,25.715,0,0,1-797.537,417.068Zm-8.067-5.2h-.243q-1.388,0-2.779,0c-.571,0-1.143,0-1.714.013a.226.226,0,0,0-.174.124,10.646,10.646,0,0,0-.3,2.64c.049.739.192,1.472.277,2.209.021.194.1.229.272.228,1.375-.006,2.75,0,4.124,0h.574A25.8,25.8,0,0,1-805.6,411.867Zm6.17,6.756h-4.456c.022.139.039.258.061.376a18.416,18.416,0,0,0,.867,3.3,3.676,3.676,0,0,0,.7,1.24.655.655,0,0,0,1.07.028,4.72,4.72,0,0,0,.655-.959,9.983,9.983,0,0,0,.829-2.408C-799.6,419.69-799.53,419.169-799.435,418.623Zm-.056-8.312c0-.053,0-.082,0-.11a11.2,11.2,0,0,0-1.132-4.034,3.551,3.551,0,0,0-.625-.848.558.558,0,0,0-.918.043,3.3,3.3,0,0,0-.44.69,13.892,13.892,0,0,0-.918,2.809c-.116.474-.213.952-.323,1.451Zm1.746,8.309a22.283,22.283,0,0,1-1.418,4.881c.1-.028.155-.041.208-.057A9.994,9.994,0,0,0-795.5,421.5a7.363,7.363,0,0,0,1.818-2.107c.127-.236.218-.492.34-.77ZM-804,405.479c-.025-.022-.032-.032-.036-.031-.049.013-.1.026-.146.041a10,10,0,0,0-3.466,1.956,7.332,7.332,0,0,0-1.815,2.107c-.127.235-.218.49-.337.763h4.4A22.041,22.041,0,0,1-804,405.479Zm.016,18.022a19.934,19.934,0,0,1-1.34-4.866h-4.441a3.927,3.927,0,0,0,.715,1.4,9.98,9.98,0,0,0,2.951,2.553A8.388,8.388,0,0,0-803.984,423.5Zm4.821-18.077a20.008,20.008,0,0,1,1.342,4.88h4.444c-.038-.118-.061-.214-.1-.3a5.852,5.852,0,0,0-1.508-2.1A10.326,10.326,0,0,0-799.162,405.424Z" transform="translate(2553.569 -353.468)" fill="#c5cbfe" />
                  <path id="arrow-down" d="M547.084,44.916l2.484,2.485,2.485-2.485.828.828-3.313,3.314-3.313-3.314Z" transform="translate(1220.808 14.084)" fill="#c5cbfe" fillRule="evenodd" />
                </g>
              </svg>
            </Dropdown>
          </div>

          <div className="sign flex-center">
            <button className="index-button cursor-pointer">Sign in</button>
          </div>
        </div>
      </nav>
    </header>
  );
}
