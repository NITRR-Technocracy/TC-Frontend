
import { useEffect } from "react";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import sqrimg from '../assets/images/1x1.jpg'
import a1 from "../assets/images/aavartan/a1.webp"
import a2 from "../assets/images/aavartan/a2.webp"
import a3 from "../assets/images/aavartan/a3.webp"
import a4 from "../assets/images/aavartan/a4.webp"
import a5 from "../assets/images/aavartan/a5.webp"
import a6 from "../assets/images/aavartan/a6.webp"
import a7 from "../assets/images/aavartan/a7.webp"
import a8 from "../assets/images/aavartan/a8.webp"
import Title from "../components/Title";
import { Link } from "react-router-dom";

const EventsGallery = () => {
  // useEffect(() => {
  //   AOS.init();
  // }, [])
  useEffect(() => {
    const collection = document.querySelector(".fn_cs_collection");
    var items = collection.querySelectorAll(".item");
    var itemsLength = items.length;
    setInterval(function () {
      var numberOne = Math.floor(Math.random() * itemsLength);
      var numberTwo = Math.floor(Math.random() * itemsLength);

      while (numberTwo === numberOne) {
        numberTwo = Math.floor(Math.random() * itemsLength);
      }
      var firstDiv = items[numberOne];
      var secondDiv = items[numberTwo];
      var firstImage = firstDiv.querySelector("input").value;
      var secondImage = secondDiv.querySelector("input").value;
      firstDiv.classList.add("ready");
      secondDiv.classList.add("ready");
      // console.log(firstDiv.querySelector("input").value == firstDiv);
      setTimeout(function () {
        // console.log(secondDiv.querySelector("input").value == firstDiv);
        // firstDiv.querySelector("input").value == secondImage;
        // firstDiv.querySelector(".abs_img").style.backgroundImage =
        //   "url(" + secondImage + ")";
        // // secondDiv.querySelector("input").val(firstImage);
        // secondDiv.querySelector("input").value == firstDiv;
        // console.log(secondDiv.querySelector("input").value);
        // secondDiv.querySelector(".abs_img").style.backgroundImage =
        //   "url(" + firstImage + ")";

        firstDiv.classList.remove("ready");
        secondDiv.classList.remove("ready");
      }, 500);
    }, 2000);
  }, []);


  const color="EVENTS";
  const noncolor="GALLERY"

  return (
    <section id="collection">
      <div className="container collectionContainer">
      <Title color={color} noncolor={noncolor}/>
      <div  className="fn_cs_desc">
          <p>
          The festivity of Aavartan starts with some Pre Aavartan events such as sky gazing and scribble followed by a whole series of breathtaking events such as treasure hunt, circuitrix, robotrek, Blind coding, Open Mic, Hydrolift and many more engaging the whole crowd and making their each and every bit getting involved in this festivism.
          </p>
        </div>
        <div className="fn_cs_collection">
          <div className="collection_top">
            <div className="item">
              <div  className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    style={{
                      backgroundImage: `url(${a2})`,
                      backgroundSize: 'cover', // Adjust this as needed
                      backgroundPosition: 'center', // Adjust this as needed
                    }}
                  />
                  <img src={sqrimg} alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="img/collection/1.webp" />
            </div>
            <div className="item">
              <div  className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    style={{
                      backgroundImage: `url(${a1})`,
                      backgroundSize: 'cover', // Adjust this as needed
                      backgroundPosition: 'center', // Adjust this as needed
                    }}
                  />
                  <img src={sqrimg} alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="img/collection/2.webp" />
            </div>
            <div className="item">
              <div  className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    style={{
                      backgroundImage: `url(${a3})`,
                      backgroundSize: 'cover', // Adjust this as needed
                      backgroundPosition: 'center', // Adjust this as needed
                    }}
                  />
                  <img src={sqrimg} alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="img/collection/3.webp" />
            </div>
            <div className="item">
              <div  className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    style={{
                      backgroundImage: `url(${a8})`,
                      backgroundSize: 'cover', // Adjust this as needed
                      backgroundPosition: 'center', // Adjust this as needed
                    }}
                  />
                  <img src={sqrimg} alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="img/collection/4.webp" />
            </div>
          </div>
          <div className="collection_bottom">
            <div className="item">
              <div  className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    style={{
                      backgroundImage: `url(${a6})`,
                      backgroundSize: 'cover', // Adjust this as needed
                      backgroundPosition: 'center', // Adjust this as needed
                    }}
                  />
                  <img src={sqrimg} alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="img/collection/5.webp" />
            </div>
            <div className="item">
              <div  className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    style={{
                      backgroundImage: `url(${a7})`,
                      backgroundSize: 'cover', // Adjust this as needed
                      backgroundPosition: 'center', // Adjust this as needed
                    }}
                  />
                  <img src={sqrimg} alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="img/collection/6.webp" />
            </div>
            <div className="item">
              <div  className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    style={{
                      backgroundImage: `url(${a4})`,
                      backgroundSize: 'cover', // Adjust this as needed
                      backgroundPosition: 'center', // Adjust this as needed
                    }}
                  />
                  <img src={sqrimg} alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="img/collection/7.webp" />
            </div>
            <div className="item">
              <div  className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    style={{
                      backgroundImage: `url(${a5})`,
                      backgroundSize: 'cover', // Adjust this as needed
                      backgroundPosition: 'center', // Adjust this as needed
                    }}
                  />
                  <img src={sqrimg} alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="img/collection/8.webp" />
            </div>
          </div>
        </div>
        <div className="fn_cs_desc">
          <Link style={{textDecoration:"none", color:"white"}} to="/aavartan/gallery">
        <a
            href="/"
            className="metaportal_fn_button"
            target="_blank"
            rel="noreferrer"
            style={{margin:"2rem 0"}}
          > <span>
            Show More
            </span>
          </a>
            </Link>
        </div>
      </div>
    </section>
  );
};
export default EventsGallery;
