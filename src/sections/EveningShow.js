import { useEffect } from "react";
import sqrimg from "../assets/images/1x1-min.webp";
import Title from "../components/Title";
import left from "../assets/svgs/leftarrow.svg"
import right from "../assets/svgs/rightarrow.svg"
import prop19 from "../assets/Aavartan New/FRIENDS_202304_1821x1355_KeyArt02_Characters-2-1536x1143.png"

// import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
// import AOS from "aos";
// import "aos/dist/aos.css";
import es_1 from "../assets/images/eveningshows/es_1.webp";
import es_2 from "../assets/images/eveningshows/es_2.webp";
import es_3 from "../assets/images/eveningshows/es_3.webp";
import es_4 from "../assets/images/eveningshows/es_4.webp";
import es_5 from "../assets/images/eveningshows/es_5.webp";
import es_6 from "../assets/images/eveningshows/es_6.webp";
import es_7 from "../assets/images/eveningshows/es_7.webp";
import es_8 from "../assets/images/eveningshows/es_8.webp";
import es_9 from "../assets/images/eveningshows/es_9.webp";
import es_10 from "../assets/images/eveningshows/es_10.webp";
import prop3 from "../assets/prop4.webp"
import { keyframes, styled } from "styled-components";

const rotate360 = keyframes`
0%,
100% {
  right: 5%;
}

50% {
  right: 10%;
} 
`;

const RotatingImage = styled.img`
  animation: ${rotate360} 5s linear infinite;
`;

