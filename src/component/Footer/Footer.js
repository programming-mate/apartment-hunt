import React from 'react';
import location from '../../Imgaes/logos/map-marker-alt-solid 1.png';
import './Footer.css'

const Footer = () => {
    return (
        <div style={{background:'#275A53'}}>
            <div className="container">
                <div className="row py-5 footer-content">
                    <div className="col-md-4">
                        <div className="d-flex justify-content-between align-items-center">
                        <img style={{height:'30px'}} src={location} alt=""/>
                        <p style={{color:'#fff'}}>H#340 (4th Floor), Road #24 <br/>New DOHS,Mohakhali, Dhaka,Bangladesh <br/>Phone: 018XXXXXXXX <br/>Fax: 018XXXXXXXX <br/>E-mail: info@company.com</p>
                        </div>
                    </div>
                    <div className="col-md-2">
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
                    <div className="col-md-2">
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
                    <div className="col-md-4">
                        <div>
                            <h6>About us</h6>
                            <div style={{width: '200px',margin:'0 auto'}}>
                            <p>We are the top real estate<br/>agency in Sydney, with agents<br/>available to answer any<br/>question 24/7.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;