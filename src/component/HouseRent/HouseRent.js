import React from 'react';
import HouseRentData from './HouseRentData';
import apartment from '../../Imgaes/logos/apartment 1.png';
import affordable from '../../Imgaes/logos/affordable 1.png';
import lessee from '../../Imgaes/logos/lessee 1.png';
import './HouseRent.css'

const Data = [
    {
        houseName: 'Washington Avenue',
        image: 'https://i.ibb.co/ch5D0tB/Rectangle-394.png',
        address: 'Nasirabad H/S, Chattogram',
        bedRoom: '3 Bedrooms',
        bathRoom: '2 Bathroom',
        price:'$194'
    },
    {
        houseName: 'Family Apartment Three',
        image: 'https://i.ibb.co/XL7FnHj/Rectangle-396.png',
        address: 'Nasirabad H/S, Chattogram',
        bedRoom: '3 Bedrooms',
        bathRoom: '2 Bathroom',
        price:'$356'
    },
    {
        houseName: 'Gorgeous house',
        image: 'https://i.ibb.co/YRNg6Sc/Rectangle-398.png',
        address: 'Nasirabad H/S, Chattogram',
        bedRoom: '3 Bedrooms',
        bathRoom: '2 Bathroom',
        price:'$256'
    },
    {
        houseName: 'Luxury villa ',
        image: 'https://i.ibb.co/F6rkLDv/Rectangle-403.png',
        address: 'Nasirabad H/S, Chattogram',
        bedRoom: '3 Bedrooms',
        bathRoom: '2 Bathroom',
        price:'$345'
    },
    {
        houseName: 'Epic Huda Palacio',
        image: 'https://i.ibb.co/f8ttMb1/Rectangle-404.png',
        address: 'Nasirabad H/S, Chattogram',
        bedRoom: '3 Bedrooms',
        bathRoom: '2 Bathroom',
        price:'$536'
    },
    {
        houseName: 'Washington Avenue',
        image: 'https://i.ibb.co/JBNNKCZ/Rectangle-405.png',
        address: 'Nasirabad H/S, Chattogram',
        bedRoom: '3 Bedrooms',
        bathRoom: '2 Bathroom',
        price:'$283'
    },

]

const HouseRent = () => {
    return (
        <div style={{background:'#F1F6F4'}}>
            <div className="container py-5">
                <h6 style={{ textAlign: 'center',color:'#275A53' }}>House Rent</h6>
                <h1 style={{ textAlign: 'center', color: '#16322E',fontWeight:'700' }}>Discover the latest Rent <br /> available today</h1>
                <div className="row">
                {
                    Data.map(data =><HouseRentData data={data}></HouseRentData>)    
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