const EveningShow = () => {
  // useEffect(() => {
  //   AOS.init();
  // }, []);
  // Hero slider
  useEffect(() => {
    const fn_cs_slider = document.querySelectorAll(".fn_cs_slider");
    fn_cs_slider.forEach((element) => {
      let sliderTop = element.getElementsByClassName("slider_top")[0],
        sliderBottom = element.getElementsByClassName("slider_content"),
        activeIndex = 2,
        speed = 6000;

      let myInterval = setInterval(function () {
        activeIndex++;
        activeIndex = sliderDo(sliderTop, sliderBottom, activeIndex);
      }, speed);
      const prev = document.querySelector(".slider_nav .prev"),
        next = document.querySelector(".slider_nav .next"),
        li = element.getElementsByTagName("li");
      prev.addEventListener("click", function (e) {
        e.preventDefault();
        clearInterval(myInterval);
        activeIndex--;
        activeIndex = sliderDo(sliderTop, sliderBottom, activeIndex);
        myInterval = setInterval(function () {
          activeIndex++;
          activeIndex = sliderDo(sliderTop, sliderBottom, activeIndex);
        }, speed);
        return false;
      });
      next.addEventListener("click", (e) => {
        e.preventDefault();
        clearInterval(myInterval);
        activeIndex++;
        activeIndex = sliderDo(sliderTop, sliderBottom, activeIndex);
        myInterval = setInterval(function () {
          activeIndex--;
          activeIndex = sliderDo(sliderTop, sliderBottom, activeIndex);
        }, speed);
        return false;
      });
      for (let i = 0; i < li.length; i++) {
        const liElement = li[i];
        const getClass = liElement.getAttribute("class");
        if (getClass === "next") {
          activeIndex++;
        } else if (getClass === "prev") {
          activeIndex--;
        } else {
          return false;
        }
        clearInterval(myInterval);
        activeIndex = sliderDo(sliderTop, sliderBottom, activeIndex);
        myInterval = setInterval(function () {
          activeIndex++;
          activeIndex = sliderDo(sliderTop, sliderBottom, activeIndex);
        }, speed);
        return false;
      }
    });
  }, []);

  const sliderDo = (sliderTop, sliderBottom, activeIndex) => {
    var topLength = sliderTop.getElementsByTagName("li").length;
    if (activeIndex > topLength) {
      activeIndex -= topLength;
    }
    var indexPrev = activeIndex - 1;
    var indexPrev2 = activeIndex - 2;
    var indexNext = activeIndex + 1;
    var indexNext2 = activeIndex + 2;
    if (indexPrev > topLength) {
      indexPrev -= topLength;
    }
    if (indexPrev2 > topLength) {
      indexPrev2 -= topLength;
    }
    if (indexNext > topLength) {
      indexNext -= topLength;
    }
    if (indexNext2 > topLength) {
      indexNext2 -= topLength;
    }
    if (indexPrev < 1) {
      indexPrev += topLength;
    }
    if (indexPrev2 < 1) {
      indexPrev2 += topLength;
    }
    if (activeIndex < 1) {
      activeIndex += topLength;
    }
    if (indexNext < 1) {
      indexNext += topLength;
    }
    if (indexNext2 < 1) {
      indexNext2 += topLength;
    }
    let li = sliderTop.getElementsByTagName("li");
    for (let i = 0; i < li.length; i++) {
      const element = li[i];
      element.classList.remove("prev", "prev2", "active", "next", "next2");
      // element.setAttribute(`data-index${indexNext}`);
    }
    sliderTop
      .querySelector('li[data-index="' + indexPrev2 + '"]')
      .classList.add("prev2");
    sliderTop
      .querySelector('li[data-index="' + indexPrev + '"]')
      .classList.add("prev");
    sliderTop
      .querySelector('li[data-index="' + activeIndex + '"]')
      .classList.add("active");
    sliderTop
      .querySelector('li[data-index="' + indexNext + '"]')
      .classList.add("next");
    sliderTop
      .querySelector('li[data-index="' + indexNext2 + '"]')
      .classList.add("next2");
    return activeIndex;
  };

  const color = "EVENING";
  const noncolor = "SHOWS";

  return (
    <section id="home">
      <div className="container eveningContainer">
        <Title color={color} noncolor={noncolor} />
        {/* <AnimatedDiv>
                    <img style={{position:"absolute", top:"220vh", right:"5%", animation: "${rocketAnimation} 5s infinite"}} height={200} src={prop3} alt="Rocket thumb" />
                    </AnimatedDiv> */}
        <RotatingImage className="rimageaav"  src={prop19} alt="Rocket thumb" />
        <div data-aos="fade-down" className="fn_cs_desc">
          <p style={{margin:"0"}}>
            The evening shows at Aavartan are a spectacle to behold, featuring
            captivating dance performances by "Nrityam," the dance club of NIT
            Raipur, grooving music performances by "Raaga," the music club of
            NIT Raipur, and an electrifying DJ night/EDM night.
          </p>
        </div>
        {/* Slider */}
        <div  className="fn_cs_slider" data-responsive="on">
          <div className="slider_top">
            <img src={sqrimg} alt="" />
            <ul>
              <li className="prev" data-index={1}>
                <div className="item">
                  <img src={sqrimg} alt="" />
                  <div className="item_in">
                    <div
                      className="img"
                      style={{
                        backgroundImage: `url(${es_1})`,
                        backgroundSize: "cover", // Adjust this as needed
                        backgroundPosition: "center", // Adjust this as needed
                      }}
                    />
                  </div>
                </div>
              </li>
              <li className="active" data-index={2}>
                <div className="item">
                  <img src={sqrimg} alt="" />
                  <div className="item_in">
                    <div
                      className="img"
                      style={{
                        backgroundImage: `url(${es_2})`,
                        backgroundSize: "cover", // Adjust this as needed
                        backgroundPosition: "center", // Adjust this as needed
                      }}
                    />
                  </div>
                </div>
              </li>
              <li className="next" data-index={3}>
                <div className="item">
                  <img src={sqrimg} alt="" />
                  <div className="item_in">
                    <div
                      className="img"
                      style={{
                        backgroundImage: `url(${es_3})`,
                        backgroundSize: "cover", // Adjust this as needed
                        backgroundPosition: "center", // Adjust this as needed
                      }}
                    />
                  </div>
                </div>
              </li>
              <li className="next2" data-index={4}>
                <div className="item">
                  <img src={sqrimg} alt="" />
                  <div className="item_in">
                    <div
                      className="img"
                      style={{
                        backgroundImage: `url(${es_4})`,
                        backgroundSize: "cover", // Adjust this as needed
                        backgroundPosition: "center", // Adjust this as needed
                      }}
                    />
                  </div>
                </div>
              </li>
              <li data-index={5}>
                <div className="item">
                  <img src={sqrimg} alt="" />
                  <div className="item_in">
                    <div
                      className="img"
                      style={{
                        backgroundImage: `url(${es_5})`,
                        backgroundSize: "cover", // Adjust this as needed
                        backgroundPosition: "center", // Adjust this as needed
                      }}
                    />
                  </div>
                </div>
              </li>
              <li data-index={6}>
                <div className="item">
                  <img src={sqrimg} alt="" />
                  <div className="item_in">
                    <div
                      className="img"
                      style={{
                        backgroundImage: `url(${es_6})`,
                        backgroundSize: "cover", // Adjust this as needed
                        backgroundPosition: "center", // Adjust this as needed
                      }}
                    />
                  </div>
                </div>
              </li>
              <li data-index={7}>
                <div className="item">
                  <img src={sqrimg} alt="" />
                  <div className="item_in">
                    <div
                      className="img"
                      style={{
                        backgroundImage: `url(${es_7})`,
                        backgroundSize: "cover", // Adjust this as needed
                        backgroundPosition: "center", // Adjust this as needed
                      }}
                    />
                  </div>
                </div>
              </li>
              <li data-index={8}>
                <div className="item">
                  <img src={sqrimg} alt="" />
                  <div className="item_in">
                    <div
                      className="img"
                      style={{
                        backgroundImage: `url(${es_8})`,
                        backgroundSize: "cover", // Adjust this as needed
                        backgroundPosition: "center", // Adjust this as needed
                      }}
                    />
                  </div>
                </div>
              </li>
              <li data-index={9}>
                <div className="item">
                  <img src={sqrimg} alt="" />
                  <div className="item_in">
                    <div
                      className="img"
                      style={{
                        backgroundImage: `url(${es_9})`,
                        backgroundSize: "cover", // Adjust this as needed
                        backgroundPosition: "center", // Adjust this as needed
                      }}
                    />
                  </div>
                </div>
              </li>
              <li className="prev2" data-index={10}>
                <div className="item">
                  <img src={sqrimg} alt="" />
                  <div className="item_in">
                    <div
                      className="img"
                      style={{
                        backgroundImage: `url(${es_10})`,
                        backgroundSize: "cover", // Adjust this as needed
                        backgroundPosition: "center", // Adjust this as needed
                      }}
                    />
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="slider_nav">
            <a href="#" className="prev">
              <span className="circle" />
              <span className="icon">
                {/* <AiOutlineArrowLeft color="white" /> */}
                <img src={left} alt="" />
              </span>
              <span className="circle" />
            </a>
            <a href="#" className="next">
              <span className="circle" />
              <span className="icon">
                <img src={right} alt="" />
                {/* <AiOutlineArrowRight color="white" /> */}
              </span>
              <span className="circle" />
            </a>
          </div>
        </div>
        {/* !Slider */}
        {/* Description */}

        {/* !Description */}
      </div>
    </section>
  );
};
export default EveningShow;

