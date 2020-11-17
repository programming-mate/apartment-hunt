import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Imgaes/logos/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faProcedures,faPlus,faHome } from '@fortawesome/free-solid-svg-icons';
import './DashBoard.css'
import User from '../User/User';
import AddHouse from '../AddHouse/AddHouse';
import Rent from '../Rent/Rent';
import { UserContext } from '../../../App';


const userDate = [
    {
        name:'iqbal',
        email: 'iqbal@gmail.com',
        phone: '01792119624',
        message: 'this is very good app for us',
        status: 'pending'
    },
    {
        name:'iqbal',
        email: 'iqbal@gmail.com',
        phone: '01792119624',
        message: 'this is very good app for us',
        status: 'pending'
    },
    {
        name:'iqbal',
        email: 'iqbal@gmail.com',
        phone: '01792119624',
        message: 'this is very good app for us',
        status: 'pending'
    },
    {
        name:'iqbal',
        email: 'iqbal@gmail.com',
        phone: '01792119624',
        message: 'this is very good app for us',
        status: 'pending'
    },
    {
        name:'iqbal',
        email: 'iqbal@gmail.com',
        phone: '01792119624',
        message: 'this is very good app for us',
        status: 'pending'
    },
]

const DashBoard = () => {

    const[user,setUser] = useState([])

    useEffect(() => {
        fetch('https://mysterious-brushlands-60386.herokuapp.com/allUser', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }) 
            .then(res => res.json())
            .then(data => {
            setUser(data)
        })
    },[])
console.log(user)
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const[loggedInAdmin,setLoggedInAdmin] = useState({})

    fetch('https://mysterious-brushlands-60386.herokuapp.com/isAdmin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({email: loggedInUser.email})
    })
    .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.length>0) {
                setLoggedInAdmin({
                    admin: true,
                    rent:false,
            });
            }
            else{
                setLoggedInAdmin({
                    admin: false,
                    rent:true,
                });
            }
        })


    const [pageName, setPageName] = useState({
        name:'Booking List'
    })
    const [admin, setAdmin] = useState({
        bookList: true,
        addHouse: false,
        rent:false
    })

    const handleBookList = () => {
        setAdmin(
            {
                bookList: true,
                addHouse: false,
                rent:false  
            }
        )
        setPageName({
            name:'Booking List'
        })
    }
    const handleAddHouse = () => {
        setAdmin({
            bookList: false,
            addHouse: true,
            rent:false
        })
        
        setPageName({
            name:'Add House'
        })
    }
    const handleRent = () => {
        setAdmin({
            bookList: false,
            addHouse: false,
            rent:true
        })
        
        setPageName({
            name:'My Rent'
        })
    }
    return (
        <div >
            {
                loggedInAdmin.admin&&<>
            <nav className="navbar navbar-expand-lg navbar-light mt-4">
            <Link className="navbar-brand mx-5 mr-5" to="/home"><img className="img-fluid" style={{height:'50px',marginRight:'200px'}} src={logo} alt=""/></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active ">
                            <h4>{ pageName.name}</h4>

                    </li>
                </ul>
                    <span className="mr-5">Md Iqbal</span>
            </div>
            </nav>


            <div className="row justify-content-between">
                <div className="col-2 ml-5 side-contain">
                    <ul>
                        <Link onClick={handleBookList}><li><FontAwesomeIcon style={{marginRight:'10px'}}  icon={faProcedures}></FontAwesomeIcon> BookList</li></Link>
                        <Link onClick={handleAddHouse}><li> <FontAwesomeIcon style={{marginRight:'10px'}} icon={faPlus}></FontAwesomeIcon>Add House</li></Link>
                        {/* <Link onClick={handleRent}><li><FontAwesomeIcon style={{marginRight:'10px'}} icon={ faHome }></FontAwesomeIcon>Rent</li></Link> */}
                    </ul>
                </div>
                <div className="col-9">
                    <div style={{background:'#F4F7FC',width:'100%',height:'100vh',paddingTop:'20px'}}>
                        {
                            admin.bookList && <>
                            <table>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>EmailId</th>
                                            <th>Phone</th>
                                            <th>Message</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                            <tbody style={{textAlign: 'center'}}>
                                {
                                    user.map(user => <User user={user}></User> )
                                }
                            </tbody>
                            </table>
                            </>
                        }
                        {
                            admin.addHouse && <AddHouse></AddHouse>
                            
                        }
                    </div>
                </div>
            </div>
                </>
            }
            {
                loggedInAdmin.rent && <Rent></Rent>
                
            }
        </div>
    );
};

export default DashBoard;