import { useState } from "react";
import styles from "../sections/Team.module.css";


const coreTabs = [
  "Tech",
  "Event Management",
  "Vigyaan",
  "Sponsor",
  "Media & PR",
  "Design & Editing",
  "Documentation",
];

export default function CoreCoordinators({ coresList }) {
  const [activeCoreTab, setActiveCoreTab] = useState("Tech");

  return (
    <>
      <div className={styles.coreTabs}>
        {coreTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveCoreTab(tab)}
            className={`${styles.coreTab} ${
              activeCoreTab === tab ? styles.activeCoreTab : ""
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className={styles.CoreSection}>
        {coresList
          .filter(
            (h) =>
              h.Domain.toLowerCase().replace(/\s+/g, " ").trim() ===
              activeCoreTab.toLowerCase().replace(/\s+/g, " ").trim()
          )
          .map((heads) => (
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
                      <h3 className={styles.fn__gradient_title}>
                        {heads.Name}
                      </h3>
                      <p>{heads.Domain}</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          ))}
      </div>
    </>
  );
}
