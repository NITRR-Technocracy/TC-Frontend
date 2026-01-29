import { useState } from "react";
import styles from "../sections/Team.module.css";

const executiveTabs = [
  "Tech",
  "Event Management",
  "Vigyaan",
  "Sponsorship",
  "Media And Public Relation",
  "Design And Editing",
  "Documentation",
];

export default function ExecutiveSection({ executivesList }) {
  const [activeTab, setActiveTab] = useState("Tech");

  return (
    <>
      {/* Executive Tabs */}
      <div className={styles.execTabs}>
        {executiveTabs.map((tab) => (
          <button
            key={tab}
            data-domain={tab}
            onClick={() => setActiveTab(tab)}
            className={`${styles.execTab} ${
              activeTab === tab ? styles.execTabActive : ""
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Executive List */}
      <div className={styles.execListWrapper}>
        <ul className={styles.execList}>
          {executivesList
            .filter(
              (e) =>
                e.Domain.toLowerCase().replace(/\s+/g, " ").trim() ===
                activeTab.toLowerCase().replace(/\s+/g, " ").trim()
            )
            .map((exec) => (
              <li key={exec.id} className={styles.execItem}>
                <span className={styles.execDot}></span>
                <span className={styles.execName}>{exec.Name}</span>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
