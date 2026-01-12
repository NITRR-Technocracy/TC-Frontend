// import { useState, useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import doubt from "../assets/images/HomePage/doubt.png"
// import zhen from "../assets/images/HomePage/zhen.png"

// const Faq = () => {
//   useEffect(() => {
//     AOS.init();
//   }, []);
//   const faqs1 = [
//     {
//       title: "What is Team Technocracy?",
//       dec: "Team Technocracy is the official technical committee of NIT Raipur, dedicated to fostering innovation, technical skills, and a passion for technology among students. We organize various technical events under the Aavartan fest, workshops, and projects throughout the year.",
//     },
//     {
//       title: "How can I join Team Technocracy?",
//       dec: "To join Team Technocracy, you can typically look out for announcements during the recruitment period at the beginning of your 2nd year and you may also volunteer for Aavartan in your first year. These announcements will provide details on the application process, interviews, and eligibility criteria.",
//     },
//     {
//       title: "What are the perks of joining Team Technocracy?",
//       dec: "Joining Team Technocracy comes with several benefits, including: Opportunities to enhance your technical skills through workshops and hands-on projects, Networking with like-minded individuals and industry professionals, Leadership and teamwork experience by organizing and participating in events, The chance to make a positive impact on society.",
//     },
//     {
//       title:
//         "What kind of events and activities does Team Technocracy organize?",
//       dec: "Team Technocracy organizes a wide range of events, including hackathons, coding competitions, technical workshops, seminars, and technical talks by industry experts all under the banner of our annual Tech-Fest “Aavartan” . We also undertake technical projects and research initiatives.",
//     },
//   ];
//   const faqs2 = [
//     {
//       title: "Why should I choose Team Technocracy ?",
//       dec: "Team Technocracy offers a unique blend of technical and practical experience. By joining us, you can expect a strong focus on technical development, networking, and hands-on learning. We have a vibrant and dynamic team that is passionate about technology and innovation, making it an ideal platform to pursue your technical interests.",
//     },
//     {
//       title:
//         "Can I join Team Technocracy if I am from a non-technical background?",
//       dec: "Yes, Team Technocracy welcomes students from all backgrounds. While some of our activities may be more technical in nature, we also value diversity and encourage non-technical students to bring their unique perspectives and skills to our committee.",
//     },
//     {
//       title: "What is Vigyaan ?",
//       dec: "Vigyaan is the science exhibition organized during Aavartan, it showcases groundbreaking innovations, cutting-edge technologies, and exciting projects, providing a platform for students to delve deeper into the world of science and explore limitless possibilities with real world problem statements. ",
//     },
//     {
//       title: "How to participate in Vigyaan ?",
//       dec: "Anyone can participate in Vigyaan with a team of 2 or 3 members. Initially, you are required to present your solution through documentation. Subsequently, over the following weeks, you will be expected to apply your solution in real-life scenarios and present the results to the team.",
//     },
//     {
//       title: "What are the eligibility criteria for joining Team Technocracy ?",
//       dec: "You should be a current student of the college with a keen interest in technology and a willingness to actively participate in technical activities and projects.",
//     },
//   ];
//   const [active, setActive] = useState(`a0`);
//   const faqMap = (arr, index) => {
//     return arr.map((data, i) => (
//       <div data-aos="flip-down" className="fn_cs_accordion" key={i}>
//         <div className={`acc_item ${index + i === active ? "active" : ""}`}>
//           <div
//             className="acc_header"
//             onClick={() =>
//               setActive(`${index + i}` === active ? null : `${index + i}`)
//             }
//           >
//             <h3
//               style={{ fontSize: "1rem" }}
//               className=""
//               data-text={data.title}
//             >
//               {data.title}
//             </h3>
//             <span className="icon">
//               <span />
//             </span>
//           </div>
//           <div
//             className={`acc_content ${index + i === active ? "active" : ''}`}
//           >
//             <p style={{ fontSize: "0.9rem" }}>{data.dec}</p>
//           </div>
//         </div>
//       </div>
//     ));
//   };

