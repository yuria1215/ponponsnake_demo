import { useRef  ,useEffect, useState} from "react";

export default function Arena() {
  const carouselRefs = useRef([]);

  const $selector = (selector, targetEl = document) =>
    targetEl.querySelector.call(targetEl, selector);

  const carouselHandler = (direction) => {
    const carousels = carouselRefs.current;
    const links = carousels.map((el) => {
      const img = $selector("img", el);
      return img.src;
    });

    carousels.map((el, index) => {
      const img = $selector("img", el);
      const nextIndex = direction === "add" ? index + 1 : index - 1;
      const ifNullSrc = direction === "add" ? links[0] : links[links.length - 1];

      if(links[nextIndex]) img.src = links[nextIndex]
      else img.src = ifNullSrc
    });
  };
  const arenaEventsArea = useRef()
  //幽靈  
  let naughtyElfPosition ;
  const [naughtyElfAnimate ,setNaughtyElfAnimate] =useState("")
  //雞 
  let chickenEggPosition ;
  const [chickenEggAnimate ,setchickenEggAnimate] =useState("")


  useEffect(()=>{
    naughtyElfPosition = arenaEventsArea.current.getBoundingClientRect().top + 100
    chickenEggPosition = arenaEventsArea.current.getBoundingClientRect().top +arenaEventsArea.current.getBoundingClientRect().height -200
    window.addEventListener("scroll",()=>{
      console.log(window.scrollY+window.innerHeight,naughtyElfPosition ,chickenEggPosition)
      if(window.scrollY+window.innerHeight >naughtyElfPosition){        
        setNaughtyElfAnimate("naughty-elf-animate")
      }

      if(window.scrollY+window.innerHeight >chickenEggPosition){        
        setchickenEggAnimate("chicken-egg-animate")
      }
    })
  },[])
  
  return (
    <section className="arena-events-area" ref={arenaEventsArea}>
      <div className="arena-background-line"></div>
      <img id="chicken-egg" className={`${chickenEggAnimate}`} src={`${process.env.BASE_PATH}/images/arena/chicken-egg.png`} alt="" />
      <img id="naughty-elf" className={`${naughtyElfAnimate}`} src={`${process.env.BASE_PATH}/images/arena/naughty-elf.png`} alt=""  />

      <div className="main-content" id="main-content-arena">
        <div className="index-title-block">
          <div className="index-main-title">Arena Events</div>
          <div className="index-subtitle">
            Join PonPonSnake for thrilling competitions and activities, with
            exciting battles and valuable rewards. Let's fight together!
          </div>
          <a href="" className="index-button">
            Arena
          </a>
        </div>

        <div className="arena-carousel">
          <a href="" ref={(el) => (carouselRefs.current[0] = el)}>
            <div className="arena-card" id="arena-card-christmas">
              <div className="arena-card-background"></div>
              <div className="arena-card-poster">
                <img
                  id="christmas"
                  width="242"
                  src={`${process.env.BASE_PATH}/images/arena/BG-02.png`}
                  alt=""
                />
              </div>

              <div className="arena-card-title">CHRISTMAS LEAGUE</div>
            </div>
          </a>

          <a href="" ref={(el) => (carouselRefs.current[1] = el)}>
            <div className="arena-card-center" id="arena-card-acl">
              <div className="arena-card-poster-center">
                <img
                  id="acl"
                  width="242"
                  src={`${process.env.BASE_PATH}/images/arena/BG-01.png`}
                  alt=""
                />
              </div>
              <div className="arena-card-title-center">
                ASIA CHAMPIONS <br /> LEAGUE
              </div>
              <div className="arena-card-info-center">
                Secret Reward! All top 8 Gets the Price!
              </div>
            </div>
          </a>

          <a href="" ref={(el) => (carouselRefs.current[2] = el)}>
            <div className="arena-card" id="arena-card-newyear">
              <div className="arena-card-background"></div>
              <div className="arena-card-poster">
                <img
                  id="newyear"
                  width="242"
                  src={`${process.env.BASE_PATH}/images/arena/BG-03.png`}
                  alt=""
                />
              </div>

              <div className="arena-card-title">
                CHINESE NEWYEAR <br /> LEAGUE
              </div>
            </div>
          </a>

          <div className="arrow-block">
            <div
              className="arrow"
              id="arrow-left"
              onClick={() => carouselHandler("minus")}
            >
              <svg
                className="arrow-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 7.925 12.677"
              >
                <path
                  id="arrow-down"
                  d="M1.586,0,6.339,4.754,11.093,0l1.584,1.584L6.339,7.925,0,1.584Z"
                  transform="translate(7.925) rotate(90)"
                  fill="#c5cbfe"
                  fillRule="evenodd"
                />
              </svg>
            </div>

            <div
              className="arrow"
              id="arrow-right"
              onClick={() => carouselHandler("add")}
            >
              <svg
                className="arrow-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 7.925 12.677"
              >
                <path
                  id="arrow-down"
                  d="M1.586,7.925,6.339,3.17l4.754,4.754,1.584-1.584L6.339,0,0,6.341Z"
                  transform="translate(7.925) rotate(90)"
                  fill="#c5cbfe"
                  fillRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
