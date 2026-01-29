// import React from "react"
// // import { Linkedin, Instagram } from "lucide-react"
// // import { Card, CardContent } from "@/components/ui/card"
// // import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import styles from "./OCCard.module.css"



// export default function OCCard({ name, img, domain, InstaId, linkedinId }) {
//   return (
//     <div className={styles.card}>
//       <div className={styles.boxshadow}></div>
//       <div className={styles.main}>
//         <div className={styles.top}></div>
//         <div className={`${styles.side} ${styles.left}`}></div>
//         <div className={`${styles.side} ${styles.right}`}></div>
//         <img src={img || "/placeholder.svg"} alt={name} className={styles.profileImage} />
//         <div className={styles.title}>{name}</div>
//         <div className={styles.domain}>{domain}</div>
//         <div className={styles["button-container"]}>
//           <button className={styles.button} onClick={() => window.open(InstaId, "_blank")}>
//             <svg
//               className={styles.svg}
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               fill="none"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
//               <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
//               <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
//             </svg>
//           </button>
//           <button className={styles.button} onClick={() => window.open(linkedinId, "_blank")}>
//             <svg
//               className={styles.svg}
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
//               <rect x="2" y="9" width="4" height="12"></rect>
//               <circle cx="4" cy="4" r="2"></circle>
//             </svg>
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }




//  - -- - 2 0 2 6  - - - 


import React from "react";
import styles from "./OCCard.module.css";

export default function OCCard({
  name,
  img,
  domain,
  InstaId,
  linkedinId,
}) {
  return (
    <div className={styles.parent}>
      
      <div className={styles.card}>
        {/* Glass layer */}
        <div className={styles.glass} />

        {/* Main content */}
        <div className={styles.content}>
          <span className={styles.name}>{name}</span>
          <span className={styles.designation}>{domain}</span>

          <div className={styles.profileImage}>
            <img
              src={img || "/placeholder.svg"}
              alt={name}
              loading="lazy"
            />
          </div>
        </div>

        {/* Social buttons */}
        <div className={styles.bottom}>
          <div className={styles.socials}>
            {InstaId && (
              <button
                className={styles.socialBtn}
                aria-label="Instagram"
                onClick={() => window.open(InstaId, "_blank")}
              >
                <svg
                  viewBox="0 0 30 30"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M 9.998 3 C 6.139 3 3 6.142 3 10.002 L 3 20.002 C 3 23.861 6.142 27 10.002 27 L 20.002 27 C 23.861 27 27 23.858 27 19.998 L 27 9.998 C 27 6.139 23.858 3 19.998 3 Z M 22 7 A 1 1 0 1 1 21 8 A 1 1 0 0 1 22 7 Z M 15 9 A 6 6 0 1 1 9 15 A 6 6 0 0 1 15 9 Z" />
                </svg>
              </button>
            )}

            {linkedinId && (
              <button
                className={styles.socialBtn}
                aria-label="LinkedIn"
                onClick={() => window.open(linkedinId, "_blank")}
              >
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34V9.5H5.67v8.84zM7 8.2a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1zM18.34 18.34v-4.84c0-2.4-1.28-3.52-3-3.52a2.6 2.6 0 0 0-2.34 1.3v-1.1h-2.67v8.84h2.67v-4.4c0-1.16.22-2.28 1.66-2.28s1.68 1.34 1.68 2.36v4.32z" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


