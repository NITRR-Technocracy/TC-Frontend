// import { useEffect } from "react";
import sqrimg from "../assets/images/1x1-min.webp";
import Title from "../components/Title";
import v1 from "../assets/images/vigyaan/v1.webp";
import v2 from "../assets/images/vigyaan/v2.webp";
import v3 from "../assets/images/vigyaan/v3.webp";
import v4 from "../assets/images/vigyaan/v4.webp";
import v5 from "../assets/images/vigyaan/v5.webp";
import v6 from "../assets/images/vigyaan/v6.webp";
import v7 from "../assets/images/vigyaan/v7.webp";
import v8 from "../assets/images/vigyaan/v8.webp";
import { Link } from "react-router-dom";

const EventsGallery = () => {
  // useEffect(() => {
  // const collection = document.querySelector(".fn_cs_collection");
  // var items = collection.querySelectorAll(".item");
  // var itemsLength = items.length;
  // setInterval(function () {
  //   var numberOne = Math.floor(Math.random() * itemsLength);
  //   var numberTwo = Math.floor(Math.random() * itemsLength);

  //   while (numberTwo === numberOne) {
  //     numberTwo = Math.floor(Math.random() * itemsLength);
  //   }
  //   var firstDiv = items[numberOne];
  //   var secondDiv = items[numberTwo];
  //   firstDiv.classList.add("ready");
  //   secondDiv.classList.add("ready");

  //   setTimeout(function () {

  //     firstDiv.classList.remove("ready");
  //     secondDiv.classList.remove("ready");
  //   }, 500);
  // }, 2000);
  // }, []);

  const color = "VIGYAAN";
  const noncolor = "GALLERY";

  return (
    <section id="collection">
      <div className="container collectionContainer">
        <Title color={color} noncolor={noncolor} />
        <div className="fn_cs_desc">
          <p>
            Vigyaan, the science exhibition organized during the tech fest,
            showcases groundbreaking innovations, cutting-edge technologies, and
            exciting projects, providing a platform for students to delve deeper
            into the world of science and explore limitless possibilities.
          </p>
        </div>
        <div className="fn_cs_collection">
          <div className="collection_top">
            <div className="item">
              <div className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    style={{
                      backgroundImage: `url(${v1})`,
                      backgroundSize: "cover", // Adjust this as needed
                      backgroundPosition: "center", // Adjust this as needed
                    }}
                  />
                  <img src={sqrimg} alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="img/collection/1.webp" />
            </div>
            <div className="item">
              <div className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    style={{
                      backgroundImage: `url(${v3})`,
                      backgroundSize: "cover", // Adjust this as needed
                      backgroundPosition: "center", // Adjust this as needed
                    }}
                  />
                  <img src={sqrimg} alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="img/collection/2.webp" />
            </div>
            <div className="item">
              <div className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    style={{
                      backgroundImage: `url(${v5})`,
                      backgroundSize: "cover", // Adjust this as needed
                      backgroundPosition: "center", // Adjust this as needed
                    }}
                  />
                  <img src={sqrimg} alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="img/collection/3.webp" />
            </div>
            <div className="item">
              <div className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    style={{
                      backgroundImage: `url(${v2})`,
                      backgroundSize: "cover", // Adjust this as needed
                      backgroundPosition: "center", // Adjust this as needed
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
              <div className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    style={{
                      backgroundImage: `url(${v7})`,
                      backgroundSize: "cover", // Adjust this as needed
                      backgroundPosition: "center", // Adjust this as needed
                    }}
                  />
                  <img src={sqrimg} alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="img/collection/5.webp" />
            </div>
            <div className="item">
              <div className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    style={{
                      backgroundImage: `url(${v6})`,
                      backgroundSize: "cover", // Adjust this as needed
                      backgroundPosition: "center", // Adjust this as needed
                    }}
                  />
                  <img src={sqrimg} alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="img/collection/6.webp" />
            </div>
            <div className="item">
              <div className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    style={{
                      backgroundImage: `url(${v8})`,
                      backgroundSize: "cover", // Adjust this as needed
                      backgroundPosition: "center", // Adjust this as needed
                    }}
                  />
                  <img src={sqrimg} alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="img/collection/7.webp" />
            </div>
            <div className="item">
              <div className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    style={{
                      backgroundImage: `url(${v4})`,
                      backgroundSize: "cover", // Adjust this as needed
                      backgroundPosition: "center", // Adjust this as needed
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
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/vigyaan/gallery"
          >
            <div
              href="/"
              className="goodbtn"
              target="_blank"
              rel="noreferrer"
              style={{ margin: "2rem 0", position: "relative", zIndex: "1" }}
            >
              <span>Show More</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default EventsGallery;
