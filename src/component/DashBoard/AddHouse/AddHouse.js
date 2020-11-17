import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './AddUser.css'


const AddHouse = () => {
    const [file,setFile] = useState(null)
    const handleChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        const formData = new FormData()
        formData.append('files', file)
        formData.append('title', data.title)
        formData.append('description', data.description)
      
        fetch('https://mysterious-brushlands-60386.herokuapp.com/newHouse', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data) {
                alert('successfully done');
          }
        })
    };
  
    return (
        <div>
            
        <div style={{background:'#fff',width:'90%',margin:'0 30px',borderRadius:'5px'}}>
                    <form onSubmit={handleSubmit(onSubmit)} style={{ width: '80%', marginLeft: '50px', paddingTop: '50px' }}>

                        <div className="row">
                            <div className="col-6">
                                <div style={{margin: '15px 0px'}}>
                                    <label style={{width: '100%'}}>House Name</label>
                                    <input style={{width:'90%'}} name="houseName" ref={register({ required: true })} placeholder="House Name" />
                                    {/* errors will return when field validation fails  */}
                                    {errors.exampleRequired && <span>This field is required</span>} 
                                </div>
                            </div>
                            <div className="col-6">
                                <div style={{margin: '15px 0px'}}>
                                    <label style={{width: '100%'}}>Price</label>
                                    <input style={{width:'90%'}} name="price" ref={register({ required: true })} placeholder="Price" />
                                    {/* errors will return when field validation fails  */}
                                    {errors.exampleRequired && <span>This field is required</span>} 
                                </div>
                            </div>
                            <div className="col-6">
                                <div style={{margin: '15px 0px'}}>
                                    <label style={{width: '100%'}}>Address</label>
                                    <input style={{width:'90%'}} name="address" ref={register({ required: true })} placeholder="Location" />
                                    {/* errors will return when field validation fails  */}
                                    {errors.exampleRequired && <span>This field is required</span>} 
                                </div>
                            </div>
                            <div className="col-6">
                                <div style={{margin: '15px 0px'}}>
                                    <label style={{width: '100%'}}>No of Bedroom</label>
                                    <input style={{width:'90%'}} name="bedRoom" ref={register({ required: true })} placeholder="No of Bedroom" />
                                    {/* errors will return when field validation fails  */}
                                    {errors.exampleRequired && <span>This field is required</span>} 
                                </div>
                            </div>
                            <div className="col-6">
                                <div style={{margin: '15px 0px'}}>
                                    <label style={{width: '100%'}}>No Of Bathroom</label>
                                    <input style={{width:'90%'}} name="bathRoom" ref={register({ required: true })} placeholder="No Of Bathroom" />
                                    {/* errors will return when field validation fails  */}
                                    {errors.exampleRequired && <span>This field is required</span>} 
                                </div>
                            </div>
                            <div className="col-6">
                                <div style={{margin: '15px 0px'}}>
                                    <label style={{width: '100%'}}>Image</label>
                                    <input onChange={handleChange} style={{width:'90%',color:'green',border: '1px solid green',background: '#00800054'}} type="file" ref={register({ required: true })} id="img" name="image" accept="image/*"/>
                                    {/* errors will return when field validation fails  */}
                                    {errors.exampleRequired && <span>This field is required</span>} 
                                </div>
                        </div>
                        <button className="btn btn-primary ml-auto my-5" type="submit">Submit</button>
                        </div>
                    
                
                  </form> 
                  </div>
        </div>
    );
};

export default AddHouse;