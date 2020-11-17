import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle  } from '@fortawesome/free-brands-svg-icons'
import "firebase/auth"
import firebase from "firebase/app";
import './Login.css'
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App'
import { makeStyles } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Header from '../Header/Header';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '25ch',
    },
  }));


const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext ( UserContext );
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/dashboard" } };

    console.log(loggedInUser);

    if(firebase.apps.length === 0) 
    firebase.initializeApp(firebaseConfig);

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then(function(result) {
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email: email};
            setLoggedInUser(signedInUser)
            localStorage.setItem('email', signedInUser.email);
            history.replace (from)
          }).catch(function(error) {
            
          });
    }

    const handleFbSignIn = () =>  {
        const fbProvider = new firebase.auth.FacebookAuthProvider();

        firebase.auth().signInWithPopup(fbProvider).then(function(result) {
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email: email};
            setLoggedInUser(signedInUser)
            history.replace (from)
          }).catch(function(error) {
            
          });
    }

    const classes = useStyles();
    const [user, setUser] = useState ({
        isSignedIn: false,
        newUser: false,
        name: '',
        email: '',
        password: '',
        photo: '',
        error: '',
        success: false,
    });


    const handleBlur = (e) => {
            let isFieldValid = true;
          
            if(e.target.name === 'email'){
                isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
              
            }
            if(e.target.name === 'password'){
                const isPasswordValid = e.target.value.length > 6;
                const passwordHasNumber = /\d{1}/.test(e.target.value);
                isFieldValid = isPasswordValid &&  passwordHasNumber;
                
            }
            if(isFieldValid){
                const newUserInfo = {...user};
                    newUserInfo[e.target.name] = e.target.value;
                    setUser(newUserInfo);
                };
        };
       

    const handleSubmit = (e) => {
        if (newUser && user.email && user.password){
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then( res => {
                const newUserInfo = {...user};
                newUserInfo.error = '';
                newUserInfo.success = true;
                setUser(newUserInfo);
                updateUserName(user.name);
                history.replace(from);
            })
            .catch(function(error) {
                // Handle Errors here.
                const newUserInfo = {...user};
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setUser(newUserInfo);
                
              });
        }
      
    if(!newUser && user.email && user.password){
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(res =>{
            const newUserInfo = {...user};
                newUserInfo.error = '';
                newUserInfo.success = true;
                setUser(newUserInfo);
            setLoggedInUser(newUserInfo);
            console.log(newUser)
                history.replace(from);
          });    
    }
    e.preventDefault();
}

const updateUserName = name => {
    const user = firebase.auth().currentUser;

user.updateProfile({
  displayName: name,
}).then(function() {
  // Update successful.
}).catch(function(error) {
  // An error happened.
});

}
    // const handleSignOut = () => {
    //     firebase.auth().signOut()
    //     .than(res=> {
    //         const signedOutUser = {
    //             isSignedIn: false,
    //             name:'',
    //             photo: '',
    //             email: '',
    // }
    // setUser (signedOutUser);
    // })
    // .catch(err => {
    
    // })
    // }

    return (
        
       <div >  
           <Header></Header>
            
           <div className= {classes.root}>
            <div className="login-area">
                <div>
                    <h5>{newUser ? " Create an account": "Login"}</h5>
                </div>
                <br/>
                
             <form  onSubmit={handleSubmit}>
                <div className="">
                    {newUser && <input class="form-control form-control-lg " type="text" name="First Name" onBlur={handleBlur} placeholder="First Name"/>}
                    {newUser && <input class="form-control form-control-lg input-area" type="text" name="Last Name" onBlur={handleBlur} placeholder="Last Name"/>}
                </div>
                 
                <div className="input-area">
                    <input class="form-control form-control-lg" type="text" name="email" onBlur={handleBlur} placeholder="Email or Username"/>
              
                </div>

                <div className="input-area">
                    <input class="form-control form-control-lg input-area" type="password" name="password" onBlur={handleBlur} placeholder="Enter Password"/>
                    {newUser && <input class="form-control form-control-lg input-area" type="password" name="Confirm password" onBlur={handleBlur} placeholder="Enter Password again"/>}
                </div>

                <br/>
                <div className="form-check">
                    {newUser ? " ": <input className="form-check-input" type="checkbox" id="gridCheck" value="Remember me" />}
                    {newUser ? " ": <level className="form-check-label remeber" for="gridCheck">
                        Remember me <Link href="/"><span className="forgot">Forgot password?</span></Link>       
                    </level>}
                    
                    </div>
                
                <div>
                   <input type="submit" className="btn-log" value={newUser ? "Create Account" : "Login"} />
                </div>
                <br/>
                { <p> {newUser ? "Already" : "Don't"} have an account yet? <span/> 
                    <input type="checkbox" onChange={()=> setNewUser(!newUser)}/> 
                     <level className="forgot" >   {newUser ? <Link to="/login">Log in</Link> : <a href="/"> Create an account </a>} </level> </p>} 
                    
                <p>OR</p>
                <div>
                    <button className="btn-social" type="button" onClick={handleFbSignIn}> <FontAwesomeIcon className="fb-icon" icon={faFacebook} /> Continue with Facebook</button>
                </div>
                <br/>
                <div>
                 <button className="btn-social" type="button" onClick={handleGoogleSignIn}> <FontAwesomeIcon className="g-icon" icon={faGoogle} /> Continue with Google</button>
                </div>
            </form> 
            <p style={{color:'red'}}> {user.errror} </p> 
            {user.success &&  <p style={{color:'green'}}>User {newUser ? "Created" : "logged in"} successfully</p> }
        </div>
        

        </div>   
    </div>        
    );
};

export default Login;