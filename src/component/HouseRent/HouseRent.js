import React from 'react';
import HouseRentData from './HouseRentData';
import apartment from '../../Imgaes/logos/apartment 1.png';
import affordable from '../../Imgaes/logos/affordable 1.png';
import lessee from '../../Imgaes/logos/lessee 1.png';
import './HouseRent.css';
import axios from 'axios';
import {useState,useEffect} from 'react';



const HouseRent = () => {
    const [bookingData, setBookingData] = useState([]);

useEffect(()=>{
    const fetchData=async()=>{
         const {data}=await axios.get(`https://mysterious-brushlands-60386.herokuapp.com/getData`)
        setBookingData(data)
    }
    fetchData()
}, [])
    return (
        <div style={{background:'#F1F6F4'}}>
            <div className="container py-5">
                <h6 style={{ textAlign: 'center',color:'#275A53' }}>House Rent</h6>
                <h1 style={{ textAlign: 'center', color: '#16322E',fontWeight:'700' }}>Discover the latest Rent <br /> available today</h1>
                <div className="row">
                {
                    bookingData.map(data =><HouseRentData key={data._id} data={data}></HouseRentData>)    
                }
                </div>
                <h6 className='pt-5 mt-5' style={{ textAlign: 'center',color:'#275A53' }}>Service</h6>
                <h1 style={{ textAlign: 'center', color: '#16322E',fontWeight:'700' }}>We're an agency tailored to all <br/> clients' needs that always delivers</h1>
            
                <div className=" row pt-5 d-flex justify-content-between service-description">
                    <div className="col-md-4 ">
                        <div className="image-container">
                            <div style={{width:'150px',margin:'0 auto'}}>
                                <img src={apartment} alt="" />
                            </div>
                            <h5>Wide Range of Properties</h5>
                            <p>
                            With a robust selection of popular properties on hand, as well as leading properties from experts.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="image-container">
                            <div style={{width:'150px',margin:'0 auto'}}>
                                <img  src={affordable} alt=""/>
                            </div>
                            <h5>Financing Made Easy</h5>
                            <p>
                            Our stress-free finance department that can find financial solutions to save you money.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="image-container">
                            <div style={{width:'150px',margin:'0 auto'}}>
                                <img  src={lessee} alt=""/>
                            </div>
                            <h5>Trusted by Thousands</h5>
                            <p>
                            10 new offers every day. 350 offers on site, trusted by a community of thousands of users.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HouseRent;