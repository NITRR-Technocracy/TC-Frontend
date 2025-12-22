// // import { useEffect } from "react";
// import sqrimg from "../assets/images/1x1-min.webp";
// import Title from "../components/Title";
// import v1 from "../assets/images/vigyaan/v1.webp";
// import v2 from "../assets/images/vigyaan/v2.webp";
// import v3 from "../assets/images/vigyaan/v3.webp";
// import v4 from "../assets/images/vigyaan/v4.webp";
// import v5 from "../assets/images/vigyaan/v5.webp";
// import v6 from "../assets/images/vigyaan/v6.webp";
// import v7 from "../assets/images/vigyaan/v7.webp";
// import v8 from "../assets/images/vigyaan/v8.webp";
// import { Link } from "react-router-dom";
// import { Line } from "../components/Line";

// const EventsGallery = () => {
//   // useEffect(() => {
//   // const collection = document.querySelector(".fn_cs_collection");
//   // var items = collection.querySelectorAll(".item");
//   // var itemsLength = items.length;
//   // setInterval(function () {
//   //   var numberOne = Math.floor(Math.random() * itemsLength);
//   //   var numberTwo = Math.floor(Math.random() * itemsLength);

//   //   while (numberTwo === numberOne) {
//   //     numberTwo = Math.floor(Math.random() * itemsLength);
//   //   }
//   //   var firstDiv = items[numberOne];
//   //   var secondDiv = items[numberTwo];
//   //   firstDiv.classList.add("ready");
//   //   secondDiv.classList.add("ready");

//   //   setTimeout(function () {

//   //     firstDiv.classList.remove("ready");
//   //     secondDiv.classList.remove("ready");
//   //   }, 500);
//   // }, 2000);
//   // }, []);

//   const color = "VIGYAAN";
//   const noncolor = "GALLERY";

//   return (
//     <section id="collection">
//       <div className="container collectionContainer">
//         <Title color={color} noncolor={noncolor} />
//         <div className="fn_cs_desc">
//           <p>
//             Vigyaan, the science exhibition organized during the tech fest,
//             showcases groundbreaking innovations, cutting-edge technologies, and
//             exciting projects, providing a platform for students to delve deeper
//             into the world of science and explore limitless possibilities.
//           </p>
//         </div>
//         <div className="fn_cs_collection">
//           <div className="collection_top">
//             <div className="item">
//               <div className="item_in">
//                 <div className="img">
//                   <div
//                     className="abs_img"
//                     style={{
//                       backgroundImage: `url(${v1})`,
//                       backgroundSize: "cover", // Adjust this as needed
//                       backgroundPosition: "center", // Adjust this as needed
//                     }}
//                   />
//                   <img src={sqrimg} alt="" />
//                 </div>
//               </div>
//               <input type="hidden" defaultValue="img/collection/1.webp" />
//             </div>
//             <div className="item">
//               <div className="item_in">
//                 <div className="img">
//                   <div
//                     className="abs_img"
//                     style={{
//                       backgroundImage: `url(${v3})`,
//                       backgroundSize: "cover", // Adjust this as needed
//                       backgroundPosition: "center", // Adjust this as needed
//                     }}
//                   />
//                   <img src={sqrimg} alt="" />
//                 </div>
//               </div>
//               <input type="hidden" defaultValue="img/collection/2.webp" />
//             </div>
//             <div className="item">
//               <div className="item_in">
//                 <div className="img">
//                   <div
//                     className="abs_img"
//                     style={{
//                       backgroundImage: `url(${v5})`,
//                       backgroundSize: "cover", // Adjust this as needed
//                       backgroundPosition: "center", // Adjust this as needed
//                     }}
//                   />
//                   <img src={sqrimg} alt="" />
//                 </div>
//               </div>
//               <input type="hidden" defaultValue="img/collection/3.webp" />
//             </div>
//             <div className="item">
//               <div className="item_in">
//                 <div className="img">
//                   <div
//                     className="abs_img"
//                     style={{
//                       backgroundImage: `url(${v2})`,
//                       backgroundSize: "cover", // Adjust this as needed
//                       backgroundPosition: "center", // Adjust this as needed
//                     }}
//                   />
//                   <img src={sqrimg} alt="" />
//                 </div>
//               </div>
//               <input type="hidden" defaultValue="img/collection/4.webp" />
//             </div>
//           </div>
//           <div className="collection_bottom">
//             <div className="item">
//               <div className="item_in">
//                 <div className="img">
//                   <div
//                     className="abs_img"
//                     style={{
//                       backgroundImage: `url(${v7})`,
//                       backgroundSize: "cover", // Adjust this as needed
//                       backgroundPosition: "center", // Adjust this as needed
//                     }}
//                   />
//                   <img src={sqrimg} alt="" />
//                 </div>
//               </div>
//               <input type="hidden" defaultValue="img/collection/5.webp" />
//             </div>
//             <div className="item">
//               <div className="item_in">
//                 <div className="img">
//                   <div
//                     className="abs_img"
//                     style={{
//                       backgroundImage: `url(${v6})`,
//                       backgroundSize: "cover", // Adjust this as needed
//                       backgroundPosition: "center", // Adjust this as needed
//                     }}
//                   />
//                   <img src={sqrimg} alt="" />
//                 </div>
//               </div>
//               <input type="hidden" defaultValue="img/collection/6.webp" />
//             </div>
//             <div className="item">
//               <div className="item_in">
//                 <div className="img">
//                   <div
//                     className="abs_img"
//                     style={{
//                       backgroundImage: `url(${v8})`,
//                       backgroundSize: "cover", // Adjust this as needed
//                       backgroundPosition: "center", // Adjust this as needed
//                     }}
//                   />
//                   <img src={sqrimg} alt="" />
//                 </div>
//               </div>
//               <input type="hidden" defaultValue="img/collection/7.webp" />
//             </div>
//             <div className="item">
//               <div className="item_in">
//                 <div className="img">
//                   <div
//                     className="abs_img"
//                     style={{
//                       backgroundImage: `url(${v4})`,
//                       backgroundSize: "cover", // Adjust this as needed
//                       backgroundPosition: "center", // Adjust this as needed
//                     }}
//                   />
//                   <img src={sqrimg} alt="" />
//                 </div>
//               </div>
//               <input type="hidden" defaultValue="img/collection/8.webp" />
//             </div>
//           </div>
//         </div>
//         <div className="fn_cs_desc">
//           <Link
//             style={{ textDecoration: "none", color: "white" }}
//             to="/vigyaan/gallery"
//           >
//             <div
//               href="/"
//               className="goodbtn gallery-btn"
//               target="_blank"
//               rel="noreferrer"
//               style={{ margin: "2rem 0",backgroundColor:"#210c75", borderColor:"white", position: "relative", zIndex: "1" }}
//             >
//               <span>Show More</span>
//             </div>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };
// export default EventsGallery;



