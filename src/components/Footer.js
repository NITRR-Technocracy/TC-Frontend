import React from "react";
import styles from './Footer.module.css'
import logo from '../assets/images/tcLogo-min.webp'
import { Quotes } from '../assets/utils/Quotes';
import location from "../assets/svgs/location.svg"
import email from "../assets/svgs/email.svg"
import fb from "../assets/svgs/facebook.svg"
import insta from "../assets/svgs/insta.svg"
import linkedin from "../assets/svgs/linkedin.svg"
import x from "../assets/svgs/x.svg"
import yt from "../assets/svgs/youtube.svg"
// import { AiFillFacebook } from 'react-icons/ai';
// import { AiFillTwitterCircle } from 'react-icons/ai';
// import { BsInstagram } from 'react-icons/bs';
// import { AiFillLinkedin } from 'react-icons/ai';

function Footer (){
	let curQuote = Quotes[Math.floor(Math.random() * Quotes.length)];
	return (
		<div>
			<footer className={styles.footer}>
				<div  className={styles.fcontainer}>
					<div className={styles.frow}>
						<div className={styles.footercol + " " + styles.logosec}>
							<img src={logo} height="80px" alt="" />
							<div className={styles.fquotessec}>
								<p className={styles.fquotes} style={{color:"white", fontWeight:"bold"}}>{curQuote.quote}</p>
								<p className={styles.fsaidby} style={{color:"#ffff", fontStyle:"italic"}}>- {curQuote.author}</p>
							</div>
						</div>
						<div className={styles.footercol}>
							<h4>TECHNOCRACY</h4>
							<ul>
								<li><a href="/aavartan">Aavartan</a></li>
								<li><a href="/vigyaan">Vigyaan</a></li>
								<li><a href="/ignite">Ignite</a></li>
								<li><a href="/sponsors">Sponsors</a></li>
								<li><a href="/team">Team</a></li>
							</ul>
						</div>
						<div className={styles.footercol}>
							<h4>CONTACT</h4>
							<ul>
								<li><a href="mailto:nitrr.technocracy@gmail.com"><img src={email} alt="" />&nbsp;nitrr.technocracy@gmail.com</a></li>
								<li><a href="mailto:aavartan@nitrr.ac.in"><img src={email} alt="" />&nbsp;aavartan@nitrr.ac.in</a></li>
								<li><a href="https://goo.gl/maps/d19JmXcjgCiS2PjQ6" target='_blank' rel='noreferrer'>
									<img src={location} alt="" />
									&nbsp;NIT Raipur, Raipur, CG 492013</a></li>
							</ul>
						</div>
						<div className={styles.footercol}>
							<h4>LETS CONNECT</h4>
							<div className={styles.fsociallinks}>
								<a href="https://www.facebook.com/NITRR.Aavartan/" target='_blank' rel='noreferrer'><img width={30} src={fb} alt="" /></a>
								<a href="https://www.instagram.com/nitrr.aavartan/?hl=en" target='_blank' rel='noreferrer'><img width={30} src={insta} alt="" /></a>
								<a href="https://in.linkedin.com/company/aavartan" target='_blank' rel='noreferrer'><img width={30} src={linkedin} alt="" /></a>
								<a href="https://twitter.com/nitrr_aavartan" target='_blank' rel='noreferrer'><img width={32} src={x} alt="" /></a>
								<a href="https://www.youtube.com/@AAVARTANNITRAIPUR" target='_blank' rel='noreferrer'><img width={32}  src={yt} alt=""/></a>
							</div>
						</div>
						<div className={styles.techTeam} >
						<a href="/tech-team">Made With <span className={styles.magic}>MAGIC</span> by Tech Team</a>
						</div>
					</div>
				</div>
			</footer>
				
		</div>
	);
}

export default Footer;