//   return (
//     <section id="faq">
//       <div className="fn_cs_faq">
//         <h1 className="hm-title faq-title" data-aos="fade-up">
//           <div>
//             <span>F</span>
//             <span>A
//               <img src={zhen} alt="" />
//               <div className="quote-cont">
//                 <div className="quote shadow bottom">
//                   <p>
//                     Every step leaves a footprint. No matter how small.
//                   </p>
//                 </div>
//               </div>
//             </span>
//             <span>Q</span>
//           </div>
//         </h1>
//         <div className="faq_col_cont">
//           <div className="faq_col">
//             <div className="desc" data-aos="fade-up">
//               <img src={doubt} alt="" />
//               {/* <p>
//               It also addresses inquiries about sponsorship opportunities, event schedules, and ways to engage with the club. With this comprehensive FAQ, we aim to ensure a seamless experience for everyone involved in our technical events.
//               </p> */}
//             </div>
//           </div>
//           <div className="faq_col">
//             <div className="fn_cs_accordion">{faqMap(faqs1, "a")}</div>
//           </div>
//           <div className="faq_col">
//             <div className="fn_cs_accordion">{faqMap(faqs2, "b")}</div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
// export default Faq;

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Faq.css";

import snake from "../assets/images/Faq/snake.png";
import tiger from "../assets/images/Faq/tiger3.png";
import lion2 from "../assets/images/Faq/lion2.png";

const Faq = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const faqs1 = [
    {
      title: "What is Team Technocracy?",
      dec: "Team Technocracy is the official technical committee of NIT Raipur, dedicated to fostering innovation, technical skills, and a passion for technology among students.",
    },
    {
      title: "How can I join Team Technocracy?",
      dec: "You can apply during recruitment drives or volunteer for Aavartan in your first year.",
    },
    {
      title: "What are the perks of joining Team Technocracy?",
      dec: "Skill development, networking, leadership experience, and hands-on exposure to real projects.",
    },
    {
      title: "What kind of events does Team Technocracy organize?",
      dec: "Hackathons, coding contests, workshops, seminars, and technical talks under Aavartan.",
    },
  ];

  const faqs2 = [
    {
      title: "Why should I choose Team Technocracy?",
      dec: "We provide a perfect blend of technical learning, teamwork, and innovation.",
    },
    {
      title: "Can non-technical students join?",
      dec: "Yes, students from all backgrounds are welcome.",
    },
    {
      title: "What is Vigyaan?",
      dec: "Vigyaan is the science exhibition during Aavartan showcasing innovative projects.",
    },
    {
      title: "How to participate in Vigyaan?",
      dec: "Teams of 2–3 members submit documentation followed by real-world implementation.",
    },
    {
      title: "What are the eligibility criteria?",
      dec: "You must be a current student with interest in technology and participation.",
    },
  ];

  const [active, setActive] = useState("a0");

  const renderFaq = (arr, key) =>
    arr.map((f, i) => (
      <div data-aos="flip-down" className="fn_cs_accordion" key={i}>
        <div className={`acc_item ${key + i === active ? "active" : ""}`}>
          <div
            className="acc_header"
            onClick={() => setActive(key + i === active ? null : key + i)}
          >
            <h3 style={{ fontSize: "1rem" }}>{f.title}</h3>
            <span className="icon">
              <span />
            </span>
          </div>
          <div className={`acc_content ${key + i === active ? "active" : ""}`}>
            <p style={{ fontSize: "0.9rem" }}>{f.dec}</p>
          </div>
        </div>
      </div>
    ));

  return (
    <section id="faq" className="faq-section">
      {/* Decorative images */}
      <img src={snake} className="faq-decor snake" alt="" />
      <img src={tiger} className="faq-decor tiger" alt="" />

      <div className="fn_cs_faq">
        <h1 className="hm-title faq-title biomimicry-title" data-aos="fade-up">
          <div>
            <span>F</span>

            <span className="faq-middle">
              A
              <img src={lion2} alt="lion" className="faq-lion" />
              <div className="quote-cont">
                <div className="quote shadow bottom">
                  <p>Every step leaves a footprint. No matter how small.</p>
                </div>
              </div>
            </span>

            <span>Q</span>
          </div>
        </h1>

        <div className="faq_col_cont">
          <div className="faq_col">{renderFaq(faqs1, "a")}</div>
          <div className="faq_col">{renderFaq(faqs2, "b")}</div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