// ------------------------2026-------------------------
import { useEffect } from 'react';
import honeyprop from "../assets/vigyaan_images/honeycomb-bee.webp";
import Title from '../components/Title';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Vigyaan_data from '../assets/vigyaan_data';
import './VigyaanGallery.css'; 
import styled from 'styled-components'; // Import styled-components

// Custom wrapper to target the Title component's font
const GalleryTitleSection = styled.div`
  /* Targets the internal h3 of your Title component */
  .fn_title_holder h3 {
    font-family: 'Orbitron', sans-serif !important; 
    font-weight: 800;
    letter-spacing: 6px;
    text-transform: uppercase;
    /* Adding a subtle glow to match the tech theme */
    text-shadow: 0 0 15px rgba(0, 255, 136, 0.4);
    margin-bottom: 30px;
  }
`;

const VigyaanGallery = () => {
  useEffect(() => {
    AOS.init({ 
      duration: 1000,
      offset: 0, 
      once: false, 
      mirror: true, 
      anchorPlacement: 'top-bottom', 
    });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='Vigyaanscrolled gallery-page-wrapper'>
      {/* Floating Honey Nest Prop (Right Side) */}
      <div className="honey-nest-container">
        <img src={honeyprop} alt="Honey Nest" className="honey-nest-img" />
        
        {/* Vertical Drip System falling from the nest */}
        <div className="drip-system">
          <div className="honey-drip drip-1"></div>
          <div className="honey-drip drip-2"></div>
          <div className="honey-drip drip-3"></div>
        </div>
      </div>

      <div className="metaportal_fn_collectionpage">
        <div className="container">
          
          {/* Wrapped Title in the custom Section to change font */}
          <GalleryTitleSection>
            <Title color="VIGYAAN" noncolor="GALLERY"/>
          </GalleryTitleSection>
          
          <div className="honeycomb-grid">
            {Vigyaan_data.slice(0, 14).map((data, index) => (
              <div className="hexagon-item" key={index} data-aos="zoom-in">
                <div className="hexagon-inner">
                  <img src={data.url} alt={`Gallery ${index}`} />
                  <div className="hexagon-overlay">
                    <span>{data.dis}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VigyaanGallery;