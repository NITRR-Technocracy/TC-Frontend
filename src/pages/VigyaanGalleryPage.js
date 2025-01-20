import { useEffect } from 'react';
import Title from '../components/Title';
import PageBanner from "../layout/PageBanner"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Vigyaan_data from '../assets/vigyaan_data';

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
            {/* Filters */}

            {/* !Filters */}
            <div className="metaportal_fn_clist">
              {/* Result Box */}

              {/* !Result Box */}
              {/* Result List */}
              <div className="metaportal_fn_result_list">
                <div className="metaportal_fn_drops">
                  <PageBanner pageName={"gallery"} prePageName={"vigyaan"} prePageLink={"/vigyaan"} />
                  <Title color="VIGYAAN" noncolor="GALLERY"/>
                  <ul className="grid">

                  {Vigyaan_data.map((data, index)=>{
                    return(
                      <li key={index} data-aos="flip-up"
                      >
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
      </div>
  );
};

export default VigyaanGalleryPage;
