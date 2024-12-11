import React from "react";
import styles from "./Team.module.css";
import HeadCard from "../components/HeadCard";
import { coordinatorsList } from "../assets/heads_data";
import { coresList } from "../assets/cores_data";
import OCCard from "../components/OCCard";
// import Title from "../components/Title";
import Domain from "./Domain";
import teampic from "../assets/images/teampic.webp"
import PTitle from "../components/PokemonTitle";
const Team = () => {
  return (
    <div className={styles.container}>
      <PTitle  color={"TEAM"} noncolor={" TECHNOCRACY"} />
      <div data-aos="fade-up" className="container">
        <div className="fn_cs_news container">
          <div className="news_part">
            <div className="left_items" style={{margin:"0"}}>
              <div  className="blog__item">
                      <img src={teampic} width="100%" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <PTitle color={"OVERALL"} noncolor={" COORDINATORS"} />
      <div className={styles.OverallHeadSection}>
        {coordinatorsList.map((heads) => {
          if (heads.id <= 4) {
            return (
              <OCCard
                key={heads.id}
                img={heads.imgUrl}
                name={heads.name}
                domain={heads.domain}
                linkedinId={heads.linkedinUrl}
                InstaId={heads.instaUrl}
              />
            );
          }
          return null;
        })}
      </div>
      <PTitle color={"HEAD"} noncolor={" COORDINATORS"} />
      <div className={styles.HeadSection}>
        {coordinatorsList.map((heads) => {
          if (heads.id > 4) {
            return (
              <HeadCard
                key={heads.id}
                img={heads.imgUrl}
                name={heads.name}
                domain={heads.domain}
                linkedinId={heads.linkedinUrl}
                InstaId={heads.instaUrl}
              />
            );
          }
          return null;
        })}
      </div>
      <PTitle color={"CORE"} noncolor={" COORDINATORS"} />
      <div className={styles.CoreSection}>
        {coresList.map((heads) => {
          return (
            <div
              key={heads.id}
              className={styles.fn_cs_steps}
              data-cols={4}
              data-gap={60}
            >
              <ul>
                <li>
                  <div className={styles.item}>
                    <div className={styles.item_in}>
                      <h3 className={styles.fn__gradient_title}>{heads.Name}</h3>
                      <p>{heads.Domain}</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
      <PTitle color={""} noncolor={"EXECUTIVES"} />
      <Domain name1={"Event Management"} name2={"Media And Public Relation"} name3={"Sponsorship"}/>
      <Domain name1={"Design And Editing"} name2={"Vigyaan"} name3={"Tech"}/>
      <Domain name1={"Documentation"}/>
    </div>
  );
};

export default Team;