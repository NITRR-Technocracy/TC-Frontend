import React,{useEffect} from "react";
import styles from './Footer.module.css'
import logo from '../assets/images/tcLogo.png'
import { Quotes } from '../assets/utils/Quotes';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillMail } from 'react-icons/ai';
import { FaLocationArrow } from 'react-icons/fa';
// import classnames from 'classnames';
// import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Footer (){
	let curQuote = Quotes[Math.floor(Math.random() * Quotes.length)];
	useEffect(() => {
		AOS.init();
	  }, [])
	return (
		<div>
			<footer id='footer' className={styles.footer}>
				<div  className={styles.fcontainer}>
					<div className={styles.frow}>
						<div className={styles.footercol + " " + styles.logosec}>
							<img src={logo} height="80px" alt="" />
							<div className={styles.fquotessec}>
								<p className={styles.fquotes}>{curQuote.quote}</p>
								<p className={styles.fsaidby}>- {curQuote.author}</p>
							</div>
						</div>
						<div className={styles.footercol} id="footercol1">
							<h4>TECHNOCRACY</h4>
							<ul>
								<li><a href="/aavartan">Aavartan</a></li>
								<li><a href="/vigyaan">Vigyaan</a></li>
								<li><a href="/sponsors">Sponsors</a></li>
								<li><a href="/team">Team</a></li>
							</ul>
						</div>
						<div className={styles.footercol}>
							<h4>CONTACT</h4>
							<ul>
								<li><a href="mailto:nitrr.technocracy@gmail.com"><AiFillMail style={{ fontSize: "20px", color: "white" }} />&nbsp;nitrr.technocracy@gmail.com</a></li>
								<li><a href="mailto:aavartan@nitrr.ac.in"><AiFillMail style={{ fontSize: "20px", color: "white" }} />&nbsp;aavartan@nitrr.ac.in</a></li>
								<li><a href="https://goo.gl/maps/d19JmXcjgCiS2PjQ6" target='_blank' rel='noreferrer'><FaLocationArrow style={{ fontSize: "20px", color: "white" }} />&nbsp;NIT Raipur, Raipur, CG 492013</a></li>
							</ul>
						</div>
						<div className={styles.footercol}>
							<h4>LETS CONNECT</h4>
							<div className={styles.fsociallinks}>
								<a href="https://www.facebook.com/NITRR.Aavartan/" target='_blank' rel='noreferrer'><AiFillFacebook style={{ color: "white", fontSize: "35px" }} /></a>
								<a href="https://twitter.com/nitrr_aavartan" target='_blank' rel='noreferrer'><AiFillTwitterCircle style={{ color: "white", fontSize: "35px" }} /></a>
								<a href="https://www.instagram.com/nitrr.aavartan/?hl=en" target='_blank' rel='noreferrer'><BsInstagram style={{ color: "white", fontSize: "35px" }} /></a>
								<a href="https://in.linkedin.com/company/aavartan" target='_blank' rel='noreferrer'><AiFillLinkedin style={{ color: "white", fontSize: "35px" }} /></a>
							</div>
						
						</div>
					</div>
				</div>
			</footer>
				
		</div>
	);
}

export default Footer;