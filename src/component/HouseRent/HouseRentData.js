import React from 'react';

const HouseRentData = (props) => {
    const { image, houseName, address, bedRoom, bathroom, price } = props.data ;
    console.log(image);
    return (
        <div className="pt-2">
            <div className='col-md-4'>
                <div class="card my-3" style={{width: '350px'}}>
                <img className="img-fluid card-img-top" style={{height:'200px'}} src={image} alt="..."/>
                <div class="card-body">
                        <h5 class="card-title">{ houseName}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div class="d-flex justify-content-between">
                            <h1 style={{ color: '#275A53', fontWeight: '700' }}>{ price}</h1>
                    <button className='btn' style={{background:'#275A53',color:'#fff'}} type="submit">View Details</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default HouseRentData;