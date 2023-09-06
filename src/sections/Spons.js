import React, { useEffect } from "react";
import styles from "./Spons.module.css";
import Card from "../components/SponsCardSec";
import AOS from "aos";
import "aos/dist/aos.css";
import Spons_data from "../assets/spons_data";
import PageBanner from "../layout/PageBanner";
import Title from "../components/Title";
import tsp from "../assets/spons_images/sp15.webp"

const Spons = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="metaportal_fn_collectionpage" style={{paddingTop:"0"}}>
      <div data-aos="fade-down" className={styles.page}>
        <div className={styles.top}>
          <h1>TITLE SPONSOR</h1>
          <img src={tsp} alt="" />
        </div>
      </div>
      <div className="container">
        <div className="metaportal_fn_collection">
          {/* Filters */}

          {/* !Filters */}
          <div className="metaportal_fn_clist">
            {/* Result Box */}

            {/* !Result Box */}
            {/* Result List */}
            <div className="metaportal_fn_result_list">
              <div className="metaportal_fn_drops">
                <Title color="SPONSORS" noncolor="" />
                <ul className="grid">
                  {Spons_data.map((data) => {
                    return (
                      <li data-aos="fade-down">
                        <div className="nft__item">
                          <div className="img_holder">
                            <img width="100%" src={data.url} alt="" />
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            {/* !Result List */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spons;
