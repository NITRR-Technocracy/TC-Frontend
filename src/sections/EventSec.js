import {React ,useEffect, useRef, useState }from 'react';
import EventCard from '../components/EventCard'
import {EventsList} from '../assets/Events_data';
import styles from './EventSec.module.css'; 
import Title from "../components/Title";
import aerofilia from "../assets/eventsPoster/aerofilia.webp"
// import aerofilia from "../assets/eventsposters/aerofilia.webp"


function EventSec() {

  return (
    <div style={{position:"relative", zIndex:"-1", paddingTop:"5rem"}}>
    <div className={styles.Container} style={{position:"relative", zIndex:"0"}}>
      <Title color={"Events"} noncolor={""} />
      <div className={styles.carousel}>

      <div className={styles.list}>

        <div className={styles.item}>
        <div className="img" style={{backgroundImage:`url(${aerofilia})`}}>
        </div>
          <div className={styles.content}>
            {/* <div className={styles.title}>ROBOWAR</div> */}
            {/* <div className={styles.name}>OWL</div> */}
            {/* <div className={styles.des}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.</div> */}
            <div className={styles.btn}>
              <button>Register</button>
              {/* <button>Subscribe</button> */}
            </div>
          </div>
        </div>

        <div className={styles.item}>
        <div className="img" style={{backgroundImage:`url(${aerofilia})`}}></div>
          <div className={styles.content}>
            {/* <div className={styles.title}>ROBOWAR</div> */}
            {/* <div className={styles.name}>OWL</div> */}
            {/* <div className={styles.des}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.</div> */}
            <div className={styles.btn}>
              <button>Register</button>
              {/* <button>Subscribe</button> */}
            </div>
          </div>
        </div>

        <div className={styles.item} style={{ backgroundImage: `url(image/crow.jpg)` }}>
          <div className={styles.content}>
            <div className={styles.title}>SLIDER</div>
            <div className={styles.name}>CROW</div>
            <div className={styles.des}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.</div>
            <div className={styles.btn}>
              <button>See More</button>
              <button>Subscribe</button>
            </div>
          </div>
        </div>

        <div className={styles.item} style={{ backgroundImage: `url(image/butterfly1.jpeg)` }}>
          <div className={styles.content}>
            <div className={styles.title}>SLIDER</div>
            <div className={styles.name}>BUTTERFLY</div>
            <div className={styles.des}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.</div>
            <div className={styles.btn}>
              <button>See More</button>
              <button>Subscribe</button>
            </div>
          </div>
        </div>

        <div className={styles.item} style={{ backgroundImage: `url(image/owl2.jpg)` }}>
          <div className={styles.content}>
            <div className={styles.title}>SLIDER</div>
            <div className={styles.name}>OWL</div>
            <div className={styles.des}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.</div>
            <div className={styles.btn}>
              <button>See More</button>
              <button>Subscribe</button>
            </div>
          </div>
        </div>

        <div className={styles.item} style={{ backgroundImage: `url(image/eagel3.jpg)` }}>
          <div className={styles.content}>
            <div className={styles.title}>SLIDER</div>
            <div className={styles.name}>EAGLE</div>
            <div className={styles.des}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.</div>
            <div className={styles.btn}>
              <button>See More</button>
              <button>Subscribe</button>
            </div>
          </div>
        </div>

        <div className={styles.item} style={{ backgroundImage: `url(image/kingfirser2.jpeg)` }}>
          <div className={styles.content}>
            <div className={styles.title}>SLIDER</div>
            <div className={styles.name}>KINGFISHER</div>
            <div className={styles.des}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.</div>
            <div className={styles.btn}>
              <button>See More</button>
              <button>Subscribe</button>
            </div>
          </div>
        </div>

        <div className={styles.item} style={{ backgroundImage: `url(image/parrot2.jpg)` }}>
          <div className={styles.content}>
            <div className={styles.title}>SLIDER</div>
            <div className={styles.name}>PARROT</div>
            <div className={styles.des}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.</div>
            <div className={styles.btn}>
              <button>See More</button>
              <button>Subscribe</button>
            </div>
          </div>
        </div>

        <div className={styles.item} style={{ backgroundImage: `url(image/heron.jpeg)` }}>
          <div className={styles.content}>
            <div className={styles.title}>SLIDER</div>
            <div className={styles.name}>HERON</div>
            <div className={styles.des}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.</div>
            <div className={styles.btn}>
              <button>See More</button>
              <button>Subscribe</button>
            </div>
          </div>
        </div>

        <div className={styles.item} style={{ backgroundImage: `url(image/butterfly2.jpg)` }}>
          <div className={styles.content}>
            <div className={styles.title}>SLIDER</div>
            <div className={styles.name}>BUTTERFLY</div>
            <div className={styles.des}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.</div>
            <div className={styles.btn}>
              <button>See More</button>
              <button>Subscribe</button>
            </div>
          </div>
        </div>

        <div className={styles.item} style={{ backgroundImage: `url(image/parrot2.jpg)` }}>
          <div className={styles.content}>
            <div className={styles.title}>SLIDER</div>
            <div className={styles.name}>PARROT</div>
            <div className={styles.des}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.</div>
            <div className={styles.btn}>
              <button>See More</button>
              <button>Subscribe</button>
            </div>
          </div>
        </div>

      </div>

      {/* Navigation buttons */}
      <div className={styles.arrows}>
        <button className={styles.prev}>&lt;</button>
        <button className={styles.next}>&gt;</button>
      </div>

      {/* Time running */}
      <div className={styles.timeRunning}></div>

    </div>
    </div>
    </div>
  );
}

export default EventSec;

