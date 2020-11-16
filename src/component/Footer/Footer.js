import React from 'react';
import location from '../../Imgaes/logos/map-marker-alt-solid 1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, } from '@fortawesome/free-solid-svg-icons';
import { faFacebook,faInstagram,faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
import './Footer.css'

const Footer = () => {
    return (
        <div style={{background:'#275A53'}}>
            <div className="container py-5">
                <div className="row py-5 footer-content justify-content-between">
                    <div className="col-md-4 col-sm-12 my-3">
                        <div className="d-flex justify-content-between align-items-center">
                            {/* <img style={{height:'30px'}} src={location} alt=""/> */}
                            <FontAwesomeIcon style={{color:'#fff'}} icon={faMapMarkerAlt}></FontAwesomeIcon>
                        <p style={{color:'#fff'}}>H#340 (4th Floor), Road #24 <br/>New DOHS,Mohakhali, Dhaka,Bangladesh <br/>Phone: 018XXXXXXXX <br/>Fax: 018XXXXXXXX <br/>E-mail: info@company.com</p>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-6 my-3">
                        <div>
                            <h6>Company</h6>
                            <ul>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Site map</a></li>
                                <li><a href="#">Support Center</a></li>
                                <li><a href="#">Terms conditions</a></li>
                                <li><a href="#">submit listing</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2 my-3">
                    <div>
                            <h6>Company</h6>
                            <ul>
                                <li><a href="#">Quick Links</a></li>
                                <li><a href="#">Rentals</a></li>
                                <li><a href="#">Sales</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">Terms Condition</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 my-3">
                        <div className="social-contain">
                            <h6>About us</h6>
                            <div >
                            <p>We are the top real estate<br/>agency in Sydney, with agents<br/>available to answer any<br/>question 24/7.</p>
                            </div>
                            <li>
                                <a href="#"><FontAwesomeIcon style={{color:'#fff'}} icon={faFacebook}></FontAwesomeIcon></a>
                            </li>
                            <li>
                                <a href="#"><FontAwesomeIcon style={{color:'#fff'}} icon={faInstagram}></FontAwesomeIcon></a>
                            </li>
                            <li>
                                <a href="#"><FontAwesomeIcon style={{color:'#fff'}} icon={faLinkedin}></FontAwesomeIcon></a>
                            </li>
                            <li>
                                <a href="#"><FontAwesomeIcon style={{color:'#fff'}} icon={faYoutube}></FontAwesomeIcon></a>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;