import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Team from '../sections/Team'
// import FullPageLoader from '../layout/FullPageLoader';
const TeamPage = () => {

  useEffect(() => {
    AOS.init({ duration: 1000, });
    window.scrollTo(0, 0)
   
  }, [])
  return (
    <div>
       <div><Team/></div>
    </div>
  )
}

export default TeamPage