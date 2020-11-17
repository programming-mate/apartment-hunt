import React, {useState,useEffect} from 'react';
// import { useParams} from 'react-router-dom';
import {Button, Form} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';


const BookingForm = (props) => {
    const { houseName ,price } = props.bookingDetails;
    console.log(houseName);
const history = useHistory()

 
    const [postData, setPostData] =useState(
        {  name: '',
           number: '',
           email:'', 
            message: '',
            houseName: houseName,
            price:price
          
        });
 
    const onSubmit =(event)=>{
       fetch(`https://mysterious-brushlands-60386.herokuapp.com/sendInfo`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body:JSON.stringify(postData),
         })
        .then( res => res.json())
           .then(data => {
               if (data) {
                console.log(data)
                setPostData({name:'', number:'', email:'',message:''})
                alert('information sent successfully')
                history.push('/login');
            }
        })
        event.preventDefault();   
    }

    return (
        <>
              <Form onSubmit={onSubmit} >
            <Form.Group>
                <Form.Control type="text"
                onChange={(e)=> setPostData({...postData, name: e.target.value})}
                    placeholder="Full Name" name='name' value={postData.name} 
                
                    />
            </Form.Group>
            <Form.Group>
                <Form.Control type="Number"
                onChange={(e)=> setPostData({...postData, number: e.target.value})} 
                placeholder="Phone Number" name='number' value={postData.number}
                
                    />
            </Form.Group>
            <Form.Group>
                <Form.Control type="email"
                onChange={(e)=> setPostData({...postData, email: e.target.value})}
                    placeholder="Email" name='email' value={postData.email} 

                    />
            </Form.Group>
            <Form.Group >
                <Form.Control as="textarea"
                onChange={(e)=> setPostData({...postData, message: e.target.value})} 
                placeholder="Message" name='message' value={postData.message}  rows={3} 

                />
            </Form.Group>
            <Button type="submit" variant="primary" className='w-100' >
                Submit
            </Button>
    </Form>  
        </>
    );
};

export default BookingForm;