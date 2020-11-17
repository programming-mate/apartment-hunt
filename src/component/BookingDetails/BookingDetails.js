
import React, {useState,useEffect} from 'react';
import { useParams} from 'react-router-dom';
import axios from 'axios';
import {Row, Col, Image, ListGroup, Card,Container, Button, Form} from 'react-bootstrap';
import BookingForm from './BookingForm';
import Header from '../Header/Header';
const BookingDetails = ({match}) => {
    const {id}= useParams();
    const [bookingDetails, setBookingDetails] =useState({});
    
    useEffect(()=>{
        const fetchDetails=async() => {
            const {data}=await axios.get('https://mysterious-brushlands-60386.herokuapp.com/getData/'+id)
            setBookingDetails(data)
            console.log(data);
        }
        fetchDetails();
    },[])
    return (
        <>
            <Header></Header>
            <div className="banner">
            <div className="overlay">
                <div className="banner-content">
                    <h1 style={{textAlign: 'center',marginTop:'50px'}}>Apartment</h1>
                </div>
            </div> 
        </div>
        <Container className="mt-5">
        <Row>
        <Card md={5} className='mr-5 p-3' style={{border: 'none'}} >
         <Image style={{height:'300px'}} className='m-3' src={bookingDetails.image} alt={bookingDetails.name} fluid />
         
         <Row>
             <Card className='m-2' md={3} >
             <Image style={{height:'100px'}} src={bookingDetails.image} alt={bookingDetails.name} fluid />
             </Card>
             <Card className='m-2'  md={3}>
             <Image style={{height:'100px'}} src={bookingDetails.image} alt={bookingDetails.name} fluid />
             </Card>
             <Card  className='m-2' md={3}>
             <Image style={{height:'100px'}} src={bookingDetails.image} alt={bookingDetails.name} fluid />
             </Card>
             <Card  className='m-2' md={3}>
             <Image style={{height:'100px'}} src={bookingDetails.image} alt={bookingDetails.name} fluid />
             </Card>
         </Row>
         </Card>
            <Card className='p-5 mt-4' style={{    border: 'none',background: '#F1F6F4'}}>
                <BookingForm bookingDetails={bookingDetails} />
            </Card>
 </Row>
    <Row>
      <Col className='mt-5 ' md={4}>
        <h2 style={{color:'#16322E'}}>{bookingDetails.houseName}</h2>
        </Col>
      <Col className='mt-5 ml-5' md={4}>
      <h2 style={{textAlign: 'center',marginLeft:'200px',color:'#275A53'}}>{bookingDetails.price}</h2>
     </Col>
     <Col md={12}>
     <p>3000 sq-ft., 3 Bedroom, Semi-furnished, Luxurious, South facing <br/> Apartment for Rent in Rangs Malancha, Melbourne.</p> </Col>
     <Col className='mt-2' md={12}>
     <h3 style={{color:'#16322E'}}>Price details</h3>
     <p>
     ‎Rent/Month: $550 (negotiable) <br/>
    Service Charge : 8,000/= Tk per month, subject to change <br/>
    Security Deposit : 3 month’s rent <br/>
    Flat Release Policy : 3 months earlier notice required
     </p>
    </Col>
    <Col className='mt-2' md={12}>
     <h3 style={{color:'#16322E'}}>Property Details-</h3>
     <p>
     Address & Area : Rangs Malancha, House-68, Road-6A (Dead End Road),<br/> Dhanmondi Residential Area.<br/>
    Flat Size : 3000 Sq Feet.<br/>
    Floor :  A5 (5th Floor) (6 storied Building ) (South Facing Unit)<br/>
    Room Category : 3 Large Bed Rooms with 3 Verandas, Spacious<br/> Drawing, Dining & Family Living Room, Highly Decorated <br/> Kitchen with Store Room and Servant room with attached <br/> Toilet.<br/>
    Facilities : 1 Modern Lift, All Modern Amenities & Semi Furnished.<br/>
    Additional Facilities : a. Electricity with full generator load, b.<br/> Central Gas Geyser, c. 2 Car Parking with 1 Driver’s<br/> Accommodation, d. Community Conference Hall, e. Roof Top<br/> Beautified Garden and Grassy Ground, f. Cloth Hanging facility<br/> with CC camera<br/>

     </p>
    <br />
    <br/>
      </Col>
    </Row>
                 
 </Container>
        </>
    );
};

export default BookingDetails;