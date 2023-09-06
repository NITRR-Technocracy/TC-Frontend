import { useState, useEffect } from "react";
import Title from "../components/Title";
import AOS from 'aos';
import 'aos/dist/aos.css';
import prop9 from "../assets/prop9.png"

const Faq = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  const faqs1 = [
    {
      title: "What is Team Technocracy?",
      dec: "Team Technocracy is the official technical committee of NIT Raipur, dedicated to fostering innovation, technical skills, and a passion for technology among students. We organize various technical events under the Aavartan fest, workshops, and projects throughout the year.",
    },
    {
      title: "How can I join Team Technocracy?",
      dec: "To join Team Technocracy, you can typically look out for announcements during the recruitment period at the beginning of your 2nd year and you may also volunteer for Aavartan in your first year. These announcements will provide details on the application process, interviews, and eligibility criteria.",
    },
    {
      title: "What are the perks of joining Team Technocracy?",
      dec: "Joining Team Technocracy comes with several benefits, including: Opportunities to enhance your technical skills through workshops and hands-on projects, Networking with like-minded individuals and industry professionals, Leadership and teamwork experience by organizing and participating in events, The chance to make a positive impact on society.",
    },
    {
      title: "What kind of events and activities does Team Technocracy organize?",
      dec: "Team Technocracy organizes a wide range of events, including hackathons, coding competitions, technical workshops, seminars, and technical talks by industry experts all under the banner of our annual Tech-Fest “Aavartan” . We also undertake technical projects and research initiatives.",
    },
  ];
  const faqs2 = [
    {
      title: "Why should I choose Team Technocracy ?",
      dec: "Team Technocracy offers a unique blend of technical and practical experience. By joining us, you can expect a strong focus on technical development, networking, and hands-on learning. We have a vibrant and dynamic team that is passionate about technology and innovation, making it an ideal platform to pursue your technical interests.",
    },
    {
      title: "Can I join Team Technocracy if I am from a non-technical background?",
      dec: "Yes, Team Technocracy welcomes students from all backgrounds. While some of our activities may be more technical in nature, we also value diversity and encourage non-technical students to bring their unique perspectives and skills to our committee.",
    },
    {
      title: "What is Vigyaan ?",
      dec: "Vigyaan is the science exhibition organized during Aavartan, it showcases groundbreaking innovations, cutting-edge technologies, and exciting projects, providing a platform for students to delve deeper into the world of science and explore limitless possibilities with real world problem statements. ",
    },
    {
      title: "How to participate in Vigyaan ?",
      dec: "Anyone can participate in Vigyaan with a team of 2 or 3 members. Initially, you are required to present your solution through documentation. Subsequently, over the following weeks, you will be expected to apply your solution in real-life scenarios and present the results to the team.",
    },
    {
      title: "What are the eligibility criteria for joining Team Technocracy ?",
      dec: "You should be a current student of the college with a keen interest in technology and a willingness to actively participate in technical activities and projects.",
    },
  ];
  const [active, setActive] = useState(`a0`);
  const faqMap = (arr, index) => {
    return arr.map((data, i) => (
      <div data-aos="flip-down" className="fn_cs_accordion" key={i}>
        <div className={`acc_item ${index + i === active ? "active" : ""}`}>
          <div
            className="acc_header"
            onClick={() =>
              setActive(`${index + i}` === active ? null : `${index + i}`)
            }
          >
            <h3 style={{fontSize:"1rem"}} className="" data-text={data.title}>
              {data.title}
            </h3>
            <span className="icon">
              <span />
            </span>
          </div>
          <div
            className="acc_content"
            style={{
              display: `${index + i === active ? "block" : "none"}`,
            }}
          >
            <p style={{fontSize:"0.9rem"}}>{data.dec}</p>
          </div>
        </div>
      </div>
    ));
  };

  const color="";
  const noncolor="FAQ"
  return (
    <section id="faq">
      <div className="">
        <div className="fn_cs_faq">
          <div className="faq_col">
            <Title color={color} noncolor={noncolor}/>
            {/* <div className="fn_cs_divider">
              <div className="divider">
                <span />
                <span />
              </div>
            </div> */}
            <div className="desc">
              <img src={prop9} width="100%" alt="" />
              {/* <p>
              It also addresses inquiries about sponsorship opportunities, event schedules, and ways to engage with the club. With this comprehensive FAQ, we aim to ensure a seamless experience for everyone involved in our technical events.
              </p> */}
            </div>
          </div>
          <div className="faq_col" >
            <div className="fn_cs_accordion">{faqMap(faqs1, "a")}</div>
          </div>
          <div className="faq_col">
            <div  className="fn_cs_accordion">{faqMap(faqs2, "b")}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Faq;
