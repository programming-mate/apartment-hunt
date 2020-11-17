import React from 'react';
import { Link } from 'react-router-dom';
import bath from '../../Imgaes/logos/bath 1.png'
import bed from '../../Imgaes/logos/bed 1.png'
import location from '../../Imgaes/logos/map-marker-alt-solid 1.png';

const HouseRentData = (props) => {
    const { image, houseName, address, bedRoom, bathRoom, price, _id } = props.data ;
    return (
        <div className="pt-2">
            <div className='col-md-4'>
                <div class="card my-3" style={{width: '350px'}}>
                <img className="img-fluid card-img-top" style={{height:'200px'}} src={image} alt="..."/>
                <div class="card-body">
                        <h5 style={{color:'#16322E',fontFamily:'Poppins',fontWeight:'700'}}class="card-title">{houseName}</h5>
                    <div className="my-2">
                            <img style={{ height: '20px' }} className="img-fluid mr-2" src={location} alt="" /> 
                            <span>{ address}</span>   
                        </div>
                        <div className="mb-4 d-flex justify-content-between">
                        <div>
                            <img style={{ height: '20px' }} className="img-fluid mr-2" src={bed} alt="" /> 
                            <span>{ bedRoom}</span>   
                        </div>                    <div>
                            <img style={{ height: '20px' }} className="img-fluid mr-2" src={bath} alt="" /> 
                            <span>{ bathRoom}</span>   
                        </div>
                        </div>
                    <div class="d-flex justify-content-between">
                            <h1 style={{ color: '#275A53', fontWeight: '700' }}>{ price}</h1>
                            <Link to={'/booking/'+_id}> <button className='btn' style={{background:'#275A53',color:'#fff'}} >View Details</button></Link>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default HouseRentData;