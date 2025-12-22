// import { useEffect } from 'react';
// import Title from '../components/Title';
// import PageBanner from "../layout/PageBanner"
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import Vigyaan_data from '../assets/vigyaan_data';

// const VigyaanGalleryPage = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//     window.scrollTo(0,0)
//   }, [])
//   return (
//     <div className='Vigyaanscrolled' style={{position:"relative", zIndex:"-1"}}>
//       <div className="metaportal_fn_collectionpage" style={{position:"relative", zIndex:"0"}}>
//         <div className="container">
//           <div className="metaportal_fn_collection">
//             {/* Filters */}

//             {/* !Filters */}
//             <div className="metaportal_fn_clist">
//               {/* Result Box */}

//               {/* !Result Box */}
//               {/* Result List */}
//               <div className="metaportal_fn_result_list">
//                 <div className="metaportal_fn_drops">
//                   <PageBanner pageName={"gallery"} prePageName={"vigyaan"} prePageLink={"/vigyaan"} />
//                   <Title color="VIGYAAN" noncolor="GALLERY"/>
//                   <ul className="grid">

//                   {Vigyaan_data.map((data, index)=>{
//                     return(
//                       <li key={index} data-aos="flip-up"
//                       >
//                         <div className="nft__item">
//                           <div className="img_holder">
//                             <img width="100%" src={data.url} alt="" />
//                           </div>
//                         </div>
//                       </li>
//                     );
//                   })}  
//                   </ul>
//                 </div>
//               </div>
//               {/* !Result List */}
//             </div>
//           </div>
//         </div>
//       </div>
//       </div>
//   );
// };

// export default VigyaanGalleryPage;


// -----------------------------------2026-------------------------------


import { useEffect } from 'react';
import Title from '../components/Title';
import PageBanner from "../layout/PageBanner"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Vigyaan_data from '../assets/vigyaan_data';
import styled from 'styled-components'; // Added styled-components

// Custom wrapper to change the font of the Title component
const GalleryTitleWrapper = styled.div`
  .fn_title_holder h3 {
    font-family: 'Orbitron', sans-serif !important; 
    font-weight: 800;
    letter-spacing: 5px;
    text-transform: uppercase;
    text-shadow: 0 0 15px rgba(0, 255, 136, 0.4);
  }
`;

const VigyaanGalleryPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scrollTo(0,0)
  }, [])

  return (
    <div className='Vigyaanscrolled' style={{position:"relative", zIndex:"-1"}}>
      <div className="metaportal_fn_collectionpage" style={{position:"relative", zIndex:"0"}}>
        <div className="container">
          <div className="metaportal_fn_collection">
            <div className="metaportal_fn_clist">
              <div className="metaportal_fn_result_list">
                <div className="metaportal_fn_drops">
                  <PageBanner pageName={"gallery"} prePageName={"vigyaan"} prePageLink={"/vigyaan"} />
                  
                  {/* Wrapped Title in the custom styled-component */}
                  <GalleryTitleWrapper>
                    <Title color="VIGYAAN" noncolor="GALLERY"/>
                  </GalleryTitleWrapper>

                  <ul className="grid">
                    {Vigyaan_data.map((data, index)=>{
                      return(
                        <li key={index} data-aos="flip-up">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VigyaanGalleryPage;
