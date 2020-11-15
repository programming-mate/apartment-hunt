import React from 'react';
import HouseRentData from './HouseRentData';

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
            </div>
        </div>
    );
};

export default HouseRent;