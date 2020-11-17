import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import RentData from './RentData';
import logo from '../../../Imgaes/logos/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faProcedures,faPlus,faHome } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';
const data = [
    {
        houseName: 'Washington Avenue',
        price:'$194'
    },
    {
        houseName: 'Washington Avenue',
        price:'$194'
    },
    {
        houseName: 'Washington Avenue',
        price:'$194'
    },
    {
        houseName: 'Washington Avenue',
        price:'$194'
    },
    {
        houseName: 'Washington Avenue',
        price:'$194'
    },
]


const Rent = () => {
    const[myRent,setUserRent] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser.email)
    useEffect(() => {
        fetch('https://mysterious-brushlands-60386.herokuapp.com/myRent?email='+localStorage.getItem('email'))
            .then(res => res.json())
            .then(data =>
                setUserRent(data)
                )
    },[loggedInUser.email])
    return (
        <div>
                    
        <nav className="navbar navbar-expand-lg navbar-light mt-4">
            <Link className="navbar-brand mx-5 mr-5" to="/home"><img className="img-fluid" style={{height:'50px',marginRight:'200px'}} src={logo} alt=""/></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active ">
                            <h4>My Rent</h4>

                    </li>
                </ul>
                    <span className="mr-5">Md Iqbal</span>
            </div>
            </nav>
            
            <div className="row justify-content-between">
                <div className="col-2 ml-5 side-contain">
                    <ul>
                        <Link ><li><FontAwesomeIcon style={{marginRight:'10px'}} icon={ faHome }></FontAwesomeIcon>Rent</li></Link>
                    </ul>
                </div>
                <div className="col-9">
            <div style={{background:'#F4F7FC',width:'100%',height:'100vh',paddingTop:'20px' }}>
                        <table>
                                    <thead>
                                        <tr>
                                            <th>House Name</th>
                                            <th>Price</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                <tbody style={{ textAlign: 'center' }}>
                                {
                                    myRent.map(rent => <RentData rent={rent}></RentData>)
                                }  
                            </tbody>

                            </table>
        </div>
            </div>

                </div>
        </div>
    );
};

export default Rent;