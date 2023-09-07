// import react from 'react'
// // import styles from './carousel.module.css'
import './carousel.css'

// import './script'

// const  Slider = () =>{
// return(
// <div className={styles.stage}>              // commented codes are for different slider
//   <div className={styles.container}>
//     <div className={styles.ring}>
//       <div className={styles.img}></div>
//       <div className={styles.img}/>
//       <div className={styles.img} />
//       <div className={styles.img} />
//     </div>
//   </div>
// </div>
// )
// }

// export default Slider;

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import slide_image_1 from '../assets/prop1.png';
import slide_image_2 from '../assets/prop2.png';
import slide_image_3 from '../assets/prop3.png';
import slide_image_4 from '../assets/prop4.png';
import slide_image_5 from '../assets/prop5.png';
import slide_image_6 from '../assets/prop6.png';

function App() {
  return (
    <div className="container">
      {/* <h1 className="heading">Flower Gallery</h1> */}
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <div className='doc1'>
            <h2 >
              The beginning
            </h2>
            <p >
              The grand fest of Aavartan had its seed sown back in 2007, when few
              Technical enthusiasts came up with the idea of "Vigyaan"-the
              national level science exhibition, single event back then which
              eventually transformed into magnificent Aavartan as we see it today.
            </p>
          </div>

        </SwiperSlide>
        <SwiperSlide>
          <div className='doc2'>
            <h2 >
              Central India's Largest Tech-fest
            </h2>
            <p >
              Team Technocracy took it to the next level as Aavartan'19 witnessed
              a footfall of over 10,000. The family of 200+ members left no stones
              unturned in creating a paradise for any tech-savvy. Their efforts
              bore a golden fruit as Aavartan reached the milestone of being
              recognized as the Central India's largest tech-fest.
            </p>
          </div>

        </SwiperSlide>
        <SwiperSlide>
          <div className='doc3'>
            <h2 >
              We are coming back
            </h2>
            <p >
              Aavartan will be back with its new edition with stellar range of
              exciting tech savvy events and evening shows. Stay tuned with us
              through our social media handles to make sure you don't miss out on
              the next big tech revolution!
            </p>
          </div>

        </SwiperSlide>
        <SwiperSlide>
          <div className='doc4'>
            <h2 >Vigyaan</h2>
            <p >
              It was 2011, when people witnessed the massive transition of
              Vigyaan, a platform for innovative ideas, into a complete fest,
              Aavartan. The consistent efforts and out of the box ideas of the
              team members laid the foundation for what now is called as the
              trademark of tech-fests!
            </p>
          </div>

        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default